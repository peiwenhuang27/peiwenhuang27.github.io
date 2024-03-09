import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { LogoIcon, ArrowIcon } from './Icons';
// TODO
// hamburger menu
function Header ({ workData, lifeData = null }) {
    const [isMobile, setIsMobile] = useState(false);

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 767) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize); 
    });

    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    return (
        <div className="header d-flex align-items-center">
            <div className="container">
            <Navbar expand="lg" className="bg-body-tertiary">
                
                    <Navbar.Brand href="/">
                        <LogoIcon />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">
                            <span className="header-item ">Home</span>
                        </Nav.Link>

                        <Nav.Link href="/About" className="">
                            <span className="header-item ">About</span>
                        </Nav.Link>

                        <NavDropdown title={<span className="header-item  d-flex">Work <ArrowIcon /></span>} id="basic-nav-dropdown" align="end">
                            {
                                workData.map(item =>
                                    <NavDropdown.Item href={`/Works/${item.suffix}`} className="py-2">
                                        {item.name}
                                    </NavDropdown.Item>
                                )
                            }
                        </NavDropdown>

                        <NavDropdown title={<span className="header-item  d-flex">Life <ArrowIcon /></span>} id="basic-nav-dropdown" align="end">
                            {
                                lifeData.map(item =>
                                    <NavDropdown.Item href={`${item.suffix}`} className="py-2">
                                        {item.name}
                                    </NavDropdown.Item>
                                )
                            }
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                
            </Navbar>
                {/* <div className="header-navbar">
                    <Link to="/">
                        <LogoIcon />
                    </Link>
                    <ul className="header-menu">
                        <li className="d-flex justify-content-center">
                            <span className="navbar-item h-6">
                                <Link to="/">Home</Link>
                            </span>
                            
                        </li>

                        <li className="d-flex justify-content-center">
                            <span className="navbar-item h-6">
                                <Link to="/About">About</Link>
                            </span>
                            
                        </li>

                        <li className="d-flex justify-content-center">
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
                        <li className="d-flex justify-content-center">
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
                                            <Link to={`${item.suffix}`} className="dropdown-item header-item py-2">{item.name}</Link>
                                        )
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>

                </div> */}
            <Outlet />
            </div>
        </div>
    );
};

export default Header;

