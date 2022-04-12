import React, { FormEvent } from 'react'
import { postData } from '../../services/resource'
import 'react-toastify/dist/ReactToastify.css'
import { baseURL } from '../../prismicio'
import { toastConfigurations } from '../../services/helpers'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
  const handleSignupFormSubmit = (e: FormEvent<HTMLFormElement>) => {
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

    postData(`${baseURL}api/sign`, userInfo).then((data) => {
      if (data.status !== 200) {
        toast.error('Ooops, something went wrong!', toastConfigurations)
      } else {
        toast.success(
          '🦄 Congrats! You successfully signed the petition!',
          toastConfigurations
        )
        // @ts-ignore
        document?.getElementById('signup-form')?.reset()
      }
    })
  }

  return (
    <>
      <div className="px-6 mx-auto mb-32 w-full max-w-4xl sm:px-16">
        <form
          action=""
          onSubmit={handleSignupFormSubmit}
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
          <button
            className="justify-self-start py-4 px-10 font-suisseIntlMono text-2xl text-white uppercase bg-darkblue rounded-full"
            type="submit"
          >
            Sign the manifesto
          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  )
}

export default SignupForm
