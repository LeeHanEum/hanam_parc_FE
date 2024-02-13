import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import smallLogo from '../asset/image/small_logo.png'


import * as Icon from 'react-feather'
import {
    AiOutlineSetting,
    AiOutlineUser,
    BiLockAlt,
    FaRegComment,
    IoMdLogOut,
    LuSearch,
    MdMailOutline
} from '../asset/icon/vander'
import 'simplebar-react/dist/simplebar.min.css';
import {User} from "feather-icons-react";
import AuthContext from "../auth/AuthContext";
import logo from '../asset/image/logo.png'
import wlogo from '../asset/image/wlogo.png'

export default function Topnav({setToggle, toggle}){
    let [country, setCountry] = useState(false)
    let [cart, setCart] = useState(false)
    let [notification, setNotification] = useState(false)
    let [user, setUser] = useState(false)

    const context = useContext(AuthContext);

    useEffect(()=>{
        let countries = () =>{
            setCountry(false)
        }
        let shopingCart = () => {
            setCart(false)
        }
        let notificationToggle = () => {
            setNotification(false)
        }
        let userData = () => {
            setUser(false)
        }
        document.addEventListener('mousedown',countries)
        document.addEventListener('mousedown',shopingCart)
        document.addEventListener('mousedown',notificationToggle)
        document.addEventListener('mousedown',userData)

        return()=>{
            document.removeEventListener('mousedown',countries)
            document.removeEventListener('mousedown',shopingCart)
            document.removeEventListener('mousedown',notificationToggle)
            document.removeEventListener('mousedown',userData)
        }

    },[])
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
                                {/*<img src={logo} className="inline-block dark:hidden" alt="" width="30%"/>*/}
                                <img src={wlogo} className="hidden dark:inline-block" width="30%" alt=""/>
                            </span>
                        </Link>

                        <Link id="close-sidebar" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" href="#">
                            <Icon.Menu  className="h-4 w-4" onClick={toggleHandler}/>
                        </Link>
        
                        <div className="ps-1.5">
                            <div className="form-icon relative sm:block hidden">
                                <LuSearch className="absolute top-1/2 -translate-y-1/2 start-3"/>
                                <input type="text" className="form-input w-56 ps-9 py-2 px-3 h-8 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 bg-white" name="s" id="searchItem" placeholder="Search..."/>
                            </div>
                        </div>
                    </div>

                    <ul className="list-none mb-0 space-x-1">
                        <li className="dropdown inline-block relative">
                            <button onClick={()=> setUser(!user)} className="dropdown-toggle items-center" type="button">
                                <span className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"><User className="h-4 w-4" /></span>
                                <span className="font-semibold text-[16px] ms-1 sm:inline-block hidden">{context.user?.name}</span>
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