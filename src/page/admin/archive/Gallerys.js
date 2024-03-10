import Sidebar from "../../../components/Sidebar";
import Topnav from "../../../components/Topnav";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {deleteGallery, fetchGallerys} from "../../../api/Api";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import {FaPlus} from "react-icons/fa";

export default function Gallerys() {

    const [toggle, setToggle] = useState(true);

    const [gallerys, setGallerys] = useState([]);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(9);
    const [totalPages, setTotalPages] = useState(1);


    useEffect(() => {
        // 페이지 로딩 시 API 호출
        fetchGallerys(page, size)
            .then(data => setGallerys(data))
            .catch(error => console.error('Error fetching gallerys:', error));
    },[page, size]);

    return (
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <Sidebar />
                <main className="page-content bg-gray-50 dark:bg-slate-800 h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="mt-32 relative mx-6">
                        <h3 className="text-3xl mx-2 font-semibold flex">멀티미디어 자료실</h3>

                        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-[30px] mt-16 px-3">
                            {gallerys.map((item,index)=>{
                                return(
                                    <div key={index} className="blog relative rounded-md shadow dark:shadow-gray-800">
                                        <Link to={`/gallery/${item.id}`}>
                                            <img src={item.thumbnail} alt="" className="pb-32"/>
                                            <div className="content p-6" style={{bottom : 0, position:"absolute"}}>
                                                <h4 className="text-slate-900 text-lg">{item.title}</h4>
                                                <p className="text-slate-500 text-lg">{item.createdAt.slice(0,10)}</p>
                                                <p className="mt-2">
                                                    <Link className="py-1 px-2 text-sm inline-block font-semibold tracking-wide border align-middle duration-500 text-center hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-emerald-600 hover:text-white rounded-md">수정</Link>
                                                    <Link onClick={() => deleteGallery(item.id)
                                                            .then(() => fetchGallerys(page,size)
                                                            .then(data => setGallerys(data)))}
                                                          className="mx-2 py-1 px-2 text-sm inline-block font-semibold tracking-wide border align-middle duration-500 text-center hover:bg-red-700 border-red-600 hover:border-red-700 text-red-600 hover:text-white rounded-md">삭제</Link>
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}

                            <div className="blog relative rounded-md shadow group">
                                <Link to="/new-gallery">
                                    <div className="rounded-md h-60 w-full h-full flex justify-center items-center cursor-pointer">
                                        <FaPlus className="text-6xl text-slate-400 group-hover:text-emerald-600"/>
                                    </div>
                                </Link>
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