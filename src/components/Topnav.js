import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import smallLogo from '../asset/image/small_logo.png'


import * as Icon from 'react-feather'
import {AiOutlineSetting, AiOutlineUser, BiLockAlt, FaRegComment, IoMdLogOut, MdMailOutline} from '../asset/icon/vander'
import 'simplebar-react/dist/simplebar.min.css';
import AuthContext from "../auth/AuthContext";
import wlogo from '../asset/image/wlogo.png'
import {FaHome} from "react-icons/fa";

export default function Topnav({setToggle, toggle}){

    let [user, setUser] = useState(false);
    const [name, setName] = useState('')

    const context = useContext(AuthContext);

    useEffect(() => {
        setName(context.user?.name)
    }, []);

    const toggleHandler = () => {
        setToggle(!toggle)
      }
    return(
        <>
            <div className="top-header">
                <div className="header-bar flex justify-between">
                    <div className="flex items-center space-x-1">
                        <Link to="/" className="xl:hidden block" >
                            <img src={smallLogo} className="md:hidden inline-block w-8" alt=""/>
                            <span className="md:block hidden">
                                <img src={wlogo} className="hidden dark:inline-block" width="30%" alt=""/>
                            </span>
                        </Link>

                        <Link id="close-sidebar" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" href="#">
                            <Icon.Menu  className="h-4 w-4" onClick={toggleHandler}/>
                        </Link>

                    </div>

                    <ul className="list-none mb-0 space-x-1">
                        <li className="dropdown inline-block relative">
                            <div className="inline-block">
                                <Link to="/" className="mx-6 py-1 px-3 inline-block font-semibold tracking-wide items-end border duration-500 text-base text-center bg-emerald-600 border-emerald-600 text-white rounded-md me-2"><FaHome className="inline mr-2"/>홈으로 이동</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}