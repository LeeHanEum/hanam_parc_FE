import React from 'react'
import { Link } from 'react-router-dom';

import Navbar from '../../component/Navbar/navbar'

import JobFooter from '../../component/Footer/jobFooter';
import MobileApp from '../../component/mobileApp';

import {MdKeyboardArrowRight, RiMapPinLine} from '../../assets/icons/icons'

export default function PageJobApply() {
    return (
        <>
            <Navbar navClass="nav-light" />
            <section className="relative table w-full py-20 lg:py-30 bg-[url('../../assets/images/marathon.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="mb-4 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">하남시 장애인 야구 교실 참가 신청서</h3>

                        <ul className="list-none">
                            {/*<li className="inline-flex items-center text-slate-400 me-3"><RiMapPinLine className="text-white h6 me-2" width={18}/> London, UK - <span className="text-white">Full Time</span></li>*/}
                        </ul>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex items-center space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index">프로그램 신청</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index-job">생활 체육 교실</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">야구 교실</li>
                    </ul>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
                        <div className="lg:col-start-2 lg:col-span-10">
                            <div className="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 p-6">
                                <form>
                                    <div className="grid lg:grid-cols-12 gap-6">
                                        <div className="lg:col-span-6">
                                            <div className="text-start">
                                                <label htmlFor="name" className="font-semibold">이름 :</label>
                                                <input name="name" id="name" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="이름 :" />
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6">
                                            <div className="text-start">
                                                <label htmlFor="name" className="font-semibold">성별 :</label>
                                                <select id="typejob" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                                    <option>남자</option>
                                                    <option>여자</option>
                                                    <option>Remote</option>
                                                    <option>In Office</option>
                                                </select>
                                            </div>
                                        </div>


                                        <div className="lg:col-span-6">
                                            <div className="text-start">
                                                <label htmlFor="email" className="font-semibold">생년월일 :</label>
                                                <input name="email" id="email" type="email" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="생년월일 :" />
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6">
                                            <div className="text-start">
                                                <label htmlFor="subject" className="font-semibold">전화번호 :</label>
                                                <input name="number" id="phonenumber" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="전화번호 :" />
                                            </div>
                                        </div>

                                        <div className="lg:col-span-10">
                                            <div className="text-start">
                                                <label htmlFor="subject" className="font-semibold">주민 등록 주소 :</label>
                                                <input name="subject" id="subject" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="주민 등록 주소 (명확히 기재) :" />
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6">
                                            <label htmlFor="typejob" className="font-semibold">장애 유형 :</label>
                                            <select id="typejob" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                                <option>선택 하세요</option>
                                                <option>Full Time</option>
                                                <option>Half Time</option>
                                                <option>Remote</option>
                                                <option>In Office</option>
                                            </select>
                                        </div>

                                        <div className="lg:col-span-12">
                                            <div className="text-start">
                                                <label htmlFor="comments" className="font-semibold">특이 사항 :</label>
                                                <textarea name="comments" id="comments" className="form-input mt-3 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="200자 이내로 입력 :"></textarea>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-12">
                                            <label className="font-semibold" htmlFor="resumefile">관련 문서 첨부 (선택) :</label>
                                            <input className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" id="resumefile" type="file" />
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4">제출</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
             <MobileApp/>
            </section>
            <JobFooter/>
        </>
    )
}
