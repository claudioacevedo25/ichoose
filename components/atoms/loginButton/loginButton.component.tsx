import { Button, Link } from '@nextui-org/react'
import { useSession, signIn, signOut } from 'next-auth/react'
export const LoginButton = () => {
  const { data: session } = useSession()
  const handleSession = () => (session ? signOut() : signIn())
  const text = session ? 'Sign Out' : 'Sign In'
  return (
    <Button auto flat as={Link} onClick={handleSession} color="gradient">
      {text}
    </Button>
  )
}
