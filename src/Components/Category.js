import React from "react";
import { Routes, Route, Link, useParams, useMatch, Outlet } from "react-router-dom";
import { LeftLinkNav } from "./Pages/Home/LeftNav";
import TopicCard from "./Pages/Home/TopicCard";

function MediumList (meta) {
    const data = meta.data; // only for a category, suffix, name, items

    return (
        <div className="medium-list w-100 mb-5 pt-3">
            <ul className="row">
                {
                    data.items.map(item =>
                        <li className="col-md-6 mb-3">
                            <TopicCard link={item.title.replace(/\s/g , "-")} data={item} />
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

function SmallList (meta) {
    const data = meta.data; // only for a category, suffix, name, items

    return (
        <div className="small-list w-100 mb-5">
            <ul className="row">
                {
                    data.items.map(item =>
                        <li className="col-md-4 mb-3">
                            <TopicCard link={item.title.replace(/\s/g , "-")} data={item} />
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

function LargeList (meta) {
    const data = meta.data; // all data
    const categoryIndex = meta.categoryIndex; // only for a category, suffix, name, items
    let category = data[categoryIndex];
    let navData = [...data.slice(0, categoryIndex), ...data.slice(categoryIndex + 1)];

    return (
        <div className="large-list-container row d-flex mt-4 pt-4">
            <div className="col-md-3">
                <h2 className="category-title mb-4">{category.name}</h2>
                <LeftLinkNav showTitle={false} prefix={"/Works"} data={navData}/>
            </div>
            
            <div className="col-md-9">
                <div className="large-list w-100 d-flex flex-column align-items-center mb-3">
                    <ul className="d-flex flex-column align-items-center">
                        {
                            category.items.map(item =>
                                <li className="m-0">
                                    <TopicCard link={item.title.replace(/\s/g , "-")} data={item} />
                                </li>
                            )
                        }
                    </ul>
                </div>`
            </div>
        </div>
        
    );
};

function Category (meta) {
    let { categoryId } = useParams();
    const data = meta.data;
    let categoryIndex = data.findIndex(data => data.suffix == categoryId);


    return (
        <div className="category-page">
            <div className="container">
                <LargeList data={data} categoryIndex={categoryIndex} />
                
                <Outlet />
            </div>
        </div>
        
    );
};

export default Category;