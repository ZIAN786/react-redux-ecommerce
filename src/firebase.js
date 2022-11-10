import firebase from 'firebase/compat/app' 
import "firebase/compat/auth"
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDG1VmF81yogOtulIqMotEytLqqhK6nk5k",
    authDomain: "ecommerce-51df6.firebaseapp.com",
    projectId: "ecommerce-51df6",
    storageBucket: "ecommerce-51df6.appspot.com",
    messagingSenderId: "278781032310",
    appId: "1:278781032310:web:aadd51daa1c548605f6c57"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //export 
  export const auth = firebase.auth()
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();