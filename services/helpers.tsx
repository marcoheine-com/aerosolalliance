import { firebaseApiKey } from '../prismicio'
import { ToastOptions } from 'react-toastify'

export const toastConfigurations: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

export const firebaseConfigurations = {
  apiKey: firebaseApiKey,
  authDomain: 'aerosolalliance.firebaseapp.com',
  projectId: 'aerosolalliance',
  storageBucket: 'aerosolalliance.appspot.com',
  messagingSenderId: '276816374912',
  appId: '1:276816374912:web:e42c56fad9a15d8d4b0a65',
  databaseURL:
    'https://aerosolalliance-default-rtdb.europe-west1.firebasedatabase.app/',
}
