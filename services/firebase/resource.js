import { getDatabase, ref, set } from 'firebase/database'

export async function writeUserData(userInfo) {
  const db = getDatabase()
  return await set(ref(db, 'users/' + Date.now()), userInfo)
}
