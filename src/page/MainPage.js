import React, {useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieModal from '../component/cookieModal'
import join_soccer from "../asset/image/join_soccer.jpg";

import CountUp from 'react-countup';
import {LiaClipboardListSolid} from "../assets/icons/icons";
import {board_main, course_main, footer_img, photo_main} from "../asset/data/data";
import TinySlider from "tiny-slider-react";
import AuthContext from "../auth/AuthContext";

export default function MainPage(){

    let settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        pagination : false,
        responsive: {
            992: {
                items: 4,
            },

            767: {
                items: 2,
            },

            320: {
                items: 1,
            },
        },
    }


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
                        console.log('User data fetched:', data.data);
                    } else {
                        // 토큰이 유효하지 않거나 오류가 발생한 경우 로그아웃 또는 다른 처리 수행
                        alert('사용자 정보를 가져오는데 실패했습니다.')
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

            <section className="relative md:flex md:h-screen items-center md:py-0 pt-36 pb-56 bg-no-repeat bg-center bg-cover bg-fixed"
                    style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 mt-10">
                        <h4 className="lg:leading-normal leading-normal text-white text-4xl lg:text-5xl mb-5 font-bold">스포츠의 힘으로<br /> 인생의 무한한 가능성을 열다.</h4>
                        <p className="text-slate-400 text-lg max-w-xl">Open your boundless possibilities in life with the power of sports</p>
                    </div>

                    <div className="relative mt-8">
                        <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">장애인 체육회 소개</Link>
                    </div>
                </div>

                <div className="container absolute bottom-0 start-0 end-0">
                    <div className="grid grid-cols-1">
                        <div className="p-6 border-t border-dashed border-white/30">
                            <div className="grid md:grid-cols-4 grid-cols-2 gap-[30px]">
                                <div className="counter-box flex items-center justify-center">
                                    <h1 className="text-4xl font-bold text-white">10년</h1>
                                    <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">2013년 하남시<br/>장애인 체육회 설립</h5>
                                </div>

                                <div className="counter-box flex items-center justify-center">
                                    <h1 className="text-4xl font-bold text-white"><CountUp className="counter-value" start={1} end={30} />+</h1>
                                    <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">장애인 체육대회 개최</h5>
                                </div>

                                <div className="counter-box flex items-center justify-center">
                                    <h1 className="text-4xl font-bold text-white"><CountUp className="counter-value" start={1} end={80} />+</h1>
                                    <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">생활 체육<br />프로그램 진행</h5>
                                </div>

                                <div className="counter-box flex items-center justify-center">
                                    <h1 className="text-4xl font-bold text-white"><CountUp className="counter-value" start={1} end={4.9} /></h1>
                                    <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">하남시 장애인 시설<br />사용자 별점</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-15 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1">
                        <h5 className="text-3xl font-semibold mb-5">알림마당</h5>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 pt-6 gap-[30px]">

                        {
                            board_main.map((data, index) => {
                                return (

                                    <div key={index}>
                                        <h5 className="text-2xl font-semibold mb-5">{data.heading}</h5>

                                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                            <table className="w-full text-start">
                                                <thead>
                                                <tr>
                                                    <th className="px-4 py-5 text-start">목록</th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                                    <td className="p-4"><Link className="flex items-center"><LiaClipboardListSolid className="me-1"/> {data.ls1}</Link></td>
                                                </tr>

                                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                                    <td className="p-4"><Link className="flex items-center"><LiaClipboardListSolid className="me-1"/> {data.ls2}</Link></td>
                                                </tr>

                                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                                    <td className="p-4"><Link className="flex items-center"><LiaClipboardListSolid className="me-1"/> {data.ls3}</Link></td>
                                                </tr>

                                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                                    <td className="p-4"><Link className="flex items-center"><LiaClipboardListSolid className="me-1"/> {data.ls4}</Link></td>
                                                </tr>

                                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                                    <td className="p-4"><Link className="flex items-center"><LiaClipboardListSolid className="me-1"/> {data.ls5}</Link></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    </div>

                </section>

                <section className="relative md:py-24 py-16" style={{backgroundColor : "#F6F6F6"}}>
                    <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">생활 체육 서비스</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">하남시 장애인 체육회와 함께하는 다양한 생활 체육 프로그램을 소개합니다.</p>
                    </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                            {
                                course_main.map((data,index) => {
                                    return (

                                        <div className="group relative rounded-md shadow hover:shadow-lg dark:shadow-gray-800 duration-500 ease-in-out overflow-hidden" key={index}>
                                            <div className="relative overflow-hidden">
                                                <img src={data.image} className="group-hover:scale-110 duration-500 ease-in-out" alt="" style={{width : "100%", maxHeight : "250px"}}/>
                                                <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                                            </div>

                                            <div className="content p-6 relative">
                                                {/*<Link to={`/course-detail/${data.id}`} className="font-medium block text-indigo-600">{data.field}</Link>*/}
                                                <Link to={`/course-detail/${data.id}`} className="text-lg font-medium block hover:text-indigo-600 duration-500 ease-in-out mt-2">{data.desc}</Link>
                                                <p className="text-slate-400 mt-3 mb-4">This program is supported by hanam-si.</p>

                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                        <div className="relative mt-8 text-center">
                            <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">생활 체육 서비스 더보기</Link>
                        </div>

                </div>
                </section>

            <section className="relative md:py-24 py-16">
                <div className="relative">
                    <div className="container relative">
                        <div className="grid grid-cols-1 pb-8 text-center">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">포토 갤러리</h3>

                            <p className="text-slate-400 max-w-xl mx-auto">한 눈에 보는 하남시 장애인 체육회의 활동 사진 자료실 입니다.</p>
                        </div>
                    </div>
                        <div className="grid grid-cols-1 mt-8">
                            <div className="tiny-three-item" style={{overflow : "hidden"}}>
                                <TinySlider settings={settings}>
                                    {photo_main.map((item, index) => (
                                        <span className="tiny-slide text-center" key={index}>
                                            <img src={item.image} className="inline shadow-md mx-auto" alt=""  style={{width : "350px", height:"250px"}}/>
                                        </span>
                                    ))}
                                </TinySlider>

                            </div>

                            <div className="relative mt-8 text-center">
                                <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">사진 더보기</Link>
                            </div>
                        </div>

                </div>
            </section>

            <section className="relative">
                <div className="container relative text-center">
                    {footer_img.map((data, index) => (
                        <div
                            key={index}
                            style={{
                                width: "20%",
                                display: "inline-block",
                                alignItems: "center",
                                textAlign: "center", // 추가된 부분
                                margin : "2%"
                            }}
                        >
                            <img
                                src={data.image}
                                alt=""
                                style={{
                                    width: "100%", // 이미지를 100%로 표시하여 가로 크기 유지
                                    height: "auto",
                                    display: "block", // 이미지를 가운데 정렬하기 위해 block으로 변경
                                    margin: "0 auto", // 이미지를 가운데 정렬하기 위한 margin 설정
                                }}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className="relative py-2" style={{backgroundColor : "#F6F6F6"}}>
                <div className="container relative" style={{color : "gray"}}>
                    <span>개인정보처리방침 | </span>
                    <span>이메일무단수집거부 | </span>
                    <span>사이트맵</span>
                </div>
            </section>

            <CookieModal/>
            <Footer/>
        </>
    )
}