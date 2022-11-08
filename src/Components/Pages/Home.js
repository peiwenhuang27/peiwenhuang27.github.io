import Item from "antd/lib/list/Item";
import { Routes, Route, Link, useParams, useMatch, Outlet } from "react-router-dom";
import Banner from "./Banner";


function Home (meta) {
    let prefix = "Works";
    const data = meta.data;

    return (
        <div className="main">
            <Banner />
            <div className="container">
                <div className="main-body">
                    <ul>
                        {data.map(item =>
                            <li>
                                <Link to={`${prefix}/${item.suffix}`}>{item.name}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default Home;