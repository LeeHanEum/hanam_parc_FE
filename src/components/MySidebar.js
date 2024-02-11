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

export default function MySidebar(){
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
                        <li className={`text-xl px-1 my-5 ${["" ,"index","index-crypto",].includes(manu)? "active" : ""}`}>
                            <Link to="#" ><AiOutlineLineChart className=" me-3 icon "/>대시보드</Link>
                        </li>

                        <li className={`text-xl my-5 ${["profile","profile-billing","profile-payment","profile-social","profile-notification","profile-setting"].includes(manu)? "active" : ""}`}>
                            <Link to="#" ><AiOutlineUser className=" me-3 icon "/>내 정보 관리</Link>
                        </li>

                        <li className={`text-xl my-5  ${["chat","email","calendar"].includes(manu)? "active" : ""}`}>
                            <Link to="#" ><AiOutlineAppstore className=" me-3 icon "/>나의 신청 내역</Link>
                        </li>

                        <li className={`text-xl my-5 ${["index-dark","index-rtl","index-dark-rtl","index-sidebar-light","index-sidebar-colored"].includes(manu)? "active" : ""}`}>
                            <Link to="#" ><PiBrowsersBold className=" me-3 icon "/>나의 QnA 문의</Link>
                        </li>

                    </ul>
                </SimpleBarReact>
            </div>
        </nav>

    )
}