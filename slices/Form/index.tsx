import { PrismicRichText } from '@prismicio/react'
import { RichTextField } from '@prismicio/types'
import React from 'react'

interface Item {
  inputType: string
  label: string
  text: RichTextField
}

interface Props {
  slice: {
    primary: {
      submitButtonText: string
    }
    items: Item[]
  }
}

const Form: React.FC<Props> = ({ slice }) => {
  const [data, setData] = React.useState({ data: null, errors: [] })

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    const userInput = slice.items.map((item: Item) => ({
      // @ts-ignore
      [item.label]: event.target[item.label].value,
    }))

    // @ts-ignore
    const email = event.target.email.value

    const dataWithLabels = {
      email,
      userInput,
      labels: [...slice.items],
    }

    const JSONdata = JSON.stringify(dataWithLabels)
    const endpoint = '/api/form'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    setData(result)
  }

  return (
    <section className="px-5 my-20 mx-auto max-w-4xl sm:px-16 lg:my-44">
      <form onSubmit={handleSubmit}>
        {slice.items.map((item, index) => (
          <React.Fragment key={index}>
            <PrismicRichText
              field={item.text}
              components={{
                paragraph: ({ children }) => (
                  <p className="mb-12">{children}</p>
                ),
                list: ({ children }) => (
                  <ul className="grid mb-12 text-2xl uppercase sm:grid-cols-2 md:grid-cols-3">
                    {children}
                  </ul>
                ),
                listItem: ({ children }) => (
                  <label className="flex gap-2 mb-3">
                    <input type="checkbox" />
                    {children}
                  </label>
                ),
              }}
            />
            <label
              htmlFor={item.label}
              className="flex flex-col gap-2 justify-start mb-12 uppercase"
            >
              {item.label}
              {item.inputType === 'Textarea' ? (
                <textarea
                  name={item.label}
                  className="p-5 w-full h-64 rounded-xl border-2 border-darkblue"
                />
              ) : (
                <input
                  className={`p-5 rounded-xl border-2 border-darkblue `}
                  type={item.inputType}
                  name={item.label}
                />
              )}
            </label>
          </React.Fragment>
        ))}

        <label
          className="flex flex-col gap-2 justify-start mb-12 uppercase"
          htmlFor="email"
        >
          {' '}
          E-mail
          <input
            type="email"
            name="email"
            className="p-5 rounded-xl border-2 border-darkblue"
            placeholder="Email"
          />
        </label>
        {data.errors?.length > 0 && (
          <div className="text-center text-red">
            {data.errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )}
        {data.data && (
          <div className="mb-12">
            <h1>Thank you for your submission!</h1>
            <p>We will get back to you as soon as possible.</p>
          </div>
        )}
        <button
          type="submit"
          className=" py-4 px-10 font-suisseIntlMono text-2xl text-white uppercase bg-purple rounded-full"
        >
          {slice.primary.submitButtonText}
        </button>
      </form>
    </section>
  )
}

export default Form
