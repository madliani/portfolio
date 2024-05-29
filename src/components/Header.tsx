import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ToggleIcon from "../../assets/icons/toggler-icon.svg";

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

    @media (max-width: 768px) {
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

export const Header = () => {
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
                        <img
                            alt="Toggle icon"
                            className="navbar-toggler-icon navbar-dark"
                            src={ToggleIcon}
                        />
                    </Toggler>
                    <div
                        className={"collapse navbar-collapse " + show}
                        id="navbarMobile"
                    >
                        <Nav className="navbar-nav ms-auto" id="menu-primary">
                            <li>
                                <Link onClick={toggleNav} to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link onClick={toggleNav} to="/about">
                                    About
                                </Link>
                            </li>
                        </Nav>
                    </div>
                </div>
            </Navbar>
        </div>
    );
};
