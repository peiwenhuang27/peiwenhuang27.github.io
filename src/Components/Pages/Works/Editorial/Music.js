import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ReactPlayer from "react-player";

function Music() {
    let img = "https://live.staticflickr.com/65535/52504768712_45f044d13d_k.jpg";

    return (
        <div>
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h3 className="mb-4 color-dark text-bold date">March 2022</h3>
                            <h2 className="mb-3">Music</h2>
                            <h3 className="mb-3">Book Cover Design, Graphic Design</h3>
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
                        Music, a panacea on mood by way of listening. Aquamarine and orange are used to convey a sense of liveliness. The theme element is transformed from the shape of a treble clef, whereas white lines in the background imitates staff. Discreet bubbles scattered around also strengthens the overall happy ambiance.
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


export default Music;