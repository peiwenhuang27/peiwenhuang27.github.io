import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ReactPlayer from "react-player";

function Sswim() {
    let img = "https://live.staticflickr.com/65535/52505951201_745d16f0cf_k.jpg";

    return (
        <div>
            <div className="mt-5 d-flex justify-content-center">
                <img className="w-sizer-sm graphic-cover-img" src={img} alt="cover poster" />
            </div>
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h2 className="mb-3">SSWIM: Joint Orientation Camp of NTU IM, SW, Sociology</h2>
                            <h3>Tags: Event Visual Design, Graphic Design</h3>
                    </div>
                    <div className="row mb-5">
                        <div className="topic-desc-container col-md-4">
                            <h3>Duration </h3>
                            <ul>
                                <li>1 month</li>
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
                                <li className="col-md-4">Designing event T-shirt</li>
                                Designing Facebook profile frame
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            

            <div className="container">
                <div className="topic-container">
                    <div className="row">
                        <div className="col-md-6 d-flex flex-column align-items-start mb-5">
                            <h3 className="heading-1 my-4">Introduction</h3>
                            <p className="">
                            SSWIM is a joint orientation camp held for freshmen in departments of Information Management (IM), Social Work (SW), and Sociology. Taking a wordplay on the term “swim”, SSWIM logo uses three fluid lines to mimic the waves of water when swimming, whereas the circles around them are the droplets of water, creating a flowing dynamic. The color palette of the design takes desaturated variants from the 3 primary colors— red, yellow, and blue to build a harmonious and warm tone.
                            </p>
                        </div>
                        <div className="col-md-6 p-5">
                            <img className="w-100" src="/works/Event/SSWIM/logo.png" alt="logo preview" />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-8 mt-3 d-flex flex-column">
                            <img className="fanpage w-100" src="https://64.media.tumblr.com/3d78e5e3e15159db9728b236960c6aff/113b79646b996d0c-e1/s2048x3072/306c3d07b46f3d0802a133ab89d67a226c602130.pnj" alt="social presence preview" />
                            <p className="table-caption mt-4 text-center">Mockup of fanpage profile</p>
                        </div>
                        <div className="col-md-4 mt-3 d-flex flex-column align-items-center">
                            <div className="px-3 d-flex flex-column align-items-center">
                                <img className="fanpage-sm w-75" src="https://64.media.tumblr.com/64c18b9726243995466dee09be8507ff/113b79646b996d0c-ee/s1280x1920/cd96708c8a6e23cf230b8c013fbe75e0aed2bb36.pnj" alt="social presence preview" />
                            </div>
                            <p className="table-caption mt-4">Mockup of profile frame</p>
                        </div>
                        
                    </div>
                    
                    

                    
                    
                </div>
            </div>

            

            
            <div style={{height: "30vh"}}/>
            
        </div>
    );
};


export default Sswim;