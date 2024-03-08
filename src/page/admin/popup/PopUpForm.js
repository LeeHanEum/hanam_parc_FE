import Sidebar from "../../../components/Sidebar";
import Topnav from "../../../components/Topnav";
import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

export default function PopUpForm() {
    const [toggle, setToggle] = useState(true);
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [size, setSize] = useState('');
    const [isShow, setIsShow] = useState(false);

    const isShowOptions = [
        { value: true, label: '노출' },
        { value: false, label: '비노출' }
    ];

    const handleFileChange = (e) => {
        // Update the state for the file input
        setUrl(e.target.files[0]);
    };

    return (
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <Sidebar />
                <main className="page-content bg-gray-50 dark:bg-slate-800 h-full">
                    <Topnav toggle={toggle} setToggle={setToggle} />

                    <div className="flex justify-center mt-24">
                        <div className="w-full h-full m-auto mx-6 px-12 pb-16 pt-5 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                            <h5 className="my-6 text-xl font-semibold">팝업 추가</h5>
                            <form className="text-start">
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="name">
                                            팝업 이름 :
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                            placeholder="팝업 이름을 입력하세요"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="url">
                                            팝업 이미지 첨부 :
                                        </label>
                                        <input
                                            id="url"
                                            type="file"
                                            onChange={handleFileChange}
                                            className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        />
                                    </div>

                                    <div className="flex">
                                        <div
                                            className="mb-4 w-72"
                                            style={{ float: "left", marginRight: "40px" }}
                                        >
                                            <label className="font-semibold" htmlFor="size">
                                                팝업 사이즈 :
                                            </label>
                                            <input
                                                id="size"
                                                type="number"
                                                value={size}
                                                onChange={(e) => setSize(e.target.value)}
                                                className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                                placeholder="팝업 사이즈 (%)"
                                            />
                                        </div>

                                        <div className="mb-4 w-40">
                                            <label className="font-semibold" htmlFor="isShow">
                                                노출 여부 :
                                            </label>
                                            <Select
                                                id="isShow"
                                                className="my-3"
                                                options={isShowOptions}
                                                value={isShow}
                                                onChange={(e) => setIsShow(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <Link
                                            className="w-full py-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2"
                                        >
                                            팝업 등록하기
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
