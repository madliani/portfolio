import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
    padding: 30px 0;
`;

const Nav = styled.ul`
    a {
        margin: 0 10px;
        padding-right: 0.5em;
        padding-left: 0.5em;
        font-size: 18px;
        font-weight: 500;
        color: var(--light);
    }

    a:hover {
        color: var(--green-alt);
        text-decoration: underline;
    }

    &:active {
        color: var(--light);
    }

    @media (width <= 768px) {
        li {
            padding-bottom: 7px;
        }
    }
`;

const Toggler = styled.button`
    padding-right: 0 !important;
    padding-left: 0 !important;
    background: transparent !important;

    &:focus {
        box-shadow: none;
    }
`;

const TogglerIcon = styled.span`
    margin-right: 30px;
    font-size: 24px;
    text-align: right;
    background-image: url("../../assets/icons/toggler-icon.svg");
`;

export const Header = function () {
    const [menu, setAsOpen] = useState(false);

    const toggleNav = () => {
        setAsOpen(!menu);
    };

    const show = menu ? "show" : "";

    return (
        <div>
            <Navbar className="navbar navbar-expand-sm">
                <div className="container">
                    <Toggler
                        aria-controls="navbarMobile"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        className="navbar-toggler ms-auto"
                        onClick={toggleNav}
                        type="button"
                    >
                        <TogglerIcon className="navbar-toggler-icon" />
                    </Toggler>
                    <div
                        className={"collapse navbar-collapse " + show}
                        id="navbarMobile"
                    >
                        <Nav className="navbar-nav ms-auto" id="menu-primary">
                            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
                            <li onClick={toggleNav}>
                                <Link to="/">Home</Link>
                            </li>
                            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
                            <li onClick={toggleNav}>
                                <Link to="/about">About</Link>
                            </li>
                            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
                            <li onClick={toggleNav}>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                        </Nav>
                    </div>
                </div>
            </Navbar>
        </div>
    );
};