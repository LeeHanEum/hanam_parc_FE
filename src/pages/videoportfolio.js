import React, { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom';

import '../assets/libs/@mdi/font/css/materialdesignicons.min.css'
import '../assets/css/tailwind.css'

import VideoNavbar from '../component/Navbar/videoNavbar';
import SmallFooter from "../component/Footer/smallFooter"

import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css";

import {FaArrowRight} from '../assets/icons/icons'
import { videoData } from '../data/dataThree';
 
export default function VideoPortfolio() {

    const [isOpen, setOpen] = useState(false);
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('dark');
        htmlTag.classList.remove('light')
    });

    return (
        <>
            <VideoNavbar/>
            <section className="relative md:pt-40 pt-28 md:pb-48 pb-40 bg-[url('../../assets/images/photography/photographer.jpg')] bg-cover jarallax" data-jarallax data-speed="0.5" id="aboutme">
                <div className="absolute inset-0 h-full w-full bg-slate-900/60"></div>

                <div className="container relative">
                    <div className="grid grid-cols-1 mt-10">
                        <div className="text-center">
                            <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-bold text-white">Watch Our Videos</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:pb-24 pb-16 -mt-10">
                <div className="container relative">
                    <div className="lg:flex lg:w-4/5 mx-auto">
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-[30px]">
                            {videoData.map((item,index)=>{
                                return(
                                    <div key={index} className="picture-item" data-groups='["branding"]'>
                                        <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                            <Link to="#!" onClick={() => setOpen(true)}  className="lightbox max-w-full max-h-full">
                                                <span className="relative">
                                                    <img src={item.image} className="rounded-md" alt="" />
                                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                        <img src={item.image1} className="rounded-md absolute top-1/2 -translate-y-1/2 start-0 end-0 p-4" alt="" />
                                                    </div>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-8">
                        <div className="text-center">
                            <Link to="photography-portfolio" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 dark:text-white/70 dark:hover:text-white hover:text-indigo-600 after:bg-indigo-600 dark:after:bg-white duration-500 ease-in-out">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                </div>
            </section>
            <SmallFooter/>
        </>
    )
}
