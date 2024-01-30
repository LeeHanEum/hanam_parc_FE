import React from 'react'
import Navbar from "../../components/Navbar";
import join_soccer from "../../asset/image/join_soccer.jpg";
import {Link} from "react-router-dom";
import {LiaClipboardListSolid} from "../../assets/icons/icons";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import {board_qna} from "../../asset/data/data";

export default function QnA() {
    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">문의사항</h3>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">

                <div className="container relative text-end">
                    <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">새 문의 쓰기</Link>
                </div>


                <div className="container relative">
                    <div className="grid md:grid-cols-1 grid-cols-1 pt-6 gap-[30px]">
                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            <table className="w-full text-start">
                                <thead>
                                <tr>
                                    <th className="px-4 py-5 text-start xs:hidden">번호</th>
                                    <th className="px-4 py-5 text-start">제목</th>
                                    <th className="px-4 py-5 text-end">작성자</th>
                                    <th className="px-4 py-5 text-end xs:hidden">작성일</th>
                                    <th className="px-4 py-5 text end ">답변여부</th>
                                </tr>
                                </thead>

                                <tbody>

                                {board_qna.reverse().map((data, index) => {
                                    return (
                                        <tr className="border-t border-gray-100 dark:border-gray-700" key={index}>
                                            <td className="p-4 xs:hidden"><Link className="flex items-center"><LiaClipboardListSolid className="me-1"/> {data.id}</Link></td>
                                            <td className="p-4"><Link className="flex items-center">{data.title}</Link></td>
                                            <td className="p-4 text-end">{data.writer}</td>
                                            <td className="p-4 text-end xs:hidden">{data.created_at}</td>
                                            <td className="p-4 text-center">{data.is_answered === true ? "답변 완료" : "미답변"}</td>
                                        </tr>

                                    )})}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="container relative py-16 text-center">
                    <nav aria-label="Page navigation example">
                        <ul className="inline-flex items-center -space-x-px">
                            <li>
                                <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                                    <MdKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" aria-current="page" className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-emerald-600 border border-emerald-600">1</Link>
                            </li>
                            <li>
                                <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">2</Link>
                            </li>
                            <li>
                                <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">3</Link>
                            </li>
                            <li>
                                <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">4</Link>
                            </li>
                            <li>
                                <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">5</Link>
                            </li>
                            <li>
                                <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                                    <MdKeyboardArrowRight className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    )
}