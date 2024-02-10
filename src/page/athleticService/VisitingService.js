import Navbar from "../../components/Navbar";
import join_soccer from "../../asset/image/join_soccer.jpg";
import SubFooter from "../../components/SubFooter";
import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {MdFeedback, MdOutlineContactPage} from "react-icons/md";
import {VscOpenPreview} from "react-icons/vsc";
import {BiConversation} from "react-icons/bi";
import {GiTeacher} from "react-icons/gi";

export default function VisitingService() {


    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">찾아가는 생활 체육 서비스</h3>
                    </div>
                </div>
            </section>

            {/*본문 내용 시작*/}
            <section className="relative md:py-12 py-8 mb-10">
                <div className="container relative">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="step1"
                            contentStyle={{ background: 'rgba(0,128,0, 0.1)', color: 'gray'}}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: 'rgba(0, 128, 0, 0.3)', color: '#fff' }}
                            icon={<MdOutlineContactPage />}
                        >
                            <h3 className="text-slate-500 text-lg">안내(12월~1월)</h3>
                            <p className="text-emerald-600 text-xl">신청안내 공문발송</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgba(0,128,0, 0.1)', color: 'gray' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="step2"
                            iconStyle={{ background: 'rgba(0, 128, 0, 0.3)', color: '#fff' }}
                            icon={ <VscOpenPreview />}
                        >
                            <h3 className="text-slate-500 text-lg">접수</h3>
                            <p className="text-emerald-600 text-xl">수업신청 공문접수</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="step3"
                            contentStyle={{ background: 'rgba(0,128,0, 0.1)', color: 'gray' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: 'rgba(0, 128, 0, 0.3)', color: '#fff' }}
                            icon={<BiConversation />}
                        >
                            <h3 className="text-slate-500 text-lg">기관 방문</h3>
                            <p className="text-emerald-600 text-xl">현장 확인 / 상담</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="step4"
                            contentStyle={{ background: 'rgba(0,128,0, 0.1)', color: 'gray' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: 'rgba(0, 128, 0, 0.3)', color: '#fff' }}
                            icon={<GiTeacher />}
                        >
                            <h3 className="text-slate-500 text-lg">지도자 배치(2월~12월)</h3>
                            <p className="text-emerald-600 text-xl">지도자 배치 및 <br /> 생활 체육 서비스 진행</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="step5"
                            contentStyle={{ background: 'rgba(0,128,0, 0.1)', color: 'gray' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: 'rgba(0, 128, 0, 0.3)', color: '#fff' }}
                            icon={<MdFeedback />}
                        >
                            <h3 className="text-slate-500 text-lg">수업 종료(12월)</h3>
                            <p className="text-emerald-600 text-xl">설문 진행 및 피드백</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </section>
            <SubFooter/>
        </>
    )
}