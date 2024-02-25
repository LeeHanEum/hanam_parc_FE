import React from 'react'
import "../../../node_modules/react-modal-video/css/modal-video.css";
import Navbar from "../../components/Navbar";
import SubFooter from "../../components/SubFooter";
import join_soccer from "../../asset/image/join_soccer.jpg";
import 'react-vertical-timeline-component/style.min.css';
import {lifeSports} from "../../asset/data/data";
import {Link} from "react-router-dom";
import life from "../../asset/image/life.png";


export default function Life() {

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">경기도 장애인 생활 체육대회</h3>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16" style={{backgroundColor : "#F6F6F6"}}>
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-6 md:col-span-6">
                            <img src={life} className="shadow w-full rounded-md" alt="" />
                            <p className="text-xs text-gray-400 mt-1">출처:대한장애인체육회(역대대회)</p>
                        </div>

                        <div className="lg:col-span-6 md:col-span-6">
                            <div className="lg:ms-5">
                                <h3 className="px-3 mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">경기도 장애인 생활 체육대회 개요</h3>

                                <p className="text-slate-500 max-w-xl m-3">경기도내 장애인 생활체육인의 우정과 화합을 위한 한마당 축제의 장으로 생활체육을 통해 사회참여에 대한 관심을 제고하여 건강하고 활기찬 생활을 위함.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-16" >
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-2 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">경기 종목</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">18개 종목 (정식 17, 시범 1))</p>
                    </div>

                    <div className="flex justify-center items-center text-center mt-8 mb-10">
                        <ul className="list-none space-x-3 space-y-4">
                            {lifeSports.map((item, index) => {
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