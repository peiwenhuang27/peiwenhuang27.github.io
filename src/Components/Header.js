import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';


function Header ({ data }) {
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
                        <h1>Pei-Wen Huang</h1>
                    </Link>
                    <ul className="header-menu">
                        <li className="header-about">
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Dropdown
                            show={show}
                            onMouseOver={showDropdown} 
                            onMouseLeave={hideDropdown}>
                                <Dropdown.Toggle className="header-category" variant="light">
                                Works
                                </Dropdown.Toggle>

                                <Dropdown.Menu show={show} className="header-dropdown">
                                    <Dropdown.Item href="/#works" className="header-item py-2">
                                        <Link to="/#works">Introduction</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Header>Category</Dropdown.Header>
                                    {
                                        data.map(item =>
                                            // <Dropdown.Item href={`/Works/${item.suffix}`} className="header-item py-2">
                                                <Link to={`Works/${item.suffix}`} className="dropdown-item header-item py-2">{item.name}</Link>
                                            // </Dropdown.Item>
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

