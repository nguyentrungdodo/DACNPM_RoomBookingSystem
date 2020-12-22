/* eslint-disable no-use-before-define */
import * as firebase from 'firebase/firebase-app.js'
// import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyB-3qIAUPM_ggFGZo8BAtAmouCP-HTsbvY',
  authDomain: 'projectcnpm-54f96.firebaseapp.com',
  databaseURL: 'https://projectcnpm-54f96.firebaseio.com',
  projectId: 'projectcnpm-54f96',
  storageBucket: 'projectcnpm-54f96.appspot.com',
  messagingSenderId: '271856883083',
  appId: '1:271856883083:web:594685b3ba4fe958958b8e',
  measurementId: 'G-4M33G16SSL'
}
// Initialize Firebase

let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}

console.log(app)
export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase
