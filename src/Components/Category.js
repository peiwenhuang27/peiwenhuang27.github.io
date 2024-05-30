import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, Outlet } from "react-router-dom";
import Transitions from "./Helpers/Transition";
import CategoryNav from "./CategoryNav";
import TopicCard from "./Pages/Home/TopicCard";

import { ScrollReveal } from "./Helpers/SmoothScroll";

function LargeList ({ workData, lifeData, categoryIndex }) { // only for a category, suffix, name, items
    useEffect(() => {
        // console.log("in useEffect, categoryIndex = ", categoryIndex);
    }, []);
    let category = workData[categoryIndex]; /////////

    return (
        <ScrollReveal>
            <div className="topic-container subsection-wrapper">
                <CategoryNav defaultActiveKey={category.suffix} workData={workData} />
                <div className="title">
                    <h4>{category.headline}</h4>
                </div>
                
                <div className="my-5">
                    <div className="d-flex flex-column align-items-center">
                        <ul className="w-100 row">
                            {
                                category.items.map(item =>
                                    <li className="col-lg-4 col-md-12 m-0 pb-4">
                                        <TopicCard link={item.id} data={item} size="medium" />
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div id="explore-beyond" className="d-flex justify-content-center mt-5">
                        <div className="w-sizer d-flex flex-column align-items-center">
                            <h5 className="mb-3">Explore beyond work</h5>
                            <ul className="w-100 d-flex justify-content-between">
                                {
                                    lifeData.map(item => {
                                        if(item.target === "_blank") {
                                            return (
                                                <a className="topic-card-img-container-sm" target={item.target} rel='noopener noreferrer' href={item.suffix}>
                                                    <h6>{item.name}</h6>
                                                    <div id={`${item.name}`} className="topic-card-img" style={{ backgroundImage: `url(${item.img})`, backgroundBlendMode: "multiply" }} />
                                                </a>
                                            );
                                        }
                                        return (
                                            <Link to={item.suffix} target={item.target} className="topic-card-img-container-sm">
                                                <h6>{item.name}</h6>
                                                <div id={`${item.name}`} className="topic-card-img" style={{ backgroundImage: `url(${item.img})`, backgroundBlendMode: "multiply" }} />
                                            </Link>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
};

function Category ({ workData, lifeData }) {
    let { categoryId } = useParams();
    let categoryIndex = workData.findIndex(workData => workData.suffix === categoryId);

    return (
        <Transitions>
            <div className="category-page">
                <div className="container">
                    <LargeList workData={workData} lifeData={lifeData} categoryIndex={categoryIndex} />
                    
                    <Outlet />
                </div>
            </div>
        </Transitions>

        
    );
};

export default Category;