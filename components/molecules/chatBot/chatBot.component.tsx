import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { GptInput } from '@/components/atoms/gptInput'
import { OPEN_AI } from '@/openai/client'
import styles from './chatBot.module.css'
import { usePreference } from '@/hooks/usePreference/usePreference'
import { Text } from '@nextui-org/react'
import { RecommendButton } from '@/components/atoms/recommendButton'
import { Completion } from '../completion'

type Models = 'text-ada-001' | 'text-babbage-001' | 'text-curie-001' | 'text-davinci-003'
type Tokens = 2049 | 4000

type StateProps = {
  id: string
  prompt: string
  response: string
}

const model: Models = 'text-davinci-003'
const max_tokens: Tokens = 4000

export const ChatbotApp = ({ isPreference = false }) => {
  const { trigger, isLoggedIn, user, data } = usePreference()
  const [apiResponse, setApiResponse] = useState<StateProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleUserPreferences = async () => {
    setIsLoading((prevState) => !prevState)
    try {
      const lastedPreferences = data
        .slice(0, 2)
        .map(({ preference }) => preference)
        .join(', ')
      const result = await OPEN_AI.createCompletion({
        model,
        prompt: lastedPreferences,
        temperature: 0.3,
        max_tokens,
        n: 3
      })
      const response = result.data.choices.map(({ text }) => text).join('\n')
      setApiResponse((prevValue) => [
        ...prevValue,
        {
          id: uuidv4(),
          prompt: 'My last preferences...',
          response
        }
      ])
    } catch (error) {
      console.log('Error handle User Preferences', error)
    }
    setIsLoading((prevState) => !prevState)
  }

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
      if (isPreference && isLoggedIn) {
        const body = {
          preference: prompt,
          email: user.email
        }
        trigger(body)
      }
    } catch (error) {
      console.log('Something is going wrong, Please try again.>>> ', error)
    }
    setIsLoading((prevState) => !prevState)
  }

  if (!isLoggedIn && isPreference)
    return (
      <Text
        h1
        className={styles.notLogged}
        size={70}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%'
        }}
        weight="bold">
        {'You need to log in to get your latest preferences'}
      </Text>
    )

  return (
    <>
      <Completion completion={apiResponse} />
      <RecommendButton
        isLoading={isLoading}
        handleUserPreferences={handleUserPreferences}
        showButton={isLoggedIn && isPreference}
      />
      <GptInput isLoading={isLoading} handleSubmit={(event, query) => handleSubmit(event, query)} />
    </>
  )
}
