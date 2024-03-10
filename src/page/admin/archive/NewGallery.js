import Sidebar from "../../../components/Sidebar";
import Topnav from "../../../components/Topnav";
import React, {useState} from "react";
import Select from "react-select";
import {Link} from "react-router-dom";
import {handleSubmitGallery, handleSubmitPopup} from "../../../api/Api";

export default function NewGallery() {

    const [toggle, setToggle] = useState(true)
    const [title, setTitle] = useState('');
    const [images, setImages] = useState([]); // 이미지 파일 상태 추가

    const handleImageChange = (e) => {
        setImages([...e.target.files]);
    }

    return (
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content bg-gray-50 dark:bg-slate-800 h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="flex justify-center mt-24">
                        <div className="w-full h-full m-auto mx-6 px-12 pb-16 pt-5 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                            <h5 className="my-6 text-xl font-semibold">새로운 앨범 추가</h5>
                            <form className="text-start">
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="title">
                                            제목 :
                                        </label>
                                        <input
                                            id="title"
                                            type="text"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                            placeholder="앨범 제목을 입력하세요"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="images">
                                            이미지 첨부 :
                                        </label>
                                        <input
                                            id="images"
                                            type="file"
                                            multiple
                                            onChange={handleImageChange}
                                            className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        />
                                    </div>


                                    <div className="mt-8">
                                        <Link
                                            onClick={() => handleSubmitGallery(title, images)}
                                            className="w-full py-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2"
                                        >
                                            앨범 등록하기
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}