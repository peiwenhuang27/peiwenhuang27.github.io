import { useEffect, useState, useRef, createRef } from "react";
import Iframe from 'react-iframe';

import Video from "../../../Helpers/Video";

import ProjectRec from "../../../Navigation/ProjectRec";
import { ScrollReveal } from "../../../Helpers/SmoothScroll";
import ProgressBar from "../../../Helpers/ScrollBar";
import { Subsection } from "../../../Containers/Topic";

function Vision ({ pageHeight, handleSubsectionClick, projRecLink, projRecs }) {
    const [activeItem, setActiveItem] = useState(0);

    const img_src = "https://i.imgur.com/fKD9Vjq.png";   

    const items = [
        {
            name: "Intro",
            content:
            <div>
                <div className="container">
                    <div className="topic-container py-5">
                        <ScrollReveal>
                            <div className="topic-title-container mb-5">
                                    <h3 className="mb-1 color-dark text-bold date">October 2023 - December 2023</h3>
                                    <h2 className="mb-1">Vision: Easy, Delightful Beginner's E-moped Experience </h2>
                                    <h3 className="theme mb-5">Interaction Design Fundamentals, Autonomous Vehicle, UX</h3>
                                    <p className="mb-5">
                                    As the trend of autonomous vehicles soaring higher than ever before, our team envisioned Vision— a semi-autonomous electric moped, and integrated existing moped features and an innovative semi-autonomy interaction paradigm to provide seamless experience.
                                
                                    </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="subsection-wrapper">
                                <div className="row">
                                    <div className="topic-desc-container col-md-6 mb-5">
                                        <h6 className="theme mb-3">Duration</h6>
                                        <ul>
                                            <li>2 months</li>
                                        </ul>
                                    </div>
                                    <div className="topic-desc-container col-md-6 mb-5">
                                        <h6 className="theme mb-3">Tool</h6>
                                        <ul>
                                            <li>Figma</li>
                                        </ul>
                                    </div>
                                    <div className="topic-desc-container col-md-6 mb-5">
                                        <h6 className="theme mb-3">Role</h6>
                                        <ul>
                                            <li>Lead Designer</li>
                                            <li>Researcher</li>
                                        </ul>
                                    </div>
                                    <div className="topic-desc-container col-md-6 mb-5">
                                        <h6 className="theme mb-3">Team</h6>
                                        4 people
                                    </div>
                                    <div className="topic-desc-container col mb-5">
                                        <h6 className="theme mb-3">Responsibilities</h6>
                                        <ul className="list-disc">
                                            <li>Conducted comprehensive background research, including guerrilla and moderated interviews with 4 experienced moped users.</li>
                                            <li>Led internal brainstorming sessions to identify and develop 6 key product features from 3 main pain points.</li>
                                            <li>Spearheaded the design of mobile and moped UIs, utilizing Figma for digital prototypes and building physical prototypes for thorough testing.</li>
                                            <li>Conducted usability tests with 3 users, receiving positive feedback on innovative smart mirrors and the intuitive integration of moped controls with screen components.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        },
        {
            name: "Demo",
            content:
            <div>
                <div className="container">
                    <div className="topic-container subsection-wrapper">
                        <h3 className="">💻 Demo: Revolutionize Your Ride with Vision E-Moped</h3>
                        
                        <ScrollReveal>
                            <div className="section-wrapper">
                                <div className="row align-items-start">
                                    <div className="col-md-6">
                                        <h5 className="theme mb-3">Keyless Unlocking Made Effortless</h5>
                                        <p>
                                        Say goodbye to fumbling for keys! Unlock and start your Vision moped effortlessly with Touch ID. Convenience is just a touch away.
                                        </p>
                                    </div>

                                    <div className="col-md-6 mb-4 d-flex justify-content-center">
                                        <Video src="https://i.imgur.com/WgF6Weo.mp4" width="540" />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal>
                            <div className="section-wrapper">
                                <div className="row align-items-start">
                                    <div className="col-md-6">
                                        <h5 className="theme mb-3">Built-In GPS Navigation</h5>
                                        <p>
                                        First time on the road? No problem. Vision's GPS navigation ensures you'll always find your way, so you can focus on the ride ahead with confidence.
                                        </p>
                                    </div>
                                    
                                    <div className="col-md-6 mb-4 d-flex justify-content-center">
                                        <Video src="https://i.imgur.com/Z5uVH6V.mp4" width="540" />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="section-wrapper">
                                <div className="row align-items-start">
                                    <div className="col-md-6">
                                        <h5 className="theme mb-3">AUTO Mode: Hands-Free Freedom</h5>
                                        <p>
                                        Experience the future of commuting: Vision's AUTO mode can take the wheel. Sit back, and enjoy the ride as Vision drives autonomously. Need to take control? Simply steer anytime you're ready.
                                        </p>
                                    </div>
                                    
                                    <div className="col-md-6 mb-4 d-flex justify-content-center">
                                        <Video src="https://i.imgur.com/TU3bZu1.mp4" width="540" />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="section-wrapper">
                                <div className="row align-items-start">
                                    <div className="col-md-6">
                                        <h5 className="theme mb-3">Emergency Takeover</h5>
                                        <p>
                                        Safety comes first. Vision detects road emergencies, navigating obstacles, and even pulling over for alerts like low tire pressure.
                                        </p>
                                    </div>
                                    
                                    <div className="col-md-6 mb-4 d-flex justify-content-center">
                                        <Video src="https://i.imgur.com/W2n1xNc.mp4" width="540" />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="section-wrapper">
                                <div className="row align-items-start">
                                    <div className="col-md-6">
                                        <h5 className="theme mb-3">Mobile Integration at Your Fingertips</h5>
                                        <p>
                                        From unlocking your moped to setting up navigation and viewing trip insights, Vision keeps everything at your fingertips. Enjoy the ease of managing your ride straight from your smartphone.
                                        </p>
                                    </div>
                                    
                                    <div className="col-md-6 mb-4 d-flex justify-content-center">
                                        <Video src="https://i.imgur.com/9FVRrUh.mp4" width="270" />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="section-wrapper">
                                <div className="row align-items-start">
                                    <div className="col-md-6">
                                        <h5 className="theme">Smart Mirrors for Safer Rides</h5>
                                        <p>
                                        No more unexpected surprises! Vision's Smart Mirrors analyze your surroundings, alerting you to overtaking vehicles and nearby police cars to keep you informed and safe on the road.
                                        </p>
                                    </div>
                                    
                                    <div className="col-md-6 mb-4 d-flex justify-content-center">
                                        <Video src="https://i.imgur.com/NzoLqKH.mp4" width="540" />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        },
        {
            name: "Objective",
            content:
            <div className="theme-bg">
                <div className="container">
                    <ScrollReveal>
                        <div className="topic-container subsection-wrapper">
                            <h3 className="mb-5">🎯 Objective</h3>
                            
                            <div className="row">
                                <div className="col-md-8 mb-3">
                                    <h5 className="theme mb-3">What are semi-autonomous vehicles?<br/>Why do we need them?</h5>
                                    
                                    <p className="mb-5">
                                    A semi-autonomous vehicle—whether it's a car, bike, or moped—can handle acceleration, deceleration, and stopping without human input. While it includes features like lane-keeping and self-parking, drivers still need to keep their hands on the wheel. <b>Automakers promote these features mainly for safety, helping to prevent accidents caused by driver fatigue or distractions.</b>
                                    </p>
                                </div>

                                <div className="col-md-4">
                                <h6 className="mb-3">Design Challenge</h6>
                                
                                <p className="mb-5">
                                Focusing on first-time moped riders, we aim to design a semi-autonomous electric moped dashboard and mobile control panel to deliver a smooth, safe, and calming experience for beginners learning to ride.
                                </p>
                            </div>
                            </div>
                            
                            
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        },
        {
            name: "Background",
            content:
            <div>
                <div className="container">
                    <div className="topic-container subsection-wrapper">
                        <ScrollReveal>
                            <h3>📚 Talking to Riders in Guerrilla Research, We Highlighted</h3>
                            <div className="section-wrapper row">
                                <h6 className="mb-3">Rider Safety</h6>
                                <div className="col-md-6 mb-3">
                                    <h5 className="theme mb-3">Users strongly desire for rider safety features.</h5>
                                    <div className="w-25 d-flex flex-column">
                                        <img className="w-sizer-sm no-shadow" src="/works/UXUI/vision/Type=Safety.svg" alt="safety icon" />
                                    </div>
                                </div>

                                <p className="col-md-6 mb-3">
                                    These safety features include blind-spot monitoring and real-time traffic alerts; especially for beginner riders, safety features help them practice and better get used to road conditions.
                                </p>
                            </div>
                        </ScrollReveal>
                            
                        <ScrollReveal>
                            <div className="section-wrapper row">
                                <h6 className="mb-3">Status Check</h6>
                                <div className="col-md-6 mb-3">
                                    <h5 className="theme mb-3">What time is it? Am I going to make it in time?</h5>
                                    <div className="w-25 d-flex flex-column">
                                        <img className="w-sizer-sm no-shadow" src="/works/UXUI/vision/Type=Dashboard.svg" alt="dashboard icon" />
                                    </div>
                                </div>

                                <p className="col-md-6 mb-3">
                                Time and battery level are the most frequently checked dashboard info. Riders regularly glance at them to stay on schedule, emphasizing the need for easy access without compromising riding safety.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="section-wrapper row">
                                <h6 className="mb-3">Battery Anxiety</h6>
                                <div className="col-md-6 mb-3">
                                    <h5 className="theme mb-3">Riders fear getting stranded on the road.</h5>
                                    <div className="w-25 d-flex flex-column">
                                        <img className="w-sizer-sm no-shadow" src="/works/UXUI/vision/Type=Battery.svg" alt="battery icon" />
                                    </div>
                                </div>

                                <p className="col-md-6 mb-3">
                                    Users also often look at battery levels while on the move due to fears of the moped breaking down. This necessitates battery-related features such as automatic charging, or solar panels.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        },
        {
            name: "Ideation",
            content:
            <div>
                <div className="container">
                    <div className="topic-container subsection-wrapper">
                        <ScrollReveal>
                            <div className="row align-items-center my-5">
                                <h3 className="mb-5">🪄 Ideating on Rider Pain Points</h3>
                                <h5 className="mb-3 theme">How might we transfer the complexity of operating to the vehicle to ensure a safe & easy riding process for beginners?</h5>
                                <p className="my-5">
                                After identifying essential features and flows with the task analysis, we focused on them in our ideation process with Crazy 8 & Concept sketching.
                                Particularly, we paid extra attention to <b className="">selecting ideas that transferred the operating complexity to the vehicle</b> in the concept sketches.
                                </p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <div>
                                    <img className="artwork p-1 no-shadow" src="/works/UXUI/vision/phase-2/task-analysis.png" alt="Task analysis" />
                                </div>
                                <div>
                                    <img className="artwork p-1 no-shadow" src="/works/UXUI/vision/phase-2/storyboard/collage.png" alt="Storyboarding" />
                                </div>
                                <div>
                                    <img className="artwork p-1 no-shadow" src="/works/UXUI/vision/phase-2/crazy8/IMG_9962.jpeg" alt="Crazy 8" />
                                </div>
                                <div>
                                    <img className="artwork p-1 no-shadow" src="/works/UXUI/vision/phase-2/concept/S__25214979.jpg" alt="Concept Sketching" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="container theme-bg">
                    <div className="topic-container subsection-wrapper">
                        <ScrollReveal>
                            <h6 className="mb-3">Planning the MVP</h6>
                                <div className="row">
                                    <h5 className="col-md-6 theme mb-3">Selected MVP-necessary Features</h5>
                                    
                                    <p className="col-md-6 mb-3">
                                        <ul className="list-disc">
                                            <li>Locking, unlocking and turning on, off moped with Face ID via either moped or mobile</li>
                                            <li>Switching on, off autonomy (self-driving) mode</li>
                                            <li>Setting up GPS navigation</li>
                                            <li>Low battery warning</li>
                                        </ul>
                                    </p>
                                </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        },
        {
            name: "Prototyping",
            content:
            <div>
                <div className="container">
                    <div className="topic-container section-wrapper">
                        <ScrollReveal>
                            <h3 className="mb-5">🛠️ Low-fidelity prototyping, more fluidity iterating</h3>
                            <div className="row">
                                <p className="col-md-6 mb-3">
                                    To satisfy riders' need of frequent status check,
                                    <ul className="list-disc">
                                        <li>Speed</li>
                                        <li>Time</li>
                                        <li>Battery Level</li>
                                        <li>Warnings</li>
                                        <li>Auto/Manual Mode</li>
                                    </ul>
                                    are constantly displayed on the moped screen. The middle panel of the screen would switch between the current activity such as navigation, parking, charging and so on.
                                </p>
                                <div className="col-md-6 mb-5 d-flex justify-content-center">
                                    <img className="artwork p-1 no-shadow" src="/works/UXUI/vision/phase-3/1.jpg" alt="physical prototype" />
                                    <img className="artwork p-1 no-shadow" src="/works/UXUI/vision/phase-3/4.jpg" alt="user testing" />
                                </div>
                            </div>
                            
                        </ScrollReveal>
                    
                        <ScrollReveal>
                            <div className="row subsection-wrapper">
                                <p className="col-md-6 mb-5">
                                With <b>3 rounds of usability testing & guerrilla research</b>, we rapidly iterated to address the most pressing issues...
                                </p>

                                <div className="col-md-6 d-flex justify-content-center">
                                    <img className="artwork p-1 no-shadow" src="/works/UXUI/vision/phase-4/IMG_7723.jpg" alt="user testing" />
                                    <img className="artwork p-1 no-shadow" src="/works/UXUI/vision/phase-5/IMG_7752.jpg" alt="user testing" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="container">
                    <div className="topic-container subsection-wrapper">
                            <h3 className="mb-5">🛵 Hi-fi Prototype after Iterating on...</h3>
                            
                            <ScrollReveal>
                                <div className="row subsection-wrapper">
                                    <div className="col-md-6">
                                        <h6>Popups</h6>
                                        <h5 className="theme mb-3">Displaying Only Time-Sensitive Alerts While Actively Riding</h5>
                                        <p className="mb-5">
                                        Instead of showing the low battery warning popup when users are actively riding, we opted for only displaying it when the vehicle has stopped moving. This prevents users' from potentially panicking over battery power on the road, especially when it must only be resolved by charging the moped when not in use.
                                        </p>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="d-flex flex-column align-items-center mb-3">
                                            <img className="w-sizer-lg" src="/works/UXUI/vision/phase-3/c-1.png" alt="challenge 1" />
                                            <p className="table-caption my-1">Before</p>
                                        </div>
                                        {/* <div className="d-flex flex-column align-items-center">
                                            <img className="no-shadow" src="/works/UXUI/vision/Type=Down.svg" alt="arrow down icon" />
                                        </div> */}
                                        <div className="d-flex flex-column align-items-center">
                                            <img className="w-sizer-lg" src="/works/UXUI/vision/prototype/improve-1.png" alt="challenge 2" />
                                            <p className="table-caption my-1">After</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal>
                                <div className="row subsection-wrapper">
                                    <div className="col-md-6">
                                        <h6>Layout</h6>
                                        <h5 className="theme mb-3">Following Law of Proximity for Grouping Similar Dashboard Information</h5>
                                        <p className="mb-5">
                                        User feedback about the dashboard's navigability highlighted the importance of effective layout design. Using the Law of Proximity, I re-clustered related information: controls (speedometer and riding mode) and status (time, battery, odometer). Inspired by Apple CarPlay, non-route information was repositioned on the left for quick, glanceable access.
                                        </p>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="d-flex flex-column align-items-center mb-3">
                                            <img className="w-sizer-lg" src="/works/UXUI/vision/phase-3/c-3-2.png" alt="challenge 1" />
                                            <p className="table-caption my-1">Before</p>
                                        </div>
                                        {/* <div className="d-flex flex-column align-items-center">
                                            <img className="no-shadow" src="/works/UXUI/vision/Type=Down.svg" alt="arrow down icon" />
                                        </div> */}
                                        <div className="d-flex flex-column align-items-center">
                                            <img className="w-sizer-lg" src="/works/UXUI/vision/prototype/improve-2.png" alt="challenge 2" />
                                            <p className="table-caption my-1">After</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal>
                                <div className="row subsection-wrapper">
                                    <div className="col-md-6">
                                        <h6>Riding Mode</h6>
                                        <h5 className="theme mb-3">Defaulting to Manual Riding Mode for First-Time Users</h5>
                                        <p className="mb-5">
                                        During usability tests, users accustomed to manual riding were surprised when the moped switched to autonomous mode. To ease this transition, the default mode for first-time riders should be manual. Tutorials, mobile app tips, or post-ride popups can guide users in switching or defaulting to AUTO mode when they are ready.
                                        </p>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="d-flex flex-column align-items-center mb-3">
                                            <img className="w-sizer-lg" src="/works/UXUI/vision/phase-3/c-4-1.png" alt="challenge 1" />
                                            <p className="table-caption my-1">Before</p>
                                        </div>
                                        {/* <div className="d-flex flex-column align-items-center">
                                            <img className="no-shadow" src="/works/UXUI/vision/Type=Down.svg" alt="arrow down icon" />
                                        </div> */}
                                        <div className="d-flex flex-column align-items-center">
                                            <img className="w-sizer-lg" src="/works/UXUI/vision/prototype/improve-3.png" alt="challenge 2" />
                                            <p className="table-caption my-1">After</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                    </div>     
                </div>


            </div>
        },
        {
            name: "Takeaways",
            content:
            <div>
                <div className="container">
                    <ScrollReveal>
                        <div className="topic-container subsection-wrapper">
                            <h3 className="mb-3">💭 Takeaways</h3>
                            <p className="mb-5">
                            This Vision project helped me consolidate almost everything I learned in this Interaction Design Fundamentals course. From doing <b>background research, affinity diagramming, brainstorming, to actually prototyping by leveraging visual design principles and usability heuristics</b>, and evaluating with usability tests and guerrilla research.
                            Another thing I greatly enjoyed out of this project was the rapport and collaboration among team members, which was a key factor in our production of the comprehensive, attention-to-detail physical and digital prototypes.
                            </p>
                            <p className="caption subtle">
                            note: This is an academic project for educational purpose, and is not officially associated with any moped brand. All resources used are credited to the owner(s) and are not commercialized within the scope of the project.

                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        },
    ];
    
    items.map((item, key) => {
        item.id = key;
        item.ref = createRef(null);
    });

    return (
        <div id="Ford-Vision">
            <ProgressBar color="#2A6BAC" items={items} activeItem={activeItem} handleClick={handleSubsectionClick} />
            <div className="topic-main-wrapper">
                <div className="topic-cover-img" style={{ backgroundImage:`url(${img_src})` }} />
                {items.map((item) => {
                    return (
                        <Subsection
                        id={item.id}
                        subsectionRef={item.ref}
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}
                        pageHeight={pageHeight}
                        content={item.content} />
                    );
                })}

                <ScrollReveal>
                    <ProjectRec projects={projRecs} moreLink={projRecLink} />
                </ScrollReveal>

                <div className="bg-1">
                    <div className="container">
                        <div className="topic-container subsection-wrapper">
                            <h3 className="mb-3">📑 References</h3>
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
                            <h6>Style Guides & Assets</h6>
                            <p className="references mb-3">
                                Ford Brand Standards Guide.  <a href="https://www.scribd.com/document/642811289/Ford-Brand-Standards-Guide-pdf" target="_blank" rel="noreferrer noopener">https://www.scribd.com/document/642811289/Ford-Brand-Standards-Guide-pdf</a>
                                <br/>
                                Physical Moped Mockup. <a href="https://electrek.co/2018/06/08/bolts-new-400-km-range-electric-scooter/" target="_blank" rel="noreferrer noopener">https://electrek.co/2018/06/08/bolts-new-400-km-range-electric-scooter/</a>
                                <br/>
                                Scooter Model. <a href="https://emojis.sh/emoji/scooter-JrVe5nbUHv" target="_blank" rel="noreferrer noopener">https://emojis.sh/emoji/scooter-JrVe5nbUHv</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;