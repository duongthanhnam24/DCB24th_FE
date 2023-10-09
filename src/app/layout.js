"use client";
import "@/styles/globals.css";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Provider store={store}>{children}</Provider>
            </body>
        </html>
    );
}
