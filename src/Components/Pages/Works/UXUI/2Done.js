import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactLoading from "react-loading";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Iframe from 'react-iframe';

import ProjectRec from "../../../ProjectRec";
import { ScrollReveal } from "../../../Helpers/SmoothScroll";
import ProgressBar from "../../../ScrollBar";


function ToDone () {
    const [isLoading, setIsLoading] = useState(false);

    const img_src = 'https://live.staticflickr.com/65535/52515681442_5ac6984461_k.jpg';
    
    const hideSpinner = () => {
        setIsLoading(false);
    };

    const figma = (
        <Iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} 
        width="800" height="450" 
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbL9iAnQEF29yMpo5mfpUNj%2FGamified-To-Do-Planner%3Fpage-id%3D75%253A18%26node-id%3D79%253A1598%26viewport%3D412%252C256%252C0.15%26scaling%3Dscale-down%26starting-point-node-id%3D79%253A1598" 
        onLoad={hideSpinner}
        allowfullscreen />
    );


    return (
        <div id="todone">
            <ProgressBar color="#8F7000" />
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img_src})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <ScrollReveal>
                        <div className="topic-title-container mb-5">
                                <h3 className="mb-1 color-dark text-bold date">May 2022</h3>
                                <h2 className="mb-1">2Done: Gamified To-Do Planner</h2>
                                <h3 className="theme mb-5">UX Design, UI Design, Procrastination, Anxiety</h3>
                                <p className="mb-5">
                                2Done is a gamified to-do planner to help procrastinators get work done.
                                With an adventure-themed design of task completion interaction scheme 
                                and a simplified project management system laid on adventure maps, 2Done aims to encourage people
                                to enjoy the fun of being productive and alleviate anxiety induced by procrastination.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="section-wrapper row mb-5">
                            <div className="topic-desc-container col-md-4 col-sm-6 mb-5">
                                <h6 className="theme mb-3">Duration </h6>
                                <ul>
                                    <li>3 weeks</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col-md-4 col-sm-6 mb-5">
                                <h6 className="theme mb-3">Role</h6>
                                <ul>
                                    <li>Lead Designer</li>
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
                                    <li>Miro</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col mb-5">
                                <h6 className="theme mb-3">Responsibilities</h6>
                                <ul className="row">
                                    <li className="col-md-6">Conducting 2 user interviews</li>
                                    <li className="col-md-6">Leading group discussion</li>
                                    <li className="col-md-6">Feature Ideation</li>
                                    <li className="col-md-6">Implementing the low-fi & hi-fi prototype</li>
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <ScrollReveal>
                <div className="theme-bg">
                    <div className="container">
                        <div className="topic-container section-wrapper">
                            <h3 className="mb-5">💻 Demo</h3>
                            <div className="d-flex justify-content-center">
                                {isLoading ? (
                                    <ReactLoading type="bubbles" color="#e0e0e0"
                                    height={100} width={50} />
                                ) : figma}
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal>  
                <div id="todone-prev-box-1" className=" m-0 p-0">
                    <div className="p-5 d-flex flex-column align-items-center">
                        <img className="w-sizer" src="/works/UXUI/2done/proto-1.png" alt="prototype" />
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div id="todone-prev-box-2" className=" m-0 p-0">
                    <div className="p-5 d-flex flex-column align-items-center">
                        <img className="w-sizer" src="/works/UXUI/2done/proto-2.png" alt="prototype" />
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div id="todone-prev-box-3" className=" m-0 p-0">
                    <div className="p-5 d-flex flex-column align-items-center">
                        <img className="w-sizer" src="/works/UXUI/2done/proto-3.png" alt="prototype" />
                    </div>
                </div>
            </ScrollReveal>
            
            <div className="container">
                <div className="topic-container subsection-wrapper">
                    <ScrollReveal>
                        <h3 className="col-md-6 my-5">📚 Background</h3>
                        <h4>Have you ever felt anxious when a flood of assignments or exams rush your way? Or felt frustrated when you attempt to multi-task but then fail to concentrate on any task?</h4>
                    </ScrollReveal>

                    <ScrollReveal>
                        <p className="my-5">
                            <b className="theme">Academic anxiety</b> is common among students who are worried about academic tasks. 
                            <br/>There are five components comprising academic anxiety: 
                        </p>
                        <ul id="problem-list" className="row my-5 d-flex align-items-center justify-content-between">
                            <li className="col-lg-2 col-md-5 mb-5 d-flex align-items-center justify-content-center">Worry</li>
                            <li className="col-lg-2 col-md-5 mb-5 d-flex align-items-center justify-content-center">Emotionality</li>
                            <li className="col-lg-2 col-md-5 mb-5 d-flex align-items-center justify-content-center">Task Generated Interference</li>
                            <li className="col-lg-2 col-md-5 mb-5 d-flex align-items-center justify-content-center">Study Skills Deficits</li>
                            <li className="col-lg-2 col-md-5 mb-5 d-flex align-items-center justify-content-center">Procrastination</li>
                        </ul>
                        <p>
                        In particular, <b className="theme">study skill deficits</b> refers to “problems with your current study methods which create anxiety”, <br/>
                            while <b className="theme">procrastination</b> results in stress, anxiety, a sense of guilt and crisis, health problems, and severe loss of productivity [1].
                        </p>
                    </ScrollReveal>
                </div>

                <ScrollReveal>
                    <div className="topic-container subsection-wrapper">
                        <h3 className="mb-5">🎯 Objective</h3>
                        <p className="col-lg-8 mb-5">
                        Motivated by the concern of anxiety-induced procrastination,<br/>
    we aim to develop a solution to <b>help students complete tasks efficiently</b> to lessen the stress and anxiety induced by assignments or work.
                        </p>
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <h6>Audience</h6>
                                <p>
                                Students who suffer from procrastination due to overwhelming workload
                                </p>
                            </div>
                            <div className="col-md-6 mb-5">
                                <h6>Requirement</h6>
                                <p>
                                    <ul>
                                        <li>Addresses study skills deficits and procrastination</li>
                                        <li>Enables users to effectively arrange and complete tasks and break the pattern of procrastination</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="topic-container">
                    <ScrollReveal>
                        <div className="subsection-wrapper">
                            <h3 className="col-md-6 mb-5">🪄 Design Process</h3>
                            <h6 className="mb-3">Empathize- User interview</h6>
                            <p>
                            The interview questions centered around <b className="theme">experience of procrastination</b>, <b className="theme">anxiety management</b>, <b className="theme">how they eventually completed tasks in time</b>.
                            </p>
                            <div className="row my-5 align-items-center">
                                <div className="col-lg-6 mb-5 d-flex flex-column justify-content-center align-items-center">
                                    <h3 className="theme p-bold">11</h3>
                                    <p className="w-sizer text-center">students who suffered from procrastination in face of overwhelming workload</p>
                                </div>
                                <div className="col-lg-6 mb-5 d-flex flex-column align-items-center">
                                    <img className="w-100" src="/works/UXUI/2done/1.png" alt="interview questions" />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="subsection-wrapper">
                            <h6 className="mb-3">Define</h6>
                            <p className="">In the interview, most respondents tended to first evaluate the time needed for tasks upon receiving them. Yet they proceeded to procrastinate, because <b className="theme">they thought there was enough time for them to relax</b> before starting working.
    However, 3 participants mentioned experiencing significant stress before deadlines either because
                            </p>
                            <div className="row my-5">
                                <div className="col-md-6 d-flex flex-column align-items-center">
                                    <div className="w-sizer mb-3 d-flex flex-column align-items-center">
                                        <img className="w-75" src="/works/UXUI/2done/girl.svg" alt="girl icon" />
                                    </div>
                                    <h5 className="theme w-sizer mb-3 text-center">Previous tasks took longer than expected and thus delayed later tasks</h5>
                                </div>
                                <div className="col-md-6 d-flex flex-column align-items-center">
                                    <div className="w-sizer mb-3 d-flex flex-column align-items-center">
                                        <img className="w-75" src="/works/UXUI/2done/boy.svg" alt="boy icon" />
                                    </div>
                                    <h5 className="theme w-sizer mb-3 text-center">They did not start early enough to complete the task</h5>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <div className="subsection-wrapper">
                            <h6 className="mb-3">User Journey Maps</h6>
                            <div className="m-0 d-flex flex-column align-items-center">
                                <Swiper
                                    cssMode={true}
                                    navigation={true}
                                    pagination={true}
                                    mousewheel={true}
                                    keyboard={true}
                                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                    id="user-journey-map"
                                >
                                    <SwiperSlide>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img className="w-100 journey-map-img" src="/works/UXUI/2done/2-1.jpg" alt="user journey map"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img className="w-100 journey-map-img" src="/works/UXUI/2done/2-2.jpg" alt="user journey map"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img className="w-100 journey-map-img" src="/works/UXUI/2done/2-3.jpg" alt="user journey map"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img className="w-100 journey-map-img" src="/works/UXUI/2done/2-4.jpg" alt="user journey map"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img className="w-100 journey-map-img" src="/works/UXUI/2done/2-5.jpg" alt="user journey map"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img className="w-100 journey-map-img" src="/works/UXUI/2done/2-6.jpg" alt="user journey map"/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div className="subsection-wrapper">
                        <ScrollReveal>
                            <h6 className="mb-3">Pain Points</h6>
                            
                            <p>The problems discussed in interviews were converged into two pain points:</p>

                            <ul id="problem-list" className="row px-3 my-5 d-flex align-items-center justify-content-between">
                                <li className="col-md-5 mb-5 d-flex align-items-center justify-content-center">Overestimation of One’s Efficiency</li>
                                <li className="col-md-5 mb-5 d-flex align-items-center justify-content-center">Lack of Awareness of Dependencies of Tasks</li>
                            </ul>
                        </ScrollReveal>

                        <ScrollReveal>
                            <h4 className="theme">
                            How might we develop a mobile application to help people who suffer from procrastination when 
                                under significant workload learn to organize and complete tasks efficiently to reduce the anxiety induced by unfinished work?
                            </h4>
                        </ScrollReveal>
                    </div>

                    <div className="subsection-wrapper">
                        <ScrollReveal>
                            <h3 className="my-5">🧠 Ideation</h3>

                            <div className="row statistics-container my-5">
                                <div className="col-md-4 d-flex flex-column align-items-center">
                                    <h3 className="theme p-bold">Crazy 8</h3>
                                    <p>Technique used</p>
                                </div>
                                <div className="col-md-4 d-flex flex-column align-items-center">
                                    <h3 className="theme p-bold">32</h3>
                                    <p>Ideas brainstormed</p>
                                </div>
                                <div className="col-md-4 d-flex flex-column align-items-center">
                                    <h3 className="theme p-bold">4</h3>
                                    <p>Storyboards illustrated</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="my-3 d-flex flex-column align-items-center">
                                <img className="w-sizer-75" src="/works/UXUI/2done/3.png" alt="crazy-8 storyboards" />
                                <p className="table-caption mt-3">The 4 feature storyboards</p>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="subsection-wrapper">
                        <ul className="my-5">
                            <ScrollReveal>
                                <li className="subsection-wrapper">
                                    <h6 className="theme mb-3">Gamified to-do list</h6>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p><b>Tower of Today’s Task</b><br/>
                                            User conquers stories in the tower by completing tasks every day</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p><b>Project Islands in Treasure Map</b><br/>
                                            Presents the adventure route of tasks computed by PERT for user to accomplish tasks in such order</p>
                                        </div>
                                    </div>
                                </li>
                            </ScrollReveal>
 
                            <ScrollReveal>
                                <li className="subsection-wrapper">
                                    <h6 className="theme mb-3">Incorporation of PERT</h6>
                                    <p>
                                    PERT (Program Evaluation and Review Technique) is a project management technique that can be used to address the <b>dependencies of tasks</b> by viewing 
                                        a series of tasks as a “project” consisting of multiple “activities”. PERT identifies a <b>critical path</b> of activities that could not be delayed and <b>slack time</b> each activity outside of the critical path can afford without delaying the project.
                                    </p>
                                </li>
                            </ScrollReveal>
 
                            <ScrollReveal>
                                <li className="subsection-wrapper">
                                    <h6 className="theme mb-3">Completion History</h6>
                                    <p>
                                    Visualization of user's task accomplishment to reflect on their journey and better understand their work pattern.
                                    </p>
                                </li>
                            </ScrollReveal>
 
                            <ScrollReveal>
                                <li className="subsection-wrapper">
                                    <h6 className="theme mb-3">Popup Reminder</h6>
                                    <p>
                                    Notification appears when a yesterday’s task remains unfinished after midnight 
                                    to let the user decide whether to add it to today’s tasks or postpone it to another day.
                                    </p>
                                </li>
                            </ScrollReveal>
                        </ul>
                    </div>

                    <ScrollReveal>
                        <div className="my-5">
                            <h4>
                                We aim to build a <span className="theme">gamified to-do list</span> that encourages users to 
                                    complete tasks with a fun user interface consisting of <span className="theme">Tower of Today’s Tasks</span> and <span className="theme">Project Treasure Map</span>, 
                                    and uses <span className="theme">PERT</span> to assist users in controlling the amount of procrastination time.
                            </h4>
                        </div>
                    </ScrollReveal>

                    <div className="subsection-wrapper">
                        <ScrollReveal>
                            <h3 className="col-md-6 my-5">🛠️ Prototyping</h3>
                            <div className="w-100 mb-5 d-flex flex-column align-items-center">
                                <img className="w-sizer-75" src="/works/UXUI/2done/IA.png" alt="information structure" />
                                <p className="table-caption mt-3">Information Structure</p>
                            </div>
                        </ScrollReveal>
                    
                        <ScrollReveal>
                            <div className="row subsection-wrapper align-items-start">
                                <div className="col-md-6 mb-5 d-flex flex-column">
                                        <h6 className="mb-3">Low-Fi Prototype</h6>
                                        <p>A low-fidelity prototype was developed with Figma, which would undergo a usability test in the next process.</p>
                                </div>
                                <div className="col-md-6">
                                    <div className="w-100 d-flex flex-column align-items-center">
                                        <img className="w-100" src="/works/UXUI/2done/6.png" alt="low-fi prototype figma screenshot" />
                                        <p className="table-caption mt-3">Wireflow of the low-fi prototype</p>   
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="subsection-wrapper">
                        <ScrollReveal>
                            <h3 className="my-5">🧪 Usability Evaluation</h3>
                            <div className="row mb-5">
                                <div className="col-md-6 mb-3">
                                    <h6>Usability Test</h6>
                                    <p>
                                    3 participants
                                    </p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <h6>Test Objective</h6>
                                    <p>
                                    Add a new task and a new project in 2Done
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    
                        <ScrollReveal>
                            <div className="todone-finding subsubsection-wrapper mb-3">
                                <div className="row flex-row-reverse my-3">
                                    <div className="col-md-9 d-flex flex-column align-items-start justify-content-center"> 
                                        <h6 className="theme mb-3">#1: Avoid Vague Visual Representations</h6>
                                        <p>
                                            All 3 users reported that they had <b>difficulty comprehending the geometric symbols of the treasure map</b>.
                                        
                                            <ul className="list-disc mt-3">
                                                <li>
                                                    No visual cue indicating a direction of the diagram
                                                </li>
                                                <li>
                                                    Meaning of numbers hovering above the activities (estimated duration time of an activity) is ambiguous
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                    <div className="col-md-3 px-3 mb-5">
                                        <img src="/works/UXUI/2done/7-1.png" alt="low-fi prototype- PERT project map" />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            <ScrollReveal>
                <div id="todone-proto-1">
                    <div className="container">
                        <div className="topic-container subsection-wrapper">
                            <div className="row">
                                <div className="col-md-3 d-flex flex-column justify-content-center">
                                    <div className="my-5">
                                        <h6 className="black mb-3">Improvements</h6>
                                        <p>
                                            <ul className="list-disc">
                                                <li className="mb-1">
                                                    Straight-forward visual cues to help users guess the meaning of the symbols in PERT diagram
                                                </li>
                                                <li className="mb-1">
                                                    Details regarding PERT reduced to the minimum by keeping only information users needed
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-9 my-3 d-flex flex-column align-items-center">
                                    <img className="w-100" src="/works/UXUI/2done/proto-1.png" alt="prototype" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div className="container">
                    <div className="topic-container subsection-wrapper">
                        <div className="todone-finding mb-3">
                            <div className="row flex-row-reverse my-3">
                                <div className="col-md-6 d-flex flex-column align-items-start justify-content-center"> 
                                    <h6 className="theme mb-3">#2: Information Simplification</h6>
                                    <p>
                                    Users could not add projects with the same “+” button in navigation tab used to add both tasks and projects because they <b>could not associate the two operations together</b>. Additionally, users found it redundant to manually add a project activity into to-do list.
                                        <ul className="list-disc mt-3">
                                            <li>
                                            Ambiguity of the difference between tasks and a project activities
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="col-md-6 row px-1">
                                    <div className="col-md-6 my-3">
                                        <img src="/works/UXUI/2done/7-2-1.png" alt="low-fi prototype- adding project" />
                                    </div>
                                    <div className="col-md-6 my-3">
                                        <img src="/works/UXUI/2done/7-2-2.png" alt="low-fi prototype- adding activity to to-do" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div id="todone-proto-2">
                    <div className="container">
                        <div className="topic-container subsection-wrapper">
                            <div className="row">
                                <div className="col-md-3 d-flex flex-column justify-content-center">
                                    <div className="my-5">
                                        <h6 className="black mb-3">Improvements</h6>
                                        <p>
                                            <ul className="list-disc">
                                                <li className="mb-1">
                                                Separating the operations of adding projects or tasks
                                                </li>
                                                <li className="mb-1">
                                                Minimizing users’ actions when adding projects by automatically importing project activities into the to-do list
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-9 my-3 d-flex flex-column align-items-center">
                                    <img className="w-100" src="/works/UXUI/2done/proto-2.png" alt="prototype" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div className="container">
                    <div className="topic-container subsection-wrapper">
                    <div className="todone-finding subsubsection-wrapper mb-3">
                        <div className="row flex-row-reverse my-3">
                            <div className="col-md-9 d-flex flex-column align-items-start justify-content-center"> 
                                <h6 className="theme mb-3">#3: Emphasis on Interactive Items</h6>
                                <p>
                                User could not tell that the activity items in the Add Project Page were editable but rather thought of them as view-only objects. On the other hand, users did not know where to tap to edit or complete a task when exploring the to-do list page.
                                
                                    <ul className="list-disc mt-3">
                                        <li>
                                        Interactivity of items were not suggestive enough to be distinguished from other view-only attributes
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div className="col-md-3 my-3">
                                <img src="/works/UXUI/2done/7-3.png" alt="low-fi prototype- to-do list" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div id="todone-proto-3">
                    <div className="container">
                        <div className="topic-container subsection-wrapper">
                            <div className="row">
                                <div className="col-md-3 d-flex flex-column justify-content-center">
                                    <div className="my-5">
                                        <h6 className="black mb-3">Improvements</h6>
                                        <p>
                                            <ul className="list-disc">
                                                <li className="mb-1">
                                                Using shadows to emphasize interactive buttons or boxes
                                                </li>
                                                <li className="mb-1">
                                                Adopting commonly used symbols, e.g. arrows to signify a collapsable tab
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-9 my-3 d-flex flex-column align-items-center">
                                    <img className="w-100" src="/works/UXUI/2done/proto-3.png" alt="prototype" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
            
            <div className="container">
                <div className="topic-container subsection-wrapper">
                    <ScrollReveal>
                        <h3>💥 Challenges</h3>
                        <div className="subsection-wrapper">
                            <h6 className="theme mb-3">How does 2Done address the user pain points?</h6>
                            <p>
                            The user pain points include overestimation of one’s efficiency and lack of awareness of dependencies of tasks. The dependencies of tasks have been addressed with PERT to visualize the temporal order of task completion. Unfortunately, since our current system still requires the user to put down their own estimated task duration, users may still input underestimated task duration resulting in delays. 
                            <br/>However, we propose that further enhancement can <b>incorporate AI to adjust user estimation to a more accurate number</b>. Specifically, our system collects user data of previous estimations and their completion dates which is fed to <b>machine learning models to learn patterns of the user’s overestimation and makes suggestions accordingly</b>. For instance, the model may learn that a user tends to spend 25% more time than initial estimation on a task. Next time if the user inputs a task requiring 4 days to complete, the AI may suggest expanding the duration to 5 days to minimize user’s estimation error.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="subsection-wrapper">
                            <h6 className="theme mb-3">Can 2Done really reduce the anxiety induced by academic workload?</h6>
                            <p>
                            In order to verify this, an in-depth <b>diary study</b> spanning over longer time durations along with rigorously defined questionnaires evaluating users’ daily psychological states is required. The diary study participant may evaluate their psychological state daily with questionnaires and write about how 2Done helped manage their academic workload over the semester. Without the diary study, we currently cannot attest to the effectiveness of 2Done in reducing students’ academic anxiety. Our usability test has limited reliability due to the small number of test participants and the lack of a clear evaluation of one’s psychological states.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="subsection-wrapper">
                            <h6 className="theme mb-3">Projects are often done in a collaborative effort. What happens when others are responsible for activities that precede yours, so that you cannot use the project map before others complete their tasks?</h6>
                            <p>
                            We recognize this as a critical issue that could significantly harm the efficacy of our application. To resolve this problem, <b>making projects accessible by multiple people</b> seems to be a feasible solution. This way, everyone contributes by managing their respective activities in the map. It also makes clear the implication of one’s delayed activity in regards to others’ activities succeeding it, so that members will be more responsible with their tasks to avoid causing delay of the whole project.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="topic-container subsection-wrapper">
                    <ScrollReveal>
                        <h3 className="mb-5">💭 Takeaways</h3>
                        <p className="mb-5">
                        In this project, I attempted to incorporate several past experience. Throughout years in college, I often experienced symptoms of academic anxiety and perceived several peers suffering from anxiety-induced procrastination, thus it became a strong motive for me to develop a solution to help students break away from the pattern of procrastination. 
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <p className="mb-5">
                        I learned another thing the hard way: designers can NEVER assume what a user would do in a context. More often than not, users do not react to the user interface the way designers expected. Therefore, usability tests are essential to verify whether we as designers <b>successfully met users’ needs to intuitively interact with the interface in the simplest way</b>. For instance, users in our usability test pointed out many issues that we never expected to occur. We can encourage users to use “thinking out loud” technique to help us understand what works best for them.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <p className="mb-5">
                        On the other hand, the Project Management course I took in junior year inspired me to use PERT to address the problem of procrastination and task dependencies. This was one of the few times I got to put theories taught in classrooms into practice, and it reminded me of how HCI and UX requires an interdisciplinary expertise and cross-domain collaborations to approach problems in different fields with UX techniques. It <b>strengthened my confidence to explore the field of HCI as an Information Management student who is also passionate about design and psychology</b>.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <ScrollReveal>
                <ProjectRec projects={projects} moreLink={"/Works/design"} />
            </ScrollReveal>

            <div className="bg-1">
                <div className="container topic-container subsection-wrapper">
                    <h3 className="my-5">📑 References</h3>
                        <p className="references mb-3">
                        [1] Hooda, M., & Saini, A. (2017). Academic anxiety: An overview. Educational Quest, 8(3), 807-810.
                        </p>
                        <h6>Icons</h6>
                        <p className="references mb-3">
                        girl by ester barbato from <a href="https://thenounproject.com/browse/icons/term/girl/" target="_blank" rel="noreferrer noopenner" title="girl Icons">Noun Project</a>
                        <br/>
                        boy by ester barbato from <a href="https://thenounproject.com/browse/icons/term/boy/" target="_blank" rel="noreferrer noopenner" title="boy Icons">Noun Project</a>

                        </p>
                </div>
            </div>
        </div>
    );
};

export default ToDone;

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
            'title': 'Ford Vision', 
            'id': 'Ford-Vision',
            'tags': ['Interaction Design Fundamentals', 'UX', 'Autonomous Vehicle'],
            'desc': 'Redefining Semi-Autonomous Electric Vehicle Paradigm',
            'img': 'https://live.staticflickr.com/65535/53573556154_cdbcf18027_b.jpg',
            'ph': 'https://live.staticflickr.com/65535/53573556154_cdbcf18027_b.jpg',
        }
    },
];