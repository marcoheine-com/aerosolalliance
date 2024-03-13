import React, { FormEvent } from 'react'
import { postData } from '../../services/resource'
import 'react-toastify/dist/ReactToastify.css'
import { baseURL } from '../../prismicio'
import { toastConfigurations } from '../../services/helpers'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FriendlyCaptcha } from '../friendly-captcha'
import ReactCanvasConfetti from 'react-canvas-confetti'
import Link from 'next/link'

interface UserInfo {
  username?: string
  email?: string
  social?: string
  location?: string
  shouldDisplayName?: boolean
  signUpForNewsletter?: boolean
  position?: string
}

const styles = {
  input:
    'placeholder:text-slate-400 p-3 w-full rounded-xl border-[1px] border-darkblue mb-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm',
}

const SignupForm = () => {
  const [submitButtonEnabled, setSubmitButtonEnabled] = React.useState(false)
  const [renderConfetti, setRenderConfetti] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const widgetRef = React.useRef()

  const reset = () => {
    setSubmitButtonEnabled(false)
    if (widgetRef.current) {
      // The type of widgetRef.current is WidgetInstance, see the JS API details here:
      // https://docs.friendlycaptcha.com/#/widget_api?id=javascript-api
      // @ts-ignore
      widgetRef.current.reset()
    }
  }

  const handleSignupFormSubmit = async (
    e: FormEvent<HTMLFormElement>,
    resetWidget: () => void
  ) => {
    e.preventDefault()

    let userInfo: UserInfo = {}
    if (e.currentTarget.username.value)
      userInfo.username = e.currentTarget.username.value
    if (e.currentTarget.email.value)
      userInfo.email = e.currentTarget.email.value
    if (e.currentTarget.position.value)
      userInfo.position = e.currentTarget.position.value
    if (e.currentTarget.location.value)
      userInfo.location = e.currentTarget.location.value
    if (e.currentTarget.shouldDisplayName.checked) {
      userInfo.shouldDisplayName = true
    } else {
      userInfo.shouldDisplayName = false
    }
    if (e.currentTarget.signUpForNewsletter.checked) {
      userInfo.signUpForNewsletter = true
    } else {
      userInfo.signUpForNewsletter = false
    }
    if (e.currentTarget.social.value)
      userInfo.social = e.currentTarget.social.value

    setIsLoading(true)

    try {
      const response = await postData(`${baseURL}api/sign`, {
        userInfo,
        // @ts-ignore
        frcCaptchaSolution: e.target['frc-captcha-solution'].value,
      })

      const data = await response.json()

      if (response.status !== 200) {
        throw new Error(data.message)
      }

      toast.success(
        `🦄 Congrats ${data.message}! You successfully signed the petition!`,
        toastConfigurations
      )
      setIsLoading(false)
      // @ts-ignore
      document?.getElementById('signup-form')?.reset()
      // We should always reset the widget as a solution can not be used twice.
      setRenderConfetti(true)
      resetWidget()
    } catch (e) {
      toast.error(`Ooops, something went wrong! ${e}`, toastConfigurations)
      setIsLoading(false)
      resetWidget()
    }
  }

  return <>
    <div className="mx-auto mb-32 w-full max-w-4xl px-6 sm:px-16">
      <form
        action=""
        onSubmit={(e) => handleSignupFormSubmit(e, reset)}
        id="signup-form"
      >
        <fieldset className="mb-4 w-full">
          <label
            className="mb-4 flex flex-col justify-start gap-2 uppercase"
            htmlFor="username"
          >
            Name you go by*
            <input
              className={styles.input}
              placeholder="Name you go by"
              type="text"
              name="username"
              required
            />
          </label>

          <label
            className="mb-4 flex flex-col justify-start gap-2 uppercase"
            htmlFor="email"
          >
            E-Mail*
            <input
              className={styles.input}
              placeholder="Your email adress"
              type="email"
              name="email"
              required
            />
          </label>

          <label
            className="mb-4 flex flex-col justify-start gap-2 uppercase"
            htmlFor="location"
          >
            Location*
            <input
              className={styles.input}
              placeholder="Berlin"
              type="text"
              name="location"
              required
            />
          </label>

          <label
            className="mb-4 flex flex-col justify-start gap-2 uppercase"
            htmlFor="social"
          >
            Website or Instagram
            <input
              className={styles.input}
              placeholder="website or instagram"
              type="text"
              name="social"
            />
          </label>

          <label
            className="mb-4 flex flex-col justify-start gap-2 uppercase"
            htmlFor="position"
          >
            What are you?*
            <select
              className={`${styles.input} bg-none`}
              name="position"
              required
            >
              <option value="artist">Artist</option>
              <option value="curator">Curator</option>
              <option value="manufacturer">Manufacturer</option>
              <option value="recycler">Recycler</option>
              <option value="human being">Human being</option>
            </select>
          </label>

          <label
            className="mb-4 flex gap-2 uppercase hover:cursor-pointer"
            htmlFor="shouldDisplayName"
          >
            <input
              className={`${styles.input} mb-0 w-auto `}
              type="checkbox"
              name="shouldDisplayName"
              id="shouldDisplayName"
            />
            Do not display my name
          </label>

          <label
            className="mb-4 flex gap-2 uppercase hover:cursor-pointer"
            htmlFor="signUpForNewsletter"
          >
            <input
              className={`${styles.input} mb-0 w-auto`}
              type="checkbox"
              name="signUpForNewsletter"
              id="signUpForNewsletter"
            />
            Sign up for newsletter / keep me updated
          </label>

          <label
            className="col-span-2 col-start-1 mb-8 uppercase hover:cursor-pointer"
            htmlFor="readTerms"
          >
            <input
              className={`${styles.input} mb-0 w-auto `}
              type="checkbox"
              name="readTerms"
              id="readTerms"
              required
            />
            <span className="ml-2">
              I acknowledge that the information I provide will be processed
              in accordance with our{' '}
            </span>
            <Link href="/privacy-policy" className="border-b-2 border-darkblue">
              privacy policy
            </Link>{' '}
            .*
          </label>
        </fieldset>

        <FriendlyCaptcha
          ref={widgetRef}
          // @ts-ignore
          sitekey={process.env.NEXT_PUBLIC_FRIENDLY_CAPTCHA_SITEKEY}
          doneCallback={() => setSubmitButtonEnabled(true)}
          errorCallback={() => {
            setSubmitButtonEnabled(true)
          }}
        />

        <button
          className={`col-start-1 mt-10 justify-self-start rounded-full bg-darkblue py-4 px-10 font-suisseIntlMono text-2xl uppercase text-white  ${
            submitButtonEnabled ? '' : 'cursor-not-allowed opacity-30'
          }`}
          type="submit"
          disabled={!submitButtonEnabled}
        >
          {isLoading ? 'Submitting...' : 'Sign the manifesto'}
        </button>

        <ReactCanvasConfetti
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
          fire={renderConfetti}
        />

        <ToastContainer />
      </form>
    </div>
  </>;
}

export default SignupForm
