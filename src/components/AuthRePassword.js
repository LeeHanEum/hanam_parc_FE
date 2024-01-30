import {Link} from "react-router-dom";
import logo from '../asset/image/logo.png';
import React from "react";
import join_soccer from "../asset/image/join_soccer.jpg";

export default function AuthRePassword() {
    return (
        <>
            <section className="md:h-screen py-16 flex items-center bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent"></div>
                <div className="container relative">
                    <div className="flex justify-center">
                        <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                            <Link to="/"><img src={logo} className="mx-auto" alt="" /></Link>
                            <h5 className="mt-8 my-3 text-xl font-semibold">패스워드 재설정</h5>
                            <div className="grid grid-cols-1">
                                <p className="text-slate-400 mb-6">아이디와 이메일 주소를 입력해주세요.<br />새 비밀번호를 생성할 수 있는 링크를 받게 됩니다.</p>
                                <form className="text-start">
                                    <div className="grid grid-cols-1">

                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="LoginId">아이디 :</label>
                                            <input id="CheckId" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="아이디를 입력해주세요" />
                                        </div>

                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="LoginEmail">이메일 :</label>
                                            <input id="LoginEmail" type="email" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="name@example.com" />
                                        </div>

                                        <div className="mb-4">
                                            <input type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-green-600 hover:bg-green-700 border border-green-600 hover:border-green-700 text-white rounded-md w-full" value="링크 받기" />
                                        </div>

                                        <div className="text-center">
                                            <span className="text-slate-400 me-2">로그인 하시겠습니까? </span><Link to="/login" className="text-black dark:text-white font-bold inline-block">로그인</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}