import { Avatar } from '@nextui-org/react'
import { useSession } from 'next-auth/react'

type Props = {
  chatbot?: boolean
}

export const UserAvatar = ({ chatbot }: Props) => {
  const { data: session } = useSession()
  const src = session ? session.user.image : '/user-notLogged.webp'
  return <Avatar src={chatbot ? '/gpt_logo.png' : src} color="gradient" bordered squared zoomed />
}
