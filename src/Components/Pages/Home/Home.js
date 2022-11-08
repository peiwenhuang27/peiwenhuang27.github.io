import Item from "antd/lib/list/Item";
import { Routes, Route, Link, useParams, useMatch, Outlet } from "react-router-dom";
import Banner from "./Banner";
import WorkDisplay from "./WorkDisplay";


function Home (meta) {
    let prefix = "Works";
    const data = meta.data;

    return (
        <div className="main">
            <Banner />
            <div id="works">
                <WorkDisplay data={data} />
            </div>

            <Outlet />
        </div>
    );
};

export default Home;