import Sidebar from "../../../components/Sidebar";
import Topnav from "../../../components/Topnav";
import React, {useEffect, useState} from "react";
import Select from "react-select";
import {uploadProgramThumbnail} from "../../../api/Api";

export default function ProgramForm() {
    const [toggle, setToggle] = useState(true);
    const [name, setName] = useState('');
    const [available, setAvailable] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');
    const [cost, setCost] = useState('');
    const [material, setMaterial] = useState('');
    const [selectedManager, setSelectedManager] = useState(null);
    const [applyEnd, setApplyEnd] = useState('');
    const [applyEndTime, setApplyEndTime] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState([]);

    const [admins, setAdmins] = useState([]);
    const [adminOptions, setAdminOptions] = useState([]);

    useEffect(() => {
        fetchAdmins();
    }, []);

    const handleImageChange = (e) => {
        setThumbnail([...e.target.files]);
    }


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
            setAdminOptions(data.data && data.data.map(admin => ({ value: admin.id, label: admin.name })));

        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };


    const handleProgramAdd = async () => {
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('available', available);
            formData.append('location', location);
            formData.append('time', time);
            formData.append('cost', "무료");
            formData.append('material', material);
            formData.append('managerId', selectedManager ? selectedManager.value : null);
            formData.append('applyEnd', `${applyEnd}T${applyEndTime}`);
            formData.append('startDate', startDate);
            formData.append('endDate', endDate);
            formData.append('description', description);

            // Make a POST request using fetch
            const response = await fetch('/program/create', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            const id = responseData.data;

            await uploadProgramThumbnail(id, thumbnail)

            alert("프로그램이 성공적으로 추가되었습니다.");

        } catch (error) {
            console.error("Error adding program:", error.message);
        }
    };

    return (
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <Sidebar />
                <main className="page-content bg-gray-50 dark:bg-slate-800 h-full">
                    <Topnav toggle={toggle} setToggle={setToggle} />

                    <div className="flex justify-center mt-24">
                        <div className="w-full h-full grid md:grid-cols-12 grid-cols-1 gap-[30px] dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md m-auto mx-6 px-12 pb-16 pt-5">
                            <div className="lg:col-span-6 md:col-span-6">
                                <h5 className="my-6 text-xl font-semibold">프로그램 추가</h5>

                                <div className="mb-4">
                                    <label className="font-semibold mr-2" htmlFor="name">프로그램명 :</label>
                                    <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="프로그램명을 입력하세요." />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="available">최대인원 :</label>
                                    <input id="available" type="number" value={available} onChange={(e) => setAvailable(e.target.value)} className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="숫자만 입력하세요 (명)" />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="location">장소 :</label>
                                    <input id="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="주소를 입력하세요." />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="time">진행시간 :</label>
                                    <input id="time" type="number" value={time} onChange={(e) => setTime(e.target.value)} className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="숫자만 입력하세요 (분)" />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="cost">참가비 :</label>
                                    <input id="cost" type="text" value="무료" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" readOnly />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="material">준비물 :</label>
                                    <input id="material" type="text" value={material} onChange={(e) => setMaterial(e.target.value)} className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="준비물을 입력하세요." />
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
                                    <input id="applyEnd" type="date" value={applyEnd} onChange={(e) => setApplyEnd(e.target.value)} className="form-input mt-3 py-2 w-56 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" />
                                    <input id="applyEndTime" type="time" value={applyEndTime} onChange={(e) => setApplyEndTime(e.target.value)} className="form-input mt-3 py-2 w-56 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold mr-2" htmlFor="startDate">시작 날짜 :</label>
                                    <input id="startDate" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="form-input mt-3 py-2 w-full px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="endDate">종료 날짜 :</label>
                                    <input id="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="thumbnail">대표 이미지 :</label>
                                    <input
                                        id="thumbnail"
                                        type="file"
                                        onChange={handleImageChange}
                                        className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="description">프로그램 설명 :</label>
                                    <textarea id="description" style={{ resize: "none" }} value={description} onChange={(e) => setDescription(e.target.value)} className="form-input mt-3 w-full py-2 px-3 h-32 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="설명을 입력하세요" />
                                </div>

                                <div className="mt-12">
                                    <button onClick={handleProgramAdd} className="w-full py-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">프로그램 추가하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
