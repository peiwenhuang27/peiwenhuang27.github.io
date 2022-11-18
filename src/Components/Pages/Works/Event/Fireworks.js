import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ReactPlayer from "react-player";

function Fireworks() {
    let img = "https://live.staticflickr.com/65535/52505936586_9dd5f32352_k.jpg";

    return (
        <div>
            <div className="mt-5 d-flex justify-content-center">
                <img className="w-sizer-sm graphic-cover-img" src={img} alt="cover poster" />
            </div>
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h2 className="mb-3">Fireworks: NTU IM Night</h2>
                            <h3>Tags: Event Visual Design, Graphic Design</h3>
                    </div>
                    <div className="row mb-5">
                        <div className="topic-desc-container col-md-4">
                            <h3>Duration </h3>
                            <ul>
                                <li>2 weeks</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4">
                            <h3>Role</h3>
                            <ul>
                                <li>Lead Designer</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4">
                            <h3>Tool</h3>
                            <ul>
                                <li>Illustrator</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col">
                            <h3>Responsibilities</h3>
                            <ul className="row">
                                <li className="col-md-4">Designing logo</li>
                                <li className="col-md-8">Designing online presence (Fanpage profile & cover)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            

            <div className="container">
                <div className="topic-container">
                    <div className="d-flex flex-column align-items-start mb-5">
                        <h3 className="heading-1 my-4">Introduction</h3>
                        <p className="">
                        花火 is the Japanese word of “fireworks”. The background of the design uses navy blue for a nighttime feeling, accentuating the main peach pink palette. The radial shape of the design imitates firework explosion, the middle of which is a kaleidoscopic pattern. This design implies the similarity between life and kaleidoscope; ever-changing, forming a uniquely beautiful view at any moment. Some moments in, nevertheless, are as resplendent as fireworks, blossoming in the nightsky of life.  
                        </p>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12 p-1 m-0">
                            <img className="w-100" src={img} alt="cover mockup" />
                        </div>
                        <div className="col-md-12 p-1 m-0">
                            <img className="w-100" src="https://live.staticflickr.com/65535/52506209299_67ecabf218_h.jpg" alt="logo preview" />
                        </div>
                    </div>
                    
                </div>
            </div>

            

            
            <div style={{height: "30vh"}}/>
            
        </div>
    );
};


export default Fireworks;