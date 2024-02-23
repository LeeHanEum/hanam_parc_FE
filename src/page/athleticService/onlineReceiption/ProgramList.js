import React, {useEffect, useState} from 'react'
import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import join_soccer from "../../../asset/image/join_soccer.jpg";
import {Link} from "react-router-dom";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

export default function ProgramList() {

    const [programs, setPrograms] = useState([]);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(9);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        // 페이지 로딩 시 API 호출
        fetchBoards();
    }, []);

    const fetchBoards = async () => {
        try {
            const response = await fetch(`/program/page?page=${page}&size=${size}`);
            if (response.ok) {
                const data = await response.json();
                setPrograms(data.data.content);
                setTotalPages(data.data.totalPages);
                console.log(data.data.content)
            } else {
                console.error("Error fetching programs:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching programs:", error);
        }
    };

    return (
        <>
            <Navbar/>
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">온라인 접수 프로그램</h3>
                    </div>
                </div>
            </section>

            {/*본문 내용 시작*/}
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        {programs.map((item,index)=>{
                            console.log(item.id);
                            return(
                                <div key={index} className="blog relative rounded-md shadow dark:shadow-gray-800">
                                    <Link to={`/program/${item.id}`}>
                                        <img src={item.thumbnail} alt="" className="pb-32"/>
                                        <div className="content p-6" style={{bottom : 0, position:"absolute"}}>
                                            <p className="text-slate-900 mt-3 text-xl inline-block">{item.name}</p>
                                            <p>
                                                {   item.programStatus === "ACCEPTING" ?
                                                        <span className="content my-1 px-1 py-0.5 rounded-md border-2 text-white font-bold" style={{backgroundColor: "rgb(0,128,0)", borderColor: "rgb(0,128,0)"}}>접수중</span>
                                                    : item.programStatus === "COMPLETED" ?
                                                        <span className="content my-1 px-1 py-0.5 rounded-md border-2 text-white font-bold" style={{backgroundColor: "rgb(105,105,105)", borderColor: "rgb(105,105,105)"}}>접수마감</span>
                                                        :
                                                        <span className="content my-1 px-1 py-0.5 rounded-md border-2 text-white font-bold" style={{backgroundColor: "lightgray"}}>
                                                        {item.programStatus}
                                                        </span>
                                                }
                                            </p>
                                            <p className="text-slate-900 mt-3 text-lg">접수 마감 : {item.applyEnd}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

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

            <SubFooter/>
        </>
    )
}
