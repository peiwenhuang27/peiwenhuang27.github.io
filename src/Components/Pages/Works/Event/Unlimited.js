import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ReactPlayer from "react-player";

function Unlimited() {
    let img = "https://live.staticflickr.com/65535/52505948056_db90c20dbe_k.jpg";

    return (
        <div>
            <div className="mt-5 d-flex justify-content-center">
                <img className="graphic-cover-img" src={img} width="500px" alt="cover poster" />
            </div>
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h2 className="mb-3">UNLIMITIED: 2020 NTU IM Week</h2>
                            <h3>Tags: Event Visual Design, Graphic Design</h3>
                    </div>
                    <div className="row mb-5">
                        <div className="topic-desc-container col-md-4">
                            <h3>Duration </h3>
                            <ul>
                                <li>1 week</li>
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
                        This is a design project to create visuals for the Week of Information Management (IM) at National Taiwan University (NTU) in 2020 (The event was subsequently cancelled due to COVID-19 outbreak). 
                        NTU IM Week is usually held annually to sell food and provide student performances to increase the exposure of the IM department. “UnlIMted” incorporates the abbreviation IM into the word, indicating the unlimited creativity of us as IM students. <br/><br/>
Unlimited is the wild imagination that breaks through traditional barriers. The visuals of this event uses colorful bubbles and irregular 3D shapes that seems to disobey the rule of physics in the everyday world. 
                        </p>
                    </div>
                    
                    <div style={{margin: "0 auto"}} className="w-sizer fanpage mt-3">
                        <img className="w-100" src="https://64.media.tumblr.com/3fb8b78634e4cfabafac755c0d57144d/113b79646b996d0c-44/s2048x3072/69601e9ddf470a0e5d7b6e7d48bf20765b0ad8d1.pnj" alt="social presence preview" />
                    </div>
                    <p className="table-caption mt-4 text-center">Mockup of fanpage profile</p>
                    
                </div>
            </div>

            

            
            <div style={{height: "30vh"}}/>
            
        </div>
    );
};


export default Unlimited;