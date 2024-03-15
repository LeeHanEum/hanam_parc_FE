import Sidebar from "../../components/Sidebar";
import React, {useState} from "react";
import Topnav from "../../components/Topnav";
import "../../assets/css/dashboard.css";
import {Link} from "react-router-dom";
import {deleteBoard} from "../../api/Api";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

export default function Home() {

    const[toggle, setToggle] = useState(true)

    return (
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <Sidebar />
                <main className="page-content bg-gray-50 dark:bg-slate-800">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="mt-32 relative mx-6">
                        <h3 className="text-3xl mx-2 font-semibold inline">대시보드</h3>

                    </div>


                </main>
            </div>
        </>
    )
}