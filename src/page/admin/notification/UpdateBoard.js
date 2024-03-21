import Sidebar from "../../../components/Sidebar";
import Topnav from "../../../components/Topnav";
import React, {useEffect, useRef, useState} from "react";
import Select from "react-select";
import {Link, useLocation} from "react-router-dom";
import {fetchBoardImage} from "../../../api/Board";
import {FaPlus} from "react-icons/fa";

export default function UpdateBoard() {

    const [toggle, setToggle] = useState(true);
    const [fileModal, setFileModal] = useState(false);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]); // 이미지 파일 상태 추가

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const toggleFileModal = () => {
        setFileModal(!fileModal);
    }

    const fileInputRef = useRef(null);

    const handleImageUpload = () => {
        fileInputRef.current.click();
    };

    const categoryOptions = [
        { value: 'ANNOUNCEMENT', label: '공지사항' },
        { value: 'RECRUITMENT', label: '채용공고' },
        { value: 'MANAGEMENT', label: '경영공시' },
    ];

    useEffect(() => {
        fetchBoard();
        fetchBoardImage(id)
            .then(data => setImages(data));
    }, []);

    const getCategoryLabel = (value) => {
        switch (value) {
            case 'ANNOUNCEMENT':
                return '공지사항';
            case 'RECRUITMENT':
                return '채용공고';
            case 'MANAGEMENT':
                return '경영공시';
            default:
                return '';
        }
    }

    const fetchBoard = async () => {
        try {
            const response = await fetch(`/board?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                setTitle(data.data.title);
                setContent(data.data.content);
                setCategory({ value: data.data.boardCategory, label: getCategoryLabel(data.data.boardCategory) });

            } else {
                console.error("Error fetching program:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching program:", error);
        }
    }

    return (
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content bg-gray-50 dark:bg-slate-800 h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="flex justify-center mt-24">
                        <div className="w-full h-full grid md:grid-cols-12 grid-cols-1 gap-[30px] dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md mx-6 px-12 pb-16 pt-5">
                            <div className="lg:col-span-6 md:col-span-6">
                                <h5 className="my-6 text-xl font-semibold">글 수정하기</h5>
                                <div className="grid grid-cols-1">

                                    <div className="mb-4 w-40">
                                        <label className="font-semibold" htmlFor="category">
                                            카테고리 :
                                        </label>
                                        <Select
                                            id="category"
                                            className="my-3"
                                            options={categoryOptions}
                                            value={category}
                                            onChange={(e) => setCategory(e)}
                                        />
                                    </div>

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
                                            placeholder="제목을 입력하세요"
                                        />
                                    </div>

                                    <div className="mb-4 flex flex-wrap">
                                        {images.map((url, index) => (
                                            <div className="inline-flex relative mb-4 mr-4" key={index}>
                                                <img key={index} src={url} alt="image" className="w-40 h-40 mr-2" />
                                                <Link
                                                    className="w-40 absolute bottom-0 py-0.5 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2"
                                                >삭제
                                                </Link>
                                            </div>
                                        ))}
                                        {/* 이미지 추가 박스 모양 버튼 */}
                                        <div className="w-40 h-40 relative rounded-md shadow group inline-flex items-center align-middle mb-4 mr-4">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                                                ref={fileInputRef}
                                                onChange={handleImageUpload}
                                            />
                                            <div className="rounded-md w-full h-full flex justify-center items-center cursor-pointer" onClick={handleImageUpload}>
                                                <FaPlus className="text-6xl text-slate-400 group-hover:text-emerald-600" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4 mt-4">
                                        <button onClick={toggleFileModal} className="w-full py-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-md me-2">
                                            {fileModal ? "취소" : "첨부 파일 변경 (기존 파일 삭제됨)"}
                                        </button>
                                    </div>

                                    {fileModal && (
                                    <div className="mb-4">
                                        <label className="font-semibold block" htmlFor="file">
                                            파일 첨부 :
                                        </label>
                                        <input
                                            id="file"
                                            type="file"
                                            multiple
                                            className="form-input mt-3 w-[400px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        />
                                    </div>
                                    )}
                                </div>

                            </div>
                            <div className="lg:col-span-6 md:col-span-6 lg:mt-16">
                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="content">
                                        내용 :
                                    </label>
                                    <textarea
                                        id="content"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        className="form-input mt-3 w-full py-2 px-3 h-87 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        placeholder="내용을 입력하세요"
                                        style={{resize: "none"}}
                                        wrap="hard"
                                    />
                                </div>

                                <div className="mt-8">
                                    <Link
                                        className="w-full py-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2"
                                    >
                                        글 등록하기
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}