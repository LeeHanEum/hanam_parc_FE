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
import VisitingService from "./page/athleticService/VisitingService";
import CurrentTeacher from "./page/athleticService/CurrentTeacher";
import AthleticPrograms from "./page/athleticService/AthleticPrograms";
import NotificationDetails from "./page/notification/NotificationDetails";
import MyHome from "./page/myPage/MyHome";
import MyInfo from "./page/myPage/MyInfo";
import MyApplication from "./page/myPage/MyApplication";
import MyQna from "./page/myPage/MyQna";
import MyApplicationDetails from "./page/myPage/MyApplicationDetails";
import PopUpForm from "./page/admin/popup/PopUpForm";
import PopUpList from "./page/admin/popup/PopUpList";
import NewBoard from "./page/admin/notification/NewBoard";
import UpdateProgram from "./page/admin/program/UpdateProgram";
import NewQnA from "./page/notification/NewQnA";
import QnaAnswer from "./page/admin/notification/QnaAnswer";
import QnADetails from "./page/notification/QnADetails";
import UpdateBoard from "./page/admin/notification/UpdateBoard";
import National from "./page/competitionInfo/National";
import Winter from "./page/competitionInfo/Winter";
import Student from "./page/competitionInfo/Student";
import Gyonggi from "./page/competitionInfo/Gyonggi";
import Life from "./page/competitionInfo/Life";

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
                    <Route path="/my-home" element={<MyHome />} />
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
                    <Route path="/visiting-service" element={<VisitingService />} />
                    <Route path="/current-teacher" element={<CurrentTeacher />} />
                    <Route path="/athletic-programs" element={<AthleticPrograms />} />
                    <Route path={"/announcement/:id"} element={<NotificationDetails />} />
                    <Route path={"/recruitment/:id"} element={<NotificationDetails />} />
                    <Route path={"/management/:id"} element={<NotificationDetails />} />
                    <Route path={"/event/:id"} element={<NotificationDetails />} />
                    <Route path="/my-info" element={<MyInfo />} />
                    <Route path="/my-application" element={<MyApplication />} />
                    <Route path="/my-qna" element={<MyQna />} />
                    <Route path={"/my-application-details/:id"} element={<MyApplicationDetails/>} />
                    <Route path="/popup-add" element={<PopUpForm />} />
                    <Route path="/popup-list" element={<PopUpList />} />
                    <Route path="/new-board" element={<NewBoard />} />
                    <Route path={"/update-program/:id"} element={<UpdateProgram />} />
                    <Route path="/new-qna" element={<NewQnA />} />
                    <Route path={"/admin-qna-answer/:id"} element={<QnaAnswer />} />
                    <Route path={"/qna/:id"} element={<QnADetails />} />
                    <Route path={"/update-board/:id"} element={<UpdateBoard/>} />
                    <Route path="/national" element={<National />} />
                    <Route path="/winter" element={<Winter />} />
                    <Route path="/student" element={<Student />} />
                    <Route path="/gyonggi" element={<Gyonggi />} />
                    <Route path="/life" element={<Life />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}
