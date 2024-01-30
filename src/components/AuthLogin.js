import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../asset/image/logo.png';
import join_soccer from '../asset/image/join_soccer.jpg';

export default function AuthLogin() {
    return (
        <>
            <section className="md:h-screen py-16 flex items-center bg-no-repeat bg-center bg-cover"
            style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent"></div>
                <div className="container relative">
                    <div className="flex justify-center">
                        <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                            <Link to="/"><img src={logo} className="mx-auto" alt="" /></Link>
                            <h5 className="my-6 text-xl font-semibold">로그인</h5>
                            <form className="text-start">
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="LoginEmail">아이디:</label>
                                        <input id="LoginEmail" type="email" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="아이디를 입력하세요 :" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="LoginPassword">패스워드:</label>
                                        <input id="LoginPassword" type="password" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="패스워드를 입력하세요 :" />
                                    </div>

                                    <div className="flex justify-between mb-4">
                                        <p className="text-slate-400 mb-0"><Link to="/re-password" className="text-slate-400">비밀번호 찾기</Link></p>
                                    </div>

                                    <div className="mb-4">
                                        <input type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-green-600 hover:bg-green-700 border border-green-600 hover:border-green-700 text-white rounded-md w-full" value="로그인" />
                                    </div>

                                    <div className="text-center">
                                        <span className="text-slate-400 me-2">계정이 없으신가요?</span> <Link to="/signup" className="text-black dark:text-white font-bold inline-block">회원가입</Link>
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
