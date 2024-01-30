import React from 'react'
import './assets/libs/@mdi/font/css/materialdesignicons.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./page/MainPage";
import AuthLogin from "./components/AuthLogin";
import AuthSignup from "./components/AuthSignup";
import AuthRePassword from "./components/AuthRePassword";
import Announcement from "./page/notification/Announcement";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<AuthLogin />} />
                <Route path="/signup" element={<AuthSignup />} />
                <Route path="/re-password" element={<AuthRePassword />} />
                <Route path="/announcement" element={<Announcement />} />
            </Routes>
        </BrowserRouter>
    )
}
