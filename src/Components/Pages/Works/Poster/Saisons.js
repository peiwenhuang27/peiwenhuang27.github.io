import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ReactPlayer from "react-player";

function Saisons() {
    let img = "https://live.staticflickr.com/65535/52505805268_7fce1ebdc9_k.jpg";

    return (
        <div>
            <div className="mt-5 d-flex justify-content-center">
                <img className="w-sizer-sm graphic-cover-img" src={img} alt="cover poster" />
            </div>
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h2 className="mb-3">Les Saisons de l'Année</h2>
                            <h3>Tags: Poster Design, Graphic Design, Collage Art</h3>
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
                <div className="topic-container ">
                    <h3 className="heading-1 my-4">Introduction</h3>
                    <p className="">
                    Les saisons de l'année, "Seasons of the year" in French.<br/><br/>
        This poster collection imagines personification of seasons,
        expressing the atmosphere each season eludes.
        With the collage technique to interweave human and elements of the weather, flora & fauna, and festivals, 
        the personalities of the seasons are vividly expressed.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 m-0 px-0 py-5 d-flex flex-column align-items-center">
                    <img className="w-100" src="https://live.staticflickr.com/65535/52505261182_086fe94ef3_k.jpg" alt="spring"/>
                    {/* <h3 className="heading-5 my-5">Printemps: Spring</h3> */}
                </div>
                <div className="col-md-3 m-0 px-0 py-5 d-flex flex-column align-items-center">
                    <img className="w-100" src="https://live.staticflickr.com/65535/52506222670_0626b3a5c0_k.jpg" alt="summer"/>
                    {/* <h3 className="heading-5 my-5">Été: Summer</h3> */}
                </div>
                <div className="col-md-3 m-0 px-0 py-5 d-flex flex-column align-items-center">
                    <img className="w-100" src="https://live.staticflickr.com/65535/52505261237_b706eaac4e_k.jpg" alt="autumn"/>
                    {/* <h3 className="heading-5 my-5">Autumne: Autumn</h3> */}
                </div>
                <div className="col-md-3 m-0 px-0 py-5 d-flex flex-column align-items-center">
                    <img className="w-100" src="https://live.staticflickr.com/65535/52505745701_356f70cd99_k.jpg" alt="winter"/>
                    {/* <h3 className="heading-5 my-5">Hiver: Winter</h3> */}
                </div>
            </div>

            <div className="container">
                <div className="topic-container">
                    <h3 className="heading-1 my-4">Design Elements</h3>
                    <div className="row mt-3">
                        <div className="col-md-6 p-5">
                            <h2 className="heading-2">Printemps: Spring</h2>
                            <p>Romance, birth, blooms, roses, cherry blossoms, humming bird, pink</p>
                        </div>
                        <div className="col-md-6 p-5">
                            <h2 className="heading-2">Été: Summer</h2>
                            <p>Liveliness, life, exploration, leaves, trees, hydrangeas, sunflowers, parrot, green</p>
                        </div>
                        <div className="col-md-6 p-5">
                            <h2 className="heading-2">Autumne: Autumn</h2>
                            <p>Abundance, sentiment, coziness, maple leaves, pumpkins, nuts, mushrooms, fox, yellow</p>
                        </div>
                        <div className="col-md-6 p-5">
                            <h2 className="heading-2">Hiver: Winter</h2>
                            <p>Closure, coldness, christmas, nightlight, snow flakes, pinecones, rosemary, anises, blue</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height: "30vh"}}/>
            
        </div>
    );
};


export default Saisons;