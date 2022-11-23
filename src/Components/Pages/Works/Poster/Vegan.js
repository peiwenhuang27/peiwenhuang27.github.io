import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ReactPlayer from "react-player";

function Vegan() {
    let img = "https://live.staticflickr.com/65535/52505520719_3c9b2793c2_k.jpg";

    return (
        <div>
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h3 className="mb-4 color-dark text-bold date">April 2022</h3>
                            <h2 className="mb-3">New Era</h2>
                            <h3 className="mb-3">Poster Design, Graphic Design, Memphis Art</h3>
                    </div>
                    <div className="row">
                        <div className="topic-desc-container col-md-4">
                            <h3>Duration </h3>
                            <ul>
                                <li>2 days</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4">
                            <h3>Role</h3>
                            <ul>
                                <li>Solo Designer</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4">
                            <h3>Tool</h3>
                            <ul>
                                <li>Illustrator</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container section-wrapper">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="d-flex flex-column align-items-start">
                                <h3 className="heading-1 my-4">Introduction</h3>
                                <p className="">
                                Borrowing from the famous idiom, this poster promotes plant-based diet to the public. As the foreground of aquamarine backdrop, a silhouette of door invites people into the world of veganism. An affluence of vegetables including carrot, beetroot and avocados conveys a sense of minimalism, accompanied by cuisines like pizza, ravioli and beverage. Enjoying a delicious meal does not necessarily require the presence of meet after all.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 p-5">
                            <img style={{borderRadius: "4px"}} className="w-100" src="https://live.staticflickr.com/65535/52506431158_8fb5650ef5_k.jpg" alt="vegan is the new black poster"/>
                        </div>
                    </div>
                </div>
            </div>

            
            <div style={{height: "30vh"}}/>
            
        </div>
    );
};


export default Vegan;