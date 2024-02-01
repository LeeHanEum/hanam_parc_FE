import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import logo from '../asset/image/logo.png';
import Navbar from "../components/Navbar";

export default function PageComingsoon() {
    let [days,setDays] = useState();
    let [hours,setHours] = useState();
    let [minutes,setMinutes] = useState();
    let [seconds,setSeconds] = useState();

    let deadline = "February, 15, 2024";
  
    let getTime = () => {
      let time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
    let interval = setInterval(() => getTime(deadline), 1000);
      return () => clearInterval(interval);
      }, []);
  return (
    <>
        <Navbar />
        <section className="relative bg-[url('../../assets/images/utility.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 bg-black/25"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div className="title-heading text-center my-auto">
                            <h1 className="text-white mt-3 mb-6 md:text-5xl text-3xl font-bold">홈페이지 오픈 준비 중 입니다</h1>
                        
                            <div id="countdown">
                                <ul className="count-down list-none inline-block text-white text-center mt-8 m-6">
                                    <li  className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{days}<p className='count-head'>Days</p></li>
                                    <li  className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{hours}<p className='count-head'>Hours</p></li>
                                    <li  className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{minutes}<p className='count-head'>Mins</p></li>
                                    <li  className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{seconds}<p className='count-head'>Secs</p></li>
                                    <li className="h1"></li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="mb-0 text-slate-400">© {new Date().getFullYear()} All Rights Reserved by HANAM PARALYMPIC COUNCIL</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
