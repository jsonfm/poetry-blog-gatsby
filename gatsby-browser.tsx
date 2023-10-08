import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import { DefaultLayout } from "./src/layout/default";
import "./src/styles/global.css";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
    return <DefaultLayout>{element}</DefaultLayout>;
};
