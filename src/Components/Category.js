import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, Outlet } from "react-router-dom";
import Transitions from "./Transition";
import CategoryNav from "./CategoryNav";
import TopicCard from "./Pages/Home/TopicCard";

import { ScrollReveal } from "./Helpers/SmoothScroll";

function LargeList ({ workData, lifeData, categoryIndex, variants }) { // only for a category, suffix, name, items
    let category = workData[categoryIndex];
    let leftTxt, leftSuffix, rightTxt, rightSuffix = null;
    if ( categoryIndex > 0 ) { // has left
        leftTxt = workData[categoryIndex - 1].name;
        leftSuffix = workData[categoryIndex - 1].suffix;
    }
    if ( categoryIndex < workData.length - 1) { // has right
        rightTxt = workData[categoryIndex + 1].name;
        rightSuffix = workData[categoryIndex + 1].suffix;
    }

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
                                    lifeData.map(item =>
                                        <Link to={item.suffix} className="topic-card-img-container-sm">
                                            <h6>{item.name}</h6>
                                            <div id={`${item.name}`} className="topic-card-img" style={{ backgroundImage: `url(${item.img})`, backgroundBlendMode: "multiply" }} />

                                            {/* <div className="topic-card-img" style={{ backgroundImage: `url(${item.img}),  linear-gradient(to bottom right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)`, backgroundBlendMode: "multiply" }} /> */}
                                        </Link>
                                    )
                                }
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
};

function Category ({ workData, lifeData, variants }) {
    let { categoryId } = useParams();
    let categoryIndex = workData.findIndex(workData => workData.suffix === categoryId);

    return (
        <Transitions>
            <div className="category-page">
                <div className="container">
                    <LargeList workData={workData} lifeData={lifeData} categoryIndex={categoryIndex} variants={variants} />
                    
                    <Outlet />
                </div>
            </div>
        </Transitions>

        
    );
};

export default Category;