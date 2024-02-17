"use client";

import { useState } from "react";

import MainWindow from "@/app/components/MainWindow";

export default function Page() {
    const [selectedWindow, _] = useState("main");

    switch (selectedWindow) {
        case "main": {
            return <MainWindow />;
        }
    }
}
