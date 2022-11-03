import { createContext, useState, useEffect } from 'react';

import { 
    onAuthStateChangedListener, 
    createUserDocumentFromAuth 
} from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsucsribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user)
        })

        return unsucsribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}