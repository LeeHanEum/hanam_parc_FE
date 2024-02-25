import React from 'react'
import "../../../node_modules/react-modal-video/css/modal-video.css";
import Navbar from "../../components/Navbar";
import SubFooter from "../../components/SubFooter";
import join_soccer from "../../asset/image/join_soccer.jpg";
import 'react-vertical-timeline-component/style.min.css';
import nationalImg from "../../asset/image/전국장애인체육대회.png";
import CompetitionPurpose from "../../components/CompetitionPurpose";
import {sports} from "../../asset/data/data";
import {Link} from "react-router-dom";


export default function National() {

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">전국 장애인 체육대회</h3>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16" style={{backgroundColor : "#F6F6F6"}}>
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-6 md:col-span-6">
                            <img src={nationalImg} className="shadow w-full rounded-md" alt="" />
                        </div>

                        <div className="lg:col-span-6 md:col-span-6">
                            <div className="lg:ms-5">
                                <h3 className="px-3 mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">전국장애인체육대회의 시작</h3>

                                <p className="text-slate-500 max-w-xl m-3">장애인체육은 1981년 유엔이 제정한 세계장애인의 해를 맞이하여 장애인체육은 발전의 전기를 맞이하게 되었으며, 전국장애인체육대회가 마침내 열리게 된 것이다.</p>

                                <p className="text-slate-500 max-w-xl m-3">
                                    그 이전까지는 정립회관이 주최하는 전국지체부자유청소년체육대회, 대한민국상이군경회가 주최하는 전국상이군경체육대회, 전국지적장애인축구대회 등 각 장애별로 몇몇 대회가 있어으나 전장애가 참여하는 종합체육행사는 전국장애인체육대회가 최초였다.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16 ">
                <div className="container relative">
                    <h3 className="mb-4 md:text-3xl md:leading-normal lg:text-3xl md:text-3xl xs:text-xl leading-normal font-semibold text-center">대회 목적</h3>
                    <CompetitionPurpose />
                </div>
            </section>

            <section className="relative py-16" >
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-2 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">경기 종목</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">24개 종목 (정식 22, 시범 1, 전시 1)</p>
                    </div>

                    <div className="flex justify-center items-center text-center mt-8 mb-10">
                        <ul className="list-none space-x-3 space-y-4">
                            {sports.map((item, index) => {
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
