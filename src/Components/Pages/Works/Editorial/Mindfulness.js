import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ReactPlayer from "react-player";

function Mindfulness() {
    let img = "https://live.staticflickr.com/65535/52504768682_1880429a5b_k.jpg";

    return (
        <div>
            <div className="mt-5 d-flex justify-content-center">
                <img className="w-sizer-sm graphic-cover-img" src={img} alt="cover poster" />
            </div>
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h2 className="mb-3">Mindfulness</h2>
                            <h3>Tags: Book Cover Design, Graphic Design</h3>
                    </div>
                    <div className="row">
                        <div className="topic-desc-container col-md-4">
                            <h3>Duration </h3>
                            <ul>
                                <li>1 week</li>
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
                <div className="topic-container">
                    <div className="d-flex flex-column align-items-start">
                        <h3 className="heading-1 my-4">Introduction</h3>
                        <p className="">
                        Borrowing from the famous idiom, this poster promotes plant-based diet to the public. As the foreground of aquamarine backdrop, a silhouette of door invites people into the world of veganism. An affluence of vegetables including carrot, beetroot and avocados conveys a sense of minimalism, accompanied by cuisines like pizza, ravioli and beverage. Enjoying a delicious meal does not necessarily require the presence of meet after all.
                        </p>
                    </div>
                </div>
            </div>

            
            <div style={{height: "30vh"}}/>
            
        </div>
    );
};


export default Mindfulness;