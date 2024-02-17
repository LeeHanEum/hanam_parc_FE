import React, {useState} from 'react'
import Navbar from "../../components/Navbar";
import join_soccer from "../../asset/image/join_soccer.jpg";
import SubFooter from "../../components/SubFooter";
import {Link} from "react-router-dom";

export default function NewQnA() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async () => {
        try {
            const qnaRequestDto = {
                title: title,
                content: content
            }
            const response = await fetch('/qna/create', {
                method: 'POST',
                body: JSON.stringify(qnaRequestDto),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            alert('문의사항이 등록되었습니다.');

            setTitle('');
            setContent('');

        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    }

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-24 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">문의사항</h3>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">

                <div className="container relative flex justify-center mt-8">
                    <div className="w-full dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md p-8">
                            <h5 className="my-6 text-xl font-semibold">새 문의 쓰기</h5>
                                <div className="mb-4">
                                    <label htmlFor="title" className="text-sm font-semibold">제목</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        className="w-full border rounded-md p-2"
                                        placeholder="제목을 입력해주세요."
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="content" className="text-sm font-semibold">내용</label>
                                    <textarea
                                        id="content"
                                        name="content"
                                        className="w-full border rounded-md p-2"
                                        placeholder="내용을 입력해주세요." rows="10"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        style={{resize: "none"}}
                                    ></textarea>
                                </div>

                        <div className="flex justify-end">
                            <Link to="/qna" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">취소</Link>
                            <button onClick={() => handleSubmit()} className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-green-600 hover:bg-green-700 border-green-600 text-white rounded-md">저장</button>
                        </div>

                    </div>
                </div>

            </section>

            <SubFooter />
        </>
    )
}