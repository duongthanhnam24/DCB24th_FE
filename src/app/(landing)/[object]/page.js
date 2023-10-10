"use client";
import Image from "next/image";
import woman from "../../../../public/img/womanpage.jpg";
import man from "../../../../public/img/manpage.jpg";
import kid from "../../../../public/img/kidpage.jpg";

import ListProduct from "@/components/Product/filterProduct";
import Link from "next/link";
import { useState } from "react";
import { Shirt } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

function AllProductOb({ params }) {
    const searchParams = useSearchParams();
    const search = searchParams.get("type");
    const [buttonId, setButtonId] = useState(search);
    const router = useRouter();
    let sildePage;
    let param = params.object;
    if (param == "woman") sildePage = woman;
    if (param == "man") sildePage = man;
    if (param == "kids") sildePage = kid;
    const handleClick = (id) => {
        setButtonId(id);
    };
    return (
        <div className="mb-52">
            <Image src={sildePage} alt="..." />
            <div className="container">
                <h1 className="py-[15px] text-[14px] sm:px-5">
                    <Link href={"/"}>HOME</Link>/ All
                </h1>
                <div className=" flex sm:flex-col-reverse">
                    <div className="w-1/4 flex flex-col mt-[40px] space-y-6 sm:w-screen sm:items-center">
                        <div className="w-[250px] flex flex-col space-y-4 items-center sm:justify-center">
                            <div className="w-full bg-[#6d3f0a] text-white flex justify-center items-center space-x-2 py-3  rounded-md ">
                                <Shirt />
                                <h2 className="text-xl font-bold">Categories</h2>
                            </div>
                            <Button
                                className={`${
                                    buttonId === null && "bg-[#6d3f0a] text-white"
                                } font-medium w-[150px]`}
                                variant="none"
                                onClick={() => {
                                    handleClick(null);
                                    router.push(`/${param}`);
                                }}
                            >
                                Tất cả sản phẩm
                            </Button>
                            <Button
                                className={`${
                                    buttonId === "shirt" && "bg-[#6d3f0a] text-white"
                                } font-medium w-[150px]`}
                                variant="none"
                                onClick={() => {
                                    handleClick("shirt");
                                    router.push(`/${param}?type=shirt`);
                                }}
                            >
                                Áo
                            </Button>
                            {param == "woman" && (
                                <Button
                                    className={`${
                                        buttonId === "dress" && "bg-[#6d3f0a] text-white"
                                    } font-medium w-[150px]`}
                                    variant="none"
                                    onClick={() => {
                                        handleClick("dress");
                                        router.push(`/${param}?type=dress`);
                                    }}
                                >
                                    Váy
                                </Button>
                            )}

                            <Button
                                className={`${
                                    buttonId === "pants" && "bg-[#6d3f0a] text-white"
                                } font-medium w-[150px]`}
                                variant="none"
                                onClick={() => {
                                    handleClick("pants");
                                    router.push(`/${param}?type=pants`);
                                }}
                            >
                                Quần
                            </Button>
                            <Button
                                className={`${
                                    buttonId === "shoes" && "bg-[#6d3f0a] text-white"
                                } font-medium w-[150px]`}
                                variant="none"
                                onClick={() => {
                                    handleClick("shoes");
                                    router.push(`/${param}?type=shoes`);
                                }}
                            >
                                Gìay
                            </Button>
                        </div>
                    </div>
                    <ListProduct param={param} />
                </div>
            </div>
        </div>
    );
}

export default AllProductOb;
