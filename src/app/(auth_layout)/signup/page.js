"use client";
import Link from "next/link";
import style from "./signUp.module.css";

import FormSigUP from "@/components/form/signUp";

function SignIn() {
    return (
        <div className={style.bg}>
            <div className={style.children}>
                <div className={style.formSignIn}>
                    <h1 className="text-center py-6 font-bold text-3xl text-white">Sign Up</h1>
                    <FormSigUP />
                    <div className="flex flex-col justify-center items-center py-7 ">
                        <h2 className="text-white">
                            If you just want to make a purchase right now{" "}
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
