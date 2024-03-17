import Sidebar from "../../components/Sidebar";
import React, {useEffect, useState} from "react";
import Topnav from "../../components/Topnav";
import "../../assets/css/dashboard.css";
import {fetchMembersBySize} from "../../api/Member";
import {fetchApplicationsBySize, fetchProgramsByStatusBySize} from "../../api/Program";
import {fetchBoardsBySize, fetchQnasBySize} from "../../api/Board";
import {fetchPopupsBySize} from "../../api/Popup";
import {Link} from "react-router-dom";

export default function Home() {

    const [toggle, setToggle] = useState(true);
    const [members, setMembers] = useState([]);
    const [programs, setPrograms] = useState([]);
    const [applications, setApplications] = useState([]);
    const [boards, setBoards] = useState([]);
    const [qnas, setQnas] = useState([]);
    const [popups, setPopups] = useState([]);

    useEffect (() => {
        const memberData = fetchMembersBySize(0, 5);
        memberData.then(data => {
            setMembers(data);
        });
        const programData = fetchProgramsByStatusBySize("ACCEPTING", 0, 5);
        programData.then(data => {
            setPrograms(data);
        });
        const applicationData = fetchApplicationsBySize(0, 5);
        applicationData.then(data => {
            setApplications(data);
        });
        const boardData = fetchBoardsBySize(0, 5);
        boardData.then(data => {
            setBoards(data);
        });
        const qnaData = fetchQnasBySize(0, 5);
        qnaData.then(data => {
            setQnas(data);
        });
        const popupData = fetchPopupsBySize(0, 5);
        popupData.then(data => {
            setPopups(data);
        });
    }, []);

    const applicationStatus = [
        {value : "WAITING", label : "대기중"},
        {value : "ACCEPTED", label : "승인됨"},
        {value : "CANCELED", label : "취소됨"},
    ]

    return (
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content bg-gray-50 dark:bg-slate-800 h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="mt-32 relative mx-6 ">
                        <h3 className="text-3xl mx-2 font-semibold inline">Dashboard</h3>
                        <div className="flex grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                            <div className="bg-white dark:bg-slate-900 shadow-md rounded-md p-4">
                                <h4 className="text-lg font-semibold inline-block">최근 가입 한 회원 목록</h4>
                                <Link to="/admin-member" className="text-emerald-600 hover:underline inline-block mx-3">더보기</Link>
                                <table className="w-full text-start xs:text-xs mt-5">
                                    <thead>
                                    <tr className="text-slate-500 border-gray-100 border-b">
                                        <th className="px-4 py-2 text-center ">아이디</th>
                                        <th className="px-3 py-2 text-center">이름</th>
                                        <th className="px-3 py-2 text-center ">시각</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        members.map((member, index) =>
                                            <tr key={index} className="border-gray-100 border-b">
                                                <td className="px-4 py-2 text-center"><Link to={`/admin-update-member/${member.id}`}>{member.id}</Link></td>
                                                <td className="px-3 py-2 text-center"><Link to={`/admin-update-member/${member.id}`}>{member.name}</Link></td>
                                                <td className="px-3 py-2 text-center">{member.lastLoginTime.slice(5, 10)} {member.lastLoginTime.slice(11, 16)}</td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-white dark:bg-slate-900 shadow-md rounded-md p-4">
                                <h4 className="text-lg font-semibold inline-block">접수 중인 프로그램</h4>
                                <Link to="/admin-programs" className="text-emerald-600 hover:underline inline-block mx-3">더보기</Link>
                                <table className="w-full text-start xs:text-xs mt-5">
                                    <thead>
                                    <tr className="text-slate-500 border-gray-100 border-b">
                                        <th className="px-2 py-2 text-center ">이름</th>
                                        <th className="px-3 py-2 text-center w-24">접수인원</th>
                                        <th className="px-3 py-2 text-center w-24">마감날짜</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        programs.map((program, index) =>
                                            <tr key={index} className="border-gray-100 border-b">
                                                <td className="px-2 py-2 text-center"><Link to={`/update-program/${program.id}`}>{program.name}</Link></td>
                                                <td className="px-3 py-2 text-center">{}명</td>
                                                <td className="px-3 py-2 text-center">{program.applyEnd.slice(5, 10)}</td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-white dark:bg-slate-900 shadow-md rounded-md p-4">
                                <h4 className="text-lg font-semibold inline-block">최근 프로그램 신청 목록</h4>
                                <Link to="/admin-applications" className="text-emerald-600 hover:underline inline-block mx-3">더보기</Link>
                                <table className="w-full text-start xs:text-xs mt-5">
                                    <thead>
                                    <tr className="text-slate-500 border-gray-100 border-b">
                                        <th className="px-2 py-2 text-center w-24">이름</th>
                                        <th className="px-3 py-2 text-center">프로그램명</th>
                                        <th className="px-3 py-2 text-center w-24">상태</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        applications.map((application, index) =>
                                            <tr key={index} className="border-gray-100 border-b">
                                                <td className="px-2 py-2 text-center">{application.member.name}</td>
                                                <td className="px-3 py-2 text-center">{application.program.name}</td>
                                                <td className="px-3 py-2 text-center">{
                                                    applicationStatus.map((status) => {
                                                        if (status.value === application.status) {
                                                            return status.label;
                                                        }
                                                    })

                                                }</td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="flex grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                            <div className="bg-white dark:bg-slate-900 shadow-md rounded-md p-4">
                                <h4 className="text-lg font-semibold">최근 게시글 목록</h4>
                                <table className={`w-full text-start xs:text-xs mt-5`}>
                                    <thead>
                                    <tr className="text-slate-500 border-gray-100 border-b">
                                        <th className="px-3 py-2 text-center">제목</th>
                                        <th className="px-3 py-2 text-center w-24">작성자</th>
                                        <th className="px-3 py-2 text-center w-20">날짜</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        boards.map((board, index) =>
                                            <tr key={index} className="border-gray-100 border-b">
                                                <td className="px-3 py-2 text-center"><Link to={`/update-board/${board.id}`}>{board.title}</Link></td>
                                                <td className="px-3 py-2 text-center">{board.writer.name}</td>
                                                <td className="px-3 py-2 text-center">{board.createdAt.slice(5, 10)}</td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-white dark:bg-slate-900 shadow-md rounded-md p-4">
                                <h4 className="text-lg font-semibold inline-block">최근 문의사항 목록</h4>
                                <Link to="/admin-qna" className="text-emerald-600 hover:underline inline-block mx-3">더보기</Link>
                                <table className={`w-full text-start xs:text-xs mt-5`}>
                                    <thead>
                                    <tr className="text-slate-500 border-gray-100 border-b">
                                        <th className="px-3 py-2 text-center">제목</th>
                                        <th className="px-3 py-2 text-center w-20">작성자</th>
                                        <th className="px-3 py-2 text-center w-20">날짜</th>
                                        <th className="px-3 py-2 text-center w-24">답변여부</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        qnas.map((qna, index) =>
                                            <tr key={index} className="border-gray-100 border-b">
                                                <td className="px-3 py-2 text-center"><Link to={`/admin-qna-answer/${qna.id}`}>{qna.title}</Link></td>
                                                <td className="px-3 py-2 text-center">{qna.writer.name}</td>
                                                <td className="px-3 py-2 text-center">{qna.createdAt.slice(5, 10)}</td>
                                                <td className="px-3 py-2 text-center">{qna.isAnswered ? "답변완료" : "미답변"}</td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-white dark:bg-slate-900 shadow-md rounded-md p-4">
                                <h4 className="text-lg font-semibold inline-block">노출 중인 팝업</h4>
                                <Link to="/popup-list" className="text-emerald-600 hover:underline inline-block mx-3">더보기</Link>
                                <table className={`w-full text-start xs:text-xs mt-5`}>
                                    <thead>
                                    <tr className="text-slate-500 border-gray-100 border-b">
                                        <th className="px-3 py-2 text-center">제목</th>
                                        <th className="px-3 py-2 text-center">업로드 날짜</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        popups.map((popup, index) =>
                                            <tr key={index} className="border-gray-100 border-b">
                                                <td className="px-3 py-2 text-center">{popup.name}</td>
                                                <td className="px-3 py-2 text-center">{popup.createdAt.slice(5, 10)}</td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                </main>
            </div>
        </>
    );
}