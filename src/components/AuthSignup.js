import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../asset/image/logo.png';
import join_soccer from '../asset/image/join_soccer.jpg';

export default function AuthSignup() {
    return (
        <>
            <section className="md:h-screen py-16 flex items-center bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent"></div>
                <div className="container relative">
                    <div className="flex justify-center">
                        <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                            <Link to="/"><img src={logo} className="mx-auto" alt="" /></Link>
                            <h5 className="my-6 text-xl font-semibold">회원가입</h5>
                            <form action="auth-signup-success" className="text-start">
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-semibold mr-2" htmlFor="RegisterId">아이디 :</label>
                                        <input id="RegisterId" type="text" className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="아이디를 입력하세요" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="font-semibold mr-2" htmlFor="RegisterId">패스워드 :</label>
                                        <input id="RegisterPassword" type="password" className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="패스워드를 입력하세요" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="RegisterName">이름 :</label>
                                        <input id="RegisterName" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="이름을 입력하세요" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="LoginEmail">이메일:</label>
                                        <input id="LoginEmail" type="email" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="name@example.com" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="RegisterName">전화번호 :</label>
                                        <input id="RegisterPhone" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="전화번호를 입력하세요" />
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex items-center w-full mb-0">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-green-600 focus:border-green-300 focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="AcceptT&C" />
                                            <label className="form-check-label text-slate-400" htmlFor="AcceptT&C">개인 정보 수집에 동의 합니다.</label>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        {/*버튼 누를 때 아이디 중복 확인 및 패스워드 유효성 확인 필요*/}
                                        <input type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-green-600 hover:bg-green-700 border border-green-600 hover:border-green-700 text-white rounded-md w-full" value="회원가입" />
                                    </div>

                                    <div className="text-center">
                                        <span className="text-slate-400 me-2">이미 계정이 있나요? </span> <Link to="/login" className="text-black dark:text-white font-bold inline-block">로그인</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

