import Sidebar from "../../../components/Sidebar";
import Topnav from "../../../components/Topnav";
import React, {useEffect, useState} from "react";
import Select from "react-select";
import {Link} from "react-router-dom";

export default function ProgramForm() {
    const [toggle, setToggle] = useState(true);
    const [admins, setAdmins] = useState([]);
    const [adminOptions, setAdminOptions] = useState([]);
    const [selectedManager, setSelectedManager] = useState(null);

    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
            try {
                const response = await fetch('/member/admin', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setAdmins(data);
                setAdminOptions(data.data && data.data.map(admin => ({value: admin.id, label: admin.name})));

                // 여기서 서버 응답에 대한 추가적인 처리를 수행할 수 있습니다.

            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
    }

    const handleProgramAdd = async () => {
        try {
            const applyEnd = document.getElementById("applyEnd").value;
            const applyEndTime = document.getElementById("applyEndTime").value;

            const programData = {
                name: document.getElementById("name").value,
                available: parseInt(document.getElementById("available").value),
                location: document.getElementById("location").value,
                time: parseInt(document.getElementById("time").value),
                cost: document.getElementById("cost").value,
                material: document.getElementById("material").value,
                managerId: selectedManager ? selectedManager.value : null,
                applyEnd: `${applyEnd}T${applyEndTime}:00.000Z`,
                startDate: document.getElementById("startDate").value,
                endDate: document.getElementById("endDate").value,
                description: document.getElementById("description").value,
            };

            const response = await fetch('/program', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(programData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log("Program added successfully:", responseData);

            // 프로그램이 성공적으로 추가되면 추가적인 작업을 수행할 수 있습니다.
            alert("프로그램이 성공적으로 추가되었습니다.");
            window.location.reload();

        } catch (error) {
            console.error("Error adding program:", error.message);
        }
    };


    return (
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <Sidebar />
                <main className="page-content bg-gray-50 dark:bg-slate-800 h-full">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="container relative flex justify-center mt-32">
                        <div className="w-full grid md:grid-cols-12 grid-cols-1 gap-[30px] dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md p-8">
                            <div className="lg:col-span-6 md:col-span-6">

                                <h5 className="my-6 text-xl font-semibold">프로그램 추가</h5>

                                <div className="mb-4">
                                    <label className="font-semibold mr-2" htmlFor="name">프로그램명 :</label>
                                    <input id="name" type="text" className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="프로그램명을 입력하세요."/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="available">최대인원 :</label>
                                    <input id="available" type="number" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="숫자만 입력하세요 (명)"/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="location">장소 :</label>
                                    <Link className="mx-4 py-0.5 px-1 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center border-green-600 text-green-600 rounded-md me-2 text-sm">주소찾기</Link>
                                    <input id="location" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="주소를 입력하세요."/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="time">진행시간 :</label>
                                    <input id="time" type="number" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="숫자만 입력하세요 (분)"/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="cost">참가비 :</label>
                                    <input id="cost" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value="무료" readOnly/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="material">준비물 :</label>
                                    <input id="material" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="준비물을 입력하세요."/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold mr-2 block" htmlFor="manager">담당자 :</label>
                                    <Select
                                        id="manager"
                                        className="my-3"
                                        options={adminOptions}
                                        value={selectedManager}
                                        onChange={(selectedOption) => setSelectedManager(selectedOption)}
                                        placeholder="담당자를 선택하세요"
                                    />
                                </div>

                            </div>

                            <div className="lg:col-span-6 md:col-span-6 lg:mt-16">
                                <div className="mb-4 mt-3">
                                    <label className="font-semibold mr-2 block" htmlFor="applyEnd">접수 기한 :</label>
                                    <input id="applyEnd" type="date" className="form-input mt-3 py-2 w-56 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"/>
                                    <input id="applyEndTime" type="time" className="form-input mt-3 py-2 w-56 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold mr-2" htmlFor="startDate">시작 날짜 :</label>
                                    <input id="startDate" type="date" className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="endDate">종료 날짜 :</label>
                                    <input id="endDate" type="date" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="thumbnail">대표 이미지 :</label>
                                    <input id="thumbnail" type="file" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="description">프로그램 설명 :</label>
                                    <textarea id="description" style={{resize:"none"}} className="form-input mt-3 w-full py-2 px-3 h-32 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="설명을 입력하세요" />
                                </div>

                                <div className="mt-12">
                                    <Link onClick={handleProgramAdd} className="w-full py-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">프로그램 추가하기</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </>
    );
}