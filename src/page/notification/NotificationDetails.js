import Navbar from "../../components/Navbar";
import join_soccer from "../../asset/image/join_soccer.jpg";
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import SubFooter from "../../components/SubFooter";

export default function NotificationDetails(){

    const location = useLocation();
    const pathSegments = location.pathname.split("/");

    const boardCategory = pathSegments[1];

    const id = pathSegments[2];

    const [board, setBoard] = useState({});
    const [boardImage, setBoardImage] = useState([]);

    let categoryText = "";
    switch (boardCategory) {
        case "announcement":
            categoryText = "공지사항";
            break;
        case "recruitment":
            categoryText = "채용공고";
            break;
        case "event":
            categoryText = "행사";
            break;
        case "management":
            categoryText = "경영공시";
            break;
        default:
            // 기본값 설정
            categoryText = "";
    }

    useEffect(() => {
        fetchBoard();
        fetchBoardImage();

    }, []);

    const fetchBoard = async () => {
        try {
            const response = await fetch(`/board?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                setBoard(data.data);
            } else {
                console.error("Error fetching program:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching program:", error);
        }
    }

    const fetchBoardImage = async () => {
        try {
            const response = await fetch(`/board/image?id=${id}`);
            if (response.ok) {
                const data = await response.json();

                setBoardImage(data.data.boardImageList);
                console.log(data.data.boardImageList)
            } else {
                console.error("Error fetching program:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching program:", error);
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
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">{categoryText}</h3>
                    </div>
                </div>
            </section>

            <section className="relative md:pb-12 md:pt-24 pb-8 pt-12 mb-10">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-6">
                            <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                                {/*<img src={} className="rounded-md m-auto" alt="" width="50%"/>*/}

                                <div className="text-center mt-8">
                                    <h3 className="my-3 text-[26px] font-semibold">{board.title}</h3>
                                </div>

                                <div className="mt-6 px-5">
                                    <p className="text-slate-400" style={{lineHeight : "35px"}}>
                                        {board.content && board.content.split(/<br\s*\/?>|\r?\n/).map((line, index) => (
                                            <React.Fragment key={index}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </p>
                                </div>

                                <div className="mt-8 ">
                                    {boardImage.map((imageUrl, index) => (
                                        <img
                                            key={index}
                                            src={`${process.env.PUBLIC_URL}${imageUrl}`}
                                            className="rounded-md m-auto"
                                            alt={`Image ${index + 1}`}
                                            width="90%"
                                        />
                                    ))}
                                </div>

                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6">
                            <div>
                                <div className="sticky top-20">
                                    <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">{categoryText}</h5>
                                    <div className="text-center mt-8">
                                        <table className="w-full text-start text-slate-500">
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 py-4 px-2 w-28">작성자 : </td>
                                                <td className="xs:px-2 py-4">{board.writer?.name}</td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 py-4 px-2 w-28">첨부 파일 : </td>
                                                <td className="xs:px-2 py-4"></td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 py-4 px-2 w-28">작성 날짜 : </td>
                                                <td className="xs:px-2 py-4 ">{board.createdAt?.slice(0,10)}</td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 py-4 px-2 w-28">수정 날짜 : </td>
                                                <td className="xs:px-2 py-4">{board.updatedAt?.slice(0,10)}</td>
                                            </tr>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <SubFooter/>
        </>
    )
}