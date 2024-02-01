import React from 'react'
import Navbar from "../../components/Navbar";
import join_soccer from "../../asset/image/join_soccer.jpg";
import {board_management} from "../../asset/data/data";
import {Link} from "react-router-dom";
import {LiaClipboardListSolid} from "../../assets/icons/icons";
import SubFooter from "../../components/SubFooter";

export default function Management() {
    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">경영공시</h3>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">

                <div className="container relative text-end">
                    <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">새 글쓰기</Link>
                </div>


                <div className="container relative">
                    <div className="grid md:grid-cols-1 grid-cols-1 pt-6 gap-[30px]">
                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            <table className="w-full text-start">
                                <thead>
                                <tr>
                                    <th className="xs:px-2 px-4 py-5 text-start xs:hidden">번호</th>
                                    <th className="xs:px-2 px-4 py-5 text-start">제목</th>
                                    <th className="xs:px-2 px-4 py-5 text-end">작성자</th>
                                    <th className="xs:px-2 px-4 py-5 text-end" style={{paddingRight : "0", marginRight:"0"}}>작성일</th>
                                </tr>
                                </thead>

                                <tbody>

                                {board_management.reverse().map((data, index) => {
                                    return (
                                        <tr className="border-t border-gray-100 dark:border-gray-700" key={index}>
                                            <td className="xs:px-2 p-4 xs:hidden"><Link className="flex items-center"><LiaClipboardListSolid className="me-1"/> {data.id}</Link></td>
                                            <td className="xs:px-2 p-4"><Link className="flex items-center">{data.title}</Link></td>
                                            <td className="xs:px-2 p-4 text-end">{data.writer}</td>
                                            <td className="xs:px-2 p-4 text-end">{data.created_at}</td>
                                        </tr>

                                    )})}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </section>

            <SubFooter />
        </>
    )
}