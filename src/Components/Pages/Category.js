import React from "react";
import { Routes, Route, Link, useParams, useMatch, Outlet } from "react-router-dom";

function Category () {
    let { categoryId } = useParams();
    console.log("in Works, category = ", categoryId);

    return (
        <div className="container">
            <h1>Category: {categoryId}</h1>
            <ul>
                <li>
                    <Link to={'Petit-Mood'}>Petit Mood</Link>
                </li>
                <li>
                    <Link to={'2Done'}>2Done</Link>
                </li>
                <li>
                    <Link to={'Bookworm-Meeter'}>Bookworm Meeter</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    );
};

export default Category;