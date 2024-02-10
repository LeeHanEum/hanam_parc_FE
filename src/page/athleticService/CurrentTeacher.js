import Navbar from "../../components/Navbar";
import join_soccer from "../../asset/image/join_soccer.jpg";
import SubFooter from "../../components/SubFooter";
import React from "react";
import {Link} from "react-router-dom";
import vacantProfile from "../../asset/image/vacantProfile.png";

export default function CurrentTeacher() {


    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">지도자 배치 현황</h3>
                    </div>
                </div>
            </section>

            {/*본문 내용 시작*/}
            <section className="relative md:py-12 py-8 mb-10">
                <div className="container relative">

                    <div className="w-64 inline-block mx-4" style={{float : "left"}}>
                        <div className="team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative">
                            <div className="bg-red-600/10 dark:bg-red-600/30 absolute inset-0 rounded-md -mt-[10px] -ms-[10px] h-[98%] w-[98%] -z-1"></div>
                            <img src={vacantProfile} className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />

                            <div className="content mt-4">
                                <Link to = "#" className="text-lg font-medium hover:text-indigo-600 block">김기현</Link>
                                <span className="text-slate-400 block">지도자</span>

                                <p className="text-slate-400 mt-4">찾아가는 장애인생활체육 지도</p>

                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-1 grid-cols-1 gap-[30px]" >
                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            <table className="w-full text-start">
                                <thead>
                                <tr>
                                    <th className="xs:px-2 px-4 py-5 text-center">월</th>
                                    <th className="xs:px-2 px-4 py-5 text-center">화</th>
                                    <th className="xs:px-2 px-4 py-5 text-center">수</th>
                                    <th className="xs:px-2 px-4 py-5 text-center">목</th>
                                    <th className="xs:px-2 px-4 py-5 text-center">금</th>
                                </tr>
                                </thead>

                                <tbody>
                                    <tr className="border-t border-gray-100 dark:border-gray-700">
                                        <td className="xs:px-2 p-4 text-center">프란치스코의 집
                                            <br />10:00-11:00</td>
                                        <td className="xs:px-2 p-4 text-center">창우초
                                            <br />9:50-11:20</td>
                                        <td className="xs:px-2 p-4 text-center">단샘초
                                            <br />9:00-10:30</td>
                                        <td className="xs:px-2 p-4 text-center">윤슬중
                                            <br />9:15-10:00</td>
                                        <td className="xs:px-2 p-4 text-center">하남장애인 주간보호시설
                                            <br />10:00-11:30</td>
                                    </tr>

                                    <tr className="border-t border-gray-100 dark:border-gray-700">
                                        <td className="xs:px-2 p-4 text-center">나그네집
                                            <br />13:00-14:10</td>
                                        <td className="xs:px-2 p-4 text-center">동부중
                                            <br />13:30-14:15</td>
                                        <td className="xs:px-2 p-4 text-center">신장고
                                            <br />11:00-11:50</td>
                                        <td className="xs:px-2 p-4 text-center">미사초
                                            <br />10:40-12:00</td>
                                        <td className="xs:px-2 p-4 text-center">직업재활센터
                                            <br />15:00-16:00</td>
                                    </tr>

                                    <tr className="border-t border-gray-100 dark:border-gray-700">
                                        <td className="xs:px-2 p-4 text-center">남한고
                                            <br />14:40-16:30</td>
                                        <td className="xs:px-2 p-4 text-center">은가람중
                                            <br />14:40-15:25</td>
                                        <td className="xs:px-2 p-4 text-center">느티나무마을
                                            <br />13:30-15:00</td>
                                        <td className="xs:px-2 p-4 text-center">미사고
                                            <br />13:50-15:40</td>
                                        <td className="xs:px-2 p-4 text-center"></td>
                                    </tr>

                                    <tr className="border-t border-gray-100 dark:border-gray-700">
                                        <td className="xs:px-2 p-4 text-center"></td>
                                        <td className="xs:px-2 p-4 text-center"></td>
                                        <td className="xs:px-2 p-4 text-center">소망의집
                                            <br />15:30-16:30</td>
                                        <td className="xs:px-2 p-4 text-center"></td>
                                        <td className="xs:px-2 p-4 text-center"></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="w-64 mt-16 inline-block mx-4" style={{float : "left"}}>
                        <div className="team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative">
                            <div className="bg-sky-600/10 dark:bg-sky-600/30 absolute inset-0 rounded-md -mt-[10px] -ms-[10px] h-[98%] w-[98%] -z-1"></div>
                            <img src={vacantProfile} className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />

                            <div className="content mt-4">
                                <Link to = "#" className="text-lg font-medium hover:text-indigo-600 block">정혜조</Link>
                                <span className="text-slate-400 block">지도자</span>

                                <p className="text-slate-400 mt-4">찾아가는 장애인생활체육 지도</p>

                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-1 grid-cols-1 mt-10 pt-6 gap-[30px]">
                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            <table className="w-full text-start">
                                <thead>
                                <tr>
                                    <th className="xs:px-2 px-4 py-5 text-center">월</th>
                                    <th className="xs:px-2 px-4 py-5 text-center">화</th>
                                    <th className="xs:px-2 px-4 py-5 text-center">수</th>
                                    <th className="xs:px-2 px-4 py-5 text-center">목</th>
                                    <th className="xs:px-2 px-4 py-5 text-center">금</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                    <td className="xs:px-2 p-4 text-center">프란치스코의 집
                                        <br />10:00-11:00</td>
                                    <td className="xs:px-2 p-4 text-center">창우초
                                        <br />9:50-11:20</td>
                                    <td className="xs:px-2 p-4 text-center">망월초
                                        <br />9:00-10:30</td>
                                    <td className="xs:px-2 p-4 text-center">덕풍초
                                        <br />9:15-10:00</td>
                                    <td className="xs:px-2 p-4 text-center">하남장애인 주간보호시설
                                        <br />10:00-11:30</td>
                                </tr>

                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                    <td className="xs:px-2 p-4 text-center">하늘아래주간
                                        <br />13:50-14:50</td>
                                    <td className="xs:px-2 p-4 text-center">보치아
                                        <br />13:30-15:30</td>
                                    <td className="xs:px-2 p-4 text-center">덕풍중
                                        <br />13:40-14:25</td>
                                    <td className="xs:px-2 p-4 text-center">미사초
                                        <br />10:40-12:00</td>
                                    <td className="xs:px-2 p-4 text-center">직업재활센터
                                        <br />15:00-16:00</td>
                                </tr>

                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                    <td className="xs:px-2 p-4 text-center">직업적응훈련
                                        <br />15:10-16:00</td>
                                    <td className="xs:px-2 p-4 text-center"></td>
                                    <td className="xs:px-2 p-4 text-center">소망의집
                                        <br />15:30-16:30</td>
                                    <td className="xs:px-2 p-4 text-center">보치아
                                        <br />13:30-15:30</td>
                                    <td className="xs:px-2 p-4 text-center"></td>
                                </tr>

                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                    <td className="xs:px-2 p-4 text-center"></td>
                                    <td className="xs:px-2 p-4 text-center"></td>
                                    <td className="xs:px-2 p-4 text-center"></td>
                                    <td className="xs:px-2 p-4 text-center">미사강변고
                                        <br />15:50-16:40</td>
                                    <td className="xs:px-2 p-4 text-center"></td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <SubFooter/>
        </>
    )
}