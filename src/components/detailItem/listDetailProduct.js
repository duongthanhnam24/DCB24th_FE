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
    const [linkRender, setLink] = useState("");
    function handleClick(value) {
        setImageUrl(value);
    }

    useEffect(() => {
        setLink(imageUrl);
    }, [imageUrl]);

    return (
        <div className="w-3/4 flex smt:w-screen smt:flex-col-reverse smt:items-center mdt:w-full mdt:flex-col-reverse mdt:items-center xlt:w-full xlt:flex-col-reverse xlt:items-center">
            <div className="flex flex-col items-center smt:flex-row mdt:flex-row xlt:flex-row">
                <button className="slider__prev bg-[#6d3f0a] text-white xlt:hidden">
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
                    breakpoints={{
                        375: {
                            slidesPerView: 4,
                            spaceBetween: 0,
                            direction: "horizontal",
                        },
                        740: { slidesPerView: 3, spaceBetween: 0, direction: "horizontal" },
                        780: { slidesPerView: 3, spaceBetween: 0, direction: "horizontal" },

                        1280: { slidesPerView: 3, direction: "vertical" },
                    }}
                    slidesPerView={3}
                    className="h-[900px] w-[200px] m-0 smt:h-[150px] smt:w-[300px] mdt:w-[600px] mdt:h-[300px] xlt:w-[800px] xlt:h-[400px]"
                >
                    {product?.image?.map((link, i) => (
                        <SwiperSlide
                            key={i}
                            className={`${
                                linkRender === link?.img ? "border border-solid border-black" : ""
                            } `}
                            style={{
                                flexShrink: "1",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                            }}
                        >
                            <img
                                src={link?.img}
                                onClick={() => handleClick(link?.img)}
                                alt="..."
                                className="smt:w-[100px] smt:h-[150px] object-cover mdt:w-[150px] mdt:h-[300px] xlt:w-[200px]  xlt:h-[400px]"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="slider__next bg-[#6d3f0a] text-white xlt:hidden">
                    <ChevronDown />
                </button>
            </div>
            <div className="ml-4 smt:ml-0">
                <InnerImageZoom
                    mobileBreakpoint={640}
                    hideHint={false}
                    zoomType="hover"
                    src={linkRender || product?.image[0].img}
                    className="w-[630px] h-[930px]  smt:w-[345px] smt:h-[517px] "
                    alt="..."
                />
            </div>
        </div>
    );
}

export default Product;
