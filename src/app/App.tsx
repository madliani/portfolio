import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { router } from "../router/router";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "JetBrains Mono";
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        src: url("../../assets/fonts/JetBrains Mono/JetBrainsMono-Regular.woff2") format("woff2");
    }

    :root {
        --light: #fff;
        --dark: #2d2d30;
        --dark-lighten: #36454f;
        --gray: #d3d3d3;
        --red-alt: #d9514e;
        --green-alt: #4ec9b0;
    }

    html {
        height: 100%;
    }

    body {
        height: 100%;
        font-family: "JetBrains Mono", monospace;
        line-height: 26px;
        color: var(--light);
        background: var(--dark);
    }

    #root {
        height: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: var(--light);
        word-wrap: break-word;
    }

    .alt-green {
        color: var(--green-alt);
    }

    h1:not(:last-child),
    h2:not(:last-child),
    h3:not(:last-child),
    h4:not(:last-child),
    h5:not(:last-child),
    h6:not(:last-child) {
        margin-bottom: 25px;
    }

    a {
        text-decoration: none;
        transition: 0.3s ease;
    }

    a:hover {
        color: var(--light);
    }

    a:hover,
    a:focus,
    a:active {
        text-decoration: none;
    }

    .main-color {
        color: var(--green-alt);
    }

    .section-title {
        margin-bottom: 20px;
        font-weight: 800;
    }

    ul,
    ol {
        padding-left: 20px;
    }

    .primary-btn {
        margin-bottom: 25px;
        padding: 15px 50px;
        color: var(--light) !important;
        background-color: var(--dark);
        border: 2px solid var(--green-alt);
        border-radius: 1.25rem;
    }

    .primary-btn:hover {
        color: var(--green-alt) !important;
        background-color: var(--dark);
    }

    .primary-btn:disabled {
        background-color: #d3d3d3;
    }

    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    @media (width >= 1400px) {
        .container {
            max-width: 1140px !important;
        }
    }
`;

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
};
