import { ReactNode } from "react";
import Snowfall from "react-snowfall";

import Navbar from "../components/navbar";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Snowfall />
            <Navbar />
            <main>{children}</main>
        </>
    );
};

export default Layout;
