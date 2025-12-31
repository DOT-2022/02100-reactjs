import SignInForm from "../../components/forms/sign-in/sign-in.component";
import SignUpForm from "../../components/forms/sign-up/sign-up.component";
import './auth.styles.scss';

const SignIn = () => {

    return (
        <div className="sign-in-sign-up-container">
            <SignInForm />
            <SignUpForm />
        </div>
    );
}

export default SignIn;