import React from 'react'
import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import join_soccer from "../../../asset/image/join_soccer.jpg";
import {programList} from "../../../asset/data/program";
import {Link} from "react-router-dom";

export default function ProgramList() {

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">온라인 접수 프로그램</h3>
                    </div>
                </div>
            </section>

            {/*본문 내용 시작*/}
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        {programList.map((item,index)=>{
                            return(
                                <div key={index} className="blog relative rounded-md shadow dark:shadow-gray-800">
                                    <img src={item.img} alt=""/>
                                    <div className="content p-6">
                                        <p className="text-slate-500 mt-3 text-xl">{item.name}</p>
                                        <p className="text-slate-400 mt-3 text-lg">{item.endDate}</p>
                                    </div>

                                    {item.status === "접수중" ?
                                        <span className="content m-6 px-3 py-1 rounded-md border-2 text-white font-bold" style={{backgroundColor : "skyblue", borderColor : "skyblue"}}>
                                            {item.status}
                                        </span>
                                        :
                                        <span className="content m-6 px-3 py-1 rounded-md border-2 text-white font-bold" style={{backgroundColor : "lightgray"}}>
                                            {item.status}
                                        </span>
                                    }
                                    <div className="relative text-end" style={{float : "right", marginTop : "-10px"}}>
                                        <Link to={`/program/${item.id}`} className="py-2 px-3 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">상세보기</Link>
                                    </div>

                                    <div className="content p-3"></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <SubFooter/>
        </>
    )
}
