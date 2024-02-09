import Navbar from "../../components/Navbar";
import join_soccer from "../../asset/image/join_soccer.jpg";
import SubFooter from "../../components/SubFooter";
import React from "react";
import vacantProfile from "../../asset/image/vacantProfile.png";
import {Link} from "react-router-dom";

export default function Employee() {

    const teamData = [
        {
            image:vacantProfile,
            name:"이수현",
            title:"과장",
            desc:"하남시장애인체육회 업무 총괄"
        },
        {
            image:vacantProfile,
            name:"정예슬",
            title:"주임",
            desc:"하남시장애인체육회 행정 업무"
        },
        {
            image:vacantProfile,
            name:"김기현",
            title:"지도자",
            desc:"찾아가는 장애인생활체육 지도"
        },
        {
            image:vacantProfile,
            name:"정혜조",
            title:"지도자",
            desc:"찾아가는 장애인생활체육 지도"
        },
    ]

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">직원 현황</h3>
                    </div>
                </div>
            </section>

            {/*본문 내용 시작*/}
            <section className="relative md:py-24 py-16 ">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                        {teamData.map((item,index)=>{
                            return(
                                <div key={index} className="lg:col-span-3 md:col-span-6">
                                    <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
                                        <img src={item.image} className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />

                                        <div className="content mt-4">
                                            <h3  className="text-lg font-medium  block">{item.name}</h3>
                                            <span className="text-slate-400 block">{item.title}</span>

                                            <p className="text-slate-400 mt-4">{item.desc}</p>

                                        </div>
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