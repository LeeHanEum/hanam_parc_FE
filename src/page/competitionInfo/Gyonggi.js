import React from 'react'
import "../../../node_modules/react-modal-video/css/modal-video.css";
import Navbar from "../../components/Navbar";
import SubFooter from "../../components/SubFooter";
import join_soccer from "../../asset/image/join_soccer.jpg";
import 'react-vertical-timeline-component/style.min.css';
import gyonggi from "../../asset/image/경기도장애인체육대회.png";
import {GyonggiSports} from "../../asset/data/data";
import {Link} from "react-router-dom";


export default function Gyonggi() {

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">경기도 장애인 체육대회</h3>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16" style={{backgroundColor : "#F6F6F6"}}>
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-6 md:col-span-6">
                            <img src={gyonggi} className="shadow w-full rounded-md" alt="" />
                            <p className="text-xs text-gray-400 mt-1">출처:대한장애인체육회(역대대회)</p>
                        </div>

                        <div className="lg:col-span-6 md:col-span-6">
                            <div className="lg:ms-5">
                                <h3 className="px-3 mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">경기도 장애인 체육대회 개요</h3>

                                <p className="text-slate-500 max-w-xl m-3">경기도장애인체육대회는 스포츠 활동을 통한 장애인 선수들의 경기력 향상 및 스포츠 정신을 고취하여 장애인의 사회적응 능력 배양으로 함께하는 사회분위기 조성에 기여하고자 한다.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-16" >
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-2 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">경기 종목</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">20개 종목(생활체육 11, 명랑운동회 9)</p>
                    </div>

                    <div className="flex justify-center items-center text-center mt-8 mb-10">
                        <ul className="list-none space-x-3 space-y-4">
                            {GyonggiSports.map((item, index) => {
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