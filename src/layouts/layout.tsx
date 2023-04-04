// eslint-disable-next-line import/default
import ParticlesBg from "particles-bg";
import { ReactNode } from "react";
// eslint-disable-next-line import/default
import MouseParticles from "react-mouse-particles";

import Navbar from "../components/navbar";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <MouseParticles />
            <ParticlesBg bg={true} type="cobweb" />
            <Navbar />
            <main>{children}</main>
        </>
    );
};

export default Layout;
