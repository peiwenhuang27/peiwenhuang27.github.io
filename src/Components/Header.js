import { Link, Outlet } from "react-router-dom";
// import { Link as ScrollLink } from 'react-scroll';


function Header ({ data }) {

    return (
        <div id="header" className="header">
            <div className="container">
                <div className="header-navbar">
                    <Link to="/" className="header-logo">
                        <h1>Joanne Huang</h1>
                    </Link>
                    <ul className="header-menu">
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/#works">Works</Link>
                        </li>
                    </ul>
                    {/* TODO: Dropdown Menu */}
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default Header;

