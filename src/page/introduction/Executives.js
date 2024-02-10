import Navbar from "../../components/Navbar";
import join_soccer from "../../asset/image/join_soccer.jpg";
import SubFooter from "../../components/SubFooter";
import React from "react";
import {executives} from "../../asset/data/ExecutiveData.js";
import vacantProfile from "../../asset/image/vacantProfile.png";

export default function Executives() {
    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">임원 현황</h3>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16 ">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                        {executives.map((item,index)=>{
                            return(
                                <div key={index} className="lg:col-span-3 md:col-span-6">
                                    <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
                                        <img src={vacantProfile} className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />

                                        <div className="content mt-4">
                                            <h3  className="text-lg font-medium  block">{item.name}</h3>
                                            <span className="text-slate-400 block">{item.spot}</span>
                                            <p className="text-slate-400 mt-2">{item.belong}</p>

                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/*본문 내용 시작*/}
            <section className="relative md:py-24 py-16 ">
                <div className="container relative">
                    <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold text-center mb-16">조직도 사진 예정</h3>
                    <table className="w-full text-start">
                        <thead>
                        <tr>
                            <th className="xs:px-2 px-4 py-5 text-center">직위</th>
                            <th className="xs:px-2 px-4 py-5 text-end">이름</th>
                            <th className="xs:px-2 px-4 py-5 text-center">소속</th>
                        </tr>
                        </thead>

                        <tbody>
                        {executives.map((data, index) => (
                            <tr className="border-t border-gray-100 dark:border-gray-700" key={index}>
                                <td className="xs:px-2 p-2 text-center">{data.spot}</td>
                                <td className="xs:px-2 p-2 text-end">{data.name}</td>
                                <td className="xs:px-2 p-2 text-center">{data.belong}</td>
                            </tr>
                        ))}

                        </tbody>
                    </table>
                </div>
            </section>

            <SubFooter/>
        </>
    )
}