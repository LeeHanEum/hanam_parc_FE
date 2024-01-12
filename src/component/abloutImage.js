import React, { useState } from 'react';
import { Link } from "react-router-dom";

import about01 from '../assets/images/business/about01.jpg';
import about02 from '../assets/images/business/about02.jpg';

import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css";

export default function AboutImage({grid}){
    const [isOpen, setOpen] = useState(false);
    return(
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className={grid}>
                <div className="relative lg:me-8">
                    <img src={about01} className="rounded-md" alt="" />

                    <div className="absolute bottom-24 end-0">
                        <img src={about02} className="rounded-md shadow-md w-48 h-48" alt="" />
                        <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                            <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610"
                                className="lightbox h-14 w-14 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600">
                                <i className="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

            <div className="md:col-span-6">
                <div className="lg:ms-5">
                    <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Our History</h6>
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">“Sweet as the Moment When <br /> the coworking Went 'Pop”</h3>

                    <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                    <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Get Started</Link>
                </div>
            </div>
        </div>
    )
}