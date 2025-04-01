import { Link, Outlet } from "react-router-dom";
import { EmailIcon, LinkedInIcon, GithubIcon } from "./Icons";

function Footer () {
    return (
        <div className="footer">
            <div className="container">
                <div>
                    <h6>Let's Connect!</h6>
                    <ul className="contact-menu">
                        <li>
                            <a href="https://www.linkedin.com/in/peiwen-h" target="_blank" rel="noreferrer noopener">
                                <LinkedInIcon />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:pwh27design@gmail.com" target="_blank" rel="noreferrer noopener">
                                <EmailIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/peiwenhuang27" target="_blank" rel="noreferrer noopener">
                                <GithubIcon />
                            </a>
                        </li>
                    </ul>
                </div>
                
                <p className="caption">Design and Code with ❤ © 2025 Peiwen Huang</p>
            </div>

            <Outlet />
        </div>
    );
};

export default Footer;

