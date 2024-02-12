import MySidebar from "../../components/MySidebar";
import Topnav from "../../components/Topnav";
import React, {useContext, useEffect, useState} from "react";
import Select from "react-select";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../auth/AuthContext";

export default function MyApplicationDetails() {
    const location = useLocation();
    const param = location.pathname.split("/")[2];

    const [toggle, setToggle] = React.useState(true);
    const [application, setApplication] = React.useState({});

    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [guardianName, setGuardianName] = useState("");
    const [guardianPhone, setGuardianPhone] = useState("");
    const [remarks, setRemarks] = useState("");
    const [gender, setGender] = useState("");
    const [disabilityType, setDisabilityType] = useState("");


    const genderOptions = [
        { value: '0', label: '선택하세요' },
        { value: '1', label: '남성' },
        { value: '2', label: '여성' },
    ];

    const disabilityTypeOptions = [
        { value: '0', label: '선택하세요' },
        { value: '1', label: '시각장애' },
        { value: '2', label: '청각장애' },
        { value: '3', label: '언어장애' },
        { value: '4', label: '지체장애' },
        { value: '5', label: '지적장애' },
        { value: '6', label: '정신장애' },
        { value: '7', label: '복합장애' },
        { value: '8', label: '기타' },
        { value: '9', label: '해당없음' },
    ];

    useEffect(() => {
        fetchApplication();
    }, []);

    const fetchApplication = async () => {
        try {
            const response = await fetch(`/application?id=${param}`);
            if (response.ok) {
                const data = await response.json();
                setApplication(data.data);
                setPhone(data.data.phone);
                setAddress(data.data.address);
                setGuardianName(data.data.guardianName);
                setGuardianPhone(data.data.guardianPhone);
                setRemarks(data.data.remarks);
                setGender(data.data.gender);
                setDisabilityType(data.data.disabilityType);
            } else {
                console.error("프로그램을 가져오는 중 오류 발생:", response.statusText);
            }
        } catch (error) {
            console.error("프로그램을 가져오는 중 오류 발생:", error);
        }
    };

    const GenderToEnum = (value) => {
        switch (value) {
            case '1':
                return "MEN";
            case '2':
                return "WOMEN";
            default:
                return "";
        }
    };

    const DisabilityTypeToEnum = (value) => {
        switch (value) {
            case '1':
                return "VISUAL";
            case '2':
                return "DEAF";
            case '3':
                return "MUTE";
            case '4':
                return "PHYSICAL";
            case '5':
                return "INTELLECTUAL";
            case '6':
                return "MENTAL";
            case '7':
                return "COMPLEX";
            case '8':
                return "ETC";
            case '9':
                return "NONE";
            default:
                return "";
        }
    };

    const updateApplication = async () => {
        const applicationRequestDto = {
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value,
            guardianName: document.getElementById('guardianName').value,
            guardianPhone: document.getElementById('guardianPhone').value,
            remarks: document.getElementById('etc').value,
            // gender: GenderToEnum(document.getElementById('gender').value),
            // disabilityType: DisabilityTypeToEnum(document.getElementById('disability_type').value)
        };
        try {
            console.log("회원 정보 업데이트 요청:", applicationRequestDto);
            const response = await fetch(`/application?id=${application.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(applicationRequestDto),
            });

            if (response.ok) {
                const data = await response.json();
                // 필요한 경우 성공적인 업데이트 후 상태를 업데이트하거나 작업 수행
                alert("신청서가 수정되었습니다.");
            } else {
                console.error("회원 정보 업데이트 중 오류 발생:", response.statusText);
            }
        } catch (error) {
            console.error("회원 정보 업데이트 중 오류 발생:", error);
        }
    };

    return (
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <MySidebar />
                <main className="page-content bg-gray-50 dark:bg-slate-800 h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle} />

                    <div className="container relative flex justify-center mt-32">
                        <div className="w-full grid md:grid-cols-12 grid-cols-1 gap-[30px] dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md p-8">
                            <div className="lg:col-span-6 md:col-span-6">
                                <h5 className="my-6 text-xl font-semibold">생활 체육 프로그램 온라인 신청서</h5>

                                <div className="mb-4">
                                    <label className="font-semibold mr-2" htmlFor="name">이름 :</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        value={application.member?.name}
                                        readOnly
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="birth">생년월일 :</label>
                                    <input
                                        id="birth"
                                        type="text"
                                        className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        value={application.member?.birth}
                                        readOnly
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="phone">전화번호 :</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        placeholder="전화번호를 입력하세요"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        readOnly
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="address">주소 :</label>
                                    <input
                                        id="address"
                                        type="text"
                                        className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        placeholder="주소를 입력하세요"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold mr-2 block" htmlFor="gender">성별 :</label>
                                    <Select
                                        id="gender"
                                        className="my-3"
                                        options={genderOptions}
                                        defaultValue={{ label: application.gender === '1' ? '남성' : '여성', value: application.gender || '0' }}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold block" htmlFor="disability_type">장애유형 :</label>
                                    <Select
                                        id="disability_type"
                                        options={disabilityTypeOptions}
                                        defaultValue={{ label: application.disabilityType || '선택하세요', value: application.disabilityType || '0' }}
                                    />
                                </div>
                            </div>

                            <div className="lg:col-span-6 md:col-span-6 lg:mt-16">
                                <div className="mb-4 mt-3">
                                    <label className="font-semibold mr-2" htmlFor="programName">프로그램명 :</label>
                                    <input
                                        id="programName"
                                        type="text"
                                        className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        value={application.program?.name}
                                        readOnly
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold mr-2" htmlFor="guardianName">보호자 이름 :</label>
                                    <input
                                        id="guardianName"
                                        type="text"
                                        className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        placeholder="보호자 이름을 입력하세요"
                                        value={guardianName}
                                        onChange={(e) => setGuardianName(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="guardianPhone">보호자 연락처 :</label>
                                    <input
                                        id="guardianPhone"
                                        type="tel"
                                        className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        placeholder="보호자 전화번호를 입력하세요"
                                        value={guardianPhone}
                                        onChange={(e) => setGuardianPhone(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="etc">기타사항 :</label>
                                    <textarea
                                        id="etc"
                                        style={{ resize: "none" }}
                                        className="form-input mt-3 w-full py-2 px-3 h-32 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        value={remarks}
                                        onChange={(e) => setRemarks(e.target.value)}
                                    />
                                </div>

                                <div className="mt-8">
                                    <Link
                                        onClick={() => updateApplication()}
                                        className="w-full py-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2"
                                    >
                                        신청서 수정하기
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
