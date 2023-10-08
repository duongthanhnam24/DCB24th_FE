"use client";
import Link from "next/link";
import style from "./sign.module.css";

import FormSignIn from "@/components/form/siginIn";

function SignIn() {
    return (
        <div className={style.bg}>
            <div className={style.children}>
                <div className={style.formSignIn}>
                    <h1 className="text-center py-6 font-bold text-3xl text-white">Sign In</h1>
                    <FormSignIn />
                    <div className="flex flex-col justify-center items-center pt-7">
                        <h2 className="text-white">
                            If you just want to make a purchase right now{" "}
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
