import { firebaseApiKey } from '../prismicio'
import { ToastOptions } from 'react-toastify'

export const toastConfigurations: ToastOptions = {
  position: 'bottom-center',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

export const firebaseConfigurations = {
  apiKey: firebaseApiKey,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: 'aerosolalliance',
  storageBucket: 'aerosolalliance.appspot.com',
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  databaseURL: process.env.FIREBASE_DB_URL,
}
