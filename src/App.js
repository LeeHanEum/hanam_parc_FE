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
import EventSchedule from "./page/notification/EventSchedule";
import Greetings from "./page/introduction/Greetings";
import Establishment from "./page/introduction/Establishment";
import Affiliate from "./page/affiliate/Affiliate";
import ProgramList from "./page/athleticService/onlineReceiption/ProgramList";
import Programs from "./page/admin/program/Programs";
import ProgramDetails from "./page/athleticService/onlineReceiption/ProgramDetails";
import AuthProvider from "./auth/AuthProvider";
import Home from "./page/admin/Home";
import MemberList from "./page/admin/member/MemberList";
import AnnouncementList from "./page/admin/notification/AnnouncementList";
import QnAList from "./page/admin/notification/QnAList";
import RecruitmentList from "./page/admin/notification/RecruitmentList";
import ManagementList from "./page/admin/notification/ManagementList";
import ApplicationList from "./page/admin/program/ApplicationList";
import ProgramForm from "./page/admin/program/ProgramForm";
import EventScheduleList from "./page/notification/EventScheduleList";
import Executives from "./page/introduction/Executives";
import Employee from "./page/introduction/Employee";
import Business from "./page/introduction/Business";

export default function App() {
    return (
        <AuthProvider>
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
                    <Route path="/event-schedule" element={<EventSchedule />} />
                    <Route path="/greetings" element={<Greetings />} />
                    <Route path="/establishment" element={<Establishment />} />
                    <Route path="/affiliate" element={<Affiliate />} />
                    <Route path="/program-list" element={<ProgramList />} />
                    <Route path={"/program/:id"} element={<ProgramDetails />} />
                    <Route path="/admin-home" element={<Home />} />
                    <Route path="/admin-member" element={<MemberList />} />
                    <Route path="/admin-announcement" element={<AnnouncementList />} />
                    <Route path="/admin-qna" element={<QnAList />} />
                    <Route path="/admin-recruitment" element={<RecruitmentList />} />
                    <Route path="/admin-management" element={<ManagementList />} />
                    <Route path="/admin-programs" element={<Programs />} />
                    <Route path="/admin-applicaions" element={<ApplicationList />} />
                    <Route path="/admin-programForm" element={<ProgramForm />} />
                    <Route path="/event-schedule-list" element={<EventScheduleList />} />
                    <Route path="/executives" element={<Executives />} />
                    <Route path="/employee" element={<Employee />} />
                    <Route path="/business" element={<Business />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}
