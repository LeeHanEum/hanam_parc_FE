import Sidebar from "../../components/Sidebar";
import Topnav from "../../components/Topnav";
import {Link} from "react-router-dom";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import React, {useContext, useEffect, useState} from "react";
import AuthContext from "../../auth/AuthContext";
import MySidebar from "../../components/MySidebar";

export default function MyApplication(){

    const[toggle, setToggle] = useState(true);
    const [applications, setApplications] = useState([]);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(20);
    const [totalPages, setTotalPages] = useState(0);

    const context = useContext(AuthContext);

    useEffect(() => {
        // 페이지 로딩 시 API 호출
        fetchApplication();
    }, []);

    const fetchApplication = async () => {
        try {
            const response = await fetch(`/application/my?page=${page}&size=${size}`);
            if (response.ok) {
                const data = await response.json();
                setApplications(data.data.content);
                setTotalPages(data.data.totalPages);
                console.log(data.data.content);
            } else {
                console.error("Error fetching applications:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching applications:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/application?id=${id}`, {
                method: "DELETE",
                headers: {}
            });
            if (response.ok) {
                alert("신청이 취소되었습니다.");
                fetchApplication();
            } else {
                console.error("Error deleting application:", response.statusText);
            }

        } catch (error) {
            console.error("Error deleting application:", error);
        }
    }

    return(
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <MySidebar />
                <main className="page-content bg-gray-50 dark:bg-slate-800 h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="mt-32 relative mx-6">
                        <h3 className="text-3xl mx-2 font-semibold">나의 프로그램 신청 목록</h3>
                        <div className="grid md:grid-cols-1 grid-cols-1 pt-6 gap-[30px]">
                            <div
                                className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                <table className="w-full text-start xs:text-xs">
                                    <thead>
                                    <tr>
                                        <th className="px-4 py-5 text-center xs:hidden">고유번호</th>
                                        <th className="px-3 py-5 text-center">프로그램</th>
                                        <th className="px-3 py-5 text-center">상태</th>
                                        <th className="px-3 py-5 text-center xs:hidden">작성시각</th>
                                        <th className="px-3 py-5 text-center">상세</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {applications.map((application) => (
                                        <tr className="border-t border-gray-100 dark:border-gray-700" key={application.id}>
                                            <td className="p-3 text-center xs:hidden">{application.id}</td>
                                            <td className="p-3 text-center ">{application.program?.name}</td>
                                            <td className="p-3 text-center ">{application.status}</td>
                                            <td className="p-3 text-center xs:hidden">{application.createdAt.slice(0,16)}</td>
                                            <td className="p-3 text-center">
                                                <Link to={`/my-application-details/${application.id}`} className="py-1 px-1 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">수정</Link>
                                                <Link onClick={
                                                    () => {
                                                        handleDelete(application.id);
                                                    }
                                                } className="py-1 px-1 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center hover:bg-red-700 border-red-600 hover:border-red-700 text-red-600 hover:text-white rounded-md">취소</Link>
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
}