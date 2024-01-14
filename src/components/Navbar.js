import React, {useEffect, useState} from 'react'
import logo from '../asset/image/logo.png';
import '../assets/libs/@mdi/font/css/materialdesignicons.min.css';
import '../assets/css/tailwind.css';
import {Settings, ShoppingCart} from 'feather-icons-react';
import {Link, useLocation} from 'react-router-dom'

export default function Navbar(props) {
    let { navClass, navJustify } = props;
    let [isMenu, setisMenu] = useState(false);
    let [manu , setManu] = useState('');
    let location = useLocation();

    useEffect(()=>{
        let current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
        setManu(current)

        function windowScroll() {
            const navbar = document.getElementById("topnav");
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                if (navbar !== null) {
                    navbar?.classList.add("nav-sticky");
                }
            } else {
                if (navbar !== null) {
                    navbar?.classList.remove("nav-sticky");
                }
            }
        }
        window.addEventListener("scroll", windowScroll);
        window.scrollTo(0, 0)
        return () => {
            window.removeEventListener('scroll', windowScroll);
        };

    },[location.pathname.substring(location.pathname.lastIndexOf('/') + 1)])


    const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };


    return (
        <nav id="topnav" className={`defaultscroll ${navClass === "nav-light" ? '' : navClass === "nav-sticky" ?
            'bg-white dark:bg-slate-900' : ''}`}>
            {/*로고 이미지*/}
            <div className="container relative">
                <Link className="logo" to="/">
                    <img src={logo} alt={"로고"} width="230px" className="p-4"/>
                </Link>

                {/*모바일 화면에서 토클 햄버거 버튼*/}
                <div className="menu-extras">
                    <div className="menu-item">
                        <Link to="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                {/*{*/}
                {/*    navClass !== 'nav-light' ? <ul className={`buy-button list-none space-x-1 mb-0`} >*/}
                {/*            <li className="inline mb-0">*/}
                {/*                <Link to="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><Settings className="h-4 w-4" /></Link>*/}
                {/*            </li>*/}

                {/*            <li className="inline ps-1 mb-0">*/}
                {/*                <Link to="https://1.envato.market/techwind-react" target="_blank" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><ShoppingCart className="h-4 w-4" /></Link>*/}
                {/*            </li>*/}

                {/*        </ul>*/}
                {/*        :*/}
                {/*        <ul className="buy-button list-none space-x-1 mb-0">*/}
                {/*            <li className="inline mb-0">*/}
                {/*                <Link to="#">*/}
                {/*                    <span className="login-btn-primary"><span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><Settings className="h-4 w-4" /></span></span>*/}
                {/*                    <span className="login-btn-light"><span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><Settings className="h-4 w-4" /></span></span>*/}
                {/*                </Link>*/}
                {/*            </li>*/}

                {/*            <li className="inline ps-1 mb-0">*/}
                {/*                <Link to="https://1.envato.market/techwind-react" target="_blank">*/}
                {/*                    <div className="login-btn-primary"><span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><ShoppingCart className="h-4 w-4" /></span></div>*/}
                {/*                    <div className="login-btn-light"><span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><ShoppingCart className="h-4 w-4" /></span></div>*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*}*/}

                {/*메뉴 영역*/}
                <div id="navigation" style={{ display: isMenu ? 'block' : 'none'}}>
                    <ul className={`navigation-menu ${navClass} ${navJustify}`}>

                        <li className="has-submenu parent-parent-menu-item" >
                            <Link to="#!">체육회 소개</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/about">인사말</Link></li>
                                <li><Link to="/about">설립 목적 및 연혁</Link></li>
                                <li><Link to="/about">임원 현황</Link></li>
                                <li><Link to="/about">직원 현황</Link></li>
                                <li><Link to="/about">주요 사업</Link></li>
                                <li><Link to="/about">관련 규정</Link></li>
                                <li><Link to="/about">찾아오시는 길</Link></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#!">가맹 종목 단체</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/about">가맹 단체 현황</Link></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#!">대회 정보</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/about">전국 장애인 체육대회</Link></li>
                                <li><Link to="/about">전국 장애인 동계 체육대회</Link></li>
                                <li><Link to="/about">전국 장애 학생 체육대회</Link></li>
                                <li><Link to="/about">경기도 장애인 체육대회</Link></li>
                                <li><Link to="/about">경기도 장애인 생활 체육대회</Link></li>
                                <li><Link to="/about">각종 대회 자료실</Link></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#!">생활 체육 서비스</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/about">찾아가는 생활 체육 서비스</Link></li>
                                <li><Link to="/about">생활 체육 프로그램</Link></li>
                                <li><Link to="/about">생활 체육 지도자 현황</Link></li>
                                <li><Link to="/about">지도자 배치현황</Link></li>
                                <li><Link to="/about">장애인 체육시설</Link></li>
                                <li><Link to="/about">온라인 접수</Link></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#!">알림 마당</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/about">공지사항</Link></li>
                                <li><Link to="/about">문의사항</Link></li>
                                <li><Link to="/about">채용공고</Link></li>
                                <li><Link to="/about">행사일정</Link></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#!">경영 공시</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/about">업무 추친비 현황</Link></li>
                                <li><Link to="/about">경영 공시</Link></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#!">통합 자료실</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/about">보도 자료</Link></li>
                                <li><Link to="/about">멀티미디어 자료실</Link></li>
                                <li><Link to="/about">문서 자료실</Link></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div >
        </nav >
    )
}
