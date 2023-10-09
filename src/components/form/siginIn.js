"use client";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    required,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// import { getUser } from "@/redux/features/counter/counterSlice";
// import { GetDetailUser } from "@/service/user";
// import jwtDecode from "jwt-decode";

const formSchema = z.object({
    email: z.string().email({}),
    password: z
        .string()
        .refine((value) => value.trim().length > 0, {
            message: "Password is required",
        })
        .refine((value) => value.trim().length >= 6, {
            message: "Password must be at least 6 characters",
        }),
});
const require = formSchema.required({
    email: true,
    password: true,
});

// note có một điều trong này chưa fix đó là khi đăng nhập thành công sau 30s token sẽ hết hạn nếu đăng nhập lại sẽ có một res trả về là ko authen vì token hết hạn

function FormSignIn() {
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    console.log(pathname);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });
        const result = await response.json().then((data) => {
            setData(data);
        });
        // console.log(values);
    }

    if (data?.message) {
        return (
            <div className="flex justify-center items-center h-8 text-white">
                <h1>
                    Wrong password.{" "}
                    <a href={"/signin"} className="text-sky-400">
                        Try again
                    </a>{" "}
                    or click Forgot password to reset it.
                </h1>
            </div>
        );
    }
    // const handleGetUser = async (id, token) => {
    //     const res = await GetDetailUser(id, token);
    //     // dispatch(getUser({ res, token }));
    // };

    if (data?.name) {
        router.push("/");
        localStorage.setItem("access_token", data?.accToken);
        localStorage.setItem("refresh_token", data?.refreshTok);
        // if (data?.accToken) {
        //     const decoded = jwtDecode(data?.accToken);
        //     if (decoded?.id) {
        //         handleGetUser(decoded?.id, data?.accToken);
        //     }
        // }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-10">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white text-base">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormDescription className="text-black">
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white">Password</FormLabel>
                            <FormControl>
                                <Input placeholder="" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}

export default FormSignIn;
