import Topnav from "../../../components/Topnav";
import {Link, useLocation} from "react-router-dom";
import Select from "react-select";
import React, {useEffect, useState} from "react";
import {fetchMemberById, updateMemberRoleStatus} from "../../../api/Api";
import Sidebar from "../../../components/Sidebar";

export default function UpdateMember() {
    const [toggle, setToggle] = useState(true);

    const [user , setUser] = useState({});
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [memberRole, setMemberRole] = useState('');
    const [memberStatus, setMemberStatus] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [guardianName, setGuardianName] = useState('');
    const [guardianPhone, setGuardianPhone] = useState('');
    const [birth, setBirth] = useState('');
    const [gender, setGender] = useState('');
    const [disabilityType, setDisabilityType] = useState('');

    const page_location = useLocation();
    const member_id = page_location.pathname.split("/")[2];


    useEffect (() => {
        const data = fetchMemberById(member_id);
        data.then((res) => {
            setUser(res);
            setId(res.id);
            setName(res.name);
            setMemberRole(res.memberRole);
            setMemberStatus(res.memberStatus);
            setPhone(res.phone);
            setLocation(res.address);
            setEmail(res.email);
            setGuardianName(res.guardianName);
            setGuardianPhone(res.guardianPhone);
            setBirth(res.birth);
            setGender(res.gender);
            setDisabilityType(res.disabilityType);
        });
    },[]);


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

    const roleOptions = [
        { value: 'ADMIN', label: '관리자' },
        { value: 'USER', label: '사용자' },
        { value: 'GUEST', label: '손님' }
    ]

    const statusOptions = [
        { value: 'ACTIVE', label: '활동계정' },
        { value: 'BLOCKED', label: '차단계정' },
        { value: 'DORMANT', label: '휴면계정' }
    ]

    const updateMember = async () => {

        let memberRequestDto = {
            name: name,
            gender: gender?.value, // Use gender.value to get the selected value
            phone,
            address: location,
            email,
            guardianName,
            guardianPhone,
            disabilityType: disabilityType?.value,
            memberStatus: memberStatus.value,
            memberRole: memberRole.value,
            birth,
        };

        if (memberRequestDto.gender == null) {
            memberRequestDto.gender = user.gender;
        }
        if (memberRequestDto.disabilityType == null) {
            memberRequestDto.disabilityType = user.disabilityType;
        }
        if (memberRequestDto.memberStatus == null) {
            memberRequestDto.memberStatus = user.memberStatus;
        }
        if (memberRequestDto.memberRole == null) {
            memberRequestDto.memberRole = user.memberRole;
        }

        try {
            console.log("Member update request:", memberRequestDto);
            const response = await fetch(`/member?id=${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(memberRequestDto),
            });

            if (response.ok) {
                alert("회원 정보가 수정되었습니다.");
                window.location.href = "/admin-member";
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
                <Sidebar />
                <main className="page-content bg-gray-50 dark:bg-slate-800 h-full">
                    <Topnav toggle={toggle} setToggle={setToggle} />

                    <div className="flex justify-center mt-32">
                        <div className="w-full h-full grid md:grid-cols-12 grid-cols-1 gap-[30px] dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md m-auto mx-6 px-12 pb-16 pt-5">
                            <div className="lg:col-span-6 md:col-span-6">

                                <h5 className="my-6 text-xl font-semibold">회원 정보 수정하기</h5>

                                <div className="mb-4">
                                    <label className="font-semibold mr-2" htmlFor="id">아이디 :</label>
                                    <input id="id" type="text" className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={id} readOnly />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="name">이름 :</label>
                                    <input id="name" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={name} readOnly />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="gender">성별 :</label>
                                    <Select
                                        id="gender"
                                        className="my-3 border border-gray-200 rounded-md px-2"
                                        options={genderOptions}
                                        value={genderOptions.find(option => option.value === gender)}
                                        onChange={(selectedOption) => setGender(selectedOption)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="phone">전화번호 :</label>
                                    <input id="phone" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="location">주소 :</label>
                                    {/*<Link className="mx-4 py-0.5 px-1 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center border-green-600 text-green-600 rounded-md me-2 text-sm">주소찾기</Link>*/}
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
                                    <Select
                                        id="memberRole"
                                        className="my-3 border border-gray-200 rounded-md px-2"
                                        options={roleOptions}
                                        value={roleOptions.find(option => option.value === memberRole)}
                                        onChange={(selectedOption) => setMemberRole(selectedOption)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="memberStatus">상태 :</label>
                                    <Select
                                        id="memberStatus"
                                        className="my-3 border border-gray-200 rounded-md px-2"
                                        options={statusOptions}
                                        value={statusOptions.find(option => option.value === memberStatus)}
                                        onChange={(selectedOption) => setMemberStatus(selectedOption)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="disabilityType">장애 유형 :</label>
                                    <Select
                                        id="disability_type"
                                        className="my-3 border border-gray-200 rounded-md px-2"
                                        options={disabilityTypeOptions}
                                        value={disabilityTypeOptions.find(option => option.value === disabilityType)}
                                        onChange={(selectedOption) => setDisabilityType(selectedOption)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="birth">생년월일 :</label>
                                    <input id="birth" type="date" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={birth} onChange={(e) => setBirth(e.target.value)} />
                                </div>

                                <div className="mt-12">
                                    <Link onClick={() => updateMember()} className="w-full py-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">회원 정보 수정 완료하기</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};
