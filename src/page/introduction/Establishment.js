import React from 'react'
import "../../../node_modules/react-modal-video/css/modal-video.css";
import Navbar from "../../components/Navbar";
import SubFooter from "../../components/SubFooter";
import join_soccer from "../../asset/image/join_soccer.jpg";
import Purpose from "../../components/Purpose";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


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
                    <Purpose />
                </div>
            </section>

            <section className="relative md:py-12 py-8 ">
                <div className="container relative">
                    <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold text-center">하남시 장애인 체육회 연혁</h3>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2023"
                            iconStyle={{ background: 'rgba(0, 128, 0, 0.3)', color: '#fff' }}
                        >
                            <p>하남시장애인탁구협회 인준</p>
                            <p>제4대 유연석 수석부회장 취임</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2022"
                            iconStyle={{ background: 'rgba(0, 128, 0, 0.3)', color: '#fff' }}
                        >
                            <p>하남시장애인조정연맹 인준</p>
                            <p>이현재 회장님 취임</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2021"
                            iconStyle={{ background: 'rgba(0, 128, 0, 0.3)', color: '#fff' }}
                        >
                            <p>제3대 김영기 상임부회장 취임</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2020"
                            iconStyle={{ background: 'rgba(0, 128, 0, 0.3)', color: '#fff' }}
                        >
                            <p>하남시지체장애인스포츠연맹 준가맹 인준</p>
                            <p>하남시장애인파크골프협회, 장애인배드민턴협회, 장애인보치아연맹, 장애인사이클연맹, 장애인볼링협회 인준</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2018"
                            iconStyle={{ background: 'rgba(0, 128, 0, 0.3)', color: '#fff' }}
                        >
                            <p>하남시장애인게이트볼연맹 인준</p>
                            <p>김상호 회장님 취임</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2017"
                            iconStyle={{ background: 'rgba(0, 128, 0, 0.3)', color: '#fff' }}
                        >
                            <p>제2대 문양수 상임부회장 취임</p>
                            <p>오수봉 회장님 취임</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2014"
                            iconStyle={{ background: 'rgba(0, 128, 0, 0.3)', color: '#fff' }}
                        >
                            <p>이교범 회장님 취임</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2013"
                            iconStyle={{ background: 'rgba(0, 128, 0, 0.3)', color: '#fff' }}
                        >
                            <p>제1대 이일재 상임부회장 취임</p>
                            <p>(3.8.) 하남시장애인체육회 창립식</p>
                            <p>(2.18.) 하남시장애인체육회 설립 승인</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2012"
                            iconStyle={{ background: 'rgba(0, 128, 0, 0.3)', color: '#fff' }}
                        >
                            <p>(12.17.) 하남시장애인체육회 창립 이사회 개최</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </section>

            <SubFooter/>
        </>
    )
}
