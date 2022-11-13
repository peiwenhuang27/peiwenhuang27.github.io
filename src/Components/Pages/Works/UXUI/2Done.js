import { Outlet } from "react-router-dom";

function ToDone () {
    
    return (
        <div className="container">
            <h1>This is 2Done page</h1>

            <Outlet />
        </div>
    );
};

export default ToDone;