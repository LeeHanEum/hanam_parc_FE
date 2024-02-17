import Sidebar from "../../../components/Sidebar";
import Topnav from "../../../components/Topnav";
import {Link} from "react-router-dom";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import React, {useEffect, useState} from "react";
import members from "../../../assets/libs/feather-icons/feather.min";

export default function AnnouncementList() {

    const [toggle, setToggle] = useState(true)
    const [boards, setBoards] = useState([]);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(15);
    const [totalPages, setTotalPages] = useState(0);

    const ANNOUNCEMENT = "ANNOUNCEMENT";

    useEffect(() => {
        // 페이지 로딩 시 API 호출
        fetchBoards();
    }, [page, size]);

    const fetchBoards = async () => {
        try {
            const response = await fetch(`/board/${ANNOUNCEMENT}/page?page=${page}&size=${size}`);
            if (response.ok) {
                const data = await response.json();
                setBoards(data.data.content);
                setTotalPages(data.data.totalPages);
                console.log(data.data.content)
            } else {
                console.error("Error fetching boards:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching boards:", error);
        }
    };


    return (
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content bg-gray-50 dark:bg-slate-800 h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="mt-32 relative mx-6">
                        <h3 className="text-3xl mx-2 font-semibold inline">공지사항 목록</h3>
                        <div className="grid md:grid-cols-1 grid-cols-1 pt-6 gap-[30px]">
                            <div
                                className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                <table className="w-full text-start xs:text-xs">
                                    <thead>
                                    <tr>
                                        <th className="px-4 py-5 text-center ">번호</th>
                                        <th className="px-3 py-5 text-start">제목</th>
                                        <th className="px-3 py-5 text-center ">작성자</th>
                                        <th className="px-3 py-5 text-center xs:hidden">작성시각</th>
                                        <th className="px-3 py-5 text-center xs:hidden">수정시각</th>
                                        <th className="px-3 py-5 text-center">상세</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {boards.map((board) => (
                                        <tr className="border-t border-gray-100 dark:border-gray-700" key={board.id}>
                                            <td className="p-3 text-center ">{board.id}</td>
                                            <td className="p-3 text-start"><Link to={`/announcement/${board.id}`}>{board.title}</Link></td>
                                            <td className="p-3 text-center ">{board.writer?.name}</td>
                                            <td className="p-3 text-center xs:hidden">{board.createdAt.slice(0,16)}</td>
                                            <td className="p-3 text-center xs:hidden">{board.updatedAt.slice(0,16)}</td>
                                            <td className="p-3 text-center">
                                                <Link to="#" className="py-1 px-1 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">수정</Link>
                                                <Link to="#" className="py-1 px-1 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center hover:bg-red-700 border-red-600 hover:border-red-700 text-red-600 hover:text-white rounded-md">삭제</Link>
                                            </td>
                                        </tr>
                                    ))}
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
                </main>
            </div>
        </>
    )
};