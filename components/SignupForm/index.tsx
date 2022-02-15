import React from 'react'
import { writeUserData } from '../../services/firebase/resource'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
    if (e.target.email.value) userInfo.email = e.target.username.value
    if (e.target.position.value) userInfo.position = e.target.username.value
    if (e.target.question.value) userInfo.question = e.target.username.value

    try {
      writeUserData(userInfo)
    } catch (e) {
      console.error(e)
    } finally {
      toast.success('🦄 Congrats! You successfully signed the petition!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      clearInputValues(e)
    }
  }

  return (
    <>
      <div className="flex flex-row px-5 relative">
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
