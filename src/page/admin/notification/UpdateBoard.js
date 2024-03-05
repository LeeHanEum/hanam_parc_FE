import Sidebar from "../../../components/Sidebar";
import Topnav from "../../../components/Topnav";
import React, {useEffect, useState} from "react";
import Select from "react-select";
import {Link, useLocation} from "react-router-dom";

export default function UpdateBoard() {

    const [toggle, setToggle] = useState(true);
    const [imageModal, setImageModal] = useState(false);
    const [fileModal, setFileModal] = useState(false);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]); // 이미지 파일 상태 추가

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const toggleImageModal = () => {
        setImageModal(!imageModal);
    }

    const toggleFileModal = () => {
        setFileModal(!fileModal);
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

            if (images.length > 0) {
                await uploadImages(id);
            }

            alert('게시글이 성공적으로 수정되었습니다.')


        } catch (error) {
            console.error('Error submitting the form:', error);
            // Handle errors or display an error message to the user
        }
    }

    const deleteImages = async (boardId) => {
        try {
            const response = await fetch(`/files/${boardId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

        } catch (error) {
            console.error('Error deleting images:', error);
        }
    }

    const uploadImages = async (boardId) => {
        try {
            await deleteImages(boardId);

            for (let i = 0; i < images.length; i++) {
                const formData = new FormData();
                formData.append('image', images[i]);

                const response = await fetch(`/files/${boardId}`, {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    alert('이미지 업로드에 실패했습니다.');
                }
            }
        } catch (error) {
            console.error('Error uploading images:', error);
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

                                    <div className="mb-4 mt-4">
                                        <button onClick={toggleImageModal} className="w-full py-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-md me-2">
                                            {imageModal ? "취소" : "첨부 이미지 변경 (기존 이미지 삭제됨)"}
                                        </button>
                                    </div>

                                    {imageModal && (
                                    <div className="mb-4">
                                        <label className="font-semibold block" htmlFor="image">
                                            이미지 첨부 :
                                        </label>
                                        <input
                                            id="image"
                                            type="file"
                                            multiple
                                            className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        />
                                    </div>
                                    )}

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