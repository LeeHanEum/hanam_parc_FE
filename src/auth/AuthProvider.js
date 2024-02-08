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
        setTimeout(logout, 3600 * 1000);
    };

    const logout = () => {
        setAuthState(initialAuthState);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;