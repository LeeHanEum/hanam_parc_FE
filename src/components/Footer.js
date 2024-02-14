import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../asset/image/logo.png';

export default function Footer() {
    return (
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200 xs:text-sm">
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="py-[60px] px-0">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                                <div className="lg:col-span-6 md:col-span-12">
                                    <Link to="/#" className="text-[22px] focus:outline-none">
                                        <img src={logo} alt="" style={{filter: "grayscale(100%)", width : "70%"}}/>
                                    </Link>
                                    <p className="mt-6">주소 : 경기도 하남시 아리수로 600 (망월동) 하남국민체육센터 3층</p>
                                    <p>TEL : 031-796-5213</p>
                                    <p>FAX : 031-796-5124</p>
                                    <p className="mt-6">대표자 : 이현재</p>
                                    <p>고유번호 : 126-82-97671</p>
                                    <p>개인정보관리책임자 : 이수현</p>
                                    <p className="mt-6">이메일 : hanamsad@naver.com (하남시장애인체육회)</p>

                                </div>

                                <div className="lg:col-span-6 md:col-span-4">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold text-2xl mt-7">상담 및 프로그램 문의</h5>
                                    <form>
                                        <div className="grid grid-cols-1">
                                            <button type="submit" id="submitsubscribe" name="send" className="mt-12 py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md">해당 부서 문의하기</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid md:grid-cols-2 items-center">
                        <div className="md:text-start text-center">
                            <p className="mb-0">© {new Date().getFullYear()} All Rights Reserved by HANAM PARALYMPIC COUNCIL</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
