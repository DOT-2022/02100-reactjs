
import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromGoogleAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// As the actual value we want to access is dynamic (it will change), we provide a default 
// value of null and a placeholder function for setting the user.
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

// The UserContext will be used to provide and consume user-related data throughout the React 
// application.
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    // This useEffect sets up a listener for authentication state changes when the component mounts.
    // It updates the currentUser state whenever the authentication state changes.
    useEffect(() => {
        // onAuthStateChangedListener sets up a listener that triggers whenever the
        // authentication state changes (e.g., user signs in or out). and reutrns a function to unsubscribe from the listener.
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user);
            if (user) {
                createUserDocumentFromGoogleAuth(user);
            }
            setCurrentUser(user);
        });
        // Cleanup function to unsubscribe from the listener when the component unmounts.
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};