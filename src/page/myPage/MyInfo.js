import Sidebar from "../../components/Sidebar";
import Topnav from "../../components/Topnav";
import {Link} from "react-router-dom";
import Select from "react-select";
import React, {useContext, useState} from "react";
import MySidebar from "../../components/MySidebar";
import authContext from "../../auth/AuthContext";

export default function MyInfo() {

    const [toggle, setToggle] = useState(true);

    const context = useContext(authContext);

    const genderOptions = [
        { value: '0', label: '선택하세요'},
        { value: '1', label: "남성" },
        { value: '2', label: "여성" },
    ]

    return (
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <MySidebar />
                <main className="page-content bg-gray-50 dark:bg-slate-800 h-full">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="container relative flex justify-center mt-32">
                        <div className="w-full grid md:grid-cols-12 grid-cols-1 gap-[30px] dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md p-8">
                            <div className="lg:col-span-6 md:col-span-6">

                                <h5 className="my-6 text-xl font-semibold">내 정보 수정하기</h5>

                                <div className="mb-4">
                                    <label className="font-semibold mr-2" htmlFor="id">아이디 :</label>
                                    <input id="id" type="text" className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.id} readOnly/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="name">이름 :</label>
                                    <input id="name" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.name} readOnly/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="gender">성별 :</label>
                                    {context.user && context.user.gender === null ?
                                        <Select
                                            id="gender"
                                            className="my-3"
                                            options={genderOptions}
                                            defaultValue={genderOptions[0]}
                                        />
                                        :
                                        <input id="gender" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.gender} readOnly/>
                                    }
                                </div>
                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="phone">전화번호 :</label>
                                    <input id="phone" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.phone}/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="location">주소 :</label>
                                    <Link className="mx-4 py-0.5 px-1 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center border-green-600 text-green-600 rounded-md me-2 text-sm">주소찾기</Link>
                                    <input id="location" type="address" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.address}/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="email">이메일 :</label>
                                    <input id="email" type="email" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.email}/>
                                </div>
                            </div>

                            <div className="lg:col-span-6 md:col-span-6 lg:mt-16 pt-3">
                                <div className="mb-4">
                                    <label className="font-semibold mr-2" htmlFor="guardianName">보호자 이름 :</label>
                                    <input
                                        id="guardianName"
                                        type="text"
                                        className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        placeholder="보호자 이름을 입력하세요"
                                        value={context.user?.guardianName}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="guardianPhone">보호자 연락처 :</label>
                                    <input
                                        id="guardianPhone"
                                        type="tel"
                                        className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        placeholder="보호자 전화번호를 입력하세요"
                                        value={context.user?.guardianPhone}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="memberRole">권한 :</label>
                                    <input id="memberRole" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"  value={context.user?.memberRole}/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="memberStatus">상태 :</label>
                                    <input id="memberStatus" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.memberStatus}/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="disabilityType">장애 유형 :</label>
                                    <input id="disabilityType" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.disabilityType}/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="birth">생년월일 :</label>
                                    <input id="birth" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.birth}/>
                                </div>

                                <div className="mt-12">
                                    <Link className="w-full py-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">내 정보 수정 완료하기</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}