import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import Navbar from "../components/Navbar";
import Footer from "../component/Footer/footer";
import CookieModal from '../component/cookieModal'
import marathon from '../asset/image/marathon.jpg'

import CountUp from 'react-countup';
import {accordionData, courseDetail, destinationData, travelBenefit} from '../data/dataTwo'
import {GoLock, LiaClipboardListSolid, PiShoppingCart} from "../assets/icons/icons";
import {board_main} from "../asset/data/data";

export default function MainPage(){
    let [selectedCategory, setSelectedCategory] = useState(null);
    let [activeIndex, setActiveIndex] = useState(0);
    let toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    }
    let matchCategory = (category) => {
        setSelectedCategory(category);
    };

    let filteredData = selectedCategory
        ? destinationData.filter((item) => item.category === selectedCategory)
        : destinationData;
    return(
        <>
            <Navbar navClass="nav-light" />

            <section className="relative md:flex md:h-screen items-center md:py-0 pt-36 pb-56 bg-no-repeat bg-center bg-cover bg-fixed"
                    style={{backgroundImage: `url(${marathon})`,}}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/40"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 mt-10">
                        <h4 className="lg:leading-normal leading-normal text-white text-4xl lg:text-5xl mb-5 font-bold">스포츠의 힘으로<br /> 인생의 무한한 가능성을 열다.</h4>
                        <p className="text-slate-400 text-lg max-w-xl">Open your boundless possibilities in life with the power of sports</p>
                    </div>

                    <div className="relative mt-8">
                        <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">장애인 체육회 소개</Link>
                    </div>
                </div>

                <div className="container absolute bottom-0 start-0 end-0">
                    <div className="grid grid-cols-1">
                        <div className="p-6 border-t border-dashed border-white/30">
                            <div className="grid md:grid-cols-4 grid-cols-2 gap-[30px]">
                                <div className="counter-box flex items-center justify-center">
                                    <h1 className="text-4xl font-bold text-white">10년</h1>
                                    <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">2013년 하남시<br/>장애인 체육회 설립</h5>
                                </div>

                                <div className="counter-box flex items-center justify-center">
                                    <h1 className="text-4xl font-bold text-white"><CountUp className="counter-value" start={1} end={30} />+</h1>
                                    <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">장애인 체육대회 개최</h5>
                                </div>

                                <div className="counter-box flex items-center justify-center">
                                    <h1 className="text-4xl font-bold text-white"><CountUp className="counter-value" start={1} end={80} />+</h1>
                                    <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">생활 체육<br />프로그램 진행</h5>
                                </div>

                                <div className="counter-box flex items-center justify-center">
                                    <h1 className="text-4xl font-bold text-white"><CountUp className="counter-value" start={1} end={4.9} /></h1>
                                    <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">하남시 장애인 시설<br />사용자 별점</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-15 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1">
                        <h5 className="text-3xl font-semibold mb-5">알림마당</h5>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 pt-6 gap-[30px]">

                        {
                            board_main.map((data, index) => {
                                return (

                                    <div key={index}>
                                        <h5 className="text-2xl font-semibold mb-5">{data.heading}</h5>

                                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                            <table className="w-full text-start">
                                                <thead>
                                                <tr>
                                                    <th className="px-4 py-5 text-start">목록</th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                                    <td className="p-4"><Link className="flex items-center"><LiaClipboardListSolid className="me-1"/> {data.ls1}</Link></td>
                                                </tr>

                                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                                    <td className="p-4"><Link className="flex items-center"><LiaClipboardListSolid className="me-1"/> {data.ls2}</Link></td>
                                                </tr>

                                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                                    <td className="p-4"><Link className="flex items-center"><LiaClipboardListSolid className="me-1"/> {data.ls3}</Link></td>
                                                </tr>

                                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                                    <td className="p-4"><Link className="flex items-center"><LiaClipboardListSolid className="me-1"/> {data.ls4}</Link></td>
                                                </tr>

                                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                                    <td className="p-4"><Link className="flex items-center"><LiaClipboardListSolid className="me-1"/> {data.ls5}</Link></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    </div>

                </section>

                <section className="relative md:py-24 py-16">
                    <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Benefit for Traveller</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {travelBenefit.map((item,index)=>{
                            let Icons = item.icon
                            return(
                                <div key={index} className="group p-6 rounded-lg shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:-translate-y-2 duration-500">
                                    <div
                                        className="w-16 h-16 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 duration-500">
                                        <Icons/>
                                    </div>

                                    <div className="content mt-7">
                                        <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Popular Destination</h3>
                        <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                        <div className="filters-group-wrap mt-4">
                            <div className="filters-group">
                                <ul className="mb-0 list-none container-filter-border-bottom filter-options space-x-3">
                                    <li className={`${selectedCategory === null ? 'active' : ''} inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500`}  onClick={() => matchCategory(null)}>All</li>
                                    <li className={`${selectedCategory === 'beach' ? 'active' : ''} inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500`} onClick={() => matchCategory('beach')}>Beach</li>
                                    <li className={`${selectedCategory === 'park' ? 'active' : ''} inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500`} onClick={() => matchCategory('park')}>Park</li>
                                    <li className={`${selectedCategory === 'nature' ? 'active' : ''} inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500`} onClick={() => matchCategory('nature')}>Nature</li>
                                    <li className={`${selectedCategory === 'mountain' ? 'active' : ''} inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500`} onClick={() => matchCategory('mountain')}>Mountain</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="grid" className=" justify-center mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px] ">
                        {filteredData.map((item,index) => {
                            return(
                                <div className="" key={index} >
                                    <div className="group relative overflow-hidden rounded-md">
                                        <div className="relative overflow-hidden">
                                            <img src={item.image} className="roubded-md" alt=""/>
                                            <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent"></div>
                                        </div>

                                        <div className="absolute bottom-0 start-0 end-0 flex justify-between p-6">
                                            <div>
                                                <Link to="" className="text-white/80 hover:text-white text-lg font-semibold block">{item.place}</Link>

                                                <ul className="list-none mb-0 text-amber-400">
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                </ul>
                                            </div>

                                            <h5 className="text-white/70">${item.amount}/night</h5>
                                        </div>

                                        <div className="absolute end-0 top-0 m-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                            <Link to="#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-8 gap-[30px]">
                        <div className="md:col-span-6">
                            <img src={marathon} className="rounded-md shadow dark:shadow-gray-800" alt=""/>
                        </div>

                        <div className="md:col-span-6">
                            <div id="accordion-collapse" >
                                {accordionData.map((item, index) => (
                                    <div key={index} className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                        <h2 className="text-base font-semibold">
                                            <button type="button" onClick={() => toggleAccordion(index)} className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === index ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`} >
                                                <span>{item.title}</span>
                                                <svg className={`${activeIndex === index ? "rotate-180" : "rotate-270" } w-4 h-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </h2>
                                        {activeIndex === index && (
                                            <div>
                                                <div className="p-5">
                                                    <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CookieModal/>
            <Footer/>
        </>
    )
}