import { useSession } from 'next-auth/react'
import { Header } from '../header'
import styles from './layout.module.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: React.ReactNode
}
export const Layout = ({ children }: Props) => {
  const { data: session, status } = useSession()
  if (status === 'loading') return <div>Loading Session</div>
  return (
    <>
      <Header />
      <main className={`${styles.container} ${inter.className}`}>{children}</main>
      <footer></footer>
    </>
  )
}
