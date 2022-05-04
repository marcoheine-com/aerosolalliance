import React, { FormEvent } from 'react'
import { postData } from '../../services/resource'
import 'react-toastify/dist/ReactToastify.css'
import { baseURL } from '../../prismicio'
import { toastConfigurations } from '../../services/helpers'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FriendlyCaptcha } from '../friendly-captcha'
import ReactCanvasConfetti from 'react-canvas-confetti'

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
    'placeholder:italic placeholder:text-slate-400 p-5 w-full rounded-xl border-2 border-darkblue mb-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm',
}

const SignupForm = () => {
  const [submitButtonEnabled, setSubmitButtonEnabled] = React.useState(false)
  const [renderConfetti, setRenderConfetti] = React.useState(false)
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
      // @ts-ignore
      document?.getElementById('signup-form')?.reset()
      // We should always reset the widget as a solution can not be used twice.
      setRenderConfetti(true)
      resetWidget()
    } catch (e) {
      toast.error(`Ooops, something went wrong! ${e}`, toastConfigurations)
      resetWidget()
    }
  }

  return (
    <>
      <div className="px-6 mx-auto mb-32 w-full max-w-4xl sm:px-16">
        <form
          action=""
          onSubmit={(e) => handleSignupFormSubmit(e, reset)}
          className="grid gap-6 lg:grid-cols-2"
          id="signup-form"
        >
          <fieldset>
            <label
              className="flex flex-col gap-2 justify-start mb-8 uppercase"
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
              className="flex flex-col gap-2 justify-start mb-8 uppercase"
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
              className="flex flex-col gap-2 justify-start mb-8 uppercase"
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
              className="flex flex-col gap-2 justify-start mb-8 uppercase"
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
              className="flex gap-2 mb-8 uppercase hover:cursor-pointer"
              htmlFor="shouldDisplayName"
            >
              <input
                className={`${styles.input} w-auto mb-0 `}
                type="checkbox"
                name="shouldDisplayName"
                id="shouldDisplayName"
              />
              Do not display my name
            </label>

            <label
              className="flex gap-2 mb-8 uppercase hover:cursor-pointer"
              htmlFor="signUpForNewsletter"
            >
              <input
                className={`${styles.input} w-auto mb-0`}
                type="checkbox"
                name="signUpForNewsletter"
                id="signUpForNewsletter"
              />
              Sign up for newsletter / keep me updated
            </label>
          </fieldset>
          <fieldset>
            <label
              className="flex flex-col gap-2 justify-start mb-8 uppercase"
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
            className={`justify-self-start py-4 px-10 font-suisseIntlMono text-2xl text-white uppercase bg-darkblue rounded-full ${
              submitButtonEnabled ? '' : 'opacity-30 cursor-not-allowed'
            }`}
            type="submit"
            disabled={!submitButtonEnabled}
          >
            Sign the manifesto
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
    </>
  )
}

export default SignupForm
