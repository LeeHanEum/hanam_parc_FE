import Sidebar from "../../../components/Sidebar";
import Topnav from "../../../components/Topnav";
import Select from "react-select";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import {deletePopup} from "../../../api/Api";

export default function PopUpList() {

    const [toggle, setToggle] = useState(true);

    const [popup, setPopup] = useState([]);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(20);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        // 페이지 로딩 시 API 호출
        fetchPopoup();
    }, [page,size]);

    const fetchPopoup = async () => {
        try {
            const response = await fetch(`/popup/page?page=${page}&size=${size}`);
            if (response.ok) {
                const data = await response.json();
                setPopup(data.data.content);
                setTotalPages(data.data.totalPages);
                console.log(data.data.content)
            } else {
                console.error("Error fetching popup:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching popup:", error);
        }
    };

    const fetchIsShow = async (id) => {
        try {
            const response = await fetch(`/popup?id=${id}`, {
                method: 'PATCH',
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                fetchPopoup();
            } else {
                console.error("Error fetching popup:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching popup:", error);
        }
    }

    return (
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <Sidebar />
                <main className="page-content bg-gray-50 dark:bg-slate-800 h-full">
                    <Topnav toggle={toggle} setToggle={setToggle} />

                    <div className="mt-32 relative mx-6">
                        <h3 className="text-3xl mx-2 mb-10 font-semibold">팝업 목록</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-[30px]">
                            {popup.map((item,index)=>{
                                return(
                                    <div key={index} className="blog relative rounded-md shadow dark:shadow-gray-800">
                                        <img src={item.url} alt="" className="pb-32"/>
                                        <div className="content p-3" style={{bottom : 0, position:"absolute"}}>
                                            <p className="text-slate-900 mt-3 text-xl inline-block">{item.name}</p>
                                            <p className="text-slate-900 mt-1 text-lg">등록 날짜 : {item.createdAt.slice(0,10)}</p>
                                            <p className="mt-1">
                                                {item.isShow ?
                                                    <Link onClick={()=>fetchIsShow(item.id)} className="py-1 px-2 text-sm inline-block font-semibold tracking-wide border align-middle duration-500 text-center hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-emerald-600 hover:text-white rounded-md">노출</Link>
                                                    :
                                                    <Link onClick={()=>fetchIsShow(item.id)} className="py-1 px-2 text-sm inline-block font-semibold tracking-wide border align-middle duration-500 text-center text-slate-500 hover:bg-gray-500 border-gray-600 hover:border-gray-700 hover:text-white text-gray-600 rounded-md">비노출</Link>
                                                }
                                                <Link onClick={()=>deletePopup(item.id).then(fetchPopoup)} className="mx-2 py-1 px-2 text-sm inline-block font-semibold tracking-wide border align-middle duration-500 text-center hover:bg-red-700 border-red-600 hover:border-red-700 text-red-600 hover:text-white rounded-md">삭제</Link>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {/*<div className="grid md:grid-cols-1 grid-cols-1 pt-6 gap-[30px]">*/}
                        {/*    <div*/}
                        {/*        className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">*/}
                        {/*        <table className="w-full text-start xs:text-xs">*/}
                        {/*            <thead>*/}
                        {/*            <tr>*/}
                        {/*                <th className="px-4 py-5 text-center">번호</th>*/}
                        {/*                <th className="px-3 py-5 text-center">이름</th>*/}
                        {/*                <th className="px-3 py-5 text-center">크기</th>*/}
                        {/*                <th className="px-3 py-5 text-center">등록시각</th>*/}
                        {/*                <th className="px-3 py-5 text-center">노출여부</th>*/}
                        {/*                <th className="px-3 py-5 text-center ">삭제</th>*/}
                        {/*            </tr>*/}
                        {/*            </thead>*/}

                        {/*            <tbody>*/}
                        {/*            {popup.map((item, index) => (*/}
                        {/*                <tr key={item.id}>*/}
                        {/*                    <td className="px-4 py-4 text-center">{item.id}</td>*/}
                        {/*                    <td className="px-3 py-4 text-center">{item.name}</td>*/}
                        {/*                    <td className="px-3 py-4 text-center">{item.size}</td>*/}
                        {/*                    <td className="px-3 py-4 text-center">{item.createdAt.slice(0,10)}</td>*/}
                        {/*                    <td className="px-3 py-4 text-center">*/}
                        {/*                        {item.isShow ?*/}
                        {/*                            <Link onClick={()=>fetchIsShow(item.id)} className="py-1 px-2 text-sm inline-block font-semibold tracking-wide border align-middle duration-500 text-center hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-emerald-600 hover:text-white rounded-md">노출</Link>*/}
                        {/*                            :*/}
                        {/*                            <Link onClick={()=>fetchIsShow(item.id)} className="py-1 px-2 text-sm inline-block font-semibold tracking-wide border align-middle duration-500 text-center text-slate-500 hover:bg-gray-500 border-gray-600 hover:border-gray-700 hover:text-white text-gray-600 rounded-md">비노출</Link>*/}
                        {/*                        }*/}

                        {/*                    </td>*/}
                        {/*                    <td className="px-3 py-4 text-center">*/}
                        {/*                        <Link onClick={()=>fetchDelete(item.id)} className="py-1 px-2 text-sm inline-block font-semibold tracking-wide border align-middle duration-500 text-center hover:bg-red-700 border-red-600 hover:border-red-700 text-red-600 hover:text-white rounded-md">삭제</Link>*/}
                        {/*                    </td>*/}
                        {/*                </tr>)*/}
                        {/*            )}*/}
                        {/*            </tbody>*/}
                        {/*        </table>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
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