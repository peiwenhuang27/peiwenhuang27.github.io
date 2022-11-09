import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import CategoryBox from "./CategoryBox";
import { LeftLinkNav } from "./LeftNav";

function WorkDisplay (meta) {

    let prefix = "Works";
    const data = meta.data;

    return (
        <div className="main-body">
            <div className="container pt-5">
                <div className="row">
                    <LeftLinkNav showTitle={true} prefix={prefix} data={data} />

                    <div className="work-list col-10">
                        <ul className="work-cards flex-column">
                            {data.map(item =>
                                <li className="w-100">
                                    <CategoryBox prefix={prefix} data={item} />
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkDisplay;