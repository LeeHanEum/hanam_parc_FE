import * as Icon from "react-feather";
import React from "react";
import {MdOutlineSportsGymnastics, MdOutlineSportsHandball} from "react-icons/md";
import {GiProgression} from "react-icons/gi";
import {FaPeopleArrows, FaWheelchairMove} from "react-icons/fa6";

export default function CompetitionPurpose() {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                <div className="relative overflow-hidden text-transparent -m-3">
                    <Icon.Hexagon className="h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></Icon.Hexagon>
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                        <MdOutlineSportsHandball />
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-slate-500 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3 text-md">스포츠 활동을 통한<br />장애인 선수들의 경기력 향상</p>
                </div>
            </div>

            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                <div className="relative overflow-hidden text-transparent -m-3">
                    <Icon.Hexagon className="h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></Icon.Hexagon>
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                        <MdOutlineSportsGymnastics />
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-slate-500 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3 text-md">국체전을 통한<br/>신인 우수선수 발굴 및<br />사회적응 능력 배양</p>
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
                    <p className="text-slate-500 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3 text-md">순회개최를 통한<br />장애인과 일반인이 함께하는<br/>사회분위기 조성</p>
                </div>
            </div>

            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                <div className="relative overflow-hidden text-transparent -m-3">
                    <Icon.Hexagon className="h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></Icon.Hexagon>
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                        <FaPeopleArrows />
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-slate-500 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3 text-md">장애인에 대한<br/>국민의 이해증진</p>
                </div>
            </div>
        </div>
    );
}