import React from 'react'
import { postData } from '../../services/resource'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { baseURL } from '../../prismicConfiguration'
import { toastConfigurations } from '../../services/helpers'

const SignupForm = () => {
  const styles = {
    input:
      'placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 mb-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm',
  }
  const clearInputValues = (e) => {
    e.target.username.value = ''
    e.target.email.value = ''
    e.target.position.value = ''
    e.target.question.value = ''
  }

  const handleSignupFormSubmit = (e) => {
    e.preventDefault()
    let userInfo = {}
    if (e.target.username.value) userInfo.username = e.target.username.value
    if (e.target.email.value) userInfo.email = e.target.email.value
    if (e.target.position.value) userInfo.position = e.target.position.value
    if (e.target.question.value) userInfo.question = e.target.question.value

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
