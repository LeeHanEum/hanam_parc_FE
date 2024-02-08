import React, {useEffect} from 'react'
import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import rowing from "../../../asset/image/affiliate/조정.jpg";
import {Link, useLocation} from "react-router-dom";

export default function ProgramDetails() {

    const location = useLocation();
    const programId = location.state ? location.state.programId : null;

    useEffect(() => {
        console.log(programId);
    }, []);



    return (
        <>
            <Navbar />
            <section className="relative md:pb-24 md:pt-40 pb-16 pt-36">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-6">
                            <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                                <img src={rowing} className="rounded-md m-auto" alt="" width="50%"/>

                                <div className="text-center mt-8">
                                    <span className="inline-block text-white text-lg px-2.5 py-0.5 rounded-full border-2 font-bold"
                                            style={{backgroundColor : "skyblue", borderColor : "skyblue"}}>접수중</span>
                                    <h3 className="my-3 text-[26px] font-semibold">하남시 장애인 조정 대회</h3>

                                    <ul className="list-none mt-6">
                                        <li className="inline-block font-semibold text-slate-400 mx-4"> <span className="text-slate-900 dark:text-white block">모집인원 :</span> <span className="block">30명</span></li>
                                        <li className="inline-block font-semibold text-slate-400 mx-4"> <span className="text-slate-900 dark:text-white block">모집기한 :</span> <span className="block">2024-02-18</span></li>
                                    </ul>
                                </div>

                                <div className="mt-6">
                                    <p className="text-slate-400">
                                        이 행사는 하남시 장애인 체육회에서 선도적으로 주관하는 장애인 조정대회로, 참가비가 무료로 제공됩니다. <br/>이를 통해 장애인들은 접근성 있는 환경에서 스포츠에 참여하고 뛰어난 실력을 겨루며 자신의 잠재력을 발휘할 수 있습니다. <br/>무료 참가비는 모든 장애인들에게 평등한 참여 기회를 제공하며, 지역 사회의 다양한 장애인들이 함께 모여 즐거운 대회를 즐길 수 있습니다. <br/>또한, 이 행사는 지역사회와의 상호작용을 통해 장애인 스포츠에 대한 인식과 이해를 높이며, 사회의 통합과 다양성 증진에 기여하는 중요한 행사로 자리잡고 있습니다.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Link to="/receipt-form" className="w-full py-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">프로그램 신청하기</Link>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6">
                            <div>
                                <div className="sticky top-20">
                                    <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">신청 정보</h5>
                                    <div className="text-center mt-8">
                                        <table className="w-full text-start text-slate-500">
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden"><Link className="flex items-center">프로그램 이름 : </Link></td>
                                                <td className="xs:px-2 p-4"><Link className="flex items-center">하남시 장애인 조정 대회</Link></td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden"><Link className="flex items-center">모집 인원 : </Link></td>
                                                <td className="xs:px-2 p-4"><Link className="flex items-center">30명</Link></td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden"><Link className="flex items-center">참가비 : </Link></td>
                                                <td className="xs:px-2 p-4"><Link className="flex items-center">무료</Link></td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden"><Link className="flex items-center">참가 장애인 유형 : </Link></td>
                                                <td className="xs:px-2 p-4"><Link className="flex items-center">전체</Link></td>
                                            </tr>
                                        </table>
                                    </div>

                                    <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-12">상세 정보</h5>
                                    <div className="text-center mt-8">
                                        <table className="w-full text-start text-slate-500">
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden"><Link className="flex items-center">장소 : </Link></td>
                                                <td className="xs:px-2 p-4"><Link className="flex items-center">하남시 스타디움</Link></td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden"><Link className="flex items-center">시작 날짜 : </Link></td>
                                                <td className="xs:px-2 p-4"><Link className="flex items-center">2024-03-04</Link></td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden"><Link className="flex items-center">종료 날짜 : </Link></td>
                                                <td className="xs:px-2 p-4"><Link className="flex items-center">2024-04-30</Link></td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden"><Link className="flex items-center">진행 시간 : </Link></td>
                                                <td className="xs:px-2 p-4"><Link className="flex items-center">각 120분</Link></td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden"><Link className="flex items-center">준비물 : </Link></td>
                                                <td className="xs:px-2 p-4"><Link className="flex items-center">마른 수건, 여벌의 옷</Link></td>
                                            </tr>
                                        </table>
                                    </div>

                                    <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-12">문의</h5>
                                    <div className="text-center mt-8">
                                        <table className="w-full text-start text-slate-500">
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden"><Link className="flex items-center">담당자 : </Link></td>
                                                <td className="xs:px-2 p-4"><Link className="flex items-center">김똑똑</Link></td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden"><Link className="flex items-center">전화번호 : </Link></td>
                                                <td className="xs:px-2 p-4"><Link className="flex items-center">010-1234-5678</Link></td>
                                            </tr>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <SubFooter/>
        </>
    )
}
