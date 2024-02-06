import React, {useContext} from 'react'
import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Select from "react-select";
import {Link} from "react-router-dom";
import AuthContext from "../../../auth/AuthContext";

export default function ReceiptForm() {

    const context = useContext(AuthContext);

    const disabilityTypeOptions = [
        { value: '0', label: '선택하세요'},
        { value: '1', label: '시각장애' },
        { value: '2', label: '청각장애' },
        { value: '3', label: '언어장애' },
        { value: '4', label: '지체장애' },
        { value: '5', label: '지적장애' },
        { value: '6', label: '정신장애' },
        { value: '7', label: '복합장애' },
        { value: '8', label: '기타' },
        { value: '9', label: '해당없음'}
    ]

    const genderOptions = [
        { value: '0', label: '선택하세요'},
        { value: '1', label: '남성' },
        { value: '2', label: '여성' },
    ]

    return (
        <>
            <Navbar />
            <section className="relative md:pb-24 md:pt-40 pb-16 pt-36">
                <div className="container relative flex justify-center">
                    <div className="lg:max-w-768 grid md:grid-cols-12 grid-cols-1 gap-[30px] dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md p-8">
                        <div className="lg:col-span-6 md:col-span-6">

                            <h5 className="my-6 text-xl font-semibold">생활 체육 프로그램 온라인 신청서</h5>

                            <div className="mb-4">
                                <label className="font-semibold mr-2" htmlFor="name">이름 :</label>
                                <input id="name" type="text" className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.name} readOnly/>
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold" htmlFor="birth">생년월일 :</label>
                                <input id="birth" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.birth} readOnly />
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold" htmlFor="phone">전화번호 :</label>
                                <input id="phone" type="tel" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.phone} />
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold" htmlFor="email">이메일:</label>
                                <input id="email" type="email" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.email} />
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold mr-2 block" htmlFor="gender">성별 :</label>
                                <Select id="gender" className="my-3" options={genderOptions} defaultValue={genderOptions[0]}/>
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold block" htmlFor="disabilityType">장애유형 :</label>
                                <Select id="disabilityType" options={disabilityTypeOptions} className="my-3" defaultValue={disabilityTypeOptions[0]}/>
                            </div>
                        </div>

                        <div className="lg:col-span-6 md:col-span-6 lg:mt-16">
                            <div className="mb-4 mt-3">
                                <label className="font-semibold mr-2" htmlFor="programName">프로그램명 :</label>
                                <input id="programName" type="text" className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value="하남시 장애인 조정 대회" readOnly/>
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold mr-2" htmlFor="guardianName">보호자 이름 :</label>
                                <input id="guardianName" type="text" className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="보호자 이름을 입력하세요" />
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold" htmlFor="guardianPhone">보호자 연락처 :</label>
                                <input id="guardianPhone" type="tel" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="보호자 전화번호를 입력하세요" />
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold" htmlFor="address">주소 :</label>
                                <input id="address" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="주소를 입력하세요" />
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold" htmlFor="etc">기타사항 :</label>
                                <input id="etc" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="기타사항을 입력하세요" />
                            </div>

                            <div className="mt-12">
                                <Link to="/#" className="w-full py-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">신청서 전송하기</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SubFooter/>
        </>
    )
}
