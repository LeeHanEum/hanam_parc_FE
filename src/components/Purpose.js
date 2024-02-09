import * as Icon from "react-feather";
import React from "react";
import {MdOutlineSportsHandball} from "react-icons/md";
import {GiProgression} from "react-icons/gi";
import {FaWheelchairMove} from "react-icons/fa6";

export default function Purpose() {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                <div className="relative overflow-hidden text-transparent -m-3">
                    <Icon.Hexagon className="h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></Icon.Hexagon>
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                        <MdOutlineSportsHandball />
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-slate-500 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3 text-lg">스포츠를 통한 장애인과 비장애인이<br /> 함께 사는 하남시 건설</p>
                </div>
            </div>

            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                <div className="relative overflow-hidden text-transparent -m-3">
                    <Icon.Hexagon className="h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></Icon.Hexagon>
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                        <FaWheelchairMove />
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-slate-500 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3 text-lg">장애인생활체육 활성화를 통해<br /> 장애인의 삶의 질 향상과 의욕 고취</p>
                </div>
            </div>

            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                <div className="relative overflow-hidden text-transparent -m-3">
                    <Icon.Hexagon className="h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></Icon.Hexagon>
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                        <GiProgression />
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-slate-500 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3 text-lg">장애인 스포츠를 통한 <br />하남시 장애인 문화발전에 기여함</p>
                </div>
            </div>
        </div>
    );
}