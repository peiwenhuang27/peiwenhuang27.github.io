import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ReactPlayer from "react-player";

function EasyManager() {
    let img = "/works/Frontend/easymanager/cover.png";

    return (
        <div>
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h2 className="mb-3">EasyManager: NTU IM Badminton Team Management System</h2>
                            <h3>Tags: Frontend Engineering, UI Design, System Analysis & Design</h3>
                    </div>
                    <div className="row mb-5">
                        <div className="topic-desc-container col-md-4">
                            <h3>Duration </h3>
                            <ul>
                                <li>3 months</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4">
                            <h3>Role</h3>
                            <ul>
                                <li>Lead UI Designer</li>
                                <li>NLP Engineer</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4">
                            <h3>Tool</h3>
                            <ul>
                                <li>ReactJS</li>
                                <li>Axios, Django</li>
                            </ul>
                        </div>
                    
                        <div className="topic-desc-container col">
                            <h3>Responsibilities</h3>
                            <ul>
                                <li>Feature Ideation</li>
                                <li>UI design & Implementation</li>
                                <li>Chatbot Model Training</li>
                            </ul>
                         </div>
                    </div>

                    <h3 className="heading-1 my-5">Demo Video</h3>
                    <div className="row ">
                        <div className="col mb-3 d-flex flex-column align-items-center">
                            <ReactPlayer
                                url="https://youtu.be/dAtbkYEGqj0"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-1">
                <div className="container">
                    <div className="topic-container section-wrapper">
                        <h3 className="heading-1 my-4">Introduction</h3>
                        <p className="w-sizer">
                            The Badminton Team of Information Management Department at National Taiwan University (NTU IM Badminton) requires participation fee from its members.
                            The member gets certain number of <b>points</b> after paying the fee, and 1 point can redeem 1 practice/game attendance.
                            <br/><br/>
                            Traditionally, the management of points has been handled manually by the captain of the team. 
                            However, computing these points with vanilla method like spreadsheets require <b>high labor cost of the captain</b>;
                            the burden is furthered since team members have to frequently come to captain to check their account status.
                        </p>
                        <h2 className="heading-2 color-dark mt-5">EasyManager is the system we constructed to <b className="color-bright">automatically manage member points</b> for the NTU IM Badminton Team,
                         to rid the trouble experienced by both captain side and member side.</h2>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container section-wrapper">
                    <div className="subsection-wrapper">
                        <h3 className="heading-3 color-dark">Design Value</h3>
                        <h3 className="heading-1 mb-3">User Pain Points</h3>
                        <p>
                            <b>User Interview</b>: 1 captain + 3 team members<br/>
                            After the interviews, we have concluded the pain points experienced by different sides of the stakeholders.
                        </p>
                        
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-4 m-5 d-flex flex-column align-items-center">
                                <h3 className="heading-2 color-dark mb-3">Captain</h3>
                                <ul className="d-flex flex-column align-items-center">
                                    <li className="p-3 mb-4 easy-pain-point-box text-center">
                                    High labor cost of manually computing member points with spreadsheets
                                    </li>
                                    <li className="p-3 mb-4 easy-pain-point-box text-center">
                                    Time consuming process of handling many members frequently asking about their account status
                                    </li>
                                    <li className="p-3 mb-4 easy-pain-point-box text-center">
                                    Difficult to check practice attendance (currently recorded with comments on the Facebook group of the team)
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-4 m-5 d-flex flex-column align-items-center">
                                <h3 className="heading-2 color-dark mb-3">Member</h3>
                                <ul className="d-flex flex-column align-items-center">
                                    <li className="p-3 mb-4 easy-pain-point-box text-center">
                                    No transparent channel to access their own account status but haveing to go to captain
                                    </li>
                                    <li className="p-3 mb-4 easy-pain-point-box text-center">
                                    Cannot easily cancel attendance after commenting, also needing to notify captain directly
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="subsection-wrapper">
                        <h3 className="heading-1 mb-3">Objective</h3>

                        <div className="row">
                            <div className="col-md-4 mt-3 topic-desc-container">
                                <h3>Target User</h3>
                                <ul>
                                    <li>NTU IM Badminton Team Captain</li>
                                    <li>NTU IM Badminton Team Members</li>
                                </ul>
                            </div>
                            <div className="col-md-8 mt-3 topic-desc-container">
                                <h3>Requirement</h3>
                                <ul className="list-disc">
                                    <li>Refilling points after participation fee payment</li>
                                    <li>Practice / game sign-up</li>
                                    <li>Attendance point redemption</li>
                                    <li>Viewing user account status online</li>
                                </ul>
                            </div>
                        </div>

                        <div className="py-5 easy-design-statement d-flex flex-column align-items-start">
                            <h3>
                            EasyManager aims to use a system connected to database to automatically manage member points, 
                            thereby <b>alleviating the burden of management cost of captain</b> and <b>reducing the inconvenience of retrieval cost for team members</b>.
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="topic-container mt-5">
                    <div className="subsection-wrapper">
                        <h3 className="heading-3 color-dark">Prototyping</h3>
                        <h3 className="heading-1 mb-3">Information Architecture</h3>

                        <div className="d-flex flex-column align-items-center">
                            <img className="w-75" src="/works/Frontend/easymanager/IA.jpg" alt="Information Architecture" />
                        </div>
                    </div>
                    

                    <div className="subsection-wrapper">
                        <h3 className="heading-1 mb-3">Function Introduction</h3>
                        <div className="d-flex flex-column align-items-center">
                            <div className="row display-row my-5">
                                <div className="col-md-5 my-5 d-flex flex-column justify-content-center">
                                    <h3 className="heading-3">Bulletin</h3>
                                    <p>
                                    Practices and games are shown in the bulletin, showing details of the activities such as date, location, attendance list.
                                    </p>
                                </div>
                                <div className="col-md-7 my-5">
                                    <div className="d-flex flex-column align-items-center">
                                        <img style={{borderRadius: "16px"}} className="w-100" src="https://media.giphy.com/media/fDjnavqoHoF0QDORJ5/giphy.gif" alt="Bulletin" />
                                    </div>
                                </div>
                            </div>

                            <div className="row display-row-reverse my-5">
                                <div className="col-md-5 my-5 d-flex flex-column justify-content-center">
                                    <h3 className="heading-3">Practice / Game Signing Up</h3>
                                    <p>
                                    For members and captain, they can open the activity tab to click up on the button indicating their attendance.
                                    </p>
                                </div>
                                <div className="col-md-7 my-5">
                                    <div className="d-flex flex-column align-items-center">
                                        <img style={{borderRadius: "16px"}} className="w-100" src="https://media.giphy.com/media/meya9UdQPHOZ2sKqRo/giphy.gif" alt="Practice / Game Signing Up" />
                                    </div>
                                </div>
                            </div>

                            <div className="row display-row my-5">
                                <div className="col-md-5 my-5 d-flex flex-column justify-content-center">
                                    <h3 className="heading-3">Activity Creation</h3>
                                    <p>
                                    For captain, they can create an activity (practice or game), which will be automatically posted on the bulletin.
                                    </p>
                                </div>
                                <div className="col-md-7 my-5">
                                    <div className="d-flex flex-column align-items-center">
                                        <img style={{borderRadius: "16px"}} className="w-100" src="https://media.giphy.com/media/m8sSD2myKzxbRwzdfU/giphy.gif" alt="Activity Creation" />
                                    </div>
                                </div>
                            </div>

                            <div className="row display-row-reverse my-5">
                                <div className="col-md-5 my-5 d-flex flex-column justify-content-center">
                                    <h3 className="heading-3">Account Status</h3>
                                    <p>
                                    By clicking the home button at the left side of the web, any user can easily check their own account status to see the number of remaining points.
                                    </p>
                                </div>
                                <div className="col-md-7 my-5">
                                    <div className="d-flex flex-column align-items-center">
                                        <img style={{borderRadius: "16px"}} className="w-100" src="https://media.giphy.com/media/6OhV9KBwm4MvScSW5D/giphy.gif" alt="Account Status" />
                                    </div>
                                </div>
                            </div>

                            <div className="row display-row my-5">
                                <div className="col-md-5 my-5 d-flex flex-column justify-content-center">
                                    <h3 className="heading-3">Refilling Point</h3>
                                    <p>
                                    After captain has verified the payment of a member, they can go to the administrator-only page of team member list to refill their points.
                                    </p>
                                </div>
                                <div className="col-md-7 my-5">
                                    <div className="d-flex flex-column align-items-center">
                                        <img style={{borderRadius: "16px"}} className="w-100" src="https://media.giphy.com/media/Tu77zG7GxJuVvsfwuz/giphy.gif" alt="Refilling Point" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        

                        
                        

                        
                        

                        
                        

                        
                        
                    </div>
                </div>
            </div>




        </div>
        // TODO: add  db schema, ???
        // TODO: add takeaways, conclusion
    );
};

export default EasyManager;