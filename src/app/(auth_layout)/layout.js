"use client";

import "@/styles/globals.css";

export const metadata = {
    title: "Authenticate",
    description: "Sign In",
};

export default function AuthLayout({ children }) {
    return <div className="authentication">{children}</div>;
}
