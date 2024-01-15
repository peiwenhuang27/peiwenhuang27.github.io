import React from "react";
import { Link } from "react-router-dom";
import { useParams, Outlet } from "react-router-dom";
import Transitions from "./Transition";
import BottomNav from "./BottomNav";
import TopicCard from "./Pages/Home/TopicCard";

function LargeList ({ workData, lifeData, categoryIndex }) { // only for a category, suffix, name, items
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

    // let navworkData = [...workData.slice(0, categoryIndex), ...workData.slice(categoryIndex + 1)];

    return (
        <div className="section-wrapper">
            <div className="title">
                <h6>{category.name}</h6>
                <h4>{category.headline}</h4>
            </div>

            {/* <LeftLinkNav showTitle={false} focusIdx={categoryIndex} prefix={"/Works"} workData={workData}/> */}
            
            <div className="section-wrapper">
                <div className="d-flex flex-column align-items-center">
                    <ul className="w-100 row">
                        {
                            category.items.map(item =>
                                <li className="col-md-4 m-0 pb-4">
                                    <TopicCard link={item.id} data={item} size="medium" />
                                </li>
                            )
                        }
                    </ul>
                </div>
                <BottomNav
                leftTxt={leftTxt} leftSuffix={leftSuffix}
                rightTxt={rightTxt} rightSuffix={rightSuffix} />
                <div className="explore-beyond d-flex justify-content-center mt-5">
                    <div className="w-sizer d-flex flex-column align-items-center">
                        <h4 className="mb-4">Explore beyond work</h4>
                        <ul className="w-100 d-flex justify-content-between">
                            {
                                lifeData.map(item =>
                                    <Link to={item.suffix} className="topic-card-img-container-sm mx-3">
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