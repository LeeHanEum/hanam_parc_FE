import React from 'react'
import "../../../node_modules/react-modal-video/css/modal-video.css";
import Navbar from "../../components/Navbar";
import SubFooter from "../../components/SubFooter";

import join_soccer from "../../asset/image/join_soccer.jpg";
import mayor from "../../asset/image/mayor.jpg";

export default function Establishment() {

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">설립목적 및 연혁</h3>
                    </div>
                </div>
            </section>

            {/*본문 내용 시작*/}
            <section className="relative md:py-24 py-16 ">
                <div className="container relative">

                </div>
            </section>

            <SubFooter/>
        </>
    )
}
