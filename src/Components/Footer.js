import { Link, Outlet } from "react-router-dom";

function Footer () {
    return (
        <div className="footer">
            <div className="container">
                <ul className="contact-menu">
                    <li>
                        <a href="#">Résumé</a>
                    </li>
                    <li>
                        <a href="#">Email</a>
                    </li>
                    <li>
                        <a href="#">LinkedIn</a>
                    </li>
                    <li>
                        <a href="#">GitHub</a>
                    </li>
                </ul>
                <p>Made with Love © 2022 Joanne Huang</p>
            </div>

            <Outlet />
        </div>
    );
};

export default Footer;

