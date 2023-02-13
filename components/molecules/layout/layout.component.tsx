import { useSession } from 'next-auth/react'
type Props = {
  children: React.ReactNode
}
export const Layout = ({ children }: Props) => {
  const { data: session, status } = useSession()
  if (status === 'loading') return <div>CArgando SEssion</div>
  return (
    <>
      <div>HEADER</div>
      <main>{children}</main>
      <div>footer</div>
    </>
  )
}
