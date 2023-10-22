import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import { DefaultLayout } from "./src/layout/default";
import "./src/styles/global.css";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
    React.useEffect(() => {
        
        if(!localStorage) return;
        if(!localStorage?.theme){
            localStorage.theme = "dark";
        }
        document.documentElement.classList.add(localStorage.theme);
    }, []);
    return <DefaultLayout>{element}</DefaultLayout>;
};
