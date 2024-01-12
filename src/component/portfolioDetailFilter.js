import React, { useState } from 'react'

import { Link } from 'react-router-dom/dist';

import Lightbox from 'react-18-image-lightbox';

import "react-18-image-lightbox/style.css"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { masonryData, masonryImage } from '../data/portfolio';

export default function PortfolioDetailFilter(props) {

    let [isOpen, setisOpen] = useState(false);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + masonryImage.length - 1) % masonryImage.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % masonryImage.length);
    };
    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    let currentImage = masonryImage[currentImageIndex];
  
    return (
        <div>
            <ResponsiveMasonry
                    columnsCountBreakPoints={props.columnsCountBreakPoints}
            >
              <Masonry columnsCount={props.shuffle}>

                {
                    masonryData.map((data, index) => {
                        return (
                            <div className="p-1 picture-item" data-groups={data.dataGroup} key={index}>
                                <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                    <Link to={data.image} className="lightbox transition-all duration-500 group-hover:scale-105" title="">
                                        <img src={data.image} className="" alt="" onClick={() => handleImageClick(index)} />
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
                {isOpen && (
                    <Lightbox
                        mainSrc={currentImage}
                        prevSrc={masonryImage[(currentImageIndex + masonryImage.length - 1) % masonryImage.length]}
                        nextSrc={masonryImage[(currentImageIndex + 1) % masonryImage.length]}

                        onCloseRequest={() => setisOpen(false)}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )}
               </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}
