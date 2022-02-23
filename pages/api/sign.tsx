import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set } from 'firebase/database'
import { NextApiRequest, NextApiResponse } from 'next'
import { firebaseConfigurations } from '../../services/helpers'

initializeApp(firebaseConfigurations)
const db = getDatabase()

export default async function sign(req: NextApiRequest, res: NextApiResponse) {
  try {
    await set(ref(db, 'users/' + Date.now()), req.body)
    res.status(200).json({ message: 'Ok' })
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
}
