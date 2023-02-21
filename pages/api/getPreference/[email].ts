import type { NextApiRequest, NextApiResponse } from 'next'
import { collection, query, where, getDocs } from 'firebase/firestore/lite'
import { db } from '@/firestore/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.query

  const userPreferences = query(collection(db, 'preference'), where('email', '==', email))

  const preferencesSnapshot = await getDocs(userPreferences)
  const preferences = preferencesSnapshot.docs.map((doc) => {
    const id = doc.id
    return {
      id,
      ...doc.data()
    }
  })

  res.json(preferences)
}
