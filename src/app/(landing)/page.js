import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { SheetSide } from "@/components/catalogue/catalogue";

import SliderItem from "@/components/listItem/slideitem";

import style from "./landing.module.css";
import Image from "next/image";
import slide from "@/../../public/img/slider10.jpg";
import slideBottom from "../../../public/img/slider2.jpg";
import boy from "@/../../public/img/boy1.jpg";
import her from "@/../../public/img/her1.jpg";
import kid from "@/../../public/img/kid1.jpg";
import Loading from "./loading";

export default function Counter() {
    return (
        <>
            <div className=" font-merriweather  ">
                {/* slider */}
                <div className="flex justify-center items-center relative">
                    <Image src={slide} alt="..." className={`${style.slide} `} />
                    <div className="absolute flex flex-col bottom-0 left-0 p-10">
                        <h1 className="text-black w-60">
                            Platform for luxury fashion for buying and selling
                        </h1>
                        <div className="mt-3 flex ">
                            <SheetSide>
                                <Button className="text-white bg-black border-white border hover:bg-black hover:opacity-70 mr-5 w-30">
                                    Catalogue
                                </Button>
                            </SheetSide>
                            <Button className="text-black bg-white hover:bg-white hover:opacity-70 w-40 ">
                                Sell Item
                            </Button>
                        </div>
                    </div>
                </div>

                {/* content */}
                <div>
                    <div className="flex flex-row justify-evenly  py-6 text-[#6d3f0a]">
                        <div className="font-pacifico ">
                            <h2 className="text-3xl font-bold">DCB24th</h2>
                        </div>
                        <div className="font-pacifico ">
                            <h2 className="text-3xl font-bold">DCB24th</h2>
                        </div>
                        <div className="font-pacifico ">
                            <h2 className="text-3xl font-bold">DCB24th</h2>
                        </div>
                        <div className="font-pacifico ">
                            <h2 className="text-3xl font-bold">DCB24th</h2>
                        </div>
                        <div className="font-pacifico ">
                            <h2 className="text-3xl font-bold">DCB24th</h2>
                        </div>
                    </div>
                    {/*clothes  */}
                    <div className="grid grid-cols-2 grid-rows-1 px-10 gap-5 mx-24 ">
                        <div className={`col-span-1 h-full relative `}>
                            <Image
                                src={boy}
                                alt="boy"
                                className={`h-full rounded-2xl relative ${style.img} box-sd`}
                            />
                            <h3 className="absolute top-0 p-10 text-3xl font-bold">For Him</h3>
                            {/* <div className="absolute p-10 flex flex-col text-base text-white bottom-0">
                                <a href="/" className="p-5 italic text-lg hover:underline ">
                                    Áo
                                </a>
                                <a href="/" className="p-5 italic text-lg hover:underline">
                                    Quần
                                </a>
                                <a href="/" className="p-5 italic text-lg hover:underline">
                                    Gìay
                                </a>
                            </div> */}
                        </div>

                        <div className=" col-span-1  h-full ">
                            {/* for her */}
                            <div className="col-span-1 h-1/2 relative">
                                <div className={style.wrapper}>
                                    <div className={` ${style.subbg} `}>
                                        <h3 className="absolute text-white top-0 p-10 text-2xl font-bold ">
                                            For Her
                                        </h3>
                                        <ul
                                            className={`absolute p-10 flex flex-col  text-white italic text-lg bottom-0 r-0  ${style.sidebar}`}
                                        >
                                            <li href="/" className="p-5  hover:underline ">
                                                Tops & T-Shirts
                                            </li>
                                            <li href="/" className="p-5  hover:underline">
                                                Pants and Leggings
                                            </li>
                                            <li href="/" className="p-5  hover:underline">
                                                Dress
                                            </li>
                                            <li href="/" className="p-5  hover:underline">
                                                Short
                                            </li>
                                        </ul>
                                    </div>
                                    <Image
                                        src={her}
                                        alt="girl"
                                        className={`h-full rounded-2xl w-full  `}
                                    />
                                </div>
                            </div>
                            {/* for kids */}
                            <div className="col-span-1 h-1/2 relative ">
                                <div className={style.wrapper}>
                                    <div className={`w-full ${style.subbg}  `}>
                                        <h3 className="absolute text-white top-0 p-10 text-2xl font-bold ">
                                            For Kids
                                        </h3>
                                        <ul
                                            className={`absolute p-10 flex flex-col  text-white italic text-lg bottom-0 r-0  ${style.sidebar}`}
                                        >
                                            <li href="/" className="p-5  hover:underline ">
                                                Tops & T-Shirts
                                            </li>
                                            <li href="/" className="p-5  hover:underline">
                                                Pants
                                            </li>
                                            <li href="/" className="p-5  hover:underline">
                                                Dress
                                            </li>
                                            <li href="/" className="p-5  hover:underline">
                                                Short
                                            </li>
                                        </ul>
                                    </div>
                                    <Image
                                        src={kid}
                                        alt="girl"
                                        className={`h-full rounded-2xl w-full `}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* product */}
                <Suspense fallback={<Loading />}>
                    <div className="mx-40">
                        <SliderItem newItem>Sản Phẩm Mới</SliderItem>
                        <SliderItem bestItem>Sản Phẩm Bán Chạy</SliderItem>
                    </div>
                </Suspense>

                <div className="flex justify-center items-center relative mt-14">
                    <Image src={slideBottom} alt="..." className={`${style.slide} `} />
                </div>
            </div>
        </>
    );
}
