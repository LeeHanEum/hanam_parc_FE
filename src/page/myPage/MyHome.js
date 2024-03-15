import React, {useState} from "react";
import Topnav from "../../components/Topnav";
import "../../assets/css/dashboard.css";
import MySidebar from "../../components/MySidebar";

export default function MyHome() {

    const[toggle, setToggle] = useState(true)

    return (
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <MySidebar />
                <main className="page-content bg-gray-50 dark:bg-slate-800">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                </main>
            </div>
        </>
    )
}