import { RichTextField } from '@prismicio/types'
import React from 'react'
import SignupForm from '../../components/SignupForm'

interface Item {
  inputType: string
  label: string
  placeholder: string
  text: RichTextField
}

interface Props {
  slice: {
    variation: 'manifestoSignupForm'
  }
}

const Form: React.FC<Props> = () => {
  return <SignupForm />
}

export default Form
