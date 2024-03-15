import Topnav from "../../components/Topnav";
import { Link } from "react-router-dom";
import Select from "react-select";
import React, { useContext, useState } from "react";
import MySidebar from "../../components/MySidebar";
import authContext from "../../auth/AuthContext";

export default function MyInfo() {
    const [toggle, setToggle] = useState(true);
    const context = useContext(authContext);

    const [phone, setPhone] = useState(context.user?.phone || '');
    const [location, setLocation] = useState(context.user?.address || '');
    const [email, setEmail] = useState(context.user?.email || '');
    const [guardianName, setGuardianName] = useState(context.user?.guardianName || '');
    const [guardianPhone, setGuardianPhone] = useState(context.user?.guardianPhone || '');
    const [birth, setBirth] = useState(context.user?.birth || '');
    const [gender, setGender] = useState(String(context.user?.gender) || '');
    const [disabilityType, setDisabilityType] = useState(String(context.user?.disabilityType) || '');

    const genderOptions = [
        { value: 'NULL', label: '선택하세요' },
        { value: 'MEN', label: "남성" },
        { value: 'WOMEN', label: "여성" },
    ]

    const disabilityTypeOptions = [
        { value: 'NULL', label: '선택하세요' },
        { value: 'BLIND', label: '시각장애' },
        { value: 'DEAF', label: '청각장애' },
        { value: 'MUTE', label: '언어장애' },
        { value: 'PHYSICAL', label: '지체장애' },
        { value: 'INTELLECTUAL', label: '지적장애' },
        { value: 'MENTAL', label: '정신장애' },
        { value: 'MULTIPLE', label: '복합장애' },
        { value: 'ETC', label: '기타' },
        { value: 'NONE', label: '해당없음' }
    ]

    const updateMember = async () => {
        const memberRequestDto = {
            name: context.user?.name,
            gender: gender.value, // Use gender.value to get the selected value
            phone,
            address: location,
            email,
            guardianName,
            guardianPhone,
            memberRole: context.user?.memberRole,
            memberStatus: context.user?.memberStatus,
            disabilityType: disabilityType.value,  // Use disabilityType.value to get the selected value
            birth,
        };

        try {
            console.log("Member update request:", memberRequestDto);
            const response = await fetch(`/member?id=${context.user?.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(memberRequestDto),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Member updated successfully:", data);
                // Update any necessary state or perform actions after a successful update
                alert("회원 정보가 수정되었습니다.");
            } else {
                console.error("Error updating member:", response.statusText);
            }
        } catch (error) {
            console.error("Error updating member:", error);
        }
    };

    return (
        <>
            <div className={`page-wrapper ${toggle ? "toggled" : ""}`}>
                <MySidebar />
                <main className="page-content bg-gray-50 dark:bg-slate-800 h-full">
                    <Topnav toggle={toggle} setToggle={setToggle} />

                    <div className="flex justify-center mt-32">
                        <div className="w-full h-full grid md:grid-cols-12 grid-cols-1 gap-[30px] dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md m-auto mx-6 px-12 pb-16 pt-5">
                            <div className="lg:col-span-6 md:col-span-6">

                                <h5 className="my-6 text-xl font-semibold">내 정보 수정하기</h5>

                                <div className="mb-4">
                                    <label className="font-semibold mr-2" htmlFor="id">아이디 :</label>
                                    <input id="id" type="text" className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.id} readOnly />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="name">이름 :</label>
                                    <input id="name" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.name} readOnly />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="gender">성별 :</label>
                                    <Select
                                        id="gender"
                                        className="my-3"
                                        options={genderOptions}
                                        value={gender}
                                        onChange={(selectedOption) => setGender(selectedOption)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="phone">전화번호 :</label>
                                    <input id="phone" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="location">주소 :</label>
                                    <Link className="mx-4 py-0.5 px-1 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center border-green-600 text-green-600 rounded-md me-2 text-sm">주소찾기</Link>
                                    <input id="location" type="address"
                                           className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                           value={location}
                                           onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="email">이메일 :</label>
                                    <input id="email" type="email"
                                           className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="lg:col-span-6 md:col-span-6 lg:mt-16 pt-3">
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
                                    <label className="font-semibold" htmlFor="memberRole">권한 :</label>
                                    <input id="memberRole" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                           value={context.user?.memberRole}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="memberStatus">상태 :</label>
                                    <input id="memberStatus" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={context.user?.memberStatus} />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="disabilityType">장애 유형 :</label>
                                    <Select
                                        id="disability_type"
                                        options={disabilityTypeOptions}
                                        value={disabilityTypeOptions.label}
                                        onChange={(selectedOption) => setDisabilityType(selectedOption)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="birth">생년월일 :</label>
                                    <input id="birth" type="date" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={birth} onChange={(e) => setBirth(e.target.value)} />
                                </div>

                                <div className="mt-12">
                                    <Link to="#" onClick={() => updateMember()} className="w-full py-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">내 정보 수정 완료하기</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
