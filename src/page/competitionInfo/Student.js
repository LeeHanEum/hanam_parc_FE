import React from 'react'
import "../../../node_modules/react-modal-video/css/modal-video.css";
import Navbar from "../../components/Navbar";
import SubFooter from "../../components/SubFooter";
import join_soccer from "../../asset/image/join_soccer.jpg";
import 'react-vertical-timeline-component/style.min.css';
import {studentSports} from "../../asset/data/data";
import {Link} from "react-router-dom";
import student from "../../asset/image/student.png";


export default function Student() {

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">전국 장애 학생 체육대회</h3>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16" style={{backgroundColor : "#F6F6F6"}}>
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-6 md:col-span-6">
                            <img src={student} className="shadow w-full rounded-md" alt="" />
                        </div>

                        <div className="lg:col-span-6 md:col-span-6">
                            <div className="lg:ms-5">
                                <h3 className="px-3 mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">전국 장애 학생 체육대회 개요</h3>

                                <p className="text-slate-500 max-w-xl m-3">전국장애학생체육대회는 장애학생에게 체육활동의 기회를 제공하여 건강증진과 여가선용을 목적으로 전국 순회 개최된다.</p>

                                <p className="text-slate-500 max-w-xl m-3">
                                    초등학교, 중학교, 고등학교에 재학 중인 장애학생은 누구나 대회에 참가할 수 있으며(시도별 참가접수), 장애학생 및 비장애학생에게 장애인체육과 지역의 문화 등을 체험할 수 있는 종합체육행사로 개최된다.
                                </p>

                                <p className="text-slate-500 max-w-xl m-3">
                                    본 대회를 통해 장애학생의 학교체육이 활성화될 것으로 기대된다.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-16" >
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-2 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">경기 종목</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">11개 종목 (정식 10, 시범 1))</p>
                    </div>

                    <div className="flex justify-center items-center text-center mt-8 mb-10">
                        <ul className="list-none space-x-3 space-y-4">
                            {studentSports.map((item, index) => {
                                return(
                                    <li className="inline-block" key={index}>
                                        <Link to="" className="group flex items-center bg-white dark:bg-slate-900 hover:text-indigo-600 shadow hover:shadow-md dark:shadow-gray-800 hover:dark:shadow-gray-800 border-4 border-double border-gray-100 hover:border-indigo-600/30 dark:border-gray-800 hover:dark:border-indigo-600/50 py-1.5 px-4 rounded-full align-middle duration-500">
                                            <span className="text-[18px] font-medium">{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>


            <SubFooter/>
        </>
    )
}
