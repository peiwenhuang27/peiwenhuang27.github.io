import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { ArrowIcon } from './Icons';


function Header ({ workData, lifeData = null }) {
    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    return (
        <div id="header" className="header">
            <div className="container">
                <div className="header-navbar">
                    <Link to="/" className="header-logo">
                        <h1>Peiwen Huang</h1>
                    </Link>
                    <ul className="header-menu">
                        <li className="navbar-item h-6">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="navbar-item h-6">
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Dropdown
                            show={show}
                            onMouseOver={showDropdown} 
                            onMouseLeave={hideDropdown}>
                                <Dropdown.Toggle className="header-category h-6">
                                    <span>
                                        Work<ArrowIcon />
                                    </span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu show={show} className="header-dropdown">
                                    {
                                        workData.map(item =>
                                             <Link to={`Works/${item.suffix}`} className="dropdown-item header-item py-2">{item.name}</Link>
                                        )
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown
                            show={show}
                            onMouseOver={showDropdown} 
                            onMouseLeave={hideDropdown}>
                                <Dropdown.Toggle className="header-category h-6">
                                    <span>
                                        Life<ArrowIcon />
                                    </span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu show={show} className="header-dropdown">
                                    {
                                        lifeData.map(item =>
                                            <Link to={`Works/${item.suffix}`} className="dropdown-item header-item py-2">{item.name}</Link>
                                        )
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>

                </div>

            </div>

            

            <Outlet />
        </div>
    );
};

export default Header;

