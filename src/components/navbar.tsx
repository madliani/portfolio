import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const [menu, setAsOpen] = useState<boolean>(false);

    // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
    const toggleNav = (): void => {
        setAsOpen(!menu);
    };

    const show: string = menu ? "show" : "";

    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-sm">
                <div className="container">
                    <button
                        className="navbar-toggler ms-auto"
                        type="button"
                        aria-controls="navbarMobile"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={toggleNav}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className={"collapse navbar-collapse " + show}
                        id="navbarMobile"
                    >
                        <ul id="menu-primary" className="navbar-nav ms-auto">
                            {/* Home */}
                            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
                            <li onClick={toggleNav}>
                                <Link
                                    to="/"
                                    // activeClassName="active"
                                    className="nav-Link"
                                >
                                    Home
                                </Link>
                            </li>
                            {/* About */}
                            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
                            <li onClick={toggleNav}>
                                <Link
                                    to="/about"
                                    // activeClassName="active"
                                    className="nav-Link"
                                >
                                    About
                                </Link>
                            </li>
                            {/* Portfolio */}
                            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
                            <li onClick={toggleNav}>
                                <Link
                                    to="/portfolio"
                                    // activeClassName="active"
                                    className="nav-Link"
                                >
                                    Portfolio
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
