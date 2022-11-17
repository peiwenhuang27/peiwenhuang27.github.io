import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ReactPlayer from "react-player";

function TourBot() {
    let img = "/works/Frontend/tourbot/cover.png";

    return (
        <div>
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h2 className="mb-3">TourBot: Task-oriented Chatbot on Travel Recommendation</h2>
                            <h3>Tags: Frontend Engineering, UI Design, Natural Language Processing</h3>
                    </div>
                    <div className="row mb-5">
                        <div className="topic-desc-container col-md-4">
                            <h3>Duration </h3>
                            <ul>
                                <li>1 year</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-8">
                            <h3>Tool</h3>
                            <ul className="row">
                                <li className="col-md-6">ReactJS, Ant Design</li>
                                <li className="col-md-6">Axios, Django</li>
                                <li className="col-md-6">GCP, Google Map API</li>
                                <li className="col-md-6">PyTorch</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4">
                            <h3>Role</h3>
                            <ul>
                                <li>Lead UI Designer</li>
                                <li>NLP Engineer</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col">
                            <h3>Responsibilities</h3>
                            <ul className="row">
                                <li className="col-md-6">Feature Ideation</li>
                                <li className="col-md-6">UI design & Implementation</li>
                                <li className="col-md-6">UI & Backend Interaction Implementation</li>
                                <li className="col-md-6">Chatbot Model Training</li>
                            </ul>
                         </div>
                    </div>

                    <h3 className="heading-1 my-5">Demo Video</h3>
                    <div className="row ">
                        <div className="col mb-3 d-flex flex-column align-items-center">
                            <ReactPlayer
                                url="https://youtu.be/RcP-jxfHA-A"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-1">
                <div className="container">
                    <div className="topic-container section-wrapper">
                        <h3 className="heading-1 my-4">Introduction</h3>
                        <p className="w-sizer mt-5">
                        As much as Internet makes travel information more accessible than ever, the channel of information input has also grown disorganized,
                        increasing the retrieval time for user to obtain desired information.</p>
                        <h3 className="heading-3 mb-5">
                        We aim to utilize Natural Language Processing to constuct <b className="color-bright">a task-oriented chatbot accessed with a web interface</b>, providing user wit recommended travel information through conversation as reference for itinery arrangement.
                        </h3>
                        
                        <h3 className="heading-1 mt-5">Design Value</h3>
                        <div className="row my-5 d-flex justify-content-center">
                            <div className="col-md-5 mx-4 p-4 tourbot-value-box d-flex align-items-center">
                                <h3 className="heading-3 text-center m-0">
                                Consolidation of information on attractions, hotels, and transportation
                                </h3>
                            </div>
                            <div className="col-md-5 mx-4 p-4 tourbot-value-box d-flex align-items-center">
                                <h3 className="heading-3 text-center m-0">
                                Collection of de-identified user data as future marketing reference for service provider
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container subsection-wrapper">
                    <h3 className="heading-1 my-3">Information Structure</h3>
                    <div className="d-flex flex-column align-items-center">
                        <img className="w-100" src="/works/Frontend/tourbot/IA.jpg" alt="Information Structure" />
                    </div>
                </div>
                <div className="topic-container subsection-wrapper">
                    <h3 className="heading-1 my-3">Website Functionality</h3>
                    
                    <div className="row p-4 my-5 display-row">
                        <div className="col-md-5 my-5 d-flex flex-column justify-content-center">
                            <h2 className="color-bright">1.</h2>
                            <h2 className="heading-2 color-dark text-bold">De-identified User Data Collection</h2>
                            <p>
                            The main page of the website requires user to input certain attributes, including gender, age range, and purpose of travel.
            The collected data will later be used as system recommendation optimization.
                            </p>
                        </div>
                        <div className="col-md-7 my-5">
                            <div className="d-flex flex-column align-items-center">
                                <img style={{borderRadius: "16px"}} className="w-100" src="https://media.giphy.com/media/j9GqxolAFTAk5bMdiv/giphy.gif" alt="demo of De-identified User Data Collection" />
                            </div>
                        </div>
                    </div>

                    <div className="row p-4 my-5 display-row-reverse">
                        <div className="col-md-5 my-5 d-flex flex-column justify-content-center">
                            <h2 className="color-bright">2.</h2>
                            <h2 className="heading-2 color-dark text-bold">Chatroom Conversation with TourBot</h2>
                            <p>
                            In the chatroom, user can directly enter message to interact with our chatbot backend.
                            </p>
                        </div>
                        <div className="col-md-7 my-5">
                            <div className="d-flex flex-column align-items-center">
                                <img style={{borderRadius: "16px"}} className="w-100" src="https://media.giphy.com/media/6VOkQRhkz9XkcChLI2/giphy.gif" alt="demo of Chatroom Conversation with TourBot" />
                            </div>
                        </div>
                    </div>

                    <div className="row p-4 my-5 display-row">
                        <div className="col-md-5 my-5 d-flex flex-column justify-content-center">
                            <h2 className="color-bright">3.</h2>
                            <h2 className="heading-2 color-dark text-bold">Information update</h2>
                            <p>
                            Upon mentioning certain attractions, restaurants, or hotels, the buttons on the right side will blink to indicate update of dialogue state.
                            </p>
                        </div>
                        <div className="col-md-7 my-5">
                            <div className="d-flex flex-column align-items-center">
                                <img style={{borderRadius: "16px"}} className="w-100" src="https://media.giphy.com/media/foWvmauPAAC1PRA26H/giphy.gif" alt="demo of Information update" />
                            </div>
                        </div>
                    </div>

                    <div className="row p-4 my-5 display-row-reverse">
                        <div className="col-md-5 d-flex flex-column justify-content-center">
                            <h2 className="color-bright">4.</h2>
                            <h2 className="heading-2 color-dark text-bold">Viewing Travel Information</h2>
                            <p>
                            Clicking on either 酒店 (Hotel), 景點 (Attraction), or 餐廳 (restaurant), a page will appear showing the details of the location mentioned in the conversation.
                            </p>
                        </div>
                        <div className="col-md-7">
                            <div className="d-flex flex-column align-items-center">
                                <img style={{borderRadius: "16px"}} className="w-100" src="https://media.giphy.com/media/TF2HXXw0KPOJTzmNPD/giphy.gif" alt="demo of Viewing Travel Information" />
                            </div>
                        </div>
                    </div>

                    <div className="row p-4 my-5 display-row">
                        <div className="col-md-5 my-5 d-flex flex-column justify-content-center">
                            <h2 className="color-bright">5.</h2>
                            <h2 className="heading-2 color-dark text-bold">Viewing Dialogue State</h2>
                            <p>
                                At any time, user can click 檢視 (view) to overview all the locations currently saved, with visualization assisted by google map to help make route arrangements.
                            </p>
                        </div>
                        <div className="col-md-7 my-5">
                            <div className="d-flex flex-column align-items-center">
                                <img style={{borderRadius: "16px"}} className="w-100" src="https://media.giphy.com/media/G5DXipc9c5GVyhUSGY/giphy.gif" alt="demo of Viewing Dialogue State" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-wrapper">
                        <h3 className="heading-2">Navigation Bar</h3>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-5 m-4 d-flex flex-column align-items-center">
                                <div className="w-50 d-flex flex-column align-items-center">
                                    <img className="w-sizer" src="/works/Frontend/tourbot/SVG/view.svg" alt="view button" />
                                </div>
                                <div className="mt-4 px-1 d-flex flex-column align-items-center">
                                    <h3 className="heading-2">View</h3>
                                    <p className="text-center">
                                        Viewing information of the current dialogue state. User can see the planned hotel, restaurat, or transportation. 
                                        By using Google Map API, the locations are shown on map to help user plan the routes.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-5 m-4 d-flex flex-column align-items-center">
                                <div className="w-50 d-flex flex-column align-items-center">
                                    <img className="w-sizer" src="/works/Frontend/tourbot/SVG/hotel.svg" alt="hotel button" />
                                </div>
                                <div className="mt-4 px-1 d-flex flex-column align-items-center">
                                    <h3 className="heading-2">Hotel</h3>
                                    <p className="text-center">
                                        Viewing details of the hotel user plan to visit, such as rating, price, transportation. 
                                        Using Google Search API, user can view the top 3 search results of the hotel to access booking websites easily.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-5 m-4 d-flex flex-column align-items-center">
                                <div className="w-50 d-flex flex-column align-items-center">
                                    <img className="w-sizer" src="/works/Frontend/tourbot/SVG/attraction.svg" alt="attraction button" />
                                </div>
                                <div className="mt-4 px-1 d-flex flex-column align-items-center">
                                    <h3 className="heading-2">Attraction</h3>
                                    <p className="text-center">
                                        Similar to the function of Hotel.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-5 m-4 d-flex flex-column align-items-center">
                                <div className="w-50 d-flex flex-column align-items-center">
                                    <img className="w-sizer" src="/works/Frontend/tourbot/SVG/restaurant.svg" alt="restaurant button" />
                                </div>
                                <div className="mt-4 px-1 d-flex flex-column align-items-center">
                                    <h3 className="heading-2">Restaurant</h3>
                                    <p className="text-center">
                                    Similar to the function of Hotel.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-5 m-4 d-flex flex-column align-items-center">
                                <div className="w-50 d-flex flex-column align-items-center">
                                    <img className="w-sizer" src="/works/Frontend/tourbot/SVG/restart.svg" alt="restart button" />
                                </div>
                                <div className="mt-4 px-1 d-flex flex-column align-items-center">
                                    <h3 className="heading-2">Restart</h3>
                                    <p className="text-center">
                                    This will clear all previous conversation history except the user attributes filled out in the survey in client side.
                                    User can restart a conversation if they wish to make a different plan.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-5 m-4 d-flex flex-column align-items-center">
                                <div className="w-50 d-flex flex-column align-items-center">
                                    <img className="w-sizer" src="/works/Frontend/tourbot/SVG/exit.svg" alt="exit button" />
                                </div>
                                <div className="mt-4 px-1 d-flex flex-column align-items-center">
                                    <h3 className="heading-2">Exit</h3>
                                    <p className="text-center">
                                    User can leave the chatroom after consulting TourBot, at which point conversation history and user data will be cleared in client side.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


            {/* Reference: Zhu, Q., Huang, K., Zhang, Z., Zhu, X., & Huang, M. (2020). Crosswoz: A large-scale chinese cross-domain task-oriented dialogue dataset. Transactions of the Association for Computational Linguistics, 8, 281-295.
            Zeng, Y., & Nie, J. Y. (2020). Jointly optimizing state operation prediction and value generation for dialogue state tracking. arXiv preprint arXiv:2010.14061.
            Yiming Cui, Wanxiang Che, Ting Liu, Bing Qin, Ziqing Yang, Shijin Wang, and Guop- ing Hu. 2019. Pre-training with whole word masking for chinese bert. arXiv preprint arXiv:1906.08101. */}

            {/* TODO: add transformer-DST introduction? improvements on NLU */}
            {/* TODO: add takeaways */}
        </div>
    );
};

export default TourBot;