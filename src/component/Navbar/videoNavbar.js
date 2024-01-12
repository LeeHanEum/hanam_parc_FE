import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo_dark from '../../assets/images/logo-dark.png';
import logo_light from '../../assets/images/logo-light.png';

import * as Icon from 'react-feather'
export default function VideoNavbar(){

    let [isMenu, setisMenu] = useState(false);
    let [navbarSticky , setNavbarSticky] = useState(false);

    let [manu , setManu] = useState('');
    let location = useLocation();

    useEffect(()=>{

        function windowScroll(){
            setNavbarSticky( document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50);
        }
        window.addEventListener("scroll", windowScroll);

        window.scrollTo(0, 0)

        let htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.remove('dark');

        let current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
        setManu(current)

        return () => {
            window.removeEventListener('scroll', windowScroll);
        };
    },[location.pathname.substring(location.pathname.lastIndexOf('/') + 1)])

    let toggleMenu = () => {
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

    
    return(
            <nav id="topnav" className={`${navbarSticky ? "nav-sticky" :" defaultscroll"}`}>
                <div className="container relative">
                    <Link className="logo" to="/index">
                        <span className="inline-block dark:hidden">
                            <img src={logo_dark} className="l-dark" height="24" alt="" />
                            <img src={logo_light} className="l-light" height="24" alt="" />
                        </span>
                        <img src={logo_light} height="24" className="hidden dark:inline-block" alt="" />
                    </Link>

                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <ul className="buy-button list-none space-x-1 mb-0">
                        <li className="inline ps-1 mb-0">
                            <Link to="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><Icon.ShoppingCart className="h-4 w-4"></Icon.ShoppingCart></Link>
                        </li>
                    </ul>

                    <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                        <ul className="navigation-menu nav-light justify-end">
                            <li className={manu === "index-video" || "" ? "active" : ""}><Link to="/index-video" className="sub-menu-item">Home</Link></li>
                            <li className={manu === "video-portfolio" || "" ? "active" : ""}><Link to="/video-portfolio" className="sub-menu-item">Videos</Link></li>
                            <li><Link to="#" className="sub-menu-item">Studio</Link></li>
                            <li className={manu === "contact-two" || "" ? "active" : ""}><Link to="/contact-two" className="sub-menu-item">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}