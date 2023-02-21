import { Button, Loading } from '@nextui-org/react'
import styles from './recommendButton.module.css'

type Props = {
  showButton: boolean
  isLoading: boolean
  handleUserPreferences: () => Promise<void>
}

export const RecommendButton = ({ showButton, isLoading, handleUserPreferences }: Props) => {
  if (!showButton) return null
  return (
    <Button onClick={handleUserPreferences} color="gradient" size="lg" className={styles.container}>
      {isLoading ? (
        <Loading type="points" color="currentColor" size="sm" />
      ) : (
        'Recommend to me, something about my likes'
      )}
    </Button>
  )
}
