import { Outlet } from "react-router-dom";

function Footer () {
    return (
        <div className="footer">
            <div className="container">
                <ul className="contact-menu">
                    <li>
                        <a href="https://drive.google.com/file/d/18ab0cyflnpOlVHyB0f7X3FSsNvisUC8r/view?usp=sharing" target="_blank" rel="noreferrer noopener">Résumé</a>
                    </li>
                    <li>
                        <a href="mailto:peiwenhuang@ntu.im" target="_blank" rel="noreferrer noopener">Email</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/joanne-huang-756649205/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/peiwenhuang27" target="_blank" rel="noreferrer noopener">GitHub</a>
                    </li>
                </ul>
                <p>Design and Code with ❤ © 2022 Pei-Wen Huang</p>
            </div>

            <Outlet />
        </div>
    );
};

export default Footer;

