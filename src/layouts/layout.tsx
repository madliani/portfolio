// eslint-disable-next-line import/default
import ParticlesBg from "particles-bg";
import { ReactNode } from "react";

import Navbar from "../components/navbar";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <ParticlesBg bg={true} type="lines" />
            <Navbar />
            <main>{children}</main>
        </>
    );
};

export default Layout;
