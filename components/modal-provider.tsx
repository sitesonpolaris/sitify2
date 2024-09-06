"use client";

import { useEffect, useState } from "react";
import ProModal from "./pro-modal";

export const ModalProvider = () => {
    const [isMounted, setIsmounted] = useState(false);
    
    useEffect(() => {
        setIsmounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }

    return (
        <>
            <ProModal />
        </>
    )
}