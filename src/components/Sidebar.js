import React, { useState, useEffect } from "react";
import { Link,useLocation } from "react-router-dom";

import logo from "../asset/image/wlogo.png";

import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

import {AiOutlineLineChart, PiBrowsersBold, AiOutlineAppstore, AiOutlineUser,TbBrandBlogger, AiOutlineShoppingCart,AiOutlineCamera,AiOutlineFile,MdOutlineEmail,LiaFileInvoiceDollarSolid, BiLogOutCircle,BiLayer} from '../asset/icon/vander'

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
                    <li className={`sidebar-dropdown ${["" ,"index","index-crypto",].includes(manu)? "active" : ""}`}>
                            <Link to="#" onClick={(e)=>{setSubManu(subManu === "dashboard-item" ? "" : "dashboard-item")}}><AiOutlineLineChart className=" me-3 icon "/>Dashboard</Link>
                            <div className={`sidebar-submenu ${["index","index-crypto","dashboard-item",""].includes(subManu)? "block" : ""}`}>
                                <ul>
                                    <li className={manu === "index" || "" ? "active" : ""}><Link to="/index">Analytics</Link></li>
                                    <li className={manu === "index-crypto" ? "active" : ""}><Link to="/index-crypto">Cryptocurrency <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New</span></Link></li>
                                </ul>
                            </div>
                        </li>

                    <li className={`sidebar-dropdown ${["index-dark","index-rtl","index-dark-rtl","index-sidebar-light","index-sidebar-colored"].includes(manu)? "active" : ""}`}>
                        <Link to="#"  onClick={(e)=>{setSubManu(subManu === "index-item" ? "" : "index-item")}}><PiBrowsersBold className=" me-3 icon "/>Layouts</Link>
                        <div className={`sidebar-submenu ${["index-dark","index-rtl","index-dark-rtl","index-sidebar-light","index-sidebar-colored","index-item"].includes(subManu)? "block" : ""}`}>
                            <ul>
                                <li className={manu === "index-dark" ? "active" : ""}><Link to="/index-dark">Dark Dashboard</Link></li>
                                <li className={manu === "index-rtl" ? "active" : ""}><Link to="/index-rtl">RTL Dashboard</Link></li>
                                <li className={manu === "index-dark-rtl" ? "active" : ""}><Link to="/index-dark-rtl">Dark RTL Dashboard</Link></li>
                                <li className={manu === "index-sidebar-light" ? "active" : ""}><Link to="/index-sidebar-light">Light Sidebar</Link></li>
                                <li className={manu === "index-sidebar-colored" ? "active" : ""}><Link to="/index-sidebar-colored">Colored Sidebar</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li className={`sidebar-dropdown ${["chat","email","calendar"].includes(manu)? "active" : ""}`}>
                        <Link to="#" onClick={(e)=>{setSubManu(subManu === "app-item" ? "" : "app-item")}}><AiOutlineAppstore className=" me-3 icon "/>Apps</Link>
                        <div className={`sidebar-submenu ${["chat","email","calendar","app-item"].includes(subManu)? "block" : ""}`}>
                            <ul>
                                <li className={manu === "chat" ? "active" : ""}><Link to="/chat">Chat</Link></li>
                                <li className={manu === "email" ? "active" : ""}><Link to="/email">Email</Link></li>
                                <li className={manu === "calendar" ? "active" : ""}><Link to="/calendar">Calendar</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li className={`sidebar-dropdown ${["profile","profile-billing","profile-payment","profile-social","profile-notification","profile-setting"].includes(manu)? "active" : ""}`}>
                        <Link to="#" onClick={(e)=>{setSubManu(subManu === "profile-item" ? "" : "profile-item")}}><AiOutlineUser className=" me-3 icon "/>User Profile</Link>
                        <div className={`sidebar-submenu ${["profile","profile-billing","profile-payment","profile-social","profile-notification","profile-setting","profile-item"].includes(subManu)? "block" : ""}`}>
                            <ul>
                                <li className={manu === "profile" ? "active" : ""}><Link to="/profile">Profile</Link></li>
                                <li className={manu === "profile-billing" ? "active" : ""}><Link to="/profile-billing">Billing Info</Link></li>
                                <li className={manu === "profile-payment" ? "active" : ""}><Link to="/profile-payment">Payment</Link></li>
                                <li className={manu === "profile-social" ? "active" : ""}><Link to="/profile-social">Social Profile</Link></li>
                                <li className={manu === "profile-notification" ? "active" : ""}><Link to="/profile-notification">Notifications</Link></li>
                                <li className={manu === "profile-setting" ? "active" : ""}><Link to="/profile-setting">Profile Settings</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li className={`sidebar-dropdown ${["blog","blog-detail"].includes(manu)? "active" : ""}`}>
                        <Link to="#" onClick={(e)=>{setSubManu(subManu === "blog-item" ? "" : "blog-item")}}><TbBrandBlogger className=" me-3 icon "/>Blog</Link>
                        <div  className={`sidebar-submenu ${["blog","blog-detail","blog-item"].includes(subManu)? "block" : ""}`}>
                            <ul>
                                <li className={manu === "blog" ? "active" : ""}><Link to="/blog">Blogs</Link></li>
                                <li className={manu === "blog-detail" ? "active" : ""}><Link to="/blog-detail">Blog Detail</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li className={`sidebar-dropdown ${["shop","shop-item-detail", "shop-cart", "checkout"].includes(manu)? "active" : ""}`}>
                        <Link to="#" onClick={(e)=>{setSubManu(subManu === "shop-item" ? "" : "shop-item")}}><AiOutlineShoppingCart className="me-3 icon"/>E-Commerce</Link>
                        <div className={`sidebar-submenu ${["shop","shop-item-detail", "shop-cart", "checkout","shop-item"].includes(subManu)? "block" : ""}`}>
                            <ul>
                                <li className={manu === "shop" ? "active" : ""}><Link to="/shop">Shop</Link></li>
                                <li className={manu === "shop-item-detail" ? "active" : ""}><Link to="/shop-item-detail">Shop Detail</Link></li>
                                <li className={manu === "shop-cart" ? "active" : ""}><Link to="/shop-cart">Shopcart</Link></li>
                                <li className={manu === "checkout" ? "active" : ""}><Link to="/checkout">Checkout</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li className={`sidebar-dropdown ${["gallery-one","gallery-two"].includes(manu)? "active" : ""}`}>
                        <Link to="#" onClick={(e)=>{setSubManu(subManu === "gallery-item" ? "" : "gallery-item")}}><AiOutlineCamera className="me-3 icon"/>Gallery</Link>
                        <div className={`sidebar-submenu ${["gallery-one","gallery-two","gallery-item"].includes(subManu)? "block" : ""}`}>
                            <ul>
                                <li className={manu === "gallery-one" ? "active" : ""}><Link to="/gallery-one">Gallary One</Link></li>
                                <li className={manu === "gallery-two" ? "active" : ""}><Link to="/gallery-two">Gallery Two</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li className={`sidebar-dropdown ${["starter","faqs","pricing","team","privacy","terms"].includes(manu)? "active" : ""}`}>
                        <Link to="#"  onClick={(e)=>{setSubManu(subManu === "page-item" ? "" : "page-item")}}><AiOutlineFile className="me-3 icon"/>Pages</Link>
                        <div className={`sidebar-submenu ${["starter","faqs","pricing","team","privacy","terms","page-item"].includes(subManu)? "block" : ""}`}>
                            <ul>
                                <li className={manu === "starter" ? "active" : ""}><Link to="/starter">Starter</Link></li>
                                <li className={manu === "faqs" ? "active" : ""}><Link to="/faqs">FAQs</Link></li>
                                <li className={manu === "pricing" ? "active" : ""}><Link to="/pricing">Pricing</Link></li>
                                <li className={manu === "team" ? "active" : ""}><Link to="/team">Team</Link></li>
                                <li className={manu === "privacy" ? "active" : ""}><Link to="/privacy">Privacy Policy</Link></li>
                                <li className={manu === "terms" ? "active" : ""}><Link to="/terms">Term & Condition</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li  className={manu === "ui-components" ? "active" : ""}>
                        <Link to="/ui-components"><AiOutlineLineChart className=" me-3 icon "/>UI Components</Link>
                    </li>

                    <li className={`sidebar-dropdown ${["email-confirmation","email-password-reset","email-alert","email-invoices"].includes(manu)? "active" : ""}`}>
                        <Link to="#" onClick={(e)=>{setSubManu(subManu === "mail-item" ? "" : "mail-item")}}><MdOutlineEmail className=" me-3 icon "/>Email Template</Link>
                        <div className={`sidebar-submenu ${["email-confirmation","email-password-reset","email-alert","email-invoices","mail-item"].includes(subManu)? "block" : ""}`}>
                            <ul>
                                <li className={manu === "email-confirmation" ? "active" : ""}><Link to="/email-confirmation">Confirmation</Link></li>
                                <li className={manu === "email-password-reset" ? "active" : ""}><Link to="/email-password-reset">Reset Password</Link></li>
                                <li className={manu === "email-alert" ? "active" : ""}><Link to="/email-alert">Alert</Link></li>
                                <li className={manu === "email-invoices" ? "active" : ""}><Link to="/email-invoices">Invoice</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li className={`sidebar-dropdown ${["invoice-list","invoice"].includes(manu)? "active" : ""}`}>
                        <Link to="#" onClick={(e)=>{setSubManu(subManu === "invoice-item" ? "" : "invoice-item")}}><LiaFileInvoiceDollarSolid className=" me-3 icon "/>Invoice</Link>
                        <div className={`sidebar-submenu ${["invoice-list","invoice","invoice-item"].includes(subManu)? "block" : ""}`}>
                            <ul>
                                <li className={manu === "invoice-list" ? "active" : ""}><Link to="/invoice-list">Invoice List</Link></li>
                                <li className={manu === "invoice" ? "active" : ""}><Link to="/invoice">Invoice Preview</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li className={`sidebar-dropdown ${["auth-login","auth-signup","auth-signup-success","auth-re-password","auth-lock-screen"].includes(manu)? "active" : ""}`}>
                        <Link to="#" onClick={(e)=>{setSubManu(subManu === "auth-item" ? "" : "auth-item")}}><BiLogOutCircle className="me-3 icon"/>Authentication</Link>
                        <div className={`sidebar-submenu ${["auth-login","auth-signup","auth-signup-success","auth-re-password","auth-lock-screen","auth-item"].includes(subManu)? "block" : ""}`}>
                            <ul>
                                <li className={manu === "auth-login" ? "active" : ""}><Link to="/auth-login">Login</Link></li>
                                <li className={manu === "auth-signup" ? "active" : ""}><Link to="/auth-signup">Signup</Link></li>
                                <li className={manu === "auth-signup-success" ? "active" : ""}><Link to="/auth-signup-success">Signup Success</Link></li>
                                <li className={manu === "auth-re-password" ? "active" : ""}><Link to="/auth-re-password">Reset Password</Link></li>
                                <li className={manu === "auth-lock-screen" ? "active" : ""}><Link to="/auth-lock-screen">Lockscreen</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li className={`sidebar-dropdown ${["comingsoon","maintenance","error","thankyou"].includes(manu)? "active" : ""}`}>
                        <Link to="#" onClick={(e)=>{setSubManu(subManu === "special-page" ? "" : "special-page")}}><BiLayer className="me-3 icon"/>Miscellaneous</Link>
                        <div className={`sidebar-submenu ${["comingsoon","maintenance","error","thankyou", "special-page"].includes(subManu)? "block" : ""}`}>
                            <ul>
                                <li className={manu === "comingsoon" ? "active" : ""}><Link to="/comingsoon">Comingsoon</Link></li>
                                <li className={manu === "maintenance" ? "active" : ""}><Link to="/maintenance">Maintenance</Link></li>
                                <li className={manu === "error" ? "active" : ""}><Link to="/error">Error</Link></li>
                                <li className={manu === "thankyou" ? "active" : ""}><Link to="/thankyou">Thank You</Link></li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </SimpleBarReact>
            </div>
        </nav>
        
    )
}