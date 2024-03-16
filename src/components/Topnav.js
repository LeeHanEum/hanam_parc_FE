import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import smallLogo from '../asset/image/small_logo.png'


import * as Icon from 'react-feather'
import {AiOutlineSetting, AiOutlineUser, BiLockAlt, FaRegComment, IoMdLogOut, MdMailOutline} from '../asset/icon/vander'
import 'simplebar-react/dist/simplebar.min.css';
import {User} from "feather-icons-react";
import AuthContext from "../auth/AuthContext";
import wlogo from '../asset/image/wlogo.png'
import {IoHomeOutline} from "react-icons/io5";
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

                        <div className="inline-block">
                            <Link to="/" className="mx-6 py-1 px-3 inline-block font-semibold tracking-wide items-end border duration-500 text-base text-center bg-emerald-600 border-emerald-600 text-white rounded-md me-2"><FaHome className="inline mr-2"/>홈으로 이동</Link>
                        </div>

                    </div>

                    <ul className="list-none mb-0 space-x-1">
                        <li className="dropdown inline-block relative">
                            <button onClick={()=> setUser(!user)} className="dropdown-toggle items-center" type="button">
                                <span className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"><User className="h-4 w-4" /></span>
                                <span className="font-semibold text-[16px] ms-1 sm:inline-block hidden">{name}</span>
                            </button>
                            <div className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ${user ? '' : 'hidden'}`} >
                                <ul className="py-2 text-start">
                                    <li>
                                        <Link to="/profile" className="flex items-center font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><AiOutlineUser className="me-2"/>Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/chat" className="flex items-center font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><FaRegComment className="me-2"/>Chat</Link>
                                    </li>
                                    <li>
                                        <Link to="/email" className="flex items-center font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><MdMailOutline className="me-2"/>Email</Link>
                                    </li>
                                    <li>
                                        <Link to="/profile-setting" className="flex items-center font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><AiOutlineSetting className="me-2"/>Settings</Link>
                                    </li>
                                    <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                    <li>
                                        <Link to="/lock-screen" className="flex items-center font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><BiLockAlt className="me-2"/>Lockscreen</Link>
                                    </li>
                                    <li>
                                        <Link to="/login" className="flex items-center font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><IoMdLogOut className="me-2"/>Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}