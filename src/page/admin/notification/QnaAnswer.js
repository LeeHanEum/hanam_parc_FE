import Sidebar from "../../../components/Sidebar";
import Topnav from "../../../components/Topnav";
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

export default function QnaAnswer() {

    const location = useLocation();
    const param = location.pathname.split("/")[2];

    const [toggle, setToggle] = useState(true);
    const [qna, setQnA] = useState({});
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        // 페이지 로딩 시 API 호출
        fetchQNA();
    }, []);


    const fetchQNA = async () => {
        try {
            const response = await fetch(`/qna?id=${param}`);
            if (response.ok) {
                const data = await response.json();
                setQnA(data.data);
                setAnswer(data.data.answer.replace(/\\n/g, '\n'));
                console.log(data);
            } else {
                console.error("Error fetching qna:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching qna:", error);
        }
    }

    const handleSubmit = async () => {
        try {
            const response = await fetch(`/qna/answer?id=${param}&answer=${encodeURIComponent(answer)}`, {
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            alert('답변이 등록되었습니다.');

        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    }

    return (
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content bg-gray-50 dark:bg-slate-800 h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="container relative flex justify-center mt-32 mb-16">
                        <div className="w-full dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md p-8">
                            <h5 className="my-6 text-xl font-semibold">문의 답변 작성</h5>
                            <div className="mb-4">
                                <label htmlFor="title" className="text-sm font-semibold">제목</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="w-full border rounded-md p-2"
                                    value={qna.title}
                                    readOnly
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="content" className="text-sm font-semibold">내용</label>
                                <textarea
                                    id="content"
                                    name="content"
                                    className="w-full border rounded-md p-2"
                                    rows="10"
                                    value={qna.content}
                                    readOnly
                                    style={{resize: "none"}}
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="answer" className="text-sm font-semibold">답변</label>
                                <textarea
                                    id="answer"
                                    name="answer"
                                    className="w-full border rounded-md p-2"
                                    placeholder="답변을 입력해주세요."
                                    rows="10"
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                    wrap="hard"
                                    style={{resize: "none"}}
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <Link to="/admin-qna" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">취소</Link>
                                <button onClick={()=>handleSubmit()} className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-green-600 hover:bg-green-700 border-green-600 text-white rounded-md">저장</button>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}