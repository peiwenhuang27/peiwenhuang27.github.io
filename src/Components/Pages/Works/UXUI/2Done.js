import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function ToDone () {
    let img = "/works/UXUI/2done/cover.png";

    return (
        <div>
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h2 className="mb-3">2Done Gamified To-Do List</h2>
                            <h3>Tags: Course project, UX, Procrastination, Anxiety</h3>
                    </div>
                    <div className="row mb-5">
                        <div className="topic-desc-container col-md-4">
                            <h3>Duration </h3>
                            <ul>
                                <li>3 weeks</li>
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
                                <li>Figma</li>
                                <li>Miro</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col">
                            <h3>Responsibilities</h3>
                            <ul className="row">
                                <li className="col-md-4">Conducting 2 user interviews</li>
                                <li className="col-md-8">Leading group discussion</li>
                                <li className="col-md-4">Feature Ideation</li>
                                <li className="col-md-8">Implementing the low-fi & hi-fi prototype</li>
                            </ul>
                         </div>
                    </div>
                </div>
            </div>

            <div className="bg-1">
                <div className="container">
                    <div className="topic-container section-wrapper">
                        <h3 className="heading-1 my-4">Background</h3>
                        <div id="todone-problem-statement">
                            <h2 className="heading-2 my-3 color-bright text-bold">Have you ever felt anxious when a flood of assignments or exams rush your way?</h2>
                            <h2 className="heading-2 my-3 color-bright text-bold">Or felt frustrated when you attempt to multi-task but then fail to concentrate on any task? </h2>
                        </div>
                        <p className="col-md-11 mt-5"><span className="emph">Academic anxiety</span> is common among students who are worried about academic tasks. 
                        <br/>There are five components comprising academic anxiety: 
                        </p>
                        <ul id="problem-list" className="row my-5 d-flex align-items-center">
                            <li className="col heading-3 text-bold mx-3 d-flex align-items-center justify-content-center">Worry</li>
                            <li className="col heading-3 text-bold mx-3 d-flex align-items-center justify-content-center">Emotionality</li>
                            <li className="col heading-3 text-bold mx-3 d-flex align-items-center justify-content-center">Task Generated Interference</li>
                            <li className="col heading-3 text-bold mx-3 d-flex align-items-center justify-content-center">Study Skills Deficits</li>
                            <li className="col heading-3 text-bold mx-3 d-flex align-items-center justify-content-center">Procrastination</li>
                        </ul>
                        <p>
                        In particular, <b>study skill deficits</b> refers to “problems with your current study methods which create anxiety”, <br/>
                         while <b>procrastination</b> results in stress, anxiety, a sense of guilt and crisis, health problems, and severe loss of productivity [1].
                        </p>
                    </div>
                </div>
            </div>

            {/* <div style={{backgroundColor: "#f4ffff"}}> */}
                <div className="container">
                    <div className="topic-container section-wrapper">
                        <h3 className="heading-1 my-5">Objective</h3>
                        <p className="w-sizer">
                        Motivated by the concern of anxiety-induced procrastination,<br/>
    we aim to develop a solution to <b>help students complete tasks efficiently</b> to lessen the stress and anxiety induced by assignments or work.
                        </p>
                        <div className="row">
                            <div className="col-md-4 mt-5 topic-desc-container">
                                <h3>Target User</h3>
                                <ul>
                                    <li>Students who suffer from procrastination due to overwhelming workload</li>
                                </ul>
                            </div>
                            <div className="col-md-8 mt-5 topic-desc-container">
                                <h3>Requirement</h3>
                                <ul className="list-disc">
                                    <li>Addresses study skills deficits and procrastination</li>
                                    <li>Enables users to effectively arrange and complete tasks and break the pattern of procrastination</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}

            <div className="container section-wrapper">
                <div className="topic-container">
                    <h3 className="heading-3 color-dark mt-5">Design Process</h3>
                    <h3 className="heading-2 my-3">Empathize</h3>
                    <p><b>User interview:</b> 11 students who suffered from procrastination in face of overwhelming workload <br/><br/>
                    The interview questions centered around</p>
                    <ul className="list-disc">
                        <li>experience of procrastination</li>
                        <li>anxiety management</li>
                        <li>how they eventually completed tasks in time</li>
                    </ul>
                    <div className="w-100 mb-5 d-flex flex-column align-items-center">
                        <img className="w-75" src="/works/UXUI/2done/1.png" alt="interview questions" />
                    </div>
                </div>

                <div className="topic-container subsection-wrapper">
                    <h3 className="heading-2 my-3">Define</h3>
                    <p className="">In the interview, most respondents tended to first evaluate the time needed for tasks upon receiving them. Yet they proceeded to procrastinate, because <b>they thought there was enough time for them to relax</b> before starting working. <br/>
However, 3 participants mentioned experiencing significant stress before deadlines either because
                    </p>
                    <div className="row my-5">
                        <div className="col d-flex flex-column align-items-center">
                            <div className="w-sizer mb-3 d-flex flex-column align-items-center">
                                <img className="w-75" src="/works/UXUI/2done/girl.svg" alt="girl icon" />
                                <span className="img-src-cap">girl by ester barbato from <a href="https://thenounproject.com/browse/icons/term/girl/" target="_blank" title="girl Icons">Noun Project</a></span>
                            </div>
                            <h4 className="w-sizer heading-3 mb-2 text-center text-bold">previous tasks took longer than expected and thus delayed later tasks</h4>
                        </div>
                        <div className="col d-flex flex-column align-items-center">
                            <div className="w-sizer mb-3 d-flex flex-column align-items-center">
                                <img className="w-75" src="/works/UXUI/2done/boy.svg" alt="boy icon" />
                                <span className="img-src-cap">boy by ester barbato from <a href="https://thenounproject.com/browse/icons/term/boy/" target="_blank" title="boy Icons">Noun Project</a></span>
                            </div>
                            <h4 className="w-sizer heading-3 mb-2 text-center text-bold">they did not start early enough to complete the task</h4>
                        </div>
                    </div>

                    
                    <div className="my-5 d-flex flex-column align-items-center">
                        <h3 id="todone-map-title" className="heading-3 mt-5">User Journey Maps</h3>
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
                    
                    <div className="pt-5">
                        <h3 className="heading-3 my-3">Pain Points</h3>
                        <p>The problems discussed in interviews were converged into two pain points:</p>
                        <div className="d-flex justify-content-center">
                            <ul id="pain-point-list" className="row my-5 d-flex align-items-center">
                                <li className="col mx-5 d-flex align-items-center justify-content-center">
                                    <h3 className="w-sizer heading-2 m-0">Overestimation of One’s Efficiency</h3>
                                </li>
                                <li className="col mx-5 d-flex align-items-center justify-content-center">
                                    <h3 className="w-sizer heading-2 text-bold m-0">Lack of Awareness of Dependencies of Tasks</h3>
                                </li>
                            </ul>
                        </div>
                        <div id="todone-hmw-container">
                            <h3 className="heading-3 mt-3 mb-5">How Might We- Design Mission</h3>
                            <h2 id="todone-hmw" className="heading-2 m-5 color-gray-800">
                            How might we <b className="color-bright">develop a mobile application</b> to help <b className="color-bright">people who suffer from procrastination</b> when 
                            under significant workload learn to <b className="color-bright">organize and complete tasks efficiently</b> to reduce the anxiety induced by unfinished work?
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-1">
                <div className="container">
                    <div className="topic-container subsection-wrapper">
                        <h3 className="heading-2 my-5">Ideate</h3>
                        <div id="todone-stats">
                            <div className="row statistics-container my-5">
                                <div className="col-md-4 d-flex flex-column align-items-center">
                                    <h2>Crazy 8</h2>
                                    <p>Technique used</p>
                                </div>
                                <div className="col-md-4 d-flex flex-column align-items-center">
                                    <h2>32</h2>
                                    <p>Ideas brainstormed</p>
                                </div>
                                <div className="col-md-4 d-flex flex-column align-items-center">
                                    <h2>4</h2>
                                    <p>Storyboards illustrated</p>
                                </div>
                            </div>
                        </div>
                        <p className="mb-5">
                            After our feature brainstorming session, some ideas were noted and kept in the preliminary design of the prototype.
                        </p>
                        <div className="my-3 d-flex flex-column align-items-center">
                            <img className="w-sizer" src="/works/UXUI/2done/3.png" alt="crazy-8 storyboards" />
                            <p className="table-caption mt-3">The 4 feature storyboards</p>
                        </div>
                        <ul className="p-5">
                            <li className="mb-5">
                                <h4 className="heading-3 feat-box mt-3">Gamified to-do list</h4>
                                {/* <ul className="p-3 list-disc">
                                    <li><b>Tower of Today’s Task</b>: user conquers stories in the tower daily by completing tasks</li>
                                    <li><b>Project Islands in Treasure Map</b>: presents the adventure route of tasks computed by PERT for user to accomplish tasks in such order</li>
                                </ul> */}
                                <div className="row mb-5 p-3">
                                    <div className="topic-desc-container col">
                                        <h3>Tower of Today’s Task</h3>
                                        <ul>
                                            <li className="color-black">
                                            user conquers stories in the tower by completing tasks every day
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="topic-desc-container col">
                                        <h3>Project Islands in Treasure Map</h3>
                                        <ul>
                                            <li className="color-black">
                                            presents the adventure route of tasks computed by PERT for user to accomplish tasks in such order
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="mb-5">
                                <h4 className="heading-3 feat-box mt-3">Incorporation of PERT</h4>
                                <p className="p-3">
                                    PERT (Program Evaluation and Review Technique) is a project management technique that can be used to address the <b>dependencies of tasks</b> by viewing 
                                    a series of tasks as a “project” consisting of multiple “activities”. 
                                    PERT identifies a <b>critical path</b> of activities that could not be delayed and <b>slack time</b> each activity outside of the critical path can afford without delaying the project.
                                </p>
                            </li>
                            <li className="mb-5">
                                <h4 className="heading-3 feat-box mt-3">Completion History</h4>
                                <p className="p-3">
                                Visualization of user's task accomplishment to reflect on their journey and better understand their work pattern.
                                </p>
                            </li>
                            <li className="mb-5">
                                <h4 className="heading-3 feat-box mt-3">Popup Reminder</h4>
                                <p className="p-3">
                                Notification appears when a yesterday’s task remains unfinished after midnight 
                                to let the user decide whether to add it to today’s tasks or postpone it to another day.
                                </p>
                            </li>
                        </ul>
                        <div className="py-5 design-statement d-flex flex-column align-items-center">
                            <div className="d-flex flex-column align-items-center">
                                <h2>✼</h2>
                            </div>
                            <div>
                                <h3>
                                We aim to build a <b>gamified to-do list</b> that allows encourages users to 
                                complete tasks with a fun user interface consisting of <b>Tower of Today’s Tasks</b> and <b>Project Treasure Map</b>, 
                                and uses <b>PERT</b> to assist users in controlling the amount of procrastination time.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="topic-container subsection-wrapper">
                    <h2 className="heading-2 text-bold my-5">Prototype</h2>
                    <div className="w-100 mb-5 d-flex flex-column align-items-center">
                        <img className="w-75" src="/works/UXUI/2done/IA.png" alt="information structure" />
                        <p className="table-caption mt-3">Information Structure</p>
                    </div>
                    
                    <div className="row subsection-wrapper">
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="d-flex flex-column">
                                <h3 className="heading-3 mb-3">Low-Fi Prototype</h3>
                                <p>A low-fidelity prototype was developed with Figma, which would undergo a usability test in the next process.</p>
                            </div>
                            
                        </div>
                        <div className="col-md-6">
                            <div className="w-100 mb-5 d-flex flex-column align-items-center">
                                <img className="w-100" src="/works/UXUI/2done/6.png" alt="low-fi prototype figma screenshot" />
                                <p className="table-caption mt-3">Wireflow of the low-fi prototype</p>   
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ToDone;

