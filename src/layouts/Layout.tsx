import { ReactNode, useCallback } from "react";
import { Particles } from "react-particles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";
import { Header } from "../components/Header";

type Properties = {
    children: ReactNode;
};

const options: ISourceOptions = {
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push"
            },
            onHover: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            push: {
                quantity: 4
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    particles: {
        collisions: {
            enable: true
        },
        color: {
            value: "#ffffff"
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce"
            },
            random: false,
            speed: 3,
            straight: false
        },
        number: {
            density: {
                area: 800,
                enable: true
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: "square"
        },
        size: {
            value: { max: 5, min: 1 }
        }
    }
};

export const Layout = ({ children }: Properties) => {
    const init = useCallback(async (engine: Engine) => {
        await loadLinksPreset(engine);
    }, []);

    return (
        <>
            <Particles init={init} options={options} />
            <Header />
            <main>{children}</main>
        </>
    );
};
