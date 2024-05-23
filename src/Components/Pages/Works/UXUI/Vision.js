import { useEffect,useRef } from "react";
import Iframe from 'react-iframe';

import ProjectRec from "../../../ProjectRec";
import HorizontalScrollCarousel, { HorizontalCarousel } from "../../../HorizontalScrollCarousel";
import { ScrollReveal } from "../../../Helpers/SmoothScroll";
import ProgressBar from "../../../ScrollBar";

// TODO
// sidebar navigation


function Vision () {
    const demoVid = useRef(null);
    const img_src = "https://live.staticflickr.com/65535/53573556154_493507ae43_h.jpg";

    

    return (
        <div id="Ford-Vision">
            <ProgressBar color="#2A6BAC" />
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img_src})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <ScrollReveal>
                        <div className="topic-title-container mb-5">
                                <h3 className="mb-1 color-dark text-bold date">October 2023 - December 2023</h3>
                                <h2 className="mb-1">Ford Vision: Defining Semi-Autonomous Electric Vehicle Paradigm</h2>
                                <h3 className="theme mb-5">Interaction Design Fundamentals, Autonomous Vehicle, UX</h3>
                                <p className="mb-5">
                                As the trend of autonomous vehicles soaring higher than ever before, our team envisioned Vision— a Ford semi-autonomous electric moped, and integrated existing moped features and an innovative semi-autonomy interaction paradigm to provide seamless experience.
                            
                                </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="subsection-wrapper row mb-5">
                            <div className="topic-desc-container col-md-4 col-sm-6 mb-5">
                                <h6 className="theme mb-3">Duration </h6>
                                <ul>
                                    <li>2 months</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col-md-4 col-sm-6 mb-5">
                                <h6 className="theme mb-3">Role</h6>
                                <ul>
                                    <li>Lead Designer</li>
                                    <li>Researcher</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col-md-4 col-sm-6 mb-5">
                                <h6 className="theme mb-3">Team</h6>
                                <ul>
                                    <li>4 people</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col-md-4 col-sm-6 mb-5">
                                <h6 className="theme mb-3">Tool</h6>
                                <ul>
                                    <li>Figma</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col mb-5">
                                <h6 className="theme mb-3">Responsibilities</h6>
                                <ul className="row">
                                    <li className="col-md-6">Designing mobile & moped interface</li>
                                    <li className="col-md-6">Building physical & digital prototype</li>
                                    <li className="col-md-6">Brainstorming features</li>
                                    <li className="col-md-6">Conducting background research</li>
                                    <li className="col-md-6">Running usability tests</li>
                                </ul>
                            </div>
                        </div>
                        <p className="italic">Note: This project is not officially associated with Ford.</p>
                    </ScrollReveal>
                </div>
            </div>

            <ScrollReveal>
                <div className="theme-bg">
                    <div className="container">
                        <div className="topic-container subsection-wrapper">
                            <h3 className="mb-5">💻 Demo</h3>
                            <div ref={demoVid} className="subsection-wrapper" >
                                <div className="responsive-iframe">
                                    <Iframe src="https://www.youtube.com/embed/9lJoc7X66kQ?si=0P3ZUJl_7qwqCqAx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                                </div>
                            </div>
                            <div className="subsection-wrapper">
                            <div className="my-3 row align-items-start">
                                <div className="col-md-3">
                                    <h6 className="theme">Innovative Semi-Autonomy</h6>
                                    <p className="text-bold mb-0">Smart Rearview Mirrors</p>
                                    <p className="caption">Our new semi-autonomous interface for e-mopeds, featuring a smart rear mirror overlay, is a breakthrough in enhancing rider safety and awareness.</p>
                                </div>
                                
                                <div className="col-md-9 mb-3 d-flex justify-content-center">
                                    <img className="w-100" src="/works/UXUI/vision/prototype/10-mirrors.png" alt="smart mirrors" />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            <div className="container">
                <div className="topic-container subsection-wrapper">
                    <ScrollReveal>
                        <div className="row align-items-center my-5">
                            <h3 className="col-md-6 my-5">📚 Background</h3>
                            <div className="col-md-6 my-3 d-flex flex-column align-items-center">
                                <img className="w-100" src="/works/UXUI/vision/phase-1/IMG_7341.jpg" alt="affinity mapping" />
                            </div>
                        </div>
                    </ScrollReveal>
                        
                    <ScrollReveal>
                        <h6 className="my-5">Guerrilla Research</h6>
                        <div className="row my-5 align-items-center">
                            <div className="col-md-4 p-5 d-flex flex-column align-items-center">
                                <img className="w-100" src="/works/UXUI/vision/phase-1/PXL_20231026_130335227.jpg" alt="guerrilla research" />
                            </div>
                            <p className="col-md-8">
                            Due to their scarcity, mopeds were tricky to gather insights for. So we supplemented the few people we were able to find through guerilla research and in-person user interviews with substantial secondary research by collecting opinions from social media like reddit and doing a competitive analysis of other e-moped solutions on the market.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <h6 className="mt-5">Insights</h6>
                        <div className="subsection-wrapper-bottom">
                            <div className="row my-5 align-items-center">
                                <div className="col-md-4 d-flex flex-column align-items-center">
                                    <img className="w-sizer-sm" src="/works/UXUI/vision/Type=Safety.svg" alt="safety icon" />
                                </div>
                                <div className="col-md-8 py-3">
                                    <h6 className="theme my-3">#1: Ride Safety</h6>
                                    <p>Users express a <b className="theme">desire for the integration of rider safety features</b> in the dashboard design, such as blind-spot monitoring and real-time traffic alerts, to enhance their overall riding experience.</p>
                                </div>
                            </div>
                            <div className="row my-5 align-items-center">
                                <div className="col-md-4 d-flex flex-column align-items-center">
                                    <img className="w-sizer-sm" src="/works/UXUI/vision/Type=Dashboard.svg" alt="dashboard icon" />
                                </div>
                                <div className="col-md-8 py-3">
                                    <h6 className="theme my-3">#2: Status Check </h6>
                                    <p>
                                    <b className="theme">Time and battery level are the primary dashboard data points</b> that users check, influencing their riding speed and behavior.
                                    </p>
                                </div>
                            </div>
                            <div className="row my-5 align-items-center">
                                <div className="col-md-4 d-flex flex-column align-items-center">
                                    <img className="w-sizer-sm" src="/works/UXUI/vision/Type=Battery.svg" alt="battery icon" />
                                </div>
                                <div className="col-md-8 py-3">
                                    <h6 className="theme my-3">#3: Anxiety-inducing Battery Level</h6>
                                    <p>
                                    Users find it crucial for mopeds to have features like automatic charging or solar panels to <b className="theme">alleviate anxiety related to limited battery range</b>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="my-3 d-flex flex-column align-items-center">
                            <img className="w-sizer-75" src="/works/UXUI/vision/phase-1/IMG_7342.jpg" alt="affinity map of research findings" />
                            <p className="table-caption mt-3">Affinity map of research findings</p>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal>
                    <div className="topic-container subsection-wrapper">
                        <div className="row align-items-start">
                            <h3 className="col-md-6 mb-5">🎯 Objective</h3>
                            <div className="col-md-6">
                                <div className="mb-5">
                                    <h6>Audience</h6>
                                    <p>
                                    First-time users of moped
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <h6>Goal</h6>
                                    <p>Design a semi-autonomous electric moped that is intuitive to use with appropriate instructions to provide a smooth, safe, and calm experience of getting around.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="topic-container subsection-wrapper">
                    <ScrollReveal>
                        <div className="row align-items-center my-5">
                            <div className="col-md-6 my-5">
                                <h3 className="col-md-6 mb-5">🪄 Design Process</h3>
                                <h4 className="mb-3 theme">How might we transfer the complexity of operating to the vehicle?</h4>
                            </div>
                            

                            <div className="col-md-6 my-3 d-flex flex-column align-items-center">
                                <img className="w-100" src="/works/UXUI/vision/phase-2/storyboard/collage.png" alt="Storyboarding" />
                            </div>
                        </div>
                        <div className="my-5 d-flex justify-content-center flex-wrap">
                            <img className="artwork p-1" src="/works/UXUI/vision/phase-2/abstract/IMG_9961.jpeg" alt="Abstraction Laddering" />
                            <img className="artwork p-1" src="/works/UXUI/vision/phase-2/wpi/PXL_20231105_032554069.jpg" alt="Worst Possible Ideas" />
                            <img className="artwork p-1" src="/works/UXUI/vision/phase-2/crazy8/IMG_9962.jpeg" alt="Crazy 8" />
                            <img className="artwork p-1" src="/works/UXUI/vision/phase-2/task-analysis.png" alt="Task analysis" />
                            <img className="artwork p-1" src="/works/UXUI/vision/phase-2/concept/S__25214979.jpg" alt="Concept Sketching" />
                            <img className="artwork p-1" src="/works/UXUI/vision/phase-2/sketch.png" alt="Sketching" />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="row align-content-center justify-content-center my-5 flex-wrap">
                            <h6 className="col-md-4 my-5 center theme">Abstraction Laddering</h6>
                            <h6 className="col-md-4 my-5 center theme">Worst Possible Ideas</h6>
                            <h6 className="col-md-4 my-5 center theme">Crazy 8</h6>
                            <h6 className="col-md-4 my-5 center theme">Task Analysis</h6>
                            <h6 className="col-md-4 my-5 center theme">Concept Sketching</h6>
                            <h6 className="col-md-4 my-5 center theme">Storyboarding</h6>
                        </div>
                        <p className="my-5">
                            After identifying essential features and flows with the task analysis, we focused on them in our ideation process with Crazy 8 & Concept sketching.
                            Particularly, we paid extra attention to <b className="theme">selecting ideas that transferred the operating complexity to the vehicle</b> in the concept sketches.
                        </p>
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <h6 className="mt-5">Minimum Viable Product</h6>
                        <p className="my-3">
                        Having brainstormed features with these different methods, we selected the following features to consist of our MVP to implement in our first round of prototype:
                            <ul className="list-disc">
                                <li className="my-3">Locking/unlocking and turning on/off moped with Face ID via either moped or mobile</li>
                                <li className="my-3">Switching on/off autonomy (self-driving) mode</li>
                                <li className="my-3">Setting up GPS navigation</li>
                                <li className="my-3">Low battery warning</li>
                            </ul>
                        </p>
                    </ScrollReveal>

                </div>

                <div className="topic-container subsection-wrapper">
                    <ScrollReveal>
                        <div className="row align-items-center my-5">
                            <h3 className="col-md-6 my-5">🛠️ Prototyping</h3>
                            <div className="col-md-6 my-3 d-flex flex-column align-items-center">
                                <img className="w-100" src="/works/UXUI/vision/phase-3/1.jpg" alt="physical prototype" />
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="row flex-row-reverse align-items-center my-5">
                            <div className="col-md-6 my-3">
                                <h6 className="my-3">Lo-fi moped & paper wireframes</h6>
                                <p className="my-3">
                                    <ul className="list-disc">
                                        <li className="my-3">
                                        Crucial information including speed, time, battery level, warnings and the driving mode (manual or autonomous) is constantly displayed on the moped screen for <b className="theme">users' need of status check</b>.
                                        </li>
                                        <li className="my-3">
                                        The middle panel of the screen would switch between the current activity such as navigation, parking, charging and so on.
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div className="col-md-6 p-5 d-flex flex-column align-items-center">
                                <img className="w-100" src="/works/UXUI/vision/phase-3/3.jpg" alt="paper prototype" />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="topic-container subsection-wrapper">
                    <ScrollReveal>
                        <div className="row align-items-center my-5">
                            <h3 className="col-md-6 my-5">💥 Challenges</h3>
                            <div className="col-md-6 my-3 d-flex flex-column align-items-center">
                                <img className="w-100" src="/works/UXUI/vision/phase-3/4.jpg" alt="user testing" />
                            </div>
                        </div>
                    </ScrollReveal>

                    <div className="subsection-wrapper">
                        <ScrollReveal>
                            <div className="row align-items-center">
                                <h6 className="mb-3 theme">
                                    #1: Warning with Suggestion to Resolve Issue
                                </h6>

                                <div className="col-md-5 p-3 d-flex flex-column align-items-center">
                                    <img className="w-100" src="/works/UXUI/vision/phase-3/c-1.png" alt="challenge 1" />
                                    <p className="table-caption mt-1 mb-3">Low battery warning popup</p>
                                </div>

                                <div className="col-md-2 d-flex flex-column align-items-center my-3">
                                    <img className="arrow-right" src="/works/UXUI/vision/Type=Down.svg" alt="arrow down icon" />
                                </div>

                                <div className="col-md-5 p-3 d-flex flex-column align-items-center">
                                    <img className="w-100 m-2" src="/works/UXUI/vision/phase-3/c-1-i-1.png" alt="challenge 1" />
                                    <p className="table-caption mt-1 mb-3">Low battery warning on the side</p>
                                    <img className="w-100 m-2" src="/works/UXUI/vision/phase-3/c-1-i-2.png" alt="challenge 2" />
                                    <p className="table-caption mt-1 mb-3">Popup shows only when vehicle stops</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                    <h6 className="mb-3">
                                        Before
                                    </h6>
                                    <p className="mb-3">
                                        <ul className="list-disc">
                                            <li>Low battery warning pop-up during driving</li>
                                            <li>Violating <b>Nielsen’s usability heuristics– “User Control and Freedom”</b></li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-5 my-3">
                                    <h6 className="mb-3">
                                        Iteration
                                    </h6>
                                    <p className="mb-3">
                                        <ul className="list-disc">
                                            <li>Notification not blocking user’s view of dashboard</li>
                                            <li>After parking, battery warning then pops up</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                    
                    <div className="subsection-wrapper">
                        <ScrollReveal>
                            <div className="row align-items-center">
                                <h6 className="mb-3 theme">
                                    #2: Follow the Law of Proximity to eliminate confusion
                                </h6>

                                <div className="col-md-5 p-3 d-flex flex-column align-items-center">
                                    <img className="w-100" src="/works/UXUI/vision/phase-3/c-2.png" alt="challenge 1" />
                                    <p className="table-caption mt-1 mb-3">ECO MODE on the side</p>
                                </div>

                                <div className="col-md-2 d-flex flex-column align-items-center my-3">
                                    <img className="arrow-right" src="/works/UXUI/vision/Type=Down.svg" alt="arrow down icon" />
                                </div>

                                <div className="col-md-5 p-3 d-flex flex-column align-items-center">
                                    <img className="w-100 m-2" src="/works/UXUI/vision/phase-3/c-2-i-1.png" alt="challenge 1" />
                                    <p className="table-caption mt-1 mb-3">Power Saving toggle on upper right</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                    <h6 className="mb-3">
                                        Before
                                    </h6>
                                    <p className="mb-3">
                                    <ul className="list-disc">
                                            <li>Displaying information in relatively flat visual hierarchy</li>
                                            <li>Eco (energy saving) Mode prominently showing on the dashboard, drawing excessive visual attention</li>
                                            <li>Confusion about “Eco Mode” due to vague naming and far-away location from battery</li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-5 my-3">
                                    <h6 className="mb-3">
                                        Iteration
                                    </h6>
                                    <p className="mb-3">
                                        <ul className="list-disc">
                                            <li>Renaming Eco Mode to <b>Power Saving</b></li>
                                            <li>Changing to <b>toggle to indicate controllability</b></li>
                                            <li>Placing toggle closer to battery, following the <b>Law of Proximity</b></li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        
                    </div>

                    <div className="subsection-wrapper">
                        <ScrollReveal>
                            <div className="row align-items-center">
                                <h6 className="mb-3 theme">
                                    #3: Back & forth between dashboard and mobile app
                                </h6>
                                
                                <div className="col-md-5 p-3 d-flex flex-column align-items-center">
                                    <img className="w-100" src="/works/UXUI/vision/phase-3/c-3-2.png" alt="challenge 1" />
                                    <p className="table-caption mt-1 mb-3">Moped in GPS navigation mode</p>
                                </div>
                                
                                <div className="col-md-2 d-flex flex-column align-items-center my-3">
                                    <img className="arrow-right" src="/works/UXUI/vision/Type=Down.svg" alt="arrow down icon" />
                                </div>

                                <div className="col-md-5 p-3 d-flex flex-column align-items-center">
                                    <img className="w-100 m-2" src="/works/UXUI/vision/phase-3/c-3-i-2.png" alt="challenge 1" />
                                    <p className="table-caption mt-1 mb-3">Setting up GPS directly on moped</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                    <h6 className="mb-3">
                                        Before
                                    </h6>
                                    <p className="mb-3">
                                        <ul className="list-disc">
                                            <li>Users set GPS destination via mobile app, then synchronize it to moped dashboard</li>
                                            <li>Lack of ability to set navigation directly on the dashboard <b>without relying on a smartphone</b></li>
                                        </ul> 
                                    </p>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-5 my-3">
                                    <h6 className="mb-3">
                                        Iteration
                                    </h6>
                                    <p className="mb-3">
                                        <ul className="list-disc">
                                            <li>Direct GPS feature on moped dashboard</li>
                                            <li>Users can set up GPS on both mobile and dashboard</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                    </div>

                    <div className="subsection-wrapper">
                        <ScrollReveal>
                            <div className="row align-items-center">
                                <h6 className="mb-3 theme">
                                    #4: Default state- manual mode (autonomy off)
                                </h6>
                                
                                <div className="col-md-5 p-3 d-flex flex-column align-items-center">
                                    <img className="w-100" src="/works/UXUI/vision/phase-3/c-4-1.png" alt="challenge 1" />
                                    <p className="table-caption mt-1 mb-3">Auto Mode shown under speedometer of dashboard</p>
                                </div>

                                <div className="col-md-2 d-flex flex-column align-items-center my-3">
                                    <img className="arrow-right" src="/works/UXUI/vision/Type=Down.svg" alt="arrow down icon" />
                                </div>

                                <div className="col-md-5 p-3 d-flex flex-column align-items-center">
                                    <img className="w-100 m-2" src="/works/UXUI/vision/phase-3/c-4-i-1.png" alt="challenge 4" />
                                    <p className="table-caption mt-1 mb-3">Manual Mode shown under speedometer of dashboard</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                    <h6 className="mb-3">
                                        Before
                                    </h6>
                                    <p className="mb-3">
                                        <ul className="list-disc">
                                            <li>Default driving in autonomy mode (self-driving)</li>
                                            <li>Guerrilla research revealed users’ confusion of being unable to manually start driving</li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-5 my-3">
                                    <h6 className="mb-3">
                                        Iteration
                                    </h6>
                                    <p className="mb-3">
                                        <ul className="list-disc">
                                            <li>Setting default state as manual driving mode to give users control on autonomy</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                    </div>

                    
                </div>     
            </div>

            <div className="theme-bg container subsection-wrapper">
                <div className="topic-container">
                    <h6 className="mb-5">Usability Testing & Guerrilla Research</h6>
                </div>
                <HorizontalCarousel cards={cards} />
            </div>
            


            <div className="container">
                <div className="topic-container section-wrapper">
                    <ScrollReveal>
                        <div className="row align-items-center my-5">
                            <h3 className="col-md-6 my-5">🖼️ Showcase</h3>
                            <div className="col-md-6 my-3 d-flex flex-column align-items-center">
                                <img className="w-100" src="/works/UXUI/vision/phase-6/IMG_7841.jpg" alt="user testing" />
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                    <div className="subsection-wrapper d-flex flex-column align-items-center">
                        <img className="w-100" src="/works/UXUI/vision/Moodboard.png" alt="moodboard of science fair" />
                        <p className="table-caption mt-3">In-class Science Fair Demo Session</p>
                    </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="subsection-wrapper d-flex flex-column align-items-center">
                            <img className="w-100" src="/works/UXUI/vision/prototype/1-physical.png" alt="physical prototype" />
                            <p className="w-sizer center table-caption mt-3">Overview of Physical Moped Prototype. A button to switch between Auto mode and Manual mode is placed on the right handle to allow easy access while driving.
                            </p>
                        </div>
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <div className="section-wrapper">
                            <div className="my-3 row align-items-start">
                                <div className="col-md-3">
                                    <h6 className=" theme">Unlocking Moped</h6>
                                    <p className="text-bold">Mobile</p>
                                </div>
                                
                                <div className="col-md-9 mb-3 d-flex justify-content-center">
                                    <img className="w-100" src="/works/UXUI/vision/prototype/2-mobile_turn_on.png" alt="mobile turn on" />
                                </div>
                            </div>

                            <div className="my-3 row">
                                <div className="col-md-3">
                                    <p className="text-bold">Dashboard</p>
                                </div>
                                
                                <div className="col-md-9 mb-3 d-flex justify-content-center">
                                    <img className="w-100" src="/works/UXUI/vision/prototype/3-moped_turn_on.png" alt="moped turn on" />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <div className="section-wrapper">
                            <div className="my-3 row align-items-start">
                                <div className="col-md-3">
                                    <h6 className="theme">GPS Navigation</h6>
                                    <p className="text-bold">Mobile</p>
                                </div>
                                
                                <div className="col-md-9 mb-3 d-flex justify-content-center">
                                    <img className="w-100" src="/works/UXUI/vision/prototype/4-mobile_GPS.png" alt="mobile GPS" />
                                </div>
                            </div>

                            <div className="my-3 row">
                                <div className="col-md-3">
                                    <p className="text-bold">Dashboard</p>
                                </div>
                                
                                <div className="col-md-9 mb-3 d-flex justify-content-center">
                                    <img className="w-100" src="/works/UXUI/vision/prototype/5-moped_GPS.png" alt="moped GPS" />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="section-wrapper">
                            <div className="my-3 row align-items-start">
                                <div className="col-md-3">
                                    <h6 className="theme">Auto Mode</h6>
                                    <p className="text-bold mb-0">Hand-off</p>
                                    <p className="caption">Users can leisurely choose to press Auto Button on moped right handle to turn on automatic driving mode.</p>
                                </div>
                                
                                <div className="col-md-9 mb-3 d-flex justify-content-center">
                                    <img className="w-100" src="/works/UXUI/vision/prototype/6-auto_handover.png" alt="auto handover" />
                                </div>
                            </div>
                            <div className="my-3 row align-items-start">
                                <div className="col-md-3">
                                    <p className="text-bold mb-0">Take-over</p>
                                    <p className="caption">In emergencies where human intervention is required, moped will prompt users to switch back to manual mode. In less urgent situations, moped automatically pulls over and prompts users to inspect.</p>
                                </div>
                                
                                <div className="col-md-9 mb-3 d-flex justify-content-center">
                                    <img className="w-100" src="/works/UXUI/vision/prototype/9-auto_takeover.png" alt="auto takeover" />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="section-wrapper">
                            <div className="my-3 row align-items-start">
                                <div className="col-md-3">
                                    <h6 className="theme">Power Saving</h6>
                                    <p className="text-bold mb-0">Dashboard</p>
                                    <p className="caption">Low battery warning shows on the side without interrupting driving, suggesting to turn on power saving (if not already on).</p>
                                </div>
                                
                                <div className="col-md-9 mb-3 d-flex justify-content-center">
                                    <img className="w-100" src="/works/UXUI/vision/prototype/7-power_saving.png" alt="power saving" />
                                </div>
                            </div>
                            <div className="my-3 row align-items-start">
                                <div className="col-md-3">
                                    <h6 className="theme">Battery Charging</h6>
                                    <p className="text-bold mb-0">Dashboard</p>
                                    <p className="caption">When pulled over, low battery popup appears prompting users to connect moped to charger.</p>
                                </div>
                                
                                <div className="col-md-9 mb-3 d-flex justify-content-center">
                                    <img className="w-100" src="/works/UXUI/vision/prototype/8-charging.png" alt="battery charging" />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="section-wrapper">
                            <div className="my-3 row align-items-start">
                                <div className="col-md-3">
                                    <h6 className="theme">Innovative Semi-Autonomy</h6>
                                    <p className="text-bold mb-0">Smart Rearview Mirrors</p>
                                    <p className="caption">Our new semi-autonomous interface for e-mopeds, featuring a smart rear mirror overlay, is a breakthrough in enhancing rider safety and awareness.</p>
                                </div>
                                
                                <div className="col-md-9 mb-3 d-flex justify-content-center">
                                    <img className="w-100" src="/works/UXUI/vision/prototype/10-mirrors.png" alt="smart mirrors" />
                                </div>
                            </div>
                            <p className="my-3">
                            This innovative system offers <b className="theme">real-time insights about vehicles behind the rider</b>, crucial for making informed decisions in traffic. It detects and displays the speed of trailing vehicles, and importantly, <b className="theme">analyzes their intention to overtake, alerting the rider to potential high-speed passes</b>. A key feature of this interface is its ability to recognize different types of vehicles, such as police cars, prompting riders to be extra mindful of traffic rules.
                            </p>
                        </div>
                    </ScrollReveal>


                </div>

                <ScrollReveal>
                    <div className="topic-container subsection-wrapper">
                        <h3 className="mb-5">💭 Takeaways</h3>
                        <p className="mb-5">
                        This Ford Vision project helped me consolidate almost everything I learned in this Interaction Design Fundamentals course. From doing background research, affinity diagramming, brainstorming, to actually prototyping by leveraging visual design principles and usability heuristics, and evaluating with usability tests and guerrilla research. Another thing I greatly enjoyed out of this project was the rapport and collaboration among team members, which was a key factor in our production of the comprehensive, attention-to-detail physical and digital prototypes.
                        </p>
                    </div>
                </ScrollReveal>
            </div>  

            <ScrollReveal>
                <ProjectRec projects={projects} moreLink={"/Works/design"} />
            </ScrollReveal>

            <div className="bg-1">
                <div className="container">
                    <div className="topic-container py-3">
                        <h3 className="my-5">📑 References</h3>
                        <p className="references mb-3">
                        Nielsen, J. (1994, April 24). <span className="italic">10 usability heuristics for user interface design.</span> Nielsen Norman Group. <a href="https://www.nngroup.com/articles/ten-usability-heuristics/" target="_blank" rel="noreferrer noopener">https://www.nngroup.com/articles/ten-usability-heuristics/</a><br/>
                        </p>
                        <h6>Icons</h6>
                        <p className="references mb-3">
                        Scooter by Prashanth Rapolu from <a href="https://thenounproject.com/browse/icons/term/scooter/" target="_blank" title="Scooter Icons">Noun Project</a> (CC BY 3.0)
<br/>
dashboard by Sofiana from <a href="https://thenounproject.com/browse/icons/term/dashboard/" target="_blank" title="dashboard Icons">Noun Project</a> (CC BY 3.0)
<br/>
Scooter by Prashanth Rapolu from <a href="https://thenounproject.com/browse/icons/term/scooter/" target="_blank" title="Scooter Icons">Noun Project</a> (CC BY 3.0)
<br/>
down by unlimicon from <a href="https://thenounproject.com/browse/icons/term/down/" target="_blank" title="down Icons">Noun Project</a> (CC BY 3.0)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;

const cards = [
    {
      url: "/works/UXUI/vision/phase-5/IMG_7774.jpg",
      title: "Title 1",
      id: 1,
    },
    {
      url: "/works/UXUI/vision/phase-4/IMG_7723.jpg",
      title: "Title 2",
      id: 2,
    },
    {
      url: "/works/UXUI/vision/phase-5/IMG_7752.jpg",
      title: "Title 3",
      id: 3,
    },
    {
      url: "/works/UXUI/vision/phase-5/IMG_7763.jpg",
      title: "Title 4",
      id: 4,
    },
    {
      url: "/works/UXUI/vision/phase-4/IMG_7728.png",
      title: "Title 5",
      id: 5,
    },
    {
      url: "/works/UXUI/vision/phase-4/IMG_7727.png",
      title: "Title 1",
      id: 6,
    },
  ];
  const projects = [
    {
        'link': '/Works/design/Fluffy-Focus',
        'data': {
            'title': 'Fluffy Focus', 
            'id': 'Fluffy-Focus',
            'tags': ['Persuasive Design', 'Behavior Change', 'Game Design', 'UX', 'Psychology'],
            'desc': 'Transformational Desktop RPG Against Work-Induced Anxiety',
            'img': 'https://live.staticflickr.com/65535/53567884525_c169b9e51c_b.jpg',
            'ph': 'https://live.staticflickr.com/65535/53567884525_c169b9e51c_b.jpg',
          }
    },
    {
        'link': '/Works/design/Ford-Vision',
        'data': {
            'title': '2Done', 
            'id': '2Done',
            'tags': ['UX', 'UI', 'Procrastination', 'Anxiety', 'MentalHealth'],
            'desc': 'Gamified to-do list mobile app for procrastination',
            'img': 'https://live.staticflickr.com/65535/52515681442_5ac6984461_k.jpg',
            'ph': 'https://live.staticflickr.com/65535/52515681442_301610b0ec_m.jpg',
        }
    },
];