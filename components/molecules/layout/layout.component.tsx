import { useSession } from 'next-auth/react'
import { Header } from '../header'

type Props = {
  children: React.ReactNode
}
export const Layout = ({ children }: Props) => {
  const { data: session, status } = useSession()
  if (status === 'loading') return <div>CArgando SEssion</div>
  return (
    <>
      <Header />
      <main>{children}</main>
      <div>footer</div>
    </>
  )
}
