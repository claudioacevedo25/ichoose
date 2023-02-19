import Head from 'next/head'
import { ChatbotApp } from '@/components/molecules/chatBot'

export default function QuestionAnswer() {
  return (
    <>
      <Head>
        <title>IChoose - Q&A</title>
        <meta name="description" content="Generated by  Maxi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChatbotApp />
    </>
  )
}