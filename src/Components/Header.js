import { Link, Outlet } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

function getPxfromVh(vh) {
    const { innerWidth: width, innerHeight: height } = window;
  
    return (vh * height)/100;
}

function Header (meta) {
    const data = meta.data;
    var offset = getPxfromVh(7); 
    // TODO: refine

    return (
        <div className="header">
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
                            <ScrollLink to="works" spy={true} smooth={true} offset={-offset}>Works</ScrollLink>
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

