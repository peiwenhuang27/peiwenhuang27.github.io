import { Link, Outlet } from "react-router-dom";


function Header () {
    return (
        <div className="header">
            <div className="container">
                <div className="header-navbar">
                    <Link to="/" className="header-logo">
                        <h1>
                            Joanne Huang
                        </h1>
                    </Link>

                    <ul className="header-menu">
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Works">Works</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default Header;

