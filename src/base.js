import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDtWUyP5wuTSxE6tKtBvDGWBVfuRRLrGFQ",
  authDomain: "recette-app-f0e5a.firebaseapp.com",
  databaseURL: "https://recette-app-f0e5a.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
