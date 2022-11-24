import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ReactPlayer from "react-player";

function Elite() {
    let img = "https://live.staticflickr.com/65535/52505254991_f45213c95a_h.jpg";

    return (
        <div>
            {/* <div className="mt-5 d-flex justify-content-center">
                <img className="w-sizer-sm graphic-cover-img" src={img} alt="cover poster" />
            </div> */}
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h3 className="mb-4 color-dark text-bold date">August 2019</h3>
                            <h2 className="mb-3">18th NTU x PKU Elite Camp Commemorative Brochure</h2>
                            <h3 className="mb-3">Cover Design, Layout Design, Graphic Design</h3>
                    </div>
                    <div className="row mb-5">
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Duration </h3>
                            <ul>
                                <li>1 week</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Role</h3>
                            <ul>
                                <li>Director of Arts</li>
                                <li>Lead Designer</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Team</h3>
                            <ul>
                                <li>10 people</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Tool</h3>
                            <ul>
                                <li>Illustrator</li>
                                <li>InDesign</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col mb-5">
                            <h3>Responsibilities</h3>
                            <ul className="row">
                                <li className="col-md-6">Designing book cover</li>
                                <li className="col-md-6">Designing section covers</li>
                                <li className="col-md-6">Constructing the design system, including fonts, color palette, and visual assets</li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start">
                        <a className="link-btn heading-3" href="https://elitecamp.management.ntu.edu.tw/2019/" target="_blank" rel="noreferrer noopener">
                            Official Website
                        </a>
                        <a className="link-btn heading-3" href="https://elitecamp.management.ntu.edu.tw/2019/publication/publication.pdf" target="_blank" rel="noreferrer noopener">
                            View Full Book
                        </a>
                    </div>
                </div>
            </div>

            

            <div className="container">
                <div className="topic-container">
                    <div className="d-flex flex-column align-items-start mb-5">
                        <h3 className="heading-1 my-4">Introduction</h3>
                        <p className="">
                        Elite Camp is an annual summer camp facilitating interaction between  <a className="link" href="https://management.ntu.edu.tw/en" target="_blank" rel="noreferrer noopener">College of Management at National Taiwan University (NTU)</a> and <a className="link" href="https://en.gsm.pku.edu.cn/index.htm" target="_blank" rel="noreferrer noopener">Guanghua School of Management at Peking University (PKU)</a> sponsored by Dr. Samuel Yin. This project was the commemorative brochure produced at the end of the camp. <br/>
The large, brush fonts shows a sense of bravery and boldness, accentuated by the lion stone statues in The Palace Museum at Beijing. Small texts of city names decorating the background are cities visited in the camp. In addition, the overall nostalgic theme is created by adding vintage filters to the photo to mimic old newspapers.
                        </p>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12 p-1 m-0">
                            <img className="w-100" src={img} alt="cover mockup" />
                        </div>
                        <div className="col-md-12 p-1 m-0">
                            <img className="w-100" src="https://live.staticflickr.com/65535/52505731565_b2ed905e93_h.jpg" alt="pages preview" />
                        </div>
                    </div>
                    
                </div>
            </div>

            

            
            <div style={{height: "30vh"}}/>
            
        </div>
    );
};


export default Elite;