import Navbar from "../../components/Navbar";
import join_soccer from "../../asset/image/join_soccer.jpg";
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import SubFooter from "../../components/SubFooter";

export default function QnADetails() {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [qna, setQnA] = useState({});

    useEffect(() => {
        fetchQNA();
    }, []);

    const fetchQNA = async () => {
        try {
            const response = await fetch(`/qna?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                setQnA(data.data);
            } else {
                console.error("Error fetching qna:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching qna:", error);
        }
    }

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-8 lg:py-24 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">문의사항</h3>
                    </div>
                </div>
            </section>

            <section className="relative md:pb-12 md:pt-24 pb-8 pt-12 mb-10">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-6">
                                <div className="w-full dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md p-8">
                                    <div className="mb-4">
                                        <label htmlFor="title" className="text-lg font-semibold">제목</label>
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
                                        <label htmlFor="content" className="text-lg font-semibold">내용</label>
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
                                    { qna.answer && true ?
                                    <div className="mb-4">
                                        <label htmlFor="answer" className="text-lg font-semibold">답변</label>
                                        <textarea
                                            id="answer"
                                            name="answer"
                                            className="w-full border rounded-md p-2"
                                            rows="10"
                                            value={qna.answer}
                                            wrap="hard"
                                            style={{resize: "none"}}
                                            readOnly
                                        ></textarea>
                                    </div>
                                        : null }

                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6">
                            <div>
                                <div className="sticky top-20">
                                    <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">문의사항</h5>
                                    <div className="text-center mt-8">
                                        <table className="w-full text-start text-slate-500">
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 py-4 px-2 w-28">작성자 : </td>
                                                <td className="xs:px-2 py-4">{qna.writer?.name}</td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 py-4 px-2 w-28">답변여부 : </td>
                                                <td className="xs:px-2 py-4">{qna.is_answered}</td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 py-4 px-2 w-28">작성 날짜 : </td>
                                                <td className="xs:px-2 py-4 ">{qna.createdAt?.slice(0,10)}</td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 py-4 px-2 w-28">수정 날짜 : </td>
                                                <td className="xs:px-2 py-4">{qna.updatedAt?.slice(0,10)}</td>
                                            </tr>
                                        </table>
                                    </div>

                                    { qna.answer && true ?
                                        <>
                                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-10">답변자</h5>
                                            <div className="text-center mt-8">
                                                <table className="w-full text-start text-slate-500">
                                                    <tr className="border-t border-gray-100 dark:border-gray-700">
                                                        <td className="xs:px-2 py-4 px-2 w-28">이름 : </td>
                                                        <td className="xs:px-2 py-4">{qna.answerer?.name}</td>
                                                    </tr>
                                                    <tr className="border-t border-gray-100 dark:border-gray-700">
                                                        <td className="xs:px-2 py-4 px-2 w-28">이메일 : </td>
                                                        <td className="xs:px-2 py-4 ">{qna.answerer?.email}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </>
                                    : null }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <SubFooter />

        </>
    )
}