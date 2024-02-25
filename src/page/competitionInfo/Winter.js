import React from 'react'
import "../../../node_modules/react-modal-video/css/modal-video.css";
import Navbar from "../../components/Navbar";
import SubFooter from "../../components/SubFooter";
import join_soccer from "../../asset/image/join_soccer.jpg";
import 'react-vertical-timeline-component/style.min.css';
import winter from "../../asset/image/winter.png";


export default function Winter() {

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">전국 장애인 동계 체육대회</h3>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16" style={{backgroundColor : "#F6F6F6"}}>
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-6 md:col-span-6">
                            <img src={winter} className="shadow w-full rounded-md" alt="" />
                        </div>

                        <div className="lg:col-span-6 md:col-span-6">
                            <div className="lg:ms-5">
                                <h3 className="px-3 mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">전국 장애인 동계 체육대회</h3>

                                <p className="text-slate-500 max-w-xl m-3">동계스포츠에 대한 장애인 참여인구가 증가함에 따라 동계체육대회를 개최하게 되었다. 전국장애인동계체육대회를 통해 급변하는 국제 동계장애인스포츠에 능동적으로 대처하고 동계장애인 올림픽대회를 대비해 우수 선수와 신인 선수를 발굴, 육성코자 한다.</p>

                                <p className="text-slate-500 max-w-xl m-3">
                                    아가 2014년 동게올림픽대회를 유치할 수 있는 범국민적 분위기를 조성하고 장애인 동계스포츠에 대한 대국민 인식개선을 실현코자 한다.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16 ">
                <div className="container relative">
                    <h3 className="mb-12 md:text-3xl md:leading-normal lg:text-3xl md:text-3xl xs:text-xl leading-normal font-semibold text-center">경기 종목</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-md shadow-md p-8">
                            <h3 className="text-xl font-semibold mb-4">아이스슬레지하키 (Lce Sledge Hockey)</h3>
                            <p className="text-slate-500">아이스하키를 장애인들이 즐길 수 있도록 변형한 경기로 일반 아이스하키처럼 각 팀은 골키퍼 이외에 5명의 선수가 경기에 참가하며, 스피드와 함께 경기 중 과격한 충돌을 허용되는 다이내믹한 경기이다.</p>
                        </div>
                        <div className="bg-white rounded-md shadow-md p-8">
                            <h3 className="text-xl font-semibold mb-4">휠체어컬링 (Wheelchair Curling)</h3>
                            <p className="text-slate-500">동계장애인올림픽대회 정식 종목으로 남여 혼성 4인조로 구성된 휠체어선수 드팀이 화강암 재질의 둥근 돌을 빙판 위에서 밀어던져, 목표 구역 내 표적에 누가 더 가까이 접근시키느냐를 겨루는 경기이다.</p>
                        </div>
                        <div className="bg-white rounded-md shadow-md p-8">
                            <h3 className="text-xl font-semibold mb-4">알파인 스키 (Alpine Ski)</h3>
                            <p className="text-slate-500">앉아서 타는 싯스키(Sit Ski - 척추손상, 중증소아마비, 뇌성마비), 아웃리거(Outrigger)라 불리는 보조스키를 사용하는 쓰리트랙스키(3 Track Ski)와 포트랙스키(4 Track Ski), 그리고 시각장애인스키 등이 있다.</p>
                        </div>
                        <div className="bg-white rounded-md shadow-md p-8">
                            <h3 className="text-xl font-semibold mb-4">빙상 (Speed skating)</h3>
                            <p className="text-slate-500">발달장애인이 참여경기로 정식종목으로 남, 여 공통종목으로 11m, 333m, 555m와 남자종목으로 777m등이 있으며 스케이팅 기술이 부족한 선수를 위한 개발종목으로 25m 걷기 및 고깔 모으기 종목이 있다.</p>
                        </div>
                    </div>
                </div>
            </section>


            <SubFooter/>
        </>
    )
}