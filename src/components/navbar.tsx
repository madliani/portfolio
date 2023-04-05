import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
    padding: 30px 0;
`;

const Nav = styled.ul`
    a {
        padding-left: 0.5em;
        padding-right: 0.5em;
        margin: 0 10px;
        font-weight: 500;
        color: var(--light);
        font-size: 18px;
    }

    a:hover {
        color: var(--greenAlt);
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
    background: transparent !important;
    padding-left: 0 !important;
    padding-right: 0 !important;

    &:focus {
        box-shadow: none;
    }
`;

const TogglerIcon = styled.span`
    background-image: url("../../assets/icons/toggler-icon.svg");
    font-size: 24px;
    text-align: right;
    margin-right: 30px;
`;

const Navbar: React.FC = () => {
    const [menu, setAsOpen] = useState<boolean>(false);

    // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
    const toggleNav = (): void => {
        setAsOpen(!menu);
    };

    const show: string = menu ? "show" : "";

    return (
        <div>
            <NavbarWrapper className="navbar navbar-expand-sm">
                <div className="container">
                    <Toggler
                        className="navbar-toggler ms-auto"
                        type="button"
                        aria-controls="navbarMobile"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={toggleNav}
                    >
                        <TogglerIcon className="navbar-toggler-icon" />
                    </Toggler>
                    <div
                        className={"collapse navbar-collapse " + show}
                        id="navbarMobile"
                    >
                        <Nav id="menu-primary" className="navbar-nav ms-auto">
                            {/* Home */}
                            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
                            <li onClick={toggleNav}>
                                <Link to="/">Home</Link>
                            </li>
                            {/* About */}
                            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
                            <li onClick={toggleNav}>
                                <Link to="/about">About</Link>
                            </li>
                            {/* Portfolio */}
                            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
                            <li onClick={toggleNav}>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                        </Nav>
                    </div>
                </div>
            </NavbarWrapper>
        </div>
    );
};

export default Navbar;
