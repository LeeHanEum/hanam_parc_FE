import Sidebar from "../../../components/Sidebar";
import Topnav from "../../../components/Topnav";
import React, {useState} from "react";
import Select from "react-select";
import {Link} from "react-router-dom";

export default function NewBoard() {

    const [toggle, setToggle] = useState(true)
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]); // 이미지 파일 상태 추가

    const handleImageChange = (e) => {
        setImages([...e.target.files]);
    }

    const categoryOptions = [
        { value: 'ANNOUNCEMENT', label: '공지사항' },
        { value: 'RECRUITMENT', label: '채용공고' },
        { value: 'MANAGEMENT', label: '경영공시' },
    ];

    const handleSubmit = async () => {
        try {
            const BoardRequestDto = {
                title: title,
                content: content,
                boardCategory: category.value,
            }

            const response = await fetch(`/board/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(BoardRequestDto),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            const boardId = responseData.data; // 게시판 ID 값을 받아옵니다.

            if (images.length > 0) {
                await uploadImages(boardId);
            }

            alert('게시글이 등록되었습니다.');

        } catch (error) {
            console.error('Error submitting the form:', error);
            // Handle errors or display an error message to the user
        }
    }

    const uploadImages = async (boardId) => {
        try {
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
                                        <label className="font-semibold block" htmlFor="image">
                                            이미지 첨부 :
                                        </label>
                                        <input
                                            id="image"
                                            type="file"
                                            multiple
                                            onChange={handleImageChange}
                                            className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="font-semibold block" htmlFor="file">
                                            파일 첨부 :
                                        </label>
                                        <input
                                            id="file"
                                            type="file"
                                            multiple
                                            className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        />
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