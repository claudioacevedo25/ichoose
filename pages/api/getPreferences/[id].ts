import type { NextApiRequest, NextApiResponse } from 'next'
import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from '@/firebase/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req
  const { id } = query

  const preferenceColumns = collection(db, 'preference')
  const preferenceSnapshot = await getDocs(preferenceColumns)
  const preferences = preferenceSnapshot.docs.map((doc) => doc.data())

  res.json(preferences)
}
