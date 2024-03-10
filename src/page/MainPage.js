import React, {Suspense, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import Navbar from "../components/Navbar";

import CountUp from 'react-countup';
import AuthContext from "../auth/AuthContext";
import mainPhoto from "../asset/image/mainWheelchair.jpeg";
import Loding from "../components/Loding";
import MainPopUp from "../components/MainPopUp";

const MainNotification = React.lazy(() => import('../components/MainNotification'));
const MainAthletic = React.lazy(() => import('../components/MainAthletic'));
const MainPhotoSlide = React.lazy(() => import('../components/MainPhotoSlide'));
const Footer = React.lazy(() => import('../components/Footer'));


export default function MainPage(){


    const [userData, setUserData] = useState(null);


    const context = useContext(AuthContext);

    useEffect(() => {
        // 로컬 스토리지에서 토큰을 가져오기
        const token = localStorage.getItem('token');

        if (token) {
            // 토큰이 있다면 /member/current 엔드포인트로 사용자 데이터 요청
            fetch('/member/current', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        // 사용자 데이터가 성공적으로 받아와졌을 때 state에 저장
                        setUserData(data.data);
                        context.login({userData: data.data});
                    } else {
                        // 토큰이 유효하지 않거나 오류가 발생한 경우 로그아웃 또는 다른 처리 수행
                        context.logout();
                        console.error('Failed to fetch user data');
                    }
                })
                .catch((error) => {
                    console.error('Error during user data fetch:', error);
                });
        }
    }, []); // useEffect가 처음 한 번만 실행되도록 빈 의존성 배열


    return(
        <>
            <Navbar navClass="nav-light" />

            <section className="relative md:flex md:h-screen items-center md:py-0 pt-36 pb-56 bg-no-repeat bg-center bg-cover custom-gradient"
                     style={{backgroundImage: `linear-gradient(to top, #1e293b, rgba(30, 41, 59, 0.4)), url(${mainPhoto})`}}>
                <div className="container relative">
                    <div className="grid grid-cols-1 mt-10">
                        <h4 className="lg:leading-normal leading-normal text-white mb-5 font-bold lg:text-5xl md:text-3xl sm:text-2xl xs:text-2xl xs:mt-36" >스포츠의 힘으로<br /> 인생의 무한한 가능성을 열다.</h4>
                        <p className="text-slate-400 lg:text-3xl md:text-3xl sm:text-2xl xs:text-xl xs:pb-10">Open your boundless possibilities in life with the power of sports</p>
                    </div>

                    <div className="relative mt-8">
                        <Link to="/greetings" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-emerald-600 border-emerald-600 text-white rounded-md me-2">장애인 체육회 소개</Link>
                        {/*<Link to="/program-list" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-3xl text-start bg-red-500 border-red-600 text-white rounded-md me-2">온라인 신청 접수</Link>*/}
                    </div>
                </div>

                <div className="container absolute bottom-0 start-0 end-0 xs:hidden">
                    <div className="grid grid-cols-1">
                        <div className="p-6 border-t border-dashed border-white/30">
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-[30px] xs:hidden">
                                <div className="counter-box flex items-center justify-center">
                                    <h1 className="text-3xl font-bold text-white">10년</h1>
                                    <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">2013년 하남시<br/>장애인 체육회 설립</h5>
                                </div>

                                <div className="counter-box flex items-center justify-center">
                                    <h1 className="text-3xl font-bold text-white"><CountUp className="counter-value" start={1} end={30} />+</h1>
                                    <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">장애인 체육대회 개최</h5>
                                </div>

                                <div className="counter-box flex items-center justify-center">
                                    <h1 className="text-3xl font-bold text-white"><CountUp className="counter-value" start={1} end={80} />+</h1>
                                    <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">생활 체육<br />프로그램 진행</h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Suspense fallback={<Loding />}>

            <MainPopUp />

            <MainNotification />

            <MainAthletic />

            <MainPhotoSlide />


            <section className="relative py-2 xs:hidden" style={{backgroundColor : "#F6F6F6"}}>
                <div className="container relative" style={{color : "gray"}}>
                    <span>개인정보처리방침 | </span>
                    <span>이메일무단수집거부 | </span>
                    <span>사이트맵</span>
                </div>
            </section>

            <Footer/>
            </Suspense>
        </>
    )
}