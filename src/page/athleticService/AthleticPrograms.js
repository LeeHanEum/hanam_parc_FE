import Navbar from "../../components/Navbar";
import join_soccer from "../../asset/image/join_soccer.jpg";
import SubFooter from "../../components/SubFooter";
import React from "react";

export default function AthleticPrograms() {

    const classData = [
        {
            id : 1,
            name : "하남시 시각 장애인 게이트볼 교실"
        },
        {
            id : 2,
            name : "하남시 챌린저블 농구교실(발달장애인)"
        },
        {
            id : 3,
            name : "하남시 장애인 배드민턴 교실"
        },
        {
            id : 4,
            name : "하남시 장애인 볼링 교실"
        },
        {
            id : 5,
            name : "하남시 룰루랄라 운동 교실(야구)"
        },
        {
            id : 6,
            name : "하남시 룰루랄라 운동 교실(체조)"
        },
        {
            id : 7,
            name : "하남시 장애인 조정 교실"
        },
        {
            id : 8,
            name : "하남시 장애인 복지관 태권도 교실"
        },
        {
            id : 9,
            name : "하남시 장애인 탁구 교실"
        },

]

    const clubData = [
        {
            id : 1,
            name : "하남시 장애인게이트볼클럽"
        },
        {
            id : 2,
            name : "하남시 장애인 텐덤사이클 클럽"
        },
        {
            id : 3,
            name : "하남시 데프생활체육클럽(슐런)"
        },
    ]

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">생활 체육 프로그램</h3>
                    </div>
                </div>
            </section>

            {/*본문 내용 시작*/}
            <section className="relative md:py-12 py-8 mb-10 xs:text-xs">
                <div className="container relative">

                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold text-center mb-2">생활 체육 교실</h3>
                            <table className="w-full text-start">
                                <thead>
                                <tr>
                                    <th className="xs:px-2 px-4 py-5 text-center">번호</th>
                                    <th className="xs:px-2 px-4 py-5 text-center">교실명</th>
                                </tr>
                                </thead>

                                <tbody>
                                {classData.map((data, index) => (
                                    <tr className="border-t border-gray-100 dark:border-gray-700" key={index}>
                                        <td className="xs:px-2 p-4 text-center">{data.id}</td>
                                        <td className="xs:px-2 p-4 text-center">{data.name}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>


                    <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md mt-16">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold text-center mb-2">생활 체육 클럽</h3>
                        <table className="w-full text-start">
                            <thead>
                            <tr>
                                <th className="xs:px-2 px-4 py-5 text-center">번호</th>
                                <th className="xs:px-2 px-4 py-5 text-center">클럽명</th>
                            </tr>
                            </thead>

                            <tbody>
                            {clubData.map((data, index) => (
                                <tr className="border-t border-gray-100 dark:border-gray-700" key={index}>
                                    <td className="xs:px-2 p-4 text-center">{data.id}</td>
                                    <td className="xs:px-2 p-4 text-center">{data.name}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>


                    </div>
            </section>
            <SubFooter/>
        </>
    )
}