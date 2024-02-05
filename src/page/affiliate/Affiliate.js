import React from 'react'
import "../../../node_modules/react-modal-video/css/modal-video.css";
import Navbar from "../../components/Navbar";
import SubFooter from "../../components/SubFooter";

import join_soccer from "../../asset/image/join_soccer.jpg";
import {affiliateData} from "../../asset/data/affiliateData"

export default function Affiliate() {

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">가맹단체현황</h3>
                    </div>
                </div>
            </section>

            {/*본문 내용 시작*/}
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        {affiliateData.map((item,index)=>{
                            return(
                                <div key={index} className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                                    <img src={item.img} alt=""/>
                                    <div className="content p-6">
                                        <p className="text-slate-500 mt-3 text-xl">{item.title}</p>
                                        <p className="text-slate-400 mt-3 text-lg">회장 : {item.president} / 사무장 : {item.vice}</p>
                                    </div>
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
