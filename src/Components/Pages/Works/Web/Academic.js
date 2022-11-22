import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import ProgressiveImage from 'react-progressive-bg-image';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ReactPlayer from "react-player";

function Academic() {
    const img_src = 'https://live.staticflickr.com/65535/52516211291_2bd7d52613_k.jpg';
    const img_ph  = 'https://live.staticflickr.com/65535/52516211291_4dc272e913_c.jpg';

    return (
        <div>
            {/* <div className="topic-cover-img" style={{ backgroundImage:`url(${img})` }} /> */}
            <ProgressiveImage
                className="topic-cover-img"
                src={img_src}
                placeholder={img_ph}
                
            />
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h2 className="mb-3">NTU Academic Counseling Services Website</h2>
                            <h3>Tags: Web Visual Design, Graphic Design</h3>
                    </div>
                    <div className="row mb-5">
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Duration </h3>
                            <ul>
                                <li>2 months</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Role</h3>
                            <ul>
                                <li>Lead Visual Designer</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Team</h3>
                            <ul>
                                <li>Independent Contractor</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Tool</h3>
                            <ul>
                                <li>Illustrator</li>
                            </ul>
                        </div>
                    
                        <div className="topic-desc-container col mb-5">
                            <h3>Responsibilities</h3>
                            <ul className="row">
                                <li className="col-md-6">Website logo & icons design</li>
                                <li className="col-md-6">Color scheme design</li>
                                <li className="col-md-12">Comunicating with clients on design concepts</li>
                            </ul>
                         </div>
                    </div>

                    <a className="link-btn heading-3 my-5" href="https://ntuacounseling.ntu.edu.tw/web/" target="_blank" rel="noreferrer noopener">
                        Website Link
                    </a>
                    
                </div>
            </div>

            <div className="bg-1">
                <div className="container">
                    <div className="topic-container section-wrapper">
                        <div className="row">
                            <div className="col-md-8">
                                <h3 className="heading-1 my-4">Introduction</h3>
                                <p className="">
                                Academic counseling is a service provided by Center for Teaching and Learning Development at National Taiwan University (NTU CTLD), 
                                providing NTU students with academic-related assistance, including:
                                </p>
                                <ul className="list-disc">
                                    <li>
                                        Tutoring of fundamental & advanced courses
                                    </li>
                                    <li>
                                        Onlin learning resources
                                    </li>
                                    <li>
                                        In-person counseling
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                
                                <img className="w-100" src="/works/Web/ntu-academic/logos/logo_white_bg.svg" alt="logo" />
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container section-wrapper">
                    <h3 className="heading-1 my-4">Logo Design</h3>
                    <p className="w-sizer mb-5">
                    Silhouettes of book and mountain together are melted together to symbolize knowledge and learning.
                    By placing wings under the mountain, this system will assist students carry the weight of knowledge to fly farther and spread knowledge broader. 
                    </p>
                    <div className="row my-5">
                        <div className="col-md-6">
                            <div className="d-flex flex-column align-items-center">
                                <img className="w-sizer" src="/works/Web/ntu-academic/logos/round-filled.png" alt="logo" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-column align-items-center">
                                <img className="w-sizer" src="/works/Web/ntu-academic/logos/round-trans.png" alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div className="row my-5 d-flex justify-content-center display-row-reverse">
                        <div className="col-md-6">
                            <div className="d-flex flex-column align-items-center">
                                <img className="w-75" src="/works/Web/ntu-academic/logos/horizontal-filled.png" alt="logo" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-column align-items-center">
                                <img className="w-75" src="/works/Web/ntu-academic/logos/horizontal-white.png" alt="logo" />
                            </div>
                        </div>
                    </div>

                    <div className="py-5 design-statement d-flex flex-column align-items-center">
                        <div className="d-flex flex-column align-items-center">
                            <h2>✼</h2>
                        </div>
                        <div>
                            <h3>
                            The abundance of knowledge in the ocean of books is much like a mountain; <br/>learning, therefore, is much like climbing a mountain.<br/>
                    NTU Academic Counseling wishes to be of a pair of wings, helping students soar across mountains and embrace the joy of learning.
                            </h3>
                        </div>
                    </div>
                    
                </div>

                <div className="topic-container section-wrapper">
                    <h3 className="heading-1 my-4">Color Palette</h3>
                    <div className="d-flex justify-content-center align-items-center">
                        <div id="color-round-1" className="m-4 color-round">#1C3B6A</div>
                        <div id="color-round-2" className="m-4 color-round">#9FCDCC</div>
                        <div id="color-round-3" className="m-4 color-round">#FACF84</div>
                        <div id="color-round-4" className="m-4 color-round">#E2DECF</div>
                    </div>
                    <div className="py-5 design-statement d-flex flex-column align-items-center">
                        <div>
                            <h3>
                            Background color uses aquamarine to convey a sense of <b>wisdom and security</b> while sparkling <b>liveliness</b>.
                            The logo and the font uses navy blue to present professionalism. Warm yellow is used for decorative elements to balance between the coldness of the primary colors.
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="topic-container section-wrapper">
                    <h3 className="heading-1 my-4">Icon Design</h3>
                    <div className="row mt-5">
                        <div className="col-md-4 p-3 d-flex flex-column align-items-center">
                            <div className="d-flex flex-column align-items-center">
                                <img className="w-75" src="/works/Web/ntu-academic/icons/basic_1.svg" alt="logo" />
                            </div>
                            <div className="mt-4 d-flex flex-column align-items-center">
                                <h3 className="w-sizer heading-3 text-center">In-person Tutoring of Fundamental Courses</h3>
                                <p className="text-center px-2">
                                The icon depicts a teacher teaching multiple students in geometric shapes. The water droplet shapes symbolize students asking questions.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 p-3 d-flex flex-column align-items-center">
                            <div className="d-flex flex-column align-items-center">
                                <img className="w-75" src="/works/Web/ntu-academic/icons/advanced_1.svg" alt="logo" />
                            </div>
                            <div className="mt-4 d-flex flex-column align-items-center">
                                <h3 className="w-sizer heading-3 text-center">1-on-1 Tutoring of Advanced Courses</h3>
                                <p className="text-center px-2">
                                Encountering hardship in learing advanced courses is analogous to climbing up the stairs to discuss questions in the textbook with a teacher.
                                This icon emphasizes the active role of student asking question, whereas teacher acts as a listener.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 p-3 d-flex flex-column align-items-center">
                            <div className="d-flex flex-column align-items-center">
                                <img className="w-75" src="/works/Web/ntu-academic/icons/case_1.svg" alt="logo" />
                            </div>
                            <div className="mt-4 d-flex flex-column align-items-center">
                                <h3 className="w-sizer heading-3 text-center">In-person<br/> Counseling</h3>
                                <p className="text-center px-2">
                                This service is open for students who experience mental disturbance due to academic-related causes. 
                                A counselor diagosing student's frustration while expressing concern with love. The water droplets symbolize student's tears and worries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default Academic;