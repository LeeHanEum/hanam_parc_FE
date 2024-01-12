import React, { useState } from 'react'
import { Link } from "react-router-dom";

import bg1 from "../../assets/images/business/bg04.jpg"
import about1 from "../../assets/images/business/about01.jpg"
import about2 from "../../assets/images/business/about02.jpg"
import shapeImage from "../../assets/images/shape-image.png"
import aboutImage from "../../assets/images/it/about.jpg"

import {FiMail,FiPhone,FiDribbble,FaBehance,FiLinkedin,FiFacebook,FiInstagram,FiBox,FiCamera,FiBell,FiMonitor,PiNotepadBold} from "../../assets/icons/icons"
import NavbarTwo from "../../component/Navbar/navbarTwo";
import Blog from "../../component/blog";
import UserFeedBack from "../../component/userFeedBack";

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import CountUp from 'react-countup';
import Footer from '../../component/Footer/footer';
import CookieModal from '../../component/cookieModal';

export default function IndexClassicBusiness(){
    let [isOpen, setOpen] = useState(false)
    return(
        <>
         <div className="tagline bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-800">
            <div className="container">                
                <div className="grid grid-cols-1">
                    <div className="flex items-center justify-between">
                        <ul className="list-none mb-0">
                            <li className="inline mb-0"><Link to="mailto:contact@example.com" className="text-slate-400 hover:text-indigo-600 inline-flex items-center"><FiMail className="h-4 w-4 me-1 text-indigo-600"/> contact@example.com</Link></li>
                            <li className="inline mb-0 ms-3"><Link to="tel:+152534-468-854" className="text-slate-400 hover:text-indigo-600 inline-flex items-center"><FiPhone className="h-4 w-4 me-1 text-indigo-600"/> +152 534-468-854</Link></li>
                        </ul>

                        <ul className="list-none mb-0">
                            <li className="inline"><Link to="https://dribbble.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FiDribbble /></Link></li>
                            <li className="inline"><Link to="https://www.behance.net/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaBehance /></Link></li>
                            <li className="inline"><Link to="http://linkedin.com/company/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FiLinkedin /></Link></li>
                            <li className="inline"><Link to="https://www.facebook.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FiFacebook /></Link></li>
                            <li className="inline"><Link to="https://www.instagram.com/shreethemes/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FiInstagram /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <NavbarTwo navClass="nav-sticky"/>

        <section className="relative table w-full md:pt-72 md:pb-40 py-36 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg1})`}}>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/50 dark:via-slate-900/50 to-white dark:to-slate-900"></div>
            <div className="container relative mt-10">
                <div className="grid grid-cols-1">
                    <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">We Provide Best <br/> Business Solutions</h1>
                    <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                    
                    <div className="mt-6">
                        <Link to="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Explore More <i className="mdi mdi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative overflow-hidden md:py-24 py-16">
            <div className="container relative pb-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="relative">
                            <div className="relative flex justify-end">
                                <img src={about1} className="lg:w-[400px] w-[280px] rounded shadow dark:shadow-gray-700" alt=""/>
                                <div className="absolute top-0 translate-y-2/4 start-0 text-center">
                                    <Link to="#!" onClick={() => setOpen(true)} className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </Link>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
                            </div>
                            <div className="absolute md:-start-5 start-0 -bottom-16">
                                <img src={about2} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-5">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Creative Vision & Mission</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">We develop & create <br/> digital future.</h3>

                            <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                            <Link to="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Features</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[30px] mt-8">
                    <div className="group rounded shadow-lg relative p-6 overflow-hidden h-fit">
                        <div className="flex items-center justify-center h-14 w-14 -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                            <FiBox className="h-6 w-6 rotate-45"/>
                        </div>

                        <div className="content mt-6 relative z-1">
                            <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Web Design</Link>
                            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>

                            <div className="mt-6">
                                <Link to="" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></Link>
                            </div>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                            <FiBox className="h-48 w-48 text-indigo-600 opacity-[0.03] dark:opacity-[0.04] group-hover:opacity-10 duration-500"/>
                        </div>
                    </div>

                    <div className="group rounded shadow-lg relative p-6 overflow-hidden h-fit lg:mt-16">
                        <div className="flex items-center justify-center h-14 w-14 -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                        <FiCamera className="h-6 w-6 rotate-45"/>
                        </div>

                        <div className="content mt-6 relative z-1">
                            <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Search Engine Optimization</Link>
                            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>

                            <div className="mt-6">
                                <Link to="" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></Link>
                            </div>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                            <FiCamera className="h-48 w-48 text-indigo-600 opacity-[0.03] dark:opacity-[0.04] group-hover:opacity-10 duration-500"/>
                        </div>
                    </div>

                    <div className="group rounded shadow-lg relative p-6 overflow-hidden h-fit">
                        <div className="flex items-center justify-center h-14 w-14 -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                            <FiBell className="h-6 w-6 rotate-45"/>
                        </div>

                        <div className="content mt-6 relative z-1">
                            <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Social Media</Link>
                            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>

                            <div className="mt-6">
                                <Link to="" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></Link>
                            </div>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                            <FiBell className="h-48 w-48 text-indigo-600 opacity-[0.03] dark:opacity-[0.04] group-hover:opacity-10 duration-500"/>
                        </div>
                    </div>

                    <div className="group rounded shadow-lg relative p-6 overflow-hidden h-fit lg:mt-16">
                        <div className="flex items-center justify-center h-14 w-14 -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                            <FiMonitor className="h-6 w-6 rotate-45"/>
                        </div>

                        <div className="content mt-6 relative z-1">
                            <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Design & Branding</Link>
                            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>

                            <div className="mt-6">
                                <Link to="" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></Link>
                            </div>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                            <FiMonitor className="h-48 w-48 text-indigo-600 opacity-[0.03] dark:opacity-[0.04] group-hover:opacity-10 duration-500"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16 lg:pt-24 pt-16">
                <div className="absolute inset-0 opacity-25 dark:opacity-50 bg-[url('../../assets/images/map.png')] bg-no-repeat bg-center bg-cover"></div>
                <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">Global clients around the world</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-bold mb-2"><CountUp className="counter-value" start={1} end={1548} />+</h1>
                        <h5 className="counter-head text-lg font-medium">Customer satisfaction</h5>
                    </div>
                    
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-bold mb-2"><CountUp className="counter-value" start={1} end={25} />+</h1>
                        <h5 className="counter-head text-lg font-medium">Daily data input</h5>
                    </div>
                    
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-bold mb-2"><CountUp className="counter-value" start={1} end={9} />+</h1>
                        <h5 className="counter-head text-lg font-medium">Years Experience</h5>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-6 order-1 md:order-2">
                        <div className="lg:ms-8">
                            <img src={shapeImage} alt=""/>
                        </div>
                    </div>

                    <div className="md:col-span-6 order-2 md:order-1">
                        <div className="lg:me-5">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Fast & Effective</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Powerful Digitalization <br/> With Techwind</h3>

                            <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                            <Link to="/page-services" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><PiNotepadBold className="me-1"/> Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16 md:mb-24 mb-16" >
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-6">
                        <div className="lg:me-8">
                            <div className="relative">
                                <img src={aboutImage} className="rounded-full shadow-lg dark:shadow-gray-800" alt=""/>

                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto lg:w-72 w-56 lg:h-72 h-56 flex justify-center items-center bg-white dark:bg-slate-900 rounded-full shadow-lg dark:shadow-gray-800">
                                    <div className="text-center">
                                        <span className="text-indigo-600 text-2xl font-bold mb-0 block"><CountUp className="counter-value" start={1} end={15} />+</span>
                                        <span className="font-semibold block mt-2">Years <br/> Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="lg:ms-8">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Fast & Effective</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">We're a global stakeholder <br/> relations and partnership <br/> building consultancy.</h3>

                            <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                            <Link to="/page-services" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><PiNotepadBold className="me-1"/> Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>

            <UserFeedBack/>
            <Blog className="container relative md:mt-24 mt-16"/>
        </section>
        <Footer/>
        <CookieModal/>
        </>
    )
}