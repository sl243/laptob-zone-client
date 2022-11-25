import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // User Create
    const userCreate = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // User Sign In 
    const signIn = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // User update profile
    const updateUserProfile = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    // User Log Out
    const logOut = () => {
        // setLoading(true)
        return signOut(auth);
    }

     // User Manage
     useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // setLoading(false)
        })

        return () => unsubscribe();
    }, [])

    const AuthInfo = {
        user,
        userCreate,
        signIn,
        updateUserProfile,
        logOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;