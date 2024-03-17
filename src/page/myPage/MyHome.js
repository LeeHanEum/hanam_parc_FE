import React, {useEffect, useState} from "react";
import Topnav from "../../components/Topnav";
import "../../assets/css/dashboard.css";
import MySidebar from "../../components/MySidebar";
import {Link} from "react-router-dom";
import {fetchCurrentMember} from "../../api/Member";
import {User} from "feather-icons-react";
import {fetchMyApplicationsBySize} from "../../api/Program";
import {fechMyQnasBySize} from "../../api/Board";

export default function MyHome() {

    const [toggle, setToggle] = useState(true);
    const [user, setUser] = useState({});
    const [applications, setApplications] = useState([]);
    const [qnas, setQnas] = useState([]);

    useEffect(() => {
        const userData = fetchCurrentMember();
        userData.then(data => {
            setUser(data);
        });
        const applicationData = fetchMyApplicationsBySize(0, 5);
        applicationData.then(data => {
            setApplications(data);
        });
        // const qnaData = fechMyQnasBySize(0, 5);
        // qnaData.then(data => {
        //     setQnas(data);
        //     console.log(data);
        // });
    }, []);

    const applicationStatus = [
        {value : "WAITING", label : "대기중"},
        {value : "ACCEPTED", label : "승인됨"},
        {value : "CANCELED", label : "취소됨"},
    ]

    return (
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <MySidebar />
                <main className="page-content bg-gray-50 dark:bg-slate-800 h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="mt-32 relative mx-6 ">
                        <h3 className="text-3xl mx-2 font-semibold inline">Dashboard</h3>
                        <div className="flex grid grid-cols-1 mt-4">
                            <div className="bg-white shadow-md rounded-md p-4">
                                <span className="h-32 w-32 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full">
                                    <User className="h-20 w-20" />
                                </span>
                                <div className="inline-block mx-6 align-middle">
                                    <h4 className="text-xl font-semibold inline-block"><span className="text-emerald-600">{user.name}</span>님 반갑습니다.</h4>
                                    {/*오늘 일자 - 아이디 생성 일자*/}
                                    <h4 className="text-xl font-semibold mt-2">
                                        하남시장애인체육회와 함께한지 <span className="text-emerald-600">D+{Math.floor((new Date() - new Date(user.createdAt)) / (1000 * 60 * 60 * 24))}일</span> 되었습니다.
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="flex grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                            <div className="bg-white dark:bg-slate-900 shadow-md rounded-md p-4">
                                <h4 className="text-lg font-semibold inline-block">나의 프로필</h4>
                                <table className="table-auto w-full mt-4 xs:text-sm">
                                    <tbody>
                                    <tr>
                                        <td className="px-4 py-2">이름</td>
                                        <td className="px-4 py-2">{user.name}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">이메일</td>
                                        <td className="px-4 py-2">{user.email}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">전화번호</td>
                                        <td className="px-4 py-2">{user.phone}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">주소</td>
                                        <td className="px-4 py-2">{user.address}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">성별</td>
                                        <td className="px-4 py-2">
                                            {
                                                user.gender === "MEN" ? "남성" : user.gender === "WOMEN" ? "여성" : "미지정"
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">생년월일</td>
                                        <td className="px-4 py-2">{user.birth}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="xs:text-sm">
                                        <Link to="/profile" className="inline-block mt-4 py-2 px-4 bg-emerald-600 text-white rounded-md font-semibold">개인정보 수정</Link>
                                        <Link to="/password" className="inline-block mt-4 mx-3 py-2 px-4 bg-emerald-600 text-white rounded-md font-semibold">비밀번호 관리</Link>
                                        <Link to="/withdraw" className="inline-block mt-4 py-2 px-4 bg-red-600 text-white rounded-md font-semibold">회원탈퇴</Link>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 shadow-md rounded-md p-4">
                                <h4 className="text-lg font-semibold inline-block">나의 프로그램 신청 목록</h4>
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

                            <div className="bg-white dark:bg-slate-900 shadow-md rounded-md p-4">
                                <h4 className="text-lg font-semibold inline-block">나의 QnA 문의</h4>
                                <table className="w-full text-start xs:text-xs mt-5">
                                <thead>
                                <tr className="text-slate-500 border-gray-100 border-b">
                                    <th className="px-2 py-2 text-center w-24">이름</th>
                                    <th className="px-3 py-2 text-center">제목</th>
                                    <th className="px-3 py-2 text-center w-24">상태</th>
                                </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}