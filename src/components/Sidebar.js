import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

import logo from "../asset/image/wlogo.png";

import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

import {
    AiOutlineAppstore,
    AiOutlineCamera,
    AiOutlineLineChart,
    AiOutlineUser,
    PiBrowsersBold
} from '../asset/icon/vander'

import "../assets/css/dashboard.css";

export default function Sidebar(){
    const [manu , setManu] = useState('');
    const [subManu , setSubManu] = useState('');
    const location = useLocation();

    useEffect(()=>{
        var current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
        setManu(current)
        setSubManu(current)
    },[location.pathname.substring(location.pathname.lastIndexOf('/') + 1)])
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);

    return(
        <nav className="sidebar-wrapper sidebar-dark">
            <div className=" sidebar-content">
                <div className="sidebar-brand">
                    <Link to="/"><img src={logo} width="80%" alt="" className="m-auto align-middle"/></Link>
                </div>
            <SimpleBarReact style={{height:"calc(100% - 70px)"}}> 
                <ul className="sidebar-menu border-t border-white/10">
                    <li className={`px-1 my-2 ${["" ,"index","index-crypto",].includes(manu)? "active" : ""}`}>
                        <Link to="#" onClick={(e)=>{setSubManu(subManu === "dashboard-item" ? "" : "dashboard-item")}}><AiOutlineLineChart className=" me-3 icon "/>대시보드</Link>
                    </li>

                    <li className={`my-2 sidebar-dropdown ${["profile","profile-billing","profile-payment","profile-social","profile-notification","profile-setting"].includes(manu)? "active" : ""}`}>
                        <Link to="#" onClick={(e)=>{setSubManu(subManu === "profile-item" ? "" : "profile-item")}}><AiOutlineUser className=" me-3 icon "/>회원 관리</Link>
                        <div className={`sidebar-submenu ${["profile","profile-billing","profile-payment","profile-social","profile-notification","profile-setting","profile-item"].includes(subManu)? "block" : ""}`}>
                            <ul>
                                <li><Link to='/member-list'>회원 목록</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li className={`my-2 sidebar-dropdown ${["chat","email","calendar"].includes(manu)? "active" : ""}`}>
                        <Link to="#" onClick={(e)=>{setSubManu(subManu === "app-item" ? "" : "app-item")}}><AiOutlineAppstore className=" me-3 icon "/>온라인 접수 관리</Link>
                        <div className={`sidebar-submenu ${["chat","email","calendar","app-item"].includes(subManu)? "block" : ""}`}>
                            <ul>
                                <li><Link to='/program-form'>프로그램 추가</Link></li>
                                <li><Link to='/program-list'>프로그램 목록</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li className={`my-2 sidebar-dropdown ${["index-dark","index-rtl","index-dark-rtl","index-sidebar-light","index-sidebar-colored"].includes(manu)? "active" : ""}`}>
                        <Link to="#"  onClick={(e)=>{setSubManu(subManu === "index-item" ? "" : "index-item")}}><PiBrowsersBold className=" me-3 icon "/>알림마당 관리</Link>
                        <div className={`sidebar-submenu ${["index-dark","index-rtl","index-dark-rtl","index-sidebar-light","index-sidebar-colored","index-item"].includes(subManu)? "block" : ""}`}>
                            <ul>
                                <li><Link to='/'>공지사항</Link></li>
                                <li><Link to='/'>문의사항</Link></li>
                                <li><Link to='/'>채용공고</Link></li>
                                <li><Link to='/'>행사일정</Link></li>
                                <li><Link to='/'>경영공시</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li className={`my-2 sidebar-dropdown ${["gallery-one","gallery-two"].includes(manu)? "active" : ""}`}>
                        <Link to="#" onClick={(e)=>{setSubManu(subManu === "gallery-item" ? "" : "gallery-item")}}><AiOutlineCamera className="me-3 icon"/>자료실 관리</Link>
                        <div className={`sidebar-submenu ${["gallery-one","gallery-two","gallery-item"].includes(subManu)? "block" : ""}`}>
                            <ul>
                                <li><Link to='/'>보도자료</Link></li>
                                <li><Link to='/'>멀티미디어 자료실</Link></li>
                                <li><Link to='/'>문서 자료실</Link></li>
                            </ul>
                        </div>
                    </li>


                </ul>
            </SimpleBarReact>
            </div>
        </nav>
        
    )
}