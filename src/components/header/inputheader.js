"use client";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import style from "./header.module.css";
import { RefreshCcw } from "lucide-react";

import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
function InputHeader() {
    const [result, setResult] = useState("");
    const [data, setData] = useState({});
    const [isLoading, setisLoading] = useState(false);
    let debounce = useDebounce(result, 800);
    useEffect(() => {
        setisLoading(true);
        fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/product/panigated/search?filter=${debounce}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setisLoading(false);
            });
    }, [debounce]);
    const { Products } = data;
    return (
        <div className="flex group w-60 smt:hidden mdt:hidden lgt:hidden">
            <div
                className={` relative  flex w-full border  items-center mr-8 rounded-lg outline-1 outline-gray-600 group-hover:outline md:w-[150px] ${style.search}`}
            >
                <Input
                    value={result}
                    type="text"
                    placeholder="Tìm Kiếm ...."
                    className={`h-5 placeholder:italic  text-xs  ${style.input}`}
                    onChange={(e) => {
                        e.target.value = e.target.value.trimStart();
                        setResult(e.target.value);
                    }}
                />
                <Button variant="ghost" type="submit" className="p-1 h-6 w-16 md:w-8">
                    <Search
                        size={20}
                        className={` text-slate-500 group-hover:text-black focus-visible:text-black ${style.btn}`}
                    />
                </Button>
            </div>
            {debounce && (
                <div className="absolute top-full bg-white w-60 rounded-lg">
                    <h3 className="px-4 bg-[#6d3f0a] text-white">Kết quả tìm kiếm : </h3>
                    {Products.length > 0 ? (
                        Products.map((result, i) => (
                            <Link href={`/${result.Ob}/${result._id}`} key={result._id}>
                                <div className="flex mt-3">
                                    <img
                                        src={result.image[0].img}
                                        className="w-[70px] h-[120px]"
                                        alt="..."
                                    />
                                    <div className="flex flex-col ml-2">
                                        <p className="font-bold text-base"> {result.name} </p>
                                        <p className="text-sm text-gray-500 my-2">{result.Ob}</p>
                                        <p className="text-sm">{result.price}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="flex justify-center items-center w-full min-h-[120px]">
                            <h1 className="text-3xl">Không có kết quả</h1>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default InputHeader;
