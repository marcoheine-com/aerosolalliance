import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set } from 'firebase/database'
import { NextApiRequest, NextApiResponse } from 'next'
import { firebaseConfigurations } from '../../services/helpers'

initializeApp(firebaseConfigurations)
const db = getDatabase()

const FRIENDLY_CAPTCHA_SITEVERIFY_API_URL =
  'https://api.friendlycaptcha.com/api/v1/siteverify'

async function validateCaptcha(captchaSolution: string) {
  // API docs here: http://docs.friendlycaptcha.com/#/verification_api
  const res = await fetch(FRIENDLY_CAPTCHA_SITEVERIFY_API_URL, {
    method: 'POST',
    body: JSON.stringify({
      solution: captchaSolution,
      secret: process.env.FRIENDLY_CAPTCHA_API_KEY,
      sitekey: process.env.NEXT_PUBLIC_FRIENDLY_CAPTCHA_SITEKEY,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  // Looks like {success: false, errors: ["secret_missing"], details: "secret is missing"}
  // or {success: true} in case of success
  let respBody
  try {
    respBody = await res.json()
  } catch (e) {
    respBody = {
      success: false,
      errors: ['could_not_parse_as_json'],
      details: JSON.stringify(e),
    }
  }
  if (res.status === 400 || res.status === 401) {
    // !! ERROR ON OUR SIDE !!
    // We have an error in the server side: maybe our api key or sitekey is not configured correctly.
    // You should send a warning to yourself here to fix this issue.
    console.error(
      'FRIENDLY CAPTCHA MISCONFIGURATION WARNING\nCould not verify Friendly Captcha solution due to client error:',
      respBody
    )
    return {
      accept: true, // We accept submissions anyway so we don't lock out our users, but spam/abuse protection won't work.
      errorCode: respBody.errors[0],
    }
  } else if (res.status === 200) {
    return {
      accept: respBody.success,
      errorCode: respBody.errors && respBody.errors[0],
    }
  } else {
    // Maybe the Friendly Captcha API are down or something else went wrong, send a warning to yourself to
    // look into it. In the meantime we will accept the submission, but the form will not be protected.
    console.error(
      'Could not verify Friendly Captcha solution due to external issue:',
      respBody
    )
    return {
      accept: true,
      errorCode: 'unknown_error',
    }
  }
}

export default async function sign(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: 'Only POST requests are allowed on this endpoint.' })
  }

  const body = req.body

  const frcCaptchaSolution = body.frcCaptchaSolution

  if (!frcCaptchaSolution) {
    return res
      .status(500)
      .json({ message: 'Anti-robot check solution was not present' })
  }

  try {
    const { accept, errorCode } = await validateCaptcha(frcCaptchaSolution)
    if (!accept) {
      return res.status(400).json({
        message: `Anti-robot check failed [code=${errorCode}], please try again.`,
      })
    }

    try {
      const mailWithoutDots = body.userInfo.email.replace(/\./g, '_')
      await set(
        ref(
          db,
          `users/${body.userInfo.username}_${mailWithoutDots}_${body.userInfo.location}`
        ),
        body.userInfo
      )

      return res.status(200).json({ message: body.userInfo.username })
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        message: `User ${body.userInfo.username} with email ${body.userInfo.email} already exists. Seems like you already signed the petition!`,
      })
    }
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Error' })
  }
}
