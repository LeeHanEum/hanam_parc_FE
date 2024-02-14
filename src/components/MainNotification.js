import {board_main} from "../asset/data/data";
import {Link} from "react-router-dom";
import {LiaClipboardListSolid} from "../assets/icons/icons";
import React, {useEffect, useState} from "react";

export default function MainNotification() {

    const [announcement, setAnnouncement] = useState([]);
    const [recruitments, setRecruitments] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);

    const ANNOUNCEMENT = "ANNOUNCEMENT";

    useEffect(() => {
        // 페이지 로딩 시 API 호출
        fetchBoards();
        fetchRecruitments();
    }, []);

    const fetchBoards = async () => {
        try {
            const response = await fetch(`/board/${ANNOUNCEMENT}/page?page=${page}&size=${size}`);
            if (response.ok) {
                const data = await response.json();
                setAnnouncement(data.data.content);
                console.log(data.data.content)
            } else {
                console.error("Error fetching boards:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching boards:", error);
        }
    };

    const fetchRecruitments = async () => {
        try {
            const response = await fetch(`/board/RECRUITMENT/page?page=${page}&size=${size}`);
            if (response.ok) {
                const data = await response.json();
                setRecruitments(data.data.content);
                console.log(data.data.content)
            } else {
                console.error("Error fetching recruitments:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching recruitments:", error);
        }
    }

    return (
        <>
            <section className="relative md:py-15 py-16 mb-10" style={{backgroundColor : "#F6F6F6"}}>
                <div className="container relative">
                    <div className="grid grid-cols-1">
                        <h5 className="lg:text-3xl md:text-3xl xs:text-xl font-semibold mb-5 text-center xs:hidden">알림마당</h5>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 pt-6 gap-[30px]">
                        <div>
                            <h5 className="lg:text-2xl md:text-2xl xs:text-xl font-semibold mb-5 text-center">공지사항</h5>
                            <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                <table className="w-full text-start xs:text-sm ">
                                    <thead>
                                    <tr>
                                        <th className="px-4 py-5 text-center">제목</th>
                                        <th className="px-4 py-5 text-center">작성날짜</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {announcement.map((announcement, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-5 text-center">
                                                <Link to={`/announcement/${announcement.id}`}>{announcement.title}</Link>
                                            </td>
                                            <td className="px-4 py-5 text-center">{announcement.createdAt.slice(0,10)}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h5 className="lg:text-2xl md:text-2xl xs:text-xl font-semibold mb-5 text-center">채용공고</h5>
                            <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                <table className="w-full text-start xs:text-sm">
                                    <thead>
                                    <tr>
                                        <th className="px-4 py-5 text-center">제목</th>
                                        <th className="px-4 py-5 text-center">작성날짜</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {recruitments.map((recruitment, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-5 text-center">
                                                <Link to={`/recruitment/${recruitment.id}`}>{recruitment.title}</Link>
                                            </td>
                                            <td className="px-4 py-5 text-center">{recruitment.createdAt.slice(0,10)}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}