import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ReactPlayer from "react-player";

function Surreal() {
    let img = "https://live.staticflickr.com/65535/52505805468_8e26ceb65e_k.jpg";

    return (
        <div>
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h3 className="mb-4 color-dark text-bold date">March 2022</h3>
                            <h2 className="mb-3">New Era</h2>
                            <h3 className="mb-3">Poster Design, Graphic Design, Collage Art, Surrealism Style</h3>
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
                                <li>Photoshop</li>
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
                                What will the future world look like?<br/><br/>
                                This work explores the possibility of the future of the universe and planets. <br/>
                                The crystall ball manifests the current that which will have been the past, a time long gone into the parallel track of the world.
                                Whale, jelly fish, and stingray swim across the universe, sharing the infinite space with Saturn, as if the world has sunk deep into an ocean.
                                The pair of astronauts gaze afar with hands intertwined symbolizes human's spirit to stand in solidarity no matter the circumstances.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 p-5">
                            <img style={{borderRadius: "4px"}} className="w-100" src="https://live.staticflickr.com/65535/52505393697_3a8aa1ea45_k.jpg" alt="new era poster"/>
                        </div>
                    </div>
                </div>
            </div>

            
            <div style={{height: "30vh"}}/>
            
        </div>
    );
};


export default Surreal;