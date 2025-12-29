import { signInWithGooglePopup, createUserDocumentFromGoogleAuth } from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromGoogleAuth(user);
        
    }

    return (
        <div>
            <h2>Sign In</h2>
            <br />
            <button type="button" onClick={logGoogleUser}>Sign In with Google</button>
        </div>
    );
}

export default SignIn;