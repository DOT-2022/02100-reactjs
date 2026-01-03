import { useState } from "react";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../../utils/firebase/firebase.utils";
import Button from "../../buttons/button.component";
import FormInput from "../form-input/form-input.component";

import './sign-in.form.styles.scss';

const inputFormFields = {
    email: "",
    password: ""
};
const SignInForm = () => {

    const [formFields, setFormFields] = useState(inputFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        // Add sign-in logic here
        console.log("User signed in:", formFields);

        if (!email || !password) {
            alert("Please enter both email and password");
            return;
        }

        // Further processing like authenticating user in Firebase can be done here
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            if (!response) {
                console.log("Sign-in failed", response);
                return;
            }

            resetFormFields();
        } catch (error) {

            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log('Error during sign-in:', error);
            }
        }
    };

    const resetFormFields = () => {
        setFormFields(inputFormFields);
    };

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account? Sign In</h2>
            <form onSubmit={onSubmitHandler}>
                <FormInput
                    label="Email"
                    inputOptions={{
                        type: "email",
                        id: "email",
                        name: "email",
                        onChange: handleChange,
                        value: email,
                        required: true
                    }}
                />

                <FormInput
                    label="Password"
                    inputOptions={{
                        type: "password",
                        name: "password",
                        onChange: handleChange,
                        value: password,
                        required: true
                    }}
                />
                <Button
                    children='Sign In'
                    type="submit" />
                <br />
                <br />
                <Button
                    children='Sign In with Google'
                    buttonType='google'
                    type="button" otherProps={{
                        onClick: logGoogleUser
                    }} />
            </form>
        </div>
    );
};

export default SignInForm;