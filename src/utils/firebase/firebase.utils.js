
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc 
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6_mvh8BqsXlRfXQCWIcaIAiBYi24fIZo",
  authDomain: "ecom-fashion-db.firebaseapp.com",
  projectId: "ecom-fashion-db",
  storageBucket: "ecom-fashion-db.firebasestorage.app",
  messagingSenderId: "926779297348",
  appId: "1:926779297348:web:baefcfd514a6ee451a7611"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Gogle Auth Provider for authentication
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromGoogleAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

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
                    createdAt,
                    ...additionalInformation
                }
            );
        } catch (error) {
            console.log(error);
        }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);

}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener
 = (callback) => onAuthStateChanged(auth, callback);