import { Routes, Route, Link, useParams, useMatch, Outlet } from "react-router-dom";

function Topic () {
    
    let { workId } = useParams();
    // console.log(workId);
    
    return (
        <div className="topic">
            <div className="container">
                <h1>This is {workId}</h1>
            </div>

            <Outlet />
        </div>
    );
};

export default Topic;