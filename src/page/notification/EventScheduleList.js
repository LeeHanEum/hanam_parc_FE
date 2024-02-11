import React, {useEffect, useState} from 'react'
import Navbar from "../../components/Navbar";
import join_soccer from "../../asset/image/join_soccer.jpg";
import {Link} from "react-router-dom";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import SubFooter from "../../components/SubFooter";

export default function EventScheduleList() {

    const [events, setEvents] = useState([]);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(20);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        // 페이지 로딩 시 API 호출
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await fetch(`/event/page?page=${page}&size=${size}`);
            if (response.ok) {
                const data = await response.json();
                setEvents(data.data.content);
                setTotalPages(data.data.totalPages);
            } else {
                console.error("Error fetching events:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">행사일정</h3>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">

                <div className="container relative text-end">
                    <Link to="/event-schedule" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">달력 보기</Link>
                </div>


                <div className="container relative">
                    <div className="grid md:grid-cols-1 grid-cols-1 pt-6 gap-[30px]">
                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            <table className="w-full text-start">
                                <thead>
                                <tr>
                                    <th className="xs:px-2 px-4 py-5 text-center xs:hidden">번호</th>
                                    <th className="xs:px-2 px-4 py-5 text-start">일정</th>
                                    <th className="xs:px-2 px-4 py-5 text-center">시작일</th>
                                    <th className="xs:px-2 px-4 py-5 text-center">종료일</th>
                                    <th className="xs:px-2 px-4 py-5 text-center xs:hidden" style={{paddingRight : "0", marginRight:"0"}}>작성일</th>
                                </tr>
                                </thead>

                                <tbody>

                                {events.map((data, index) => {
                                    return (
                                        <tr className="border-t border-gray-100 dark:border-gray-700" key={data.id}>
                                            <td className="p-3 text-center ">{data.id}</td>

                                            <td className="p-3 text-center">{data.start}</td>
                                            <td className="p-3 text-center">{data.end}</td>
                                            <td className="p-3 text-center xs:hidden">{data.createdAt.slice(0,10)}</td>
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
                                <Link
                                    to="#"
                                    className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
                                >
                                    <MdKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                </Link>
                            </li>
                            {Array.from({length: totalPages}, (_, i) => i + 1).map((pageNumber) => (
                                <li key={pageNumber}>
                                    <Link
                                        to="#"
                                        className={`w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 ${
                                            pageNumber === page + 1
                                                ? "text-white bg-emerald-600 border border-emerald-600"
                                                : "hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
                                        }`}
                                        onClick={() => setPage(pageNumber - 1)}
                                    >
                                        {pageNumber}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    to="#"
                                    className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
                                >
                                    <MdKeyboardArrowRight className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <SubFooter />
        </>
    )
}