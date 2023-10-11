"use client";

import "@/styles/globals.css";

import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        {children}
                    </PersistGate>
                </Provider>
            </body>
        </html>
    );
}
