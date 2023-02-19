import { useRef } from 'react'
import { Button, Loading } from '@nextui-org/react'
import styles from './gptInput.module.css'
import { SendIcon } from '../sendIcon'

type Props = {
  isLoading: boolean
  handleSubmit: (event, text: string) => Promise<void>
}

export const GptInput = ({ isLoading, handleSubmit }: Props) => {
  const inputRef = useRef(null)

  const onSubmit = (event) => {
    const query = inputRef.current.value
    if (!query) return
    handleSubmit(event, query)
    inputRef.current.value = null
  }

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <textarea
        placeholder="Please ask me anything..."
        ref={inputRef}
        autoFocus
        className={styles.form__textarea}
      />
      <Button
        auto
        flat
        disabled={isLoading}
        type="submit"
        color="gradient"
        icon={!isLoading && <SendIcon fill="currentColor" filled />}>
        {isLoading && <Loading type="points" color="currentColor" size="sm" />}
      </Button>
    </form>
  )
}
