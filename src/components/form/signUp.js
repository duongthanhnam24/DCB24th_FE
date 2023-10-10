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
import { useRouter } from "next/navigation";

const formSchema = z
    .object({
        name: z.string().refine((value) => value.trim().length > 0, {
            message: "fill your name",
        }),
        email: z.string().email({}),
        password: z
            .string()
            .refine((value) => value.trim().length > 0, {
                message: "Password is required",
            })
            .refine((value) => value.trim().length >= 6, {
                message: "Password must be at least 6 characters",
            }),
        checkpassword: z
            .string()
            .refine((value) => value.trim().length > 0, {
                message: "Repeat Password is required",
            })
            .refine((value) => value.trim().length >= 6, {
                message: "Password must be at least 6 characters",
            }),
        phone: z.string().refine((value) => value.trim().length > 0, {
            message: "phone is required",
        }),
    })
    .refine((data) => data.password === data.checkpassword, {
        message: "Password and repeat check password must match",
        path: ["checkpassword"],
    });

function FormSignIn() {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            checkpassword: "",
            phone: 0,
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/users/signup`, {
            method: "POST",
            redirect: router.push("/signin"),
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values), // body data type must match "Content-Type" header
        });
        const result = await response.json().then((data) => {
            console.log(data);
        }); // parses JSON response into native JavaScript objects

        // console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-10">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white text-base">Your Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Name" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white text-base">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
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
                <FormField
                    control={form.control}
                    name="checkpassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white">Repeat Password</FormLabel>
                            <FormControl>
                                <Input placeholder="" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white">Phone</FormLabel>
                            <FormControl>
                                <Input placeholder="Phone" {...field} />
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
