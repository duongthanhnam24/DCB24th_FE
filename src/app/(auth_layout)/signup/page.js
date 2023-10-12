"use client";
import Link from "next/link";
import style from "./signUp.module.css";

import FormSigUP from "@/components/form/signUp";

function SignIn() {
    return (
        <div className={style.bg}>
            <div className={`${style.children} smt:px-5 overflow-scroll`}>
                <div
                    className={`${style.formSignIn} rounded-xl max-w-[700px] h-[500px] sticky top-[25%] bottom-[50%] overflow-scroll smt:w-full smt:top-[10%] `}
                >
                    <h1 className="text-center py-6 font-bold text-3xl text-white">Sign Up</h1>
                    <FormSigUP />
                    <div className="flex flex-col justify-center items-center py-7 ">
                        <h2 className="text-white">
                            Nếu bạn chỉ muốn dạo chơi{" "}
                            <Link href={"/"} className="text-sky-400">
                                Go here
                            </Link>
                            <br />
                        </h2>
                        <Link href={"/signin"} className="text-sky-400">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
