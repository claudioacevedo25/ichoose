import { Avatar, Grid } from '@nextui-org/react'
import { useSession } from 'next-auth/react'

type Props = {
  chatbot?: boolean
}

export const UserAvatar = ({ chatbot }: Props) => {
  const { data: session } = useSession()
  const src = session ? session.user.image : '/user-notLogged.webp'
  return (
    <Grid.Container gap={2}>
      <Grid>
        <Avatar
          size="lg"
          src={chatbot ? '/gpt_logo.png' : src}
          color="gradient"
          bordered
          squared
          zoomed
        />
      </Grid>
    </Grid.Container>
  )
}
