import Navbar from "../../components/Navbar";
import join_soccer from "../../asset/image/join_soccer.jpg";
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import SubFooter from "../../components/SubFooter";
import * as url from "url";
import {fetchGalleryById, fetchGalleryImages} from "../../api/Api";

export default function GalleryDetails(){

    const location = useLocation();
    const pathSegments = location.pathname.split("/");
    const id = pathSegments[2];

    const [gallery, setGallery] = useState({});
    const [galleryImages, setGalleryImages] = useState([]);

    useEffect(() => {
        fetchGalleryById(id)
            .then(data => setGallery(data))
            .catch(error => console.error('Error fetching gallery:', error));
        fetchGalleryImages(id)
            .then(data => setGalleryImages(data))
            .catch(error => console.error('Error fetching gallery images:', error));
    },[]);

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-8 lg:py-24 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">멀티미디어 자료실</h3>
                    </div>
                </div>
            </section>

            <section className="relative md:pb-12 md:pt-24 pb-8 pt-12 mb-10">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-6">
                            <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">{gallery.title}</h5>
                                <div className="mt-8">
                                        {galleryImages.map((item,index)=>{
                                            return(
                                                <div key={index} className="relative pb-3 px-5">
                                                    <img src={item} alt="" className="rounded-md w-full"/>
                                                </div>
                                            )}
                                        )}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6">
                            <div>
                                <div className="sticky top-20">
                                    <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">앨범 정보</h5>
                                    <div className="text-center mt-8">
                                        <table className="w-full text-start text-slate-500">
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 py-4 px-2 w-28">제목 : </td>
                                                <td className="xs:px-2 py-4">{gallery.title}</td>
                                            </tr>
                                            <tr className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="xs:px-2 py-4 px-2 w-28">작성 날짜 : </td>
                                                <td className="xs:px-2 py-4 ">{gallery.createdAt?.slice(0,10)}</td>
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