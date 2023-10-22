import { Link } from "gatsby";
import React from "react";
import { Icon } from "@iconify/react";

export const Header = () => {
    const onToggleTheme = () => {
   
        if(localStorage.theme != "dark"){
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        }else{
            document.documentElement.classList.remove("dark");
            localStorage.theme = "";
        }
    }
    return (
        <header className="pt-3 md:pt-6 w-full h-16 mb-5 ">
            <nav className="px-2 container w-full h-full flex items-center justify-between">
                <span className="p-0 rounded-sm whitespace-nowrap flex items-center">
                    <Link className="text-xl font-semibold hover:bg-gray-500/10 dark:hover:bg-gray-100/10 p-2 duration-200 rounded-md select-none flex items-center" to="/">
                        Sxgitario
                    </Link>
                </span>
                <div className="flex items-center gap-4">
                    <div className="bg-gray-500/20 dark:bg-gray-200/10  rounded-md p-2 cursor-pointer" onClick={onToggleTheme}>
                        <Icon icon="ph:moon"/>
                    </div>
                    <div className="cursor-pointer">
                        <Icon icon="ri:settings-line"/>
                    </div>
                </div>
            </nav>
        </header>
    );
};
