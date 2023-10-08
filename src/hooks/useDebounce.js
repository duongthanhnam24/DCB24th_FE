"use client";
import { useState, useEffect } from "react";

function useDebounce(value, time) {
    const [debounce, setDebounce] = useState("");
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounce(value);
        }, time);
        return () => clearTimeout(handler);
    }, [value]);
    return debounce;
}

export default useDebounce;
