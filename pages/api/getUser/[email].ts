import type { NextApiRequest, NextApiResponse } from 'next'
import { collection, query, where, getDocs } from 'firebase/firestore/lite'
import { db } from '@/firestore/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.query

  const userByEmail = query(collection(db, 'user'), where('email', '==', email))

  const userSnapshot = await getDocs(userByEmail)
  const user = userSnapshot.docs.map((doc) => {
    const id = doc.id
    return {
      id,
      ...doc.data()
    }
  })

  res.json(user)
}
