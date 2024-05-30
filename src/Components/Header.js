import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { LogoIcon, ArrowIcon } from './Icons';

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

    return (
        <div id="header" className="header d-flex align-items-center">
            <div className="container">
            <Navbar expand="lg" className="bg-body-tertiary">
                    <Navbar.Brand href="/">
                        <LogoIcon />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/#">
                            <span className="header-item ">Home</span>
                        </Nav.Link>

                        <Nav.Link href="/#/About" className="">
                            <span className="header-item ">About</span>
                        </Nav.Link>

                        <NavDropdown title={<span className="header-item  d-flex">Work <ArrowIcon /></span>} id="basic-nav-dropdown" align="end">
                            {
                                workData.map(item =>
                                    <NavDropdown.Item href={`/#/Works/${item.suffix}`} className="py-2">
                                        {item.name}
                                    </NavDropdown.Item>
                                )
                            }
                        </NavDropdown>

                        <NavDropdown title={<span className="header-item  d-flex">Life <ArrowIcon /></span>} id="basic-nav-dropdown" align="end">
                            {
                                lifeData.map(item => {
                                    if(item.target === "_blank") {
                                        return(
                                            <NavDropdown.Item href={item.suffix} target={item.target} className="py-2">
                                                {item.name}
                                            </NavDropdown.Item>
                                        );
                                    }
                                    else {
                                        return (
                                            // add # because using HashRouter
                                            <NavDropdown.Item href={`/#${item.suffix}`} target={item.target} className="py-2">
                                                {item.name}
                                            </NavDropdown.Item>
                                        );
                                    }
                                })
                            }
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                
            </Navbar>

            <Outlet />
            </div>
        </div>
    );
};

export default Header;

