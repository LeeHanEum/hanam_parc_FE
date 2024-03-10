import Navbar from "../../components/Navbar";
import join_soccer from "../../asset/image/join_soccer.jpg";
import React, {useEffect, useState} from "react";
import SubFooter from "../../components/SubFooter";
import {fetchGallerys} from "../../api/Api";
import {Link} from "react-router-dom";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

export default function GalleryList() {

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
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">멀티미디어 자료실</h3>
                    </div>
                </div>
            </section>

            <section className="relative md:py-12 py-8 mb-10">
                <div className="container relative">

                    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-[30px] mt-16">
                        {gallerys.map((item,index)=>{
                            console.log(item);
                            return(
                                <div key={index} className="blog relative rounded-md shadow dark:shadow-gray-800">
                                    <Link to={`/gallery/${item.id}`}>
                                        <img src={item.thumbnail} alt="" className="pb-32"/>
                                        <div className="content p-6" style={{bottom : 0, position:"absolute"}}>
                                            <h4 className="text-slate-900 text-lg">{item.title}</h4>
                                            <p className="text-slate-500 text-lg">{item.createdAt.slice(0,10)}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
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

            <SubFooter/>

        </>
    )
}