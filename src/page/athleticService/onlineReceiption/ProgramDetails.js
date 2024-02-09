import React, {useContext, useEffect, useState} from 'react'
import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import {Link, useLocation} from "react-router-dom";
import join_soccer from "../../../asset/image/join_soccer.jpg";
import Select from "react-select";
import AuthContext from "../../../auth/AuthContext";

export default function ProgramDetails() {

    const location = useLocation();
    const param = location.pathname.split("/")[2];
    const [program, setProgram] = useState({});
    const [toggle, setToggle] = useState(false);

    const context = useContext(AuthContext);

    const disabilityTypeOptions = [
        { value: '0', label: '선택하세요'},
        { value: '1', label: '시각장애' },
        { value: '2', label: '청각장애' },
        { value: '3', label: '언어장애' },
        { value: '4', label: '지체장애' },
        { value: '5', label: '지적장애' },
        { value: '6', label: '정신장애' },
        { value: '7', label: '복합장애' },
        { value: '8', label: '기타' },
        { value: '9', label: '해당없음'}
    ]

    const genderOptions = [
        { value: '0', label: '선택하세요'},
        { value: '1', label: '남성' },
        { value: '2', label: '여성' },
    ]

    const handleToggle = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        fetchProgram();
    }, []);

    const fetchProgram = async () => {
        try {
            const response = await fetch(`/program?id=${param}`);
            if (response.ok) {
                const data = await response.json();
                setProgram(data.data);
                console.log(data.data);
            } else {
                console.error("Error fetching program:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching program:", error);
        }
    }

    const handleStatus = (status) => {
        if (status === "ACCEPTING") {
            return "접수중";
        }else if (status === "WAITING") {
            return "대기중";
        }else if (status === "COMPLETED") {
            return "마감";
        }else if (status === "HOLDING") {
            return "보류";
        }
    }

    const handleGender = (gender) => {
        if (gender === "MEN") {
            return 1;
        }else if (gender === "WOMEN") {
            return 2;
        }else {
            return 0;
        }
    }

    const handleDisabilityType = (disabilityType) => {
        if (disabilityType === "BLIND") {
            return 1;
        }else if (disabilityType === "DEAF") {
            return 2;
        }else if (disabilityType === "MUTE") {
            return 3;
        }else if (disabilityType === "PHYSICAL") {
            return 4;
        }else if (disabilityType === "INTELLECTUAL") {
            return 5;
        }else if (disabilityType === "MENTAL") {
            return 6;
        }else if (disabilityType === "MULTIPLE") {
            return 7;
        }else if (disabilityType === "ETC") {
            return 8;
        }else if (disabilityType === "NONE"){
            return 9;
        }else {
            return 0;
        }
    }

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-8 lg:py-24 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">온라인 접수</h3>
                    </div>
                </div>
            </section>

            <section className="relative md:pb-12 md:pt-24 pb-8 pt-12">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-6">
                            <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                                <img src={`${process.env.PUBLIC_URL}/${program.thumbnail}`} className="rounded-md m-auto" alt="" width="50%"/>

                                <div className="text-center mt-8">
                                    <span className="inline-block text-white text-lg px-2.5 py-0.5 rounded-full border-2 font-bold"
                                            style={{backgroundColor : "skyblue", borderColor : "skyblue"}}>{handleStatus(program.programStatus)}</span>
                                    <h3 className="my-3 text-[26px] font-semibold">{program.name}</h3>

                                    <ul className="list-none mt-6">
                                        <li className="inline-block font-semibold text-slate-400 mx-4"> <span className="text-slate-900 dark:text-white block">모집인원 :</span> <span className="block">{program.available}명</span></li>
                                        <li className="inline-block font-semibold text-slate-400 mx-4"> <span className="text-slate-900 dark:text-white block">모집기한 :</span> <span className="block">{program.applyEnd?.slice(0,10)} {program.applyEnd?.slice(11,16)}</span></li>
                                    </ul>
                                </div>

                                <div className="mt-6">
                                    <p className="text-slate-400" style={{lineHeight : "35px"}}>
                                        {program.description}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Link onClick={handleToggle} className="w-full py-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">
                                    {toggle === false ? "프로그램 신청하기" : "신청서 닫기"}
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6">
                            <div>
                                <div className="sticky top-20">
                                    <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">신청 정보</h5>
                                    <div className="text-center mt-8">
                                        <table className="w-full text-start text-slate-500">
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden">프로그램 이름 :</td>
                                                <td className="xs:px-2 p-4">{program.name}</td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden">모집 인원 : </td>
                                                <td className="xs:px-2 p-4">{program.available}명</td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden">참가비 : </td>
                                                <td className="xs:px-2 p-4">{program.cost}</td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden">참가 장애인 유형 : </td>
                                                <td className="xs:px-2 p-4">전체</td>
                                            </tr>
                                        </table>
                                    </div>

                                    <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-12">상세 정보</h5>
                                    <div className="text-center mt-8">
                                        <table className="w-full text-start text-slate-500">
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden">장소 : </td>
                                                <td className="xs:px-2 p-4">{program.location}</td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden">시작 날짜 : </td>
                                                <td className="xs:px-2 p-4">{program.startDate}</td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden">종료 날짜 : </td>
                                                <td className="xs:px-2 p-4">{program.endDate}</td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden">진행 시간 : </td>
                                                <td className="xs:px-2 p-4">{program.time}분</td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden">준비물 : </td>
                                                <td className="xs:px-2 p-4">{program.material}</td>
                                            </tr>
                                        </table>
                                    </div>

                                    <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-12">문의</h5>
                                    <div className="text-center mt-8">
                                        <table className="w-full text-start text-slate-500">
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden">담당자 : </td>
                                                <td className="xs:px-2 p-4">{program.manager?.name}</td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 p-4 xs:hidden">전화번호 : </td>
                                                <td className="xs:px-2 p-4">{program.manager?.phone}</td>
                                            </tr>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {toggle && (
            <section className="relative md:pb-24 pb-16">
                <div className="container relative flex justify-center">
                    <div className="w-full grid md:grid-cols-12 grid-cols-1 gap-[30px] dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md p-8">
                        <div className="lg:col-span-6 md:col-span-6">

                            <h5 className="my-6 text-xl font-semibold">생활 체육 프로그램 온라인 신청서</h5>

                            <div className="mb-4">
                                <label className="font-semibold mr-2" htmlFor="name">이름 :</label>
                                <input id="name" type="text" className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.name} readOnly/>
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold" htmlFor="birth">생년월일 :</label>
                                <input id="birth" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.birth} readOnly />
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold" htmlFor="phone">전화번호 :</label>
                                <input id="phone" type="tel" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.phone} />
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold" htmlFor="email">이메일:</label>
                                <input id="email" type="email" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.email} />
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold mr-2 block" htmlFor="gender">성별 :</label>
                                <Select id="gender" className="my-3" options={genderOptions} defaultValue={genderOptions[handleGender(context.user?.gender)]}/>
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold block" htmlFor="disabilityType">장애유형 :</label>
                                <Select id="disabilityType" options={disabilityTypeOptions} defaultValue={disabilityTypeOptions[handleDisabilityType(context.user?.disabilityType)]}/>
                            </div>
                        </div>

                        <div className="lg:col-span-6 md:col-span-6 lg:mt-16">
                            <div className="mb-4 mt-3">
                                <label className="font-semibold mr-2" htmlFor="programName">프로그램명 :</label>
                                <input id="programName" type="text" className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={program.name} readOnly/>
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold mr-2" htmlFor="guardianName">보호자 이름 :</label>
                                <input id="guardianName" type="text" className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="보호자 이름을 입력하세요" value={context.user?.guardianName} />
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold" htmlFor="guardianPhone">보호자 연락처 :</label>
                                <input id="guardianPhone" type="tel" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="보호자 전화번호를 입력하세요" value={context.user?.guardianPhone} />
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold" htmlFor="address">주소 :</label>
                                <input id="address" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="주소를 입력하세요" value={context.user?.address}/>
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold" htmlFor="etc">기타사항 :</label>
                                <input id="etc" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="기타사항을 입력하세요" />
                            </div>

                            <div className="mt-12">
                                <Link to="/#" className="w-full py-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">신청서 전송하기</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                )}
            <SubFooter/>
        </>
    )
}
