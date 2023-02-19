import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { GptInput } from '@/components/atoms/gptInput'
import { UserAvatar } from '@/components/atoms/avatar'
import { OPEN_AI } from '@/constants/openai'
import styles from './chatBot.module.css'

type StateProps = {
  id: string
  request: string
  response: string
}

export const ChatbotApp = () => {
  const [apiResponse, setApiResponse] = useState<StateProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event, query: string) => {
    event.preventDefault()
    setIsLoading((prevState) => !prevState)

    try {
      const result = await OPEN_AI.createCompletion({
        model: 'text-davinci-003',
        prompt: query,
        temperature: 0.3,
        max_tokens: 4000
      })
      const response = result.data.choices[0].text
      setApiResponse((prevValue) => [
        ...prevValue,
        {
          id: uuidv4(),
          request: query,
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
          {apiResponse.map(({ id, request, response }) => (
            <div key={id} className={styles.question__answer}>
              <div className={styles.request}>
                <UserAvatar />
                <p>{request}</p>
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
