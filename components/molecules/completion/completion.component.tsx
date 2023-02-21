import { UserAvatar } from '@/components/atoms/avatar'
import styles from './completion.module.css'
import { Text } from '@nextui-org/react'

type Completion = {
  id: string
  prompt: string
  response: string
}

type Props = {
  completion: Completion[]
}

export const Completion = ({ completion }: Props) => {
  if (!completion.length) return null
  return (
    <ul className={styles.list}>
      {completion.map(({ id, prompt, response }) => (
        <div key={id} className={styles.question__answer}>
          <div className={styles.request}>
            <UserAvatar />
            <Text>{prompt}</Text>
          </div>
          <div className={styles.response}>
            <UserAvatar chatbot />
            <Text>{response}</Text>
          </div>
        </div>
      ))}
    </ul>
  )
}
