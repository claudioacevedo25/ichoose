import type { NextApiRequest, NextApiResponse } from 'next'
import { addDoc, collection } from 'firebase/firestore/lite'
import { db } from '@/firestore/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req
  const response = await addDoc(collection(db, 'preference'), body)
  return res.json(response)
}
