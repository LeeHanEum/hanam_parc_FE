import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";

import logoDark from '../assets/images/logo-dark.png'
import logoLight from '../assets/images/logo-light.png'
import smallLogo from '../asset/image/small_logo.png'
import usaFlag  from '../assets/images/flags/usa.png'
import germanyFlag from '../assets/images/flags/germany.png'
import italyFlag from '../assets/images/flags/italy.png'
import russiaFlag from '../assets/images/flags/russia.png'
import spainFlag from '../assets/images/flags/spain.png'
import shopItem1 from '../assets/images/shop/items/s1.jpg'
import shopItem2 from '../assets/images/shop/items/s2.jpg'
import shopItem3 from '../assets/images/shop/items/s3.jpg'
import client1 from '../assets/images/client/01.jpg'
import client2 from '../assets/images/client/02.jpg'
import client5 from '../assets/images/client/05.jpg'
 

import * as Icon from 'react-feather'
import {LuSearch, AiOutlineUser, FaRegComment, MdMailOutline, AiOutlineSetting, BiLockAlt, IoMdLogOut} from '../asset/icon/vander'

import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

export default function Topnav({setToggle, toggle}){
    let [country, setCountry] = useState(false)
    let [cart, setCart] = useState(false)
    let [notification, setNotification] = useState(false)
    let [user, setUser] = useState(false)

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
                        <Link to="/" className="xl:hidden block me-2">
                            <img src={smallLogo} className="md:hidden inline-block w-8" alt=""/>
                            <span className="md:block hidden">
                                <img src={logoDark} className="inline-block dark:hidden" alt=""/>
                                <img src={logoLight} className="hidden dark:inline-block" alt=""/>
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
                            <button onClick={() => setCountry(!country)} className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" type="button">
                                <img src={usaFlag} alt=""/>
                            </button>
                            <div className={`dropdown-menu absolute start-0 m-0 mt-4 z-10 w-36 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ${country ? "" : 'hidden'}`}>
                                <ul className="list-none py-2 text-start">
                                    <li className="my-1">
                                        <Link to="" className="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><img src={germanyFlag} className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-700" alt=""/> German</Link>
                                    </li>
                                    <li className="my-1">
                                        <Link to="" className="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><img src={italyFlag} className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-700" alt=""/> Italian</Link>
                                    </li>
                                    <li className="my-1">
                                        <Link to="" className="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><img src={russiaFlag} className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-700" alt=""/> Russian</Link>
                                    </li>
                                    <li className="my-1">
                                        <Link to="" className="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><img src={spainFlag} className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-700" alt=""/> Spanish</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="dropdown inline-block relative">
                            <button onClick = {()=> setCart(!cart)} className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" type="button">
                                <Icon.ShoppingCart className="h-4 w-4"/>
                                <span className="absolute top-0 end-0 flex items-center justify-center bg-emerald-600 text-white text-[10px] font-bold rounded-full w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-emerald-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                            </button>
                        
                            <div className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-60 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-700  ${cart ? "" : 'hidden'}`}>
                                <ul className="py-3 text-start">
                                    <li>
                                        <Link to="#" className="flex items-center justify-between py-1.5 px-4">
                                            <span className="flex items-center">
                                                <img src={shopItem1} className="rounded shadow dark:shadow-gray-700 w-9" alt=""/>
                                                <span className="ms-3">
                                                    <span className="block font-semibold">T-shirt (M)</span>
                                                    <span className="block text-sm text-slate-400">$320 X 2</span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$640</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="#" className="flex items-center justify-between py-1.5 px-4">
                                            <span className="flex items-center">
                                                <img src={shopItem2} className="rounded shadow dark:shadow-gray-700 w-9" alt=""/>
                                                <span className="ms-3">
                                                    <span className="block font-semibold">Bag</span>
                                                    <span className="block text-sm text-slate-400">$50 X 5</span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$250</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="#" className="flex items-center justify-between py-1.5 px-4">
                                            <span className="flex items-center">
                                                <img src={shopItem3} className="rounded shadow dark:shadow-gray-700 w-9" alt=""/>
                                                <span className="ms-3">
                                                    <span className="block font-semibold">Watch (Men)</span>
                                                    <span className="block text-sm text-slate-400">$800 X 1</span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$800</span>
                                        </Link>
                                    </li>

                                    <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>

                                    <li className="flex items-center justify-between py-1.5 px-4">
                                        <h6 className="font-semibold mb-0">Total($):</h6>
                                        <h6 className="font-semibold mb-0">$1690</h6>
                                    </li>

                                    <li className="py-1.5 px-4 space-x-1">
                                        <Link to="#" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white">View Cart</Link>
                                        <Link to="#" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white">Checkout</Link>
                                        <p className="text-sm text-slate-400 mt-1">*T&C Apply</p>
                                    </li>
            
                                </ul>
                            </div>
                        </li>
                    

                        <li className="dropdown inline-block relative">
                            <button onClick={()=>setNotification(!notification)} className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" type="button">
                                <Icon.Bell className="h-4 w-4"/>
                                <span className="absolute top-0 end-0 flex items-center justify-center bg-red-600 text-white text-[10px] font-bold rounded-full w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-red-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                            </button>
                        
                            <div className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ${notification ? '' : 'hidden'}`} >
                                <span className="px-4 py-4 flex justify-between">
                                    <span className="font-semibold">Notifications</span>
                                    <span className="flex items-center justify-center bg-red-600/20 text-red-600 text-[10px] font-bold rounded-full w-5 max-h-5 ms-1">3</span>
                                </span>
                                <SimpleBarReact className="h-64">
                                    <ul className="py-2 text-start h-64 border-t border-gray-100 dark:border-gray-800" >
                                        <li>
                                            <Link to="#!" className="block font-medium py-1.5 px-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-md shadow shadow-indigo-600/10 dark:shadow-gray-700 bg-indigo-600/10 dark:bg-slate-800 text-indigo-600 dark:text-white flex items-center justify-center">
                                                        <Icon.ShoppingCart className="h-4 w-4"/>
                                                    </div>
                                                    <div className="ms-2">
                                                        <span className="text-[15px] font-semibold block">Order Complete</span>
                                                        <small className="text-slate-400">15 min ago</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="block font-medium py-1.5 px-4">
                                                <div className="flex items-center">
                                                    <img src={client1} className="h-10 w-10 rounded-md shadow dark:shadow-gray-700" alt=""/>
                                                    <div className="ms-2">
                                                        <span className="text-[15px] font-semibold block"><span className="font-bold">Message</span> from Luis</span>
                                                        <small className="text-slate-400">1 hour ago</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="block font-medium py-1.5 px-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-md shadow shadow-indigo-600/10 dark:shadow-gray-700 bg-indigo-600/10 dark:bg-slate-800 text-indigo-600 dark:text-white flex items-center justify-center">
                                                        <Icon.DollarSign className="h-4 w-4"/>
                                                    </div>
                                                    <div className="ms-2">
                                                        <span className="text-[15px] font-semibold block"><span className="font-bold">One Refund Request</span></span>
                                                        <small className="text-slate-400">2 hour ago</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="block font-medium py-1.5 px-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-md shadow shadow-indigo-600/10 dark:shadow-gray-700 bg-indigo-600/10 dark:bg-slate-800 text-indigo-600 dark:text-white flex items-center justify-center">
                                                        <Icon.Truck className="h-4 w-4"/>
                                                    </div>
                                                    <div className="ms-2">
                                                        <span className="text-[15px] font-semibold block">Deliverd your Order</span>
                                                        <small className="text-slate-400">Yesterday</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="block font-medium py-1.5 px-4">
                                                <div className="flex items-center">
                                                    <img src={client2} className="h-10 w-10 rounded-md shadow dark:shadow-gray-700" alt=""/>
                                                    <div className="ms-2">
                                                        <span className="text-[15px] font-semibold block"><span className="font-bold">Cally</span> started following you</span>
                                                        <small className="text-slate-400">2 days ago</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </SimpleBarReact>
                            </div>
                        </li>
        
                        
                        <li className="dropdown inline-block relative">
                            <button onClick={()=> setUser(!user)} className="dropdown-toggle items-center" type="button">
                                <span className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"><img src={client5}className="rounded-full" alt=""/></span>
                                <span className="font-semibold text-[16px] ms-1 sm:inline-block hidden">Cristina Murfy</span>
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