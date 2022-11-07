import { BrowserRouter as Link, Outlet } from "react-router-dom";

function NavBar () {
    return (
        // <div className="header">
        //     <div className="container">
        //         <div className="header-navbar">
        //             <h1 className="header-logo">
        //                 <Link to="/">Home</Link>
        //             </h1>
        //             <ul>
        //                 <li>
        //                     <Link to="/About">About</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/Works">Works</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>

        //     <hr />

        //     <Outlet />
        // </div>

        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Works">Works</Link>
                </li>
            </ul>
{/* 
            <hr />
            <Outlet /> */}
        </div>
    );
};

export default NavBar;

