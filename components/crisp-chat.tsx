"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("9a10c78f-4af2-4a50-9fed-811211e41434")
    }, []);
    
    return null;
}