import React from 'react'
import './assets/libs/@mdi/font/css/materialdesignicons.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./page/MainPage";
import AuthLogin from "./components/AuthLogin";
import AuthSignup from "./components/AuthSignup";
import AuthRePassword from "./components/AuthRePassword";
import Announcement from "./page/notification/Announcement";
import QnA from "./page/notification/QnA";
import Recruitment from "./page/notification/Recruitment";
import Management from "./page/notification/Management";
import PageComingsoon from "./page/pageComingsoon";
import EventSchdule from "./page/notification/EventSchdule";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<AuthLogin />} />
                <Route path="/signup" element={<AuthSignup />} />
                <Route path="/re-password" element={<AuthRePassword />} />
                <Route path="/announcement" element={<Announcement />} />
                <Route path="/qna" element={<QnA />} />
                <Route path="/recruitment" element={<Recruitment />} />
                <Route path="/management" element={<Management />} />
                <Route path="/page-comming-soon" element={<PageComingsoon />} />
                <Route path="/event-schedule" element={<EventSchdule />} />
            </Routes>
        </BrowserRouter>
    )
}
