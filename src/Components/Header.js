import { Link, Outlet } from "react-router-dom";
import { useEffect, useState, useLocation } from "react";
// import { Link as ScrollLink } from 'react-scroll';

const useScrollToWorks = (setScrollToWorks) => {
    const [match, setMatch] = useState("Hello");
    const scroll = () => {
        let elem = document.getElementsByClassName('intro-body')[0];
        if (!elem) {
            // redirect to home page
            window.location.href = "/";
            elem = document.getElementsByClassName('intro-body')[0];
        }
        let h = elem.offsetTop - document.getElementsByClassName('header')[0].offsetHeight;
        window.setTimeout( ()=>{ window.scrollTo({top: h, left: 0, behavior: "smooth"}) }, 50 );
        
        setMatch("scroll");
    };
    return {match, scroll};
  };

function Header (meta) {
    const data = meta.data;
    // const {match, scroll} = useScrollToWorks("");

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

