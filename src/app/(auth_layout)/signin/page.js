"use client";
import Link from "next/link";
import style from "./sign.module.css";

import FormSignIn from "@/components/form/siginIn";

function SignIn() {
    return (
        <div className={style.bg}>
            <div className={`${style.children} smt:px-5`}>
                <div
                    className={`${style.formSignIn} rounded-xl max-w-[700px] h-[500px] sticky top-[25%] bottom-[50%] smt:w-full smt:top-[10%]`}
                >
                    <h1 className="text-center py-6 font-bold text-3xl text-white">Sign In</h1>
                    <FormSignIn />
                    <div className="flex flex-col justify-center items-center pt-7">
                        <h2 className="text-white">
                            Nếu bạn chỉ muốn dạo chơi{" "}
                            <Link href={"/"} className="text-sky-400">
                                Go here
                            </Link>
                            <br />
                        </h2>
                        <Link href={"/signup"} className="text-sky-400">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
