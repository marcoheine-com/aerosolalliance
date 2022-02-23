import React, { FormEvent, SyntheticEvent } from 'react'
import { postData } from '../../services/resource'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { baseURL } from '../../prismicConfiguration'
import { toastConfigurations } from '../../services/helpers'

interface UserInfo {
  username?: string
  email?: string
  position?: string
  question?: string
}

const SignupForm = () => {
  const styles = {
    input:
      'placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 mb-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm',
  }
  const clearInputValues = (e: FormEvent<HTMLFormElement>) => {
    e.currentTarget.username.value = ''
    e.currentTarget.email.value = ''
    e.currentTarget.position.value = ''
    e.currentTarget.question.value = ''
  }

  const handleSignupFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let userInfo: UserInfo = {}
    if (e.currentTarget.username.value)
      userInfo.username = e.currentTarget.username.value
    if (e.currentTarget.email.value)
      userInfo.email = e.currentTarget.email.value
    if (e.currentTarget.position.value)
      userInfo.position = e.currentTarget.position.value
    if (e.currentTarget.question.value)
      userInfo.question = e.currentTarget.question.value

    postData(`${baseURL}api/sign`, userInfo).then((data) => {
      if (data.status !== 200) {
        toast.error('Ooops, something went wrong!', toastConfigurations)
      } else {
        toast.success(
          '🦄 Congrats! You successfully signed the petition!',
          toastConfigurations
        )
        clearInputValues(e)
      }
    })
  }

  return (
    <>
      <div className="flex relative flex-row px-5">
        <div className="basis-full">
          <h2>JOIN THE ALLIANCE</h2>
          <form action="" onSubmit={handleSignupFormSubmit}>
            <input
              className={styles.input}
              placeholder="Name you go by"
              type="text"
              name="username"
              required
            />
            <input
              className={styles.input}
              placeholder="Email"
              type="email"
              name="email"
            />
            <input
              className={styles.input}
              placeholder="Position ( artist / researcher / manufacturer / any)"
              type="text"
              name="position"
            />
            <input
              className={styles.input}
              placeholder="Ask us something"
              type="text"
              name="question"
            />
            <button type="submit">Sign</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignupForm
