import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { GptInput } from '@/components/atoms/gptInput'
import { UserAvatar } from '@/components/atoms/avatar'
import { OPEN_AI } from '@/openai/client'
import styles from './chatBot.module.css'

type Models = 'text-ada-001' | 'text-babbage-001' | 'text-curie-001' | 'text-davinci-003'
type Tokens = 2049 | 4000

type StateProps = {
  id: string
  prompt: string
  response: string
}

const model: Models = 'text-davinci-003'
const max_tokens: Tokens = 4000

export const ChatbotApp = () => {
  const [apiResponse, setApiResponse] = useState<StateProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event, prompt: string) => {
    event.preventDefault()
    setIsLoading((prevState) => !prevState)

    try {
      const result = await OPEN_AI.createCompletion({
        model,
        prompt,
        temperature: 0.3,
        max_tokens
      })
      const response = result.data.choices[0].text
      setApiResponse((prevValue) => [
        ...prevValue,
        {
          id: uuidv4(),
          prompt,
          response
        }
      ])
    } catch (error) {
      console.log('Something is going wrong, Please try again.>>> ', error)
    }
    setIsLoading((prevState) => !prevState)
  }

  return (
    <>
      {!!apiResponse.length && (
        <ul className={styles.list}>
          {apiResponse.map(({ id, prompt, response }) => (
            <div key={id} className={styles.question__answer}>
              <div className={styles.request}>
                <UserAvatar />
                <p>{prompt}</p>
              </div>
              <div className={styles.response}>
                <UserAvatar chatbot />
                <p>{response}</p>
              </div>
            </div>
          ))}
        </ul>
      )}
      <GptInput isLoading={isLoading} handleSubmit={(event, query) => handleSubmit(event, query)} />
    </>
  )
}

export default ChatbotApp
