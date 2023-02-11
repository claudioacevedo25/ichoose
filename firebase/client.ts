import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { FIREBASE_CONFIG } from './config'

const app = initializeApp(FIREBASE_CONFIG)
export const db = getFirestore(app)
