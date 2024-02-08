import React, {useContext, useEffect, useState} from 'react'
import logo from '../asset/image/logo.png';
import wlogo from '../asset/image/wlogo.png';
import '../assets/libs/@mdi/font/css/materialdesignicons.min.css';
import '../assets/css/tailwind.css';
import {Link, useLocation} from 'react-router-dom'
import {Search, User} from "feather-icons-react";
import AuthContext from "../auth/AuthContext";
import {IoMdLogOut} from "react-icons/io";

export default function Navbar(props) {
    let {navClass, navJustify} = props;
    let [isMenu, setisMenu] = useState(false);
    let [manu, setManu] = useState('');
    let location = useLocation();

    const [logoColor, setLogoColor] = useState(wlogo);

    const context = useContext(AuthContext);

    useEffect(() => {
        console.log(context);
    });


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
                    setLogoColor(logo);
                }
            } else {
                if (navbar !== null) {
                    navbar?.classList.remove("nav-sticky");
                    setLogoColor(wlogo);
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

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    // Function to toggle the dropdown menu visibility
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const logout = () => {
        context.logout();
        toggleDropdown();
    }


    return (
        <nav id="topnav" className={`defaultscroll ${navClass === "nav-light" ? '' : navClass === "nav-sticky" ?
            'bg-white dark:bg-slate-900' : ''}`}>
            {/*로고 이미지*/}
            <div className="px-3 md:px-12 lg:px-12 xs:px-0">
                <Link className="logo lg:px-16 md:py-16 sm:px-0 xs:logo" to="/">
                    <img src={logoColor} alt={"로고"} width="220px" className="p-4"/>
                </Link>

                {/*모바일 화면에서 토클 햄버거 버튼*/}
                <div className="menu-extras px-1">
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

                <div>
                    <ul className="buy-button list-none mb-0 lg:px-16 md:px-16 sm:px-2">
                        <li className="inline mb-0 dropdown">
                            <span className="xs:hidden"><button className="h-9 w-9 mr-2 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full text-green-600 hover:bg-green-700 hover:text-white" style={{ backgroundColor: "lightgray" }}><Search className="h-4 w-4" /></button></span>
                            {context.isAuthenticated === true ?
                                <button onClick={toggleDropdown} className="dropdown-toggle mx-1 h-9 px-2 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-emerald-600 border-emerald-600 text-white"><span className="mx-0.5">{context.user?.name}</span><User className="h-4 w-4" /></button>
                                : <Link to="/login" className="h-9 px-3 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-green-600 hover:bg-green-700 border border-green-600 hover:border-green-700 text-white">Log In</Link>
                            }
                        </li>
                    </ul>

                    <div className={`dropdown-menu absolute end-5 z-10 w-32 mt-20 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ${isDropdownVisible ? 'visible' : ''}`}>
                        <ul className="py-2 text-start">
                            <li>
                                <Link to="/my" className="flex items-center font-medium py-1 px-5 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white">마이페이지</Link>
                            </li>
                            {
                                context.user?.memberRole === 'ADMIN'  || context.user?.memberRole === 'SUPER' ?
                                    <li>
                                        <Link to="/admin-home" className="flex items-center font-medium py-1 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white">관리자페이지</Link>
                                    </li>
                                    : null
                            }
                            <li>
                                <Link onClick={() => logout()} className="flex items-center font-medium py-1 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"><span className="mr-2">Log Out</span> <IoMdLogOut className="me-2" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*메뉴 영역*/}
                <div id="navigation" style={{ display: isMenu ? 'block' : 'none'}}>
                    <ul className={`navigation-menu ${navClass} ${navJustify}`}>

                        <li className="has-submenu parent-parent-menu-item" >
                            <Link to="#!">체육회 소개</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/greetings">인사말</Link></li>
                                <li><Link to="/establishment">설립 목적 및 연혁</Link></li>
                                <li><Link to="/page-comming-soon">임원 현황</Link></li>
                                <li><Link to="/page-comming-soon">직원 현황</Link></li>
                                <li><Link to="/page-comming-soon">주요 사업</Link></li>
                                <li><Link to="/page-comming-soon">관련 규정</Link></li>
                                <li><Link to="/page-comming-soon">찾아오시는 길</Link></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#!">가맹 종목 단체</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/affiliate">가맹 단체 현황</Link></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#!">대회 정보</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/page-comming-soon">전국 장애인 체육대회</Link></li>
                                <li><Link to="/page-comming-soon">전국 장애인 동계 체육대회</Link></li>
                                <li><Link to="/page-comming-soon">전국 장애 학생 체육대회</Link></li>
                                <li><Link to="/page-comming-soon">경기도 장애인 체육대회</Link></li>
                                <li><Link to="/page-comming-soon">경기도 장애인 생활 체육대회</Link></li>
                                <li><Link to="/page-comming-soon">각종 대회 자료실</Link></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#!">생활 체육 서비스</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/page-comming-soon">찾아가는 생활 체육 서비스</Link></li>
                                <li><Link to="/page-comming-soon">생활 체육 프로그램</Link></li>
                                <li><Link to="/page-comming-soon">생활 체육 지도자 현황</Link></li>
                                <li><Link to="/page-comming-soon">지도자 배치현황</Link></li>
                                <li><Link to="/page-comming-soon">장애인 체육시설</Link></li>
                                <li><Link to="/program-list">온라인 접수</Link></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#!">알림 마당</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/announcement">공지사항</Link></li>
                                <li><Link to="/qna">문의사항</Link></li>
                                <li><Link to="/recruitment">채용공고</Link></li>
                                <li><Link to="/event-schedule">행사일정</Link></li>
                                <li><Link to="/management">경영공시</Link></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#!">통합 자료실</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/page-comming-soon">보도 자료</Link></li>
                                <li><Link to="/page-comming-soon">멀티미디어 자료실</Link></li>
                                <li><Link to="/page-comming-soon">문서 자료실</Link></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div >
        </nav >
    )
}
