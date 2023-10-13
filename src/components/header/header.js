"use client";
import {
    Contact,
    Store,
    ShoppingCart,
    User,
    UserCircle2,
    LogOut,
    FolderCog,
    Menu,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { useSelector } from "react-redux";

import { NavigationMenuDemo } from "./headernavbar";
import InputHeader from "./inputheader";
import style from "./header.module.css";
import { SheetSide } from "../catalogue/catalogue";
function Header() {
    const router = useRouter();
    const user = useSelector((state) => state.auth.user);
    const order = useSelector((state) => state.order);
    function clearToken() {
        localStorage.clear();
    }
    return (
        <header className="flex flex-row justify-between items-center fixed z-50 inset-x-0 top-0 px-14 bg-white rounded-b-sm h-14 box-sd  smt:justify-between smt:w-screen smt:px-3 mdt:w-screen lgt:w-screen lgt:px-2  animate-fade-right animate-once animate-duration-1300">
            <div className="hidden smt:block">
                <SheetSide catalogue>
                    <Menu className=" cursor-pointer" />
                </SheetSide>
            </div>

            <Link href="/">
                <h1 className="font-pacifico text-2xl text-[#6d3f0a] font-bold smt:text-xl">
                    DCB24th
                </h1>
            </Link>

            <div className="flex justify-between items-center smt:hidden mdt:flex">
                <NavigationMenuDemo className={style.her} her>
                    <span className="text-base">Cho nữ</span>
                </NavigationMenuDemo>
                <NavigationMenuDemo className={style.boy} boy>
                    <span className="text-base">Cho nam</span>
                </NavigationMenuDemo>
                <NavigationMenuDemo className={style.kid} kid>
                    <span className="text-base">Cho trẻ em</span>
                </NavigationMenuDemo>
            </div>
            <div className="flex flex-row items-center ">
                <InputHeader />
                <div className="flex flex-row items-center font-light smt:text-base">
                    {user && user.name ? (
                        <div className="group">
                            <Button variant="none" className="flex items-center space-x-2 relative">
                                <UserCircle2 />
                                <span className="text-base font-semibold smt:hidden mdt:hidden">
                                    {user.name}
                                </span>
                            </Button>
                            {user.isAdmin === true ? (
                                <div className="absolute bg-white top-[80%] smt:left-[40%] mdt:left-[73%] rounded-md box-shad shadow-lg shadow-indigo-500/40 hidden group-hover:block animate-fade-up animate-once animate-duration-[600ms]">
                                    <Button
                                        variant="none"
                                        className="py-[15px] px-[20px] flex space-x-2"
                                    >
                                        <User />
                                        <Link href={"/profile"}>Thông tin tài khoản</Link>
                                    </Button>
                                    <Button
                                        variant="none"
                                        className="py-[15px] px-[20px] flex space-x-2"
                                    >
                                        <FolderCog />
                                        <Link href={"/management?table=product"}>
                                            Quản lý sản phẩm
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="none"
                                        className="py-[15px] px-[20px] flex space-x-2"
                                    >
                                        <LogOut />
                                        <a href={"/"} onClick={() => clearToken()}>
                                            Đăng xuất
                                        </a>
                                    </Button>
                                </div>
                            ) : (
                                <div className="absolute bg-white top-[80%] smt:left-[40%] mdt:left-[73%] rounded-md box-shad shadow-lg shadow-indigo-500/40 hidden group-hover:block animate-fade-up animate-once animate-duration-[1000ms]">
                                    <Button
                                        variant="none"
                                        className="py-[15px] px-[20px] flex space-x-2"
                                    >
                                        <User />
                                        <Link href={"/profile"}>Thông tin tài khoản</Link>
                                    </Button>
                                    <Button
                                        variant="none"
                                        className="py-[15px] px-[20px] flex space-x-2"
                                    >
                                        <LogOut />
                                        <a href={"/"} onClick={() => clearToken()}>
                                            Đăng xuất
                                        </a>
                                    </Button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className={` cursor-pointer ${style.user}`}>
                            <Button
                                onClick={() => router.push("/signin")}
                                variant="none"
                                className="flex items-center space-x-2  hover:bg-gray-300"
                            >
                                <UserCircle2 className={`text-xs cursor-pointer `} />
                                <span className="text-base font-semibold">Đăng Nhập</span>
                            </Button>
                        </div>
                    )}

                    {/* <Cart /> */}
                    <Tippy content="Cart">
                        <Link href={"/cart"}>
                            <ShoppingCart className="text-xs m-3 cursor-pointer relative " />

                            {order.orderItems.length > 0 && (
                                <span className="absolute flex h-3 w-3 transform translate-x-[217%] translate-y-[-70%] top-1/2  ">
                                    <span className="animate-ping absolute inline-flex  rounded-full bg-red-500 opacity-100 h-4 w-4"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                                </span>
                            )}
                            {/* <span className="absolute flex h-3 w-3 top-[30%] right-[6%] smt:right-[18%] md:right-[8%]">
                                <span className="animate-ping absolute inline-flex  rounded-full bg-red-500 opacity-100 h-4 w-4"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                            </span> */}
                        </Link>
                    </Tippy>
                    <Tippy content="Position">
                        <div>
                            <Store className="text-xs m-3 cursor-pointer" />
                        </div>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
