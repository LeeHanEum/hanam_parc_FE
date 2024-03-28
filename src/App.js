import React from 'react'
import './assets/libs/@mdi/font/css/materialdesignicons.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { lazy, Suspense } from 'react';

import MainPage from "./page/MainPage";
import Loding from "./components/Loding";

const AuthLogin = lazy(() => import('./components/AuthLogin'));
const AuthSignup = lazy(() => import('./components/AuthSignup'));
const AuthRePassword = lazy(() => import('./components/AuthRePassword'));
const Announcement = lazy(() => import('./page/notification/Announcement'));
const QnA = lazy(() => import('./page/notification/QnA'));
const Recruitment = lazy(() => import('./page/notification/Recruitment'));
const Management = lazy(() => import('./page/notification/Management'));
const PageComingsoon = lazy(() => import('./page/pageComingsoon'));
const EventSchedule = lazy(() => import('./page/notification/EventSchedule'));
const Greetings = lazy(() => import('./page/introduction/Greetings'));
const Establishment = lazy(() => import('./page/introduction/Establishment'));
const Affiliate = lazy(() => import('./page/affiliate/Affiliate'));
const ProgramList = lazy(() => import('./page/athleticService/onlineReceiption/ProgramList'));
const Programs = lazy(() => import('./page/admin/program/Programs'));
const ProgramDetails = lazy(() => import('./page/athleticService/onlineReceiption/ProgramDetails'));
const AuthProvider = lazy(() => import('./auth/AuthProvider'));
const Home = lazy(() => import('./page/admin/Home'));
const MemberList = lazy(() => import('./page/admin/member/MemberList'));
const AnnouncementList = lazy(() => import('./page/admin/notification/AnnouncementList'));
const QnAList = lazy(() => import('./page/admin/notification/QnAList'));
const RecruitmentList = lazy(() => import('./page/admin/notification/RecruitmentList'));
const ManagementList = lazy(() => import('./page/admin/notification/ManagementList'));
const ApplicationList = lazy(() => import('./page/admin/program/ApplicationList'));
const ProgramForm = lazy(() => import('./page/admin/program/ProgramForm'));
const EventScheduleList = lazy(() => import('./page/notification/EventScheduleList'));
const Executives = lazy(() => import('./page/introduction/Executives'));
const Employee = lazy(() => import('./page/introduction/Employee'));
const Business = lazy(() => import('./page/introduction/Business'));
const VisitingService = lazy(() => import('./page/athleticService/VisitingService'));
const CurrentTeacher = lazy(() => import('./page/athleticService/CurrentTeacher'));
const AthleticPrograms = lazy(() => import('./page/athleticService/AthleticPrograms'));
const NotificationDetails = lazy(() => import('./page/notification/NotificationDetails'));
const MyHome = lazy(() => import('./page/myPage/MyHome'));
const MyInfo = lazy(() => import('./page/myPage/MyInfo'));
const MyApplication = lazy(() => import('./page/myPage/MyApplication'));
const MyQna = lazy(() => import('./page/myPage/MyQna'));
const MyApplicationDetails = lazy(() => import('./page/myPage/MyApplicationDetails'));
const PopUpForm = lazy(() => import('./page/admin/popup/PopUpForm'));
const PopUpList = lazy(() => import('./page/admin/popup/PopUpList'));
const NewBoard = lazy(() => import('./page/admin/notification/NewBoard'));
const UpdateProgram = lazy(() => import('./page/admin/program/UpdateProgram'));
const NewQnA = lazy(() => import('./page/notification/NewQnA'));
const QnaAnswer = lazy(() => import('./page/admin/notification/QnaAnswer'));
const QnADetails = lazy(() => import('./page/notification/QnADetails'));
const UpdateBoard = lazy(() => import('./page/admin/notification/UpdateBoard'));
const National = lazy(() => import('./page/competitionInfo/National'));
const Winter = lazy(() => import('./page/competitionInfo/Winter'));
const Student = lazy(() => import('./page/competitionInfo/Student'));
const Gyonggi = lazy(() => import('./page/competitionInfo/Gyonggi'));
const Life = lazy(() => import('./page/competitionInfo/Life'));
const Gallerys = lazy(() => import('./page/admin/archive/Gallerys'));
const GalleryList = lazy(() => import('./page/archive/GalleryList'));
const NewGallery = lazy(() => import('./page/admin/archive/NewGallery'));
const GalleryDetails = lazy(() => import('./page/archive/GalleryDetails'));
const UpdateMember = lazy(() => import('./page/admin/member/UpdateMember'));
const NewsList = lazy(() => import('./page/archive/NewsList'));


export default function App() {
    return (

        <AuthProvider>
            <BrowserRouter>
                <Suspense fallback={<Loding />}>
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
                    <Route path="/gallery" element={<GalleryList />} />
                    <Route path="/admin-gallery" element={<Gallerys />} />
                    <Route path="/new-gallery" element={<NewGallery />} />
                    <Route path={"/gallery/:id"} element={<GalleryDetails />} />
                    <Route path={"/admin-update-member/:id"} element={<UpdateMember />} />
                    <Route path="/news" element={<NewsList />} />
                </Routes>
                </Suspense>
            </BrowserRouter>
        </AuthProvider>
    )
}
