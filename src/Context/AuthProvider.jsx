import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const gitProviderLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (emai, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, emai, password)
    }
    const upDateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser === null || currentUser.uid || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const Authinfos = { user, loading, verifyEmail, gitProviderLogin, setLoading, providerLogin, logOut, createUser, signIn, upDateUserProfile, }

    return (
        <AuthContext.Provider value={Authinfos}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;