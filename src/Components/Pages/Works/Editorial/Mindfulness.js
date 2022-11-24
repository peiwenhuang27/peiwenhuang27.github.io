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
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h3 className="mb-4 color-dark text-bold date">March 2022</h3>
                            <h2 className="mb-3">Mindfulness</h2>
                            <h3 className="mb-3">Cover Design, Graphic Design</h3>
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
                        Mindfulness is an indispensable element to soothe the mental stress in our busy life. This book includes introductory knowledge about mindfulness and presents several mindfulness practices. The irregular objects in the cover symbolize the unsettling, anxious feeling in our mind. The unraveling shapes from spirals to lines implies the process of combing through messy emotions. A lotus as a symbol of Zen is also incorporated. Background color uses pink to convey an atmosphere of warmth and happiness, while golden font brings out elegance.
                        </p>
                    </div>

                    <div className="row section-wrapper">
                        <div className="col-md-12 p-1 m-0">
                            <img className="w-100" src={img} alt="cover mockup" />
                        </div>
                    </div>
                </div>
            </div>

            
            <div style={{height: "30vh"}}/>
            
        </div>
    );
};


export default Mindfulness;