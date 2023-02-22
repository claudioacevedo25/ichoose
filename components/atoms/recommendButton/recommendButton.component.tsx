import { Button, Loading, Text } from '@nextui-org/react'
import styles from './recommendButton.module.css'

type Props = {
  showButton: boolean
  isLoading: boolean
  handleUserPreferences: () => Promise<void>
}

export const RecommendButton = ({ showButton, isLoading, handleUserPreferences }: Props) => {
  if (!showButton) return null
  return (
    <Button onClick={handleUserPreferences} color="gradient" auto className={styles.container}>
      {isLoading ? (
        <Loading type="points" color="currentColor" size="sm" />
      ) : (
        <Text>Show me my preferences</Text>
      )}
    </Button>
  )
}
