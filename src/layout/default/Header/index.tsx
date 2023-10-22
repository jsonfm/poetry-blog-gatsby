import { Link } from "gatsby";
import React from "react";
import { Icon } from "@iconify/react";

export const Header = () => {
    return (
        <header className="w-full h-16 mb-5">
            <nav className="px-2 container w-full h-full flex items-center justify-between">
                <span className="rounded-sm whitespace-nowrap flex items-center">
                    <Link className="text-xl font-semibold hover:scale-105 duration-200  p-2" to="/">
                        Luces y sombras
                    </Link>
                </span>
                <div className="flex items-center gap-4">
                    <div className="bg-gray-200/10 rounded-md p-2">
                        <Icon icon="ph:moon"/>
                    </div>
                    <div>
                        <Icon icon="ri:settings-line"/>
                    </div>
                </div>
            </nav>
        </header>
    );
};
