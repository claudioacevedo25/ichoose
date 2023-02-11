import type { NextApiRequest, NextApiResponse } from 'next'
import { addDoc, collection } from 'firebase/firestore/lite'
import { db } from '@/firebase/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req

  await addDoc(collection(db, 'preference'), body)
}
