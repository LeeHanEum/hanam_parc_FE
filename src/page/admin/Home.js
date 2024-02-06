import Sidebar from "../../components/Sidebar";
import {useState} from "react";
import Topnav from "../../components/Topnav";
import "../../assets/css/dashboard.css";

export default function Home() {

    const[toggle, setToggle] = useState(true)

    return (
        <>
            <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
                <Sidebar />
                <main className="page-content bg-gray-50 dark:bg-slate-800">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                </main>
            </div>
        </>
    )
}