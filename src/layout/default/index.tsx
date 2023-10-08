import React from "react";
import { Header } from "./Header";
interface DefaultLayoutProps {
    children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <>
            <main className="min-h-screen py-16">{children}</main>
        </>
    );
};
