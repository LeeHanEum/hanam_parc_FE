import React, { useState } from 'react';
import AuthContext from './AuthContext';

const initialAuthState = {
    isAuthenticated: false,
    user: null,
    login: () => {},
    logout: () => {},
};

const AuthProvider = ({children}) => {

    const [authState, setAuthState] = useState(initialAuthState);

    const login = ({userData}) => {
        setAuthState({
            isAuthenticated: true,
            user: userData,
            login : login,
            logout : logout
        });
    };

    const logout = () => {
        setAuthState(initialAuthState);
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;