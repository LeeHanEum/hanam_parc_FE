import TinySlider from "tiny-slider-react";
import {footer_img, photo_main} from "../asset/data/data";
import {Link} from "react-router-dom";
import React from "react";

export default function MainPhotoSlide() {

    let settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        nav: false,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        speed: 400,
        gutter: 50,
        edgePadding: 40,
        pagination : false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 2
            }
        }
    }

    return (
        <>
            <section className="relative md:py-24 py-16" style={{overflow : "hidden"}} >
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal lg:text-3xl md:text-3xl xs:text-xl leading-normal font-semibold">포토 갤러리</h3>

                        <p className="text-slate-500 max-w-xl mx-auto text-lg">한 눈에 보는 하남시 장애인 체육회의 활동 사진 자료실 입니다.</p>
                    </div>

                    <div className="grid grid-cols-1 mt-8">
                        <div className="tiny-three-item">
                            <TinySlider settings={settings} >
                                {photo_main.map((item, index) => (
                                    <span className="tiny-slide text-center" key={index}>
                                            <img src={item?.image} className="inline shadow-md mx-auto" alt=""  style={{width : "15%", height:"10%"}}/>
                                        </span>
                                ))}
                            </TinySlider>

                        </div>

                        <div className="relative mt-16 text-center">
                            <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center hover:bg-green-700 border-green-600 hover:border-green-700 text-green-600 hover:text-white rounded-md me-2">사진 더보기</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative" >
                <div className="container relative text-center">
                    {footer_img.map((data, index) => (
                        <div
                            key={index}
                            style={{
                                width: "20%",
                                display: "inline-block",
                                alignItems: "center",
                                textAlign: "center", // 추가된 부분
                                margin : "2%"
                            }}
                        >
                            <img
                                src={data.image}
                                alt=""
                                style={{
                                    width: "100%", // 이미지를 100%로 표시하여 가로 크기 유지
                                    height: "auto",
                                    display: "block", // 이미지를 가운데 정렬하기 위해 block으로 변경
                                    margin: "0 auto", // 이미지를 가운데 정렬하기 위한 margin 설정
                                }}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}