import Navbar from "../../components/Navbar";
import join_soccer from "../../asset/image/join_soccer.jpg";
import SubFooter from "../../components/SubFooter";
import React from "react";
import {Link} from "react-router-dom";
import vacantProfile from "../../asset/image/vacantProfile.png";

export default function TeacherInfo() {


    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">생활 체육 지도자 현황</h3>
                    </div>
                </div>
            </section>

            {/*본문 내용 시작*/}
            <section className="relative md:py-12 py-8 mb-10 xs:text-xs">
                <div className="container relative">

                    <div className="grid md:grid-cols-12 grid-cols-1">
                        <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 mx-6">
                            <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 mt-6">
                                <div className="profile-pic text-center mb-5">
                                    <div>
                                        <div className="relative h-24 w-24 mx-auto">
                                            <img src={vacantProfile} className="rounded-full shadow dark:shadow-gray-700 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt=""/>
                                            <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="text-lg font-semibold">김기현</h5>
                                            <p className="text-slate-400">지도자</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-9 lg:col-span-8 md:col-span-8 mt-6">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <div className="md:flex mt-2">
                                        <div className="md:w-1/2 md:px-3">
                                            <div className="flex items-center mb-4 justify-between">
                                                <h5 className="text-xl font-semibold">보유 자격증 :</h5>
                                            </div>
                                            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                                <p className="text-slate-500 text-lg font-semibold mb-2">장애인 스프츠 지도사 (요트/축구)</p>
                                                <p className="text-slate-500 text-lg font-semibold mb-2">유소년 스포츠 지도사 (축구))</p>
                                                <p className="text-slate-500 text-lg font-semibold mb-2">2급 생활스포츠지도사 (축구)</p>
                                            </div>
                                        </div>

                                        <div className="md:w-1/2 md:px-3 mt-[30] md:mt-0 lg:mt-0 mt-8 " >
                                            <div className="flex items-center mb-4 justify-between">
                                                <h5 className="text-xl font-semibold">수업 가능 종목 :</h5>
                                            </div>
                                            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                                <p className="text-slate-500 text-lg font-semibold mb-2">축구/풋살/농구/뉴스포츠/스트레칭/재활운동</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                        <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 mx-6">
                            <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 mt-6">
                                <div className="profile-pic text-center mb-5">
                                    <div>
                                        <div className="relative h-24 w-24 mx-auto">
                                            <img src={vacantProfile} className="rounded-full shadow dark:shadow-gray-700 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt=""/>
                                            <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="text-lg font-semibold">정혜조</h5>
                                            <p className="text-slate-400">지도자</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-9 lg:col-span-8 md:col-span-8 mt-6">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <div className="md:flex mt-2">
                                        <div className="md:w-1/2 md:px-3">
                                            <div className="flex items-center mb-4 justify-between">
                                                <h5 className="text-xl font-semibold">보유 자격증 :</h5>
                                            </div>
                                            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                                <p className="text-slate-500 text-lg font-semibold mb-2">장애인 스포츠 지도사 (보치아)</p>
                                                <p className="text-slate-500 text-lg font-semibold mb-2">2급 생활 스포츠 지도사 (보디빌딩)</p>
                                            </div>
                                        </div>

                                        <div className="md:w-1/2 md:px-3 mt-[30] md:mt-0 lg:mt-0 mt-8 " >
                                            <div className="flex items-center mb-4 justify-between">
                                                <h5 className="text-xl font-semibold">수업 가능 종목 :</h5>
                                            </div>
                                            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                                <p className="text-slate-500 text-lg font-semibold mb-2">뉴스포츠/보치아/스트레칭/재활운동</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            <SubFooter/>
        </>
    )
}