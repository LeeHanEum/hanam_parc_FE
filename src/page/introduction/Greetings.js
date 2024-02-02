import React from 'react'
import {Link} from 'react-router-dom';
import "../../../node_modules/react-modal-video/css/modal-video.css";
import {FaRegEnvelope, MdKeyboardArrowRight} from '../../assets/icons/icons'
import CompanyLogo from '../../component/companyLogo';
import KeyFeature from '../../component/keyFeature';
import Navbar from "../../components/Navbar";
import SubFooter from "../../components/SubFooter";

import join_soccer from "../../asset/image/join_soccer.jpg";
import mayor from "../../asset/image/mayor.jpg";
import small_logo from "../../asset/image/small_logo.png";

export default function Greetings() {

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">인사말</h3>
                    </div>
                </div>
            </section>

            {/*본문 내용 시작*/}
            <section className="relative md:py-24 py-16 ">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-6 md:col-span-6">
                            <img src={mayor} className="shadow w-full rounded-md" alt="" />
                        </div>

                        <div className="lg:col-span-6 md:col-span-6">
                            <div className="lg:ms-5">
                                <h3 className="px-3 mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">하남시장애인홈페이지를 <br /> 방문해주신 여러분 반갑습니다!!</h3>

                                <p className="text-slate-500 max-w-xl m-3">살고싶은 도시, 도약하는 하남을 이끌어가고 있는<br/>하남시 장애인체육회장 이현재입니다.</p>

                                <p className="text-slate-500 max-w-xl m-3">하남시장애인체육회는 2013년 설립된 이래, 장애인의 건강증진과 <br/>여가생활 조성, 장애인 체육 활성화를 위해 노력해왔습니다.</p>

                                <p className="text-slate-500 max-w-xl m-3">앞으로도 장애인 체육 육성 및 각종 체육대회 참가지원 등을 통한 장애인과 <br/>비장애인이 함께 즐길 수 있는 체육환경 조성을 위해 최선을 다해 뛰겠습니다.</p>

                                <p className="text-slate-500 max-w-xl m-3">장애인 체육 활성화를 위한 시민 여러분의 관심과 응원을 부탁드리며, <br/>건강과 행복이 늘 가득하시길 기원하겠습니다.</p>

                                <p className="text-slate-500 max-w-xl m-3">감사합니다.</p>

                                <p className="text-slate-500 max-w-xl m-3">하남시 장애인체육회장 이 현 재</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SubFooter/>
        </>
    )
}
