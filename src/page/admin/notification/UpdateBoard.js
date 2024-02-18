import Sidebar from "../../../components/Sidebar";
import Topnav from "../../../components/Topnav";
import React, {useContext, useEffect, useState} from "react";
import Select from "react-select";
import {Link, useLocation} from "react-router-dom";
import ImageInput from "../../../components/ImageInput";
import FileInput from "../../../components/FileInput";
import AuthContext from "../../../auth/AuthContext";

export default function UpdateBoard() {

    const [toggle, setToggle] = useState(true)
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [imageInputs, setImageInputs] = useState([<ImageInput key={0} />]);
    const [fileInputs, setFileInputs] = useState([<FileInput key={0} />]);
    const [content, setContent] = useState('');

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const context = useContext(AuthContext);

    const handleAddImageInput = () => {
        const newInputKey = imageInputs.length;
        setImageInputs([...imageInputs, <ImageInput key={newInputKey} />]);
    };

    const handleDeleteImageInput = (key) => {
        setImageInputs(imageInputs.filter((_, index) => index !== key));
    };

    const handleAddFileInput = () => {
        const newInputKey = fileInputs.length;
        setFileInputs([...fileInputs, <FileInput key={newInputKey} />]);
    }

    const handleDeleteFileInput = (key) => {
        setFileInputs(fileInputs.filter((_, index) => index !== key));
    }

    const categoryOptions = [
        { value: 'ANNOUNCEMENT', label: '공지사항' },
        { value: 'RECRUITMENT', label: '채용공고' },
        { value: 'MANAGEMENT', label: '경영공시' },
    ];

    useEffect(() => {
        fetchBoard();
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

    const handleSubmit = async () => {
        try {
            const BoardRequestDto = {
                title: title,
                content: content,
                boardCategory: category.value,
            }

            const response = await fetch(`/board/update?id=${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(BoardRequestDto),
            });

            console.log(BoardRequestDto);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            alert('게시글이 등록되었습니다.')


        } catch (error) {
            console.error('Error submitting the form:', error);
            // Handle errors or display an error message to the user
        }
    }

    return (
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content bg-gray-50 dark:bg-slate-800 h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="container relative flex justify-center mt-32">
                        <div className="w-full grid md:grid-cols-12 grid-cols-1 gap-[30px] dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md p-8">
                            <div className="lg:col-span-6 md:col-span-6">
                                <h5 className="my-6 text-xl font-semibold">새 글 쓰기</h5>
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

                                    <div className="mb-4">
                                        {imageInputs.map((input, index) => (
                                            <div key={index} className="flex items-center mb-1">
                                                {input}
                                                <button
                                                    onClick={() => handleDeleteImageInput(index)}
                                                    className="mt-5 mx-3 px-2 py-0.5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-red-700 border-red-600 hover:border-red-700 text-red-600 hover:text-white rounded-md me-2"
                                                >
                                                    삭제
                                                </button>
                                            </div>
                                        ))}

                                        <Link
                                            onClick={handleAddImageInput}
                                            className="ml-1 px-2 py-0.5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2"
                                        >이미지 추가
                                        </Link>

                                    </div>

                                    <div className="mb-4 mt-3">
                                        {fileInputs.map((input, index) => (
                                            <div key={index} className="flex items-center mb-1">
                                                {input}
                                                <button
                                                    onClick={() => handleDeleteFileInput(index)}
                                                    className="mt-5 mx-3 px-2 py-0.5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-red-700 border-red-600 hover:border-red-700 text-red-600 hover:text-white rounded-md me-2"
                                                >
                                                    삭제
                                                </button>
                                            </div>
                                        ))}

                                        <Link
                                            onClick={handleAddFileInput}
                                            className="ml-1 px-2 py-0.5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2"
                                        >파일 추가
                                        </Link>
                                    </div>
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
                                        onClick={handleSubmit}
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