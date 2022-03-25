import type { NextApiRequest, NextApiResponse } from 'next'
import sendgrid from '@sendgrid/mail'

// @ts-ignore
sendgrid.setApiKey(process.env.SEND_GRID_MAIL_API_KEY)
const MAIL_ADRESS_SEND_GRID = process.env.SEND_GRID_MAIL || ''

interface UserInput {
  key: string
  value: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body

  const errors: String[] = []

  if (body.email === '') {
    errors.push('Email is required')
  }

  body.userInput.map((userInput: UserInput) =>
    Object.values(userInput).every((value) => {
      if (value === '') {
        errors.push(`Value for ${Object.keys(userInput)} is required`)
      }
    })
  )

  if (errors.length > 0) {
    return res.status(400).json({ data: null, errors })
  }

  try {
    const msg = {
      to: MAIL_ADRESS_SEND_GRID,
      from: MAIL_ADRESS_SEND_GRID,
      subject: 'Ideas and Feedback',
      html: `
        <h1>Ideas and Feedback</h1>
        <p>
          E-Mail from: ${body.email}
        </p>
        <p>
          ${body.userInput
            .map(
              (userInput: UserInput) =>
                `${Object.keys(userInput)}: ${Object.values(userInput)}`
            )
            .join('<br>')}
        </p>
        `,
    }
    await sendgrid.send(msg)
    return res.status(200).json({ data: body.userInput, errors: null })
  } catch (err) {
    // @ts-ignore
    return res.status(500).json({ data: null, errors: [err.message] })
  }
}
