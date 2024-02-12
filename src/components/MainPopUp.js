import {course_main} from "../asset/data/data";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Modal from "./Modal";

export default function MainPopUp() {

    const [popups, setPopups] = useState([]);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);

    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    }

    const openModal = () => {
        setModalVisible(true);
    }

    useEffect(() => {
        // 페이지 로딩 시 API 호출
        fetchBoards();
    }, []);


    const fetchBoards = async () => {
        try {
            const response = await fetch(`/popup/page?page=${page}&size=${size}`);
            if (response.ok) {
                const data = await response.json();
                setPopups(data.data.content);
                console.log(data.data.content)
            } else {
                console.error("Error fetching programs:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching programs:", error);
        }
    };

    return (
        <section className="relative md:py-24 py-16" >
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-3xl leading-normal font-semibold">팝업존</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                    {popups.map((item,index)=>{
                        return(
                            <div key={index} className="relative rounded-md shadow dark:shadow-gray-800">
                                <Link >
                                    <img src={`${process.env.PUBLIC_URL}/${item.url}`} alt=""/>
                                    {/*{*/}
                                    {/*    setModalVisible ?*/}
                                    {/*        <Modal visible={modalVisible} closable={true} maskClosable={true} onClose={closeModal} url={item.url} size={item.size} />*/}
                                    {/*        :*/}
                                    {/*        null*/}
                                    {/*}*/}
                                </Link>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}