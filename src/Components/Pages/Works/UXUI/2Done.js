import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProgressiveImage from 'react-progressive-bg-image';
import ReactLoading from "react-loading";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Iframe from 'react-iframe';

function ToDone () {
    const [isLoading, setIsLoading] = useState(false);

    const img_src = 'https://live.staticflickr.com/65535/52515681442_5ac6984461_k.jpg';
    const img_ph  = 'https://live.staticflickr.com/65535/52515681442_301610b0ec_c.jpg';
    
    const hideSpinner = () => {
        setIsLoading(false);
    };

    const figma = (
        <Iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" 
        width="800" height="450" 
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbL9iAnQEF29yMpo5mfpUNj%2FGamified-To-Do-Planner%3Fpage-id%3D75%253A18%26node-id%3D79%253A1598%26viewport%3D412%252C256%252C0.15%26scaling%3Dscale-down%26starting-point-node-id%3D79%253A1598" 
        onLoad={hideSpinner}
        allowfullscreen />
    );


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
                            <h2 className="mb-3">2Done Gamified To-Do Planner</h2>
                            <h3>Tags: UX Design, UI Design, Procrastination, Anxiety</h3>
                    </div>
                    <div className="row mb-5">
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Duration </h3>
                            <ul>
                                <li>3 weeks</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Role</h3>
                            <ul>
                                <li>Lead Designer</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Team</h3>
                            <ul>
                                <li>4 people</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Tool</h3>
                            <ul>
                                <li>Figma</li>
                                <li>Miro</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col mb-5">
                            <h3>Responsibilities</h3>
                            <ul className="row">
                                <li className="col-md-6">Conducting 2 user interviews</li>
                                <li className="col-md-6">Leading group discussion</li>
                                <li className="col-md-6">Feature Ideation</li>
                                <li className="col-md-6">Implementing the low-fi & hi-fi prototype</li>
                            </ul>
                         </div>
                    </div>

                    <div className="my-3">
                        <h3 className="heading-1 mb-5">Figma Prototype</h3>
                        <div className="d-flex justify-content-center">
                            {isLoading ? (
                                <ReactLoading type="bubbles" color="#e0e0e0"
                                height={100} width={50} />
                            ) : figma}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="">
                <div className="container">
                    <div className="topic-container">
                        <h3 className="heading-3 color-dark my-5">Design Preview</h3>
                    </div>
                </div>
                
                <div className="row">
                    <div id="todone-prev-box-1" className="col-md-4 m-0 p-0">
                        <div className="my-3 d-flex flex-column align-items-center">
                            <img className="w-100" src="/works/UXUI/2done/proto-1.png" alt="prototype" />
                        </div>
                    </div>
                    <div id="todone-prev-box-2" className="col-md-4 m-0 p-0">
                        <div className="my-3 d-flex flex-column align-items-center">
                            <img className="w-100" src="/works/UXUI/2done/proto-2.png" alt="prototype" />
                        </div>
                    </div>
                    <div id="todone-prev-box-3" className="col-md-4 m-0 p-0">
                        <div className="my-3 d-flex flex-column align-items-center">
                            <img className="w-100" src="/works/UXUI/2done/proto-3.png" alt="prototype" />
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="bg-1">
                <div className="container">
                    <div className="topic-container section-wrapper">
                        <h3 className="heading-1 my-4">Introduction</h3>
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
                    <div className="topic-container subsection-wrapper">
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
                    <h3 className="heading-1 my-3">Empathize</h3>
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
                    <h3 className="heading-1 my-3">Define</h3>
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
                        <h3 id="todone-map-title" className="heading-2 mt-5">User Journey Maps</h3>
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
                        <h3 className="heading-2 my-3">Pain Points</h3>
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
                            <h3 className="heading-2 mt-3 mb-5">How Might We- Design Mission</h3>
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
                        <h3 className="heading-1 my-5">Ideate</h3>
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
                                We aim to build a <b>gamified to-do list</b> that encourages users to 
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
                    <h2 className="heading-1 text-bold my-5">Prototype</h2>
                    <div className="w-100 mb-5 d-flex flex-column align-items-center">
                        <img className="w-75" src="/works/UXUI/2done/IA.png" alt="information structure" />
                        <p className="table-caption mt-3">Information Structure</p>
                    </div>
                    
                    <div className="row subsection-wrapper">
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="d-flex flex-column">
                                <h3 className="heading-2 mb-3">Low-Fi Prototype</h3>
                                <p>A low-fidelity prototype was developed with Figma, which would undergo a usability test in the next process.</p>
                            </div>
                            
                        </div>
                        <div className="col-md-6">
                            <div className="w-100 d-flex flex-column align-items-center">
                                <img className="w-100" src="/works/UXUI/2done/6.png" alt="low-fi prototype figma screenshot" />
                                <p className="table-caption mt-3">Wireflow of the low-fi prototype</p>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container subsection-wrapper">
                    <h2 className="heading-1 text-bold my-3">Test & Iteration</h2>
                    <div className="mb-5">
                        <div>
                            <p className="heading-3 m-0"><b>Usability Test</b>: 3 participants</p>
                            <p className="heading-3 m-0"><b>Test Objective</b>: Add a new task and a new project in 2Done</p>
                        </div>
                        <h3 className="heading-3 mt-5 mb-3">Results and Improvements</h3>
                        <p>After the test, a post-test interview was conducted for each participant to collect their feedback.</p>
                    </div>
                    
                    <div className="subsubsection-wrapper pb-3">
                        <h2 className="mb-5">1. Avoid Vague Visual Representations</h2>
                        <div className="row mx-5">
                            <div className="col-md-3 my-3">
                                <img className="w-100 box-shadow" src="/works/UXUI/2done/7-1.png" alt="low-fi prototype- PERT project map" />
                            </div>
                            <div className="col-md-9 d-flex flex-column align-items-center justify-content-center"> 
                                <div className="w-sizer">
                                    <p>
                                        All 3 users reported that they had <b>difficulty comprehending the geometric symbols of the treasure map</b>.
                                    </p>
                                    <ul className="list-disc">
                                        <li>
                                            No visual cue indicating a direction of the diagram
                                        </li>
                                        <li>
                                            Meaning of numbers hovering above the activities (estimated duration time of an activity) is ambiguous
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div id="todone-proto-1">
                <div className="container">
                    <div className="topic-container subsection-wrapper">
                        <div className="row">
                            <div className="col-md-3 d-flex flex-column justify-content-center">
                                <div className="my-5">
                                    <h3 className="heading-1 mb-5">Improvements</h3>
                                    <ul className="list-disc">
                                        <li className="mb-3">
                                            Straight-forward visual cues to help users guess the meaning of the symbols in PERT diagram
                                        </li>
                                        <li className="mb-3">
                                            Details regarding PERT reduced to the minimum by keeping only information users needed
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-9 my-3 d-flex flex-column align-items-center">
                                <img className="w-100" src="/works/UXUI/2done/proto-1.png" alt="prototype" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container subsection-wrapper">
                <div className="subsubsection-wrapper pb-3">
                        <h2 className="mb-5">2. Information Simplification</h2>
                        <div className="row mx-5">
                            <div className="col-md-6 row my-3">
                                <img className="col w-50 box-shadow" src="/works/UXUI/2done/7-2-1.png" alt="low-fi prototype- adding project" />
                                <img className="col w-50 box-shadow" src="/works/UXUI/2done/7-2-2.png" alt="low-fi prototype- adding activity to to-do" />
                            </div>
                            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center"> 
                                <div className="w-sizer">
                                    <p>
                                    Users could not add projects with the same “+” button in navigation tab used to add both tasks and projects because they <b>could not associate the two operations together</b>. Additionally, users found it redundant to manually add a project activity into to-do list.
                                    </p>
                                    <ul className="list-disc">
                                        <li>
                                        Ambiguity of the difference between tasks and a project activities
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="todone-proto-2">
                <div className="container">
                    <div className="topic-container subsection-wrapper">
                        <div className="row">
                            <div className="col-md-3 d-flex flex-column justify-content-center">
                                <div className="my-5">
                                    <h3 className="heading-1 mb-5">Improvements</h3>
                                    <ul className="list-disc">
                                        <li className="mb-3">
                                        Separating the operations of adding projects or tasks
                                        </li>
                                        <li className="mb-3">
                                        Minimizing users’ actions when adding projects by automatically importing project activities into the to-do list
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-9 my-3 d-flex flex-column align-items-center">
                                <img className="w-100" src="/works/UXUI/2done/proto-2.png" alt="prototype" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container subsection-wrapper">
                <div className="subsubsection-wrapper pb-3">
                        <h2 className="mb-5">3. Emphasis on Interactive Items</h2>
                        <div className="row mx-5">
                            <div className="col-md-3 my-3">
                                <img className="w-100 box-shadow" src="/works/UXUI/2done/7-3.png" alt="low-fi prototype- to-do list" />
                            </div>
                            <div className="col-md-9 d-flex flex-column align-items-center justify-content-center"> 
                                <div className="w-sizer">
                                    <p>
                                    User could not tell that the activity items in the Add Project Page were editable but rather thought of them as view-only objects. On the other hand, users did not know where to tap to edit or complete a task when exploring the to-do list page.
                                    </p>
                                    <ul className="list-disc">
                                        <li>
                                        Interactivity of items were not suggestive enough to be distinguished from other view-only attributes
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="todone-proto-3">
                <div className="container">
                    <div className="topic-container subsection-wrapper">
                        <div className="row">
                            <div className="col-md-3 d-flex flex-column justify-content-center">
                                <div className="my-5">
                                    <h3 className="heading-1 mb-5">Improvements</h3>
                                    <ul className="list-disc">
                                        <li className="mb-3">
                                        Using shadows to emphasize interactive buttons or boxes
                                        </li>
                                        <li className="mb-3">
                                        Adopting commonly used symbols, e.g. arrows to signify a collapsable tab
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-9 my-3 d-flex flex-column align-items-center">
                                <img className="w-100" src="/works/UXUI/2done/proto-3.png" alt="prototype" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="topic-container subsection-wrapper">
                    <h3 className="heading-3 color-dark mt-5">Challenges</h3>
                    <div className="mb-5">
                        <h2 className="heading-2 text-bold my-3">How does 2Done address the user pain points?</h2>
                        <p>
                        The user pain points include overestimation of one’s efficiency and lack of awareness of dependencies of tasks. The dependencies of tasks have been addressed with PERT to visualize the temporal order of task completion. Unfortunately, since our current system still requires the user to put down their own estimated task duration, users may still input underestimated task duration resulting in delays. <br/><br/>However, we propose that further enhancement can <b>incorporate AI to adjust user estimation to a more accurate number</b>. Specifically, our system collects user data of previous estimations and their completion dates which is fed to <b>machine learning models to learn patterns of the user’s overestimation and makes suggestions accordingly</b>. For instance, the model may learn that a user tends to spend 25% more time than initial estimation on a task. Next time if the user inputs a task requiring 4 days to complete, the AI may suggest expanding the duration to 5 days to minimize user’s estimation error.
                        </p>
                    </div>
                    <div className="mb-5">
                        <h2 className="heading-2 text-bold my-3">Can 2Done really reduce the anxiety induced by academic workload?</h2>
                        <p>
                        In order to verify this, an in-depth <b>diary study</b> spanning over longer time durations along with rigorously defined questionnaires evaluating users’ daily psychological states is required. The diary study participant may evaluate their psychological state daily with questionnaires and write about how 2Done helped manage their academic workload over the semester. Without the diary study, we currently cannot attest to the effectiveness of 2Done in reducing students’ academic anxiety. Our usability test has limited reliability due to the small number of test participants and the lack of a clear evaluation of one’s psychological states.
                        </p>
                    </div>
                    <div className="mb-5">
                        <h2 className="heading-2 text-bold my-3">Projects are often done in a collaborative effort. What happens when others are responsible for activities that precede yours, so that you cannot use the project map before others complete their tasks?</h2>
                        <p>
                        We recognize this as a critical issue that could significantly harm the efficacy of our application. To resolve this problem, <b>making projects accessible by multiple people</b> seems to be a feasible solution. This way, everyone contributes by managing their respective activities in the map. It also makes clear the implication of one’s delayed activity in regards to others’ activities succeeding it, so that members will be more responsible with their tasks to avoid causing delay of the whole project.
                        </p>
                    </div>
                </div>

                <div className="topic-container subsection-wrapper">
                    <h3 className="heading-3 color-dark mb-5">Takeaways</h3>
                    <p>
                    In this project, I attempted to incorporate several past experience. Throughout years in college, I often experienced symptoms of academic anxiety and perceived several peers suffering from anxiety-induced procrastination, thus it became a strong motive for me to develop a solution to help students break away from the pattern of procrastination. 
<br/><br/>
I learned another thing the hard way: designers can NEVER assume what a user would do in a context. More often than not, users do not react to the user interface the way designers expected. Therefore, usability tests are essential to verify whether we as designers <b>successfully met users’ needs to intuitively interact with the interface in the simplest way</b>. For instance, users in our usability test pointed out many issues that we never expected to occur. We can encourage users to use “thinking out loud” technique to help us understand what works best for them.
<br/><br/>
On the other hand, the Project Management course I took in junior year inspired me to use PERT to address the problem of procrastination and task dependencies. This was one of the few times I got to put theories taught in classrooms into practice, and it reminded me of how HCI and UX requires an interdisciplinary expertise and cross-domain collaborations to approach problems in different fields with UX techniques. It <b>strengthened my confidence to explore the field of HCI as an Information Management student who is also passionate about design and psychology</b>.
                    </p>
                </div>
            </div>

            <div className="bg-1 pb-5">
                <div className="container">
                    <div className="topic-container py-3">
                        <h3 className="heading-3 color-gray mt-5">References</h3>
                        <p className="references">
                        [1] Hooda, M., & Saini, A. (2017). Academic anxiety: An overview. Educational Quest, 8(3), 807-810.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDone;

