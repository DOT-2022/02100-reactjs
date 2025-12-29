
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6_mvh8BqsXlRfXQCWIcaIAiBYi24fIZo",
  authDomain: "ecom-fashion-db.firebaseapp.com",
  projectId: "ecom-fashion-db",
  storageBucket: "ecom-fashion-db.firebasestorage.app",
  messagingSenderId: "926779297348",
  appId: "1:926779297348:web:baefcfd514a6ee451a7611"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Gogle Auth Provider for authentication
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromGoogleAuth = async (userAuth) => {
    // Check if we have the existing instance of document
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(
                userDocRef, {
                    displayName,
                    email,
                    createdAt
                }
            );
        } catch (error) {
            console.log(error);
        }
    }
    return userDocRef;

};
