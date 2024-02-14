import {course_main} from "../asset/data/data";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";

export default function MainAthletic() {

    const [programs, setPrograms] = useState([]);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);

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
                console.log(data.data.content)
            } else {
                console.error("Error fetching programs:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching programs:", error);
        }
    };

    return (
        <section className="relative md:py-24 py-16" >
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal lg:text-3xl xs:text-xl leading-normal font-semibold">생활 체육 서비스</h3>

                    <p className="text-slate-500 max-w-xl mx-auto text-lg">하남시 장애인 체육회와 함께하는 다양한 생활 체육 프로그램을 소개합니다.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] xs:w-72 m-auto">
                    {programs.map((item,index)=>{
                        console.log(item.id);
                        return(
                            <div key={index} className="blog relative rounded-md shadow dark:shadow-gray-800">
                                <Link to={`/program/${item.id}`}>
                                    <img src={item.thumbnail} alt="" className="pb-32"/>
                                    <div className="content p-6" style={{bottom : 0, position:"absolute"}}>
                                        <p className="text-slate-500 mt-3 mb-2 text-xl">{item.name}</p>
                                        {item.programStatus === "ACCEPTING" ?
                                            <span className="content px-1 py-0.5 rounded-md border-2 text-white font-bold" style={{backgroundColor : "rgb(0,128,0)", borderColor : "rgb(0,128,0)"}}>접수중</span>
                                            :
                                            <span className="content px-1 py-0.5 rounded-md border-2 text-white font-bold" style={{backgroundColor : "lightgray"}}>
                                                    {item.programStatus}
                                                </span>
                                        }
                                        <p className="text-slate-400 mt-3 text-lg">마감 : {item.applyEnd.slice(0,10)}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>

                <div className="relative mt-8 text-center">
                    <Link to="/program-list" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">생활 체육 서비스 더보기</Link>
                </div>

            </div>
        </section>
    )
}