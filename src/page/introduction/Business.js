import Navbar from "../../components/Navbar";
import join_soccer from "../../asset/image/join_soccer.jpg";
import SubFooter from "../../components/SubFooter";
import React, {useState} from "react";
import basketball from "../../asset/image/농구.jpg";
import baseball from "../../asset/image/baseball.jpg";
import hope from "../../asset/image/희망풍선.jpg";
import contest from "../../asset/image/도민체전.jpg";

export default function Business() {

    const [isOpen, setOpen] = useState(false)
    const [isOpenTab, setisOpen] = useState(0);

    const handleTabClick = (index) => {
        setisOpen(index);
    };

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">주요 사업</h3>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16" style={{backgroundColor : "#F6F6F6"}}>
                <div className="container relative">
                    <h3 className="md:text-4xl text-4xl md:leading-normal leading-normal font-semibold text-center mb-8">사업 비전</h3>
                    <p className="text-center text-2xl">"장애인의 건강증진과 건전한 여가생활 환경 조성"</p>
                </div>
            </section>

            {/*본문 내용 시작*/}
            <section className="relative md:py-24 py-16 ">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-5 md:col-span-5">
                            <div className="sticky top-20">
                                <ul className="flex-column text-center p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">대 회 개 최</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">전 문 체 육</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">생 활 체 육</button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-7 md:col-span-7">
                            <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                {isOpenTab === 0 ?
                                    <div id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <img src={hope} className="shadow rounded-md w-full" alt="" />
                                        <div className="mt-6">
                                            <p className="text-slate-500 mb-2 text-lg">- 하남시 장애인 한마음 체육대회 개최</p>
                                        </div>
                                    </div> : ""}
                                {isOpenTab === 1 ?
                                    <div  id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                        <img src={contest} className="shadow rounded-md" alt="" />
                                        <div className="mt-6">
                                            <p className="text-slate-500 mb-2 text-lg">- 경기도 장애인 체육대회 출전 지원</p>
                                            <p className="text-slate-500 mb-2 text-lg">- 전국 장애인 동계 체육대회 출전 지원</p>
                                            <p className="text-slate-500 mb-2 text-lg">- 전국 장애인 체육대회 출전 지원</p>
                                            <p className="text-slate-500 mb-2 text-lg">- 도 및 전국 규모 장애인 체육대회 입상선수 포상금 지급</p>
                                            <p className="text-slate-500 mb-2 text-lg">- 도 및 전국 규모 체육대회 출전 지원</p>
                                        </div>
                                    </div> :""
                                }
                                {isOpenTab === 2 ?
                                    <div  id="settings" role="tabpanel" aria-labelledby="settings-tab">
                                        <img src={basketball} className="shadow rounded-md" alt="" />
                                        <div className="mt-6">
                                            <p className="text-slate-500 mb-2 text-lg">- 경기도 장애인 생활 체육대회 출전 지원</p>
                                            <p className="text-slate-500 mb-2 text-lg">- 경기도 어울림 체육대회 출전 지원</p>
                                            <p className="text-slate-500 mb-2 text-lg">- 기타 장애인 체육대회 출전 지원</p>
                                            <p className="text-slate-500 mb-2 text-lg">- 장애인 생활체육 교실 운영</p>
                                            <p className="text-slate-500 mb-2 text-lg">- 장애인 생활체육 클럽 운영</p>
                                            <p className="text-slate-500 mb-2 text-lg">- 장애인생활체육지도자 배치</p>
                                            <p className="text-slate-500 mb-2 text-lg">- 경기도 장애인 생활체육지원 사업</p>
                                        </div>
                                    </div>:""
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SubFooter/>
        </>
    )
}