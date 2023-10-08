"use client";
import React, { useState, useEffect } from "react";

import { Navigation, Pagination, A11y, Thumbs } from "swiper/modules";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
function Product({ product }) {
    const [imageUrl, setImageUrl] = useState();
    const [linkRender, setLink] = useState();
    function handleClick(value) {
        setImageUrl(value);
    }

    useEffect(() => {
        setLink(imageUrl);
    }, [imageUrl]);

    return (
        <div className="w-3/4 flex">
            <div className="flex flex-col items-center">
                <button className="slider__prev bg-[#6d3f0a] text-white">
                    <ChevronUp />
                </button>
                <Swiper
                    modules={[Navigation, Pagination, A11y, Thumbs]}
                    navigation={{
                        nextEl: ".slider__next",
                        prevEl: ".slider__prev",
                    }}
                    rewind={true}
                    loop={true}
                    effect="slide"
                    direction="vertical"
                    slidesPerView={2}
                    style={{ width: "200px", margin: "0", height: "600px" }}
                >
                    {product?.image?.map((link, i) => (
                        <SwiperSlide
                            key={i}
                            className={
                                linkRender === link.img ? "border border-solid border-black" : ""
                            }
                            style={{ flexShrink: "1" }}
                        >
                            <img src={link.img} onClick={() => handleClick(link.img)} alt="..." />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="slider__next bg-[#6d3f0a] text-white">
                    <ChevronDown />
                </button>
            </div>
            <div>
                <InnerImageZoom
                    mobileBreakpoint={640}
                    hideHint={false}
                    zoomType="hover"
                    src={linkRender || product.image[0].img}
                    width={630}
                    height={930}
                    alt="..."
                />
            </div>
        </div>
    );
}

export default Product;
