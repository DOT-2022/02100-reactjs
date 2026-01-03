import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromGoogleAuth } from '../../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../../buttons/button.component';

import './sign-up-form.styles.scss';
const SignUpForm = () => {
    const userFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    const [formFields, setFormFields] = useState(userFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const resetFields = () => {
        setFormFields(userFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Add sign-up logic here

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await createAuthUserWithEmailAndPassword(email, password);

            if (!response) {
                console.log("User creation failed", response);
                return;
            }

            // Create user document in Firestore
            await createUserDocumentFromGoogleAuth(response.user, { displayName });
            
            resetFields();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Cannot create user, email already in use");
            } else if (error.code === 'auth/weak-password') {
                alert("Password should be at least 6 characters");
            }
            else {
                alert("User creation encountered an error");
            }
            console.log("Error during user creation:", error);
        }

        // Further processing like creating user in Firebase can be done here
        console.log("User signed up:", formFields);
    };

    return (
        <div className='sign-up-container'>

            <h2>Don't have an account yet? Sign Up</h2>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Display Name"
                    inputOptions={{
                        type: "text",
                        id: "displayName",
                        name: "displayName",
                        onChange: handleChange,
                        value: displayName,
                        required: true
                    }}
                />

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
                    label="New Password"
                    inputOptions={{
                        type: "password",
                        id: "password",
                        name: "password",
                        onChange: handleChange,
                        value: password,
                        required: true
                    }}
                />

                <FormInput
                    label="Confirm Password"
                    inputOptions={{
                        type: "password",
                        id: "confirmPassword",
                        name: "confirmPassword",
                        onChange: handleChange,
                        value: confirmPassword,
                        required: true
                    }}
                />

                <Button
                    children='Sign Up'
                    type="submit" />
            </form>
        </div>
    );
};
export default SignUpForm;