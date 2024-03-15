import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";

export default function MainPopUp() {

    const [popups, setPopups] = useState([]);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(4);

    useEffect(() => {
        // 페이지 로딩 시 API 호출
        fetchBoards();
    }, []);

    const fetchBoards = async () => {
        try {
            const response = await fetch(`/popup/isShow?page=${page}&size=${size}`);
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

    const onPopup = (url) => {
        window.open(url, "_blank", "width=800, height=800, top=100, left=100");
    }

    return (
        <section className="relative md:py-24 py-16" >
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-3xl leading-normal font-semibold">팝업존</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-[30px]">
                    {popups.map((item,index)=>{
                        return(
                            <div key={index} className="relative rounded-md shadow dark:shadow-gray-800">
                                <Link >
                                    <img src={item.url} alt="" onClick={() => onPopup(item.url)}/>
                                </Link>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}