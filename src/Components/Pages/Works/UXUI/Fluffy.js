import { createRef, useState } from "react";

import ProjectRec from "../../../ProjectRec";
import HorizontalScrollCarousel from "../../../HorizontalScrollCarousel";
import { ScrollReveal } from "../../../Helpers/SmoothScroll";
import ProgressBar from "../../../ScrollBar";
import { Subsection } from "../../../Topic";

// nice-to-have
// scroll down dropdown list (features)
// mid-fi trim

function DropdownToggle ({ view, toggleView, toggleTxt }) {
    return (
        // how to change color?
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="toggleSwitch"
            onClick={() => toggleView(!view)}/>
            <label className="form-check-label" for="flexSwitchCheckDefault">{toggleTxt}</label>
        </div>
    );
}

function Fluffy ({ pageHeight, handleSubsectionClick }) {
    const [activeItem, setActiveItem] = useState(0);
    // show supporting psychology
    const [ view, toggleView ] = useState(false);

    const items = [
        {
            name: "Intro",
            content: 
            <div className="container">
                <div className="topic-container py-5">
                    <ScrollReveal>
                        <div className="topic-title-container mb-5">
                                <h3 className="mb-1 color-dark text-bold date">October 2023 - December 2023</h3>
                                <h2 className="mb-1">Fluffy Focus: Transformational Desktop RPG Against Work-Induced Anxiety</h2>
                                <h3 className="theme mb-5">Persuasive Design, Behavior Change, Game Design, UX, Psychology</h3>
                                <p className="mb-5">
                                Graduate students, under significant academic pressure, often struggle with time management and suffer from anxiety and/or procrastination when facing immense workload. 
                                To reduce the level of anxiety ad increase motivation to finish upcoming tasks on time, 
                                we designed Fluffy Focus: <b>a transformational desktop role-playing game to facilitate behavior and attitudinal change in grad students' task management.</b>
                                </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="subsection-wrapper row mb-5">
                            <div className="topic-desc-container col-md-4 mb-5">
                                <h6 className="theme mb-3">Duration</h6>
                                <ul>
                                    <li>3 months</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col-md-4 mb-5">
                                <h6 className="theme mb-3">Role</h6>
                                <ul>
                                    <li>Lead Designer</li>
                                    <li>Illustrator</li>
                                    <li>Researcher</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col-md-4 mb-5">
                                <h6 className="theme mb-3">Team</h6>
                                <ul>
                                    <li>5 people</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col-md-4 mb-5">
                                <h6 className="theme mb-3">Tool</h6>
                                <ul>
                                    <li>Figma</li>
                                    <li>Miro</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col mb-5">
                                <h6 className="theme mb-3">Responsibilities</h6>
                                <ul className="row">
                                    <li className="col-md-6">Feature conceptualization</li>
                                    <li className="col-md-6">Wireframing & prototyping</li>
                                    <li className="col-md-6">UX writing</li>
                                    <li className="col-md-6">Visual style design</li>
                                    <li className="col-md-6">User research & testing</li>
                                    <li className="col-md-6">Literature review</li>
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        }, 
        {
            name: "Demo",
            content:
            <div className="theme-bg container">
                <div className="topic-container subsection-wrapper">
                    <h3 className="mb-5">💻 Demo</h3>
                    
                    <ul className="">
                        <ScrollReveal>
                            <li className="row align-items-start subsection-wrapper">
                                <div className="col-md-6 mb-4">
                                    <img className="w-100" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2dmZ3J3ZHo3cWZ5MzkyOHI2Y3F1dDBydGYwMDVlNDhnajc2NjJyZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XZmPrQa21ClUdRY6Tr/giphy.gif" alt="Customization of Avatar"></img>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="theme mb-3">#1: Customization of Avatar</h6>
                                    <p className="">
                                    Employing <b>distancing effect</b> and body-doubling technique to offer <b>social support</b> through user-avatar interaction
                                    </p>
                                </div>
                            </li>
                        </ScrollReveal>
                        <ScrollReveal>
                            <li className="flex-row-reverse row align-items-start subsection-wrapper">
                                <div className="col-md-6 mb-4">
                                    <img className="w-100" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHdhYjF2eTIxeXhpZGx4bGo1a2JlczFpMzVrMnhrYTg4bjhtc3R1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xlXDa18T6yEtGA9f0W/giphy.gif" alt="Empowering Self-Affirmation through Avatar Dialogues"></img>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="theme mb-3">#2: Self-Affirmation Dialogues</h6>
                                    <p className="">
                                    Self-affirmation avatar dialogues to <b>continually empower users</b> and foster a resilient & confident mindset
                                    </p>
                                </div>
                            </li>
                        </ScrollReveal>
                        <ScrollReveal>
                            <li className="row align-items-start subsection-wrapper">
                                <div className="col-md-6 mb-4">
                                    <img className="w-100" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXNjNWp4ZjJmeGNobnh4aGk2NThoa3VuNDg1cXN3ZmMyY2ZzbWQ5dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KU3ec5QdIIZanQJnSp/giphy.gif" alt="Task & Productivity Enhancement"></img>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="theme mb-3">#3: Productivity Enhancement</h6>
                                    <p className="">
                                    Motivating think-through of task duration, start time, and workload to <b>mitigate deadline-induced anxiety</b>
                                    </p>
                                </div>
                            </li>
                        </ScrollReveal>
                        <ScrollReveal>
                            <li className="flex-row-reverse row align-items-start subsection-wrapper">
                                <div className="col-md-6 mb-4">
                                    <img className="w-100" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3pxaWl2NnExcmVpNDI3NnJpa3U3ZmxjaDg2cjI2ZG96bTBoYXN5NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OCKgvJ5jJZCFybWiv5/giphy.gif" alt="Pomodoro Technique & Immersive Environments"></img>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="theme mb-3">#4: Pomodoro & Immersive Environments</h6>
                                    <p>
                                    Improving user proficiency within <b>Elaboration Likelihood Model (ELM)</b> through Pomodoro focus timers
                                    </p>
                                </div>
                            </li>
                        </ScrollReveal>
                        <ScrollReveal>
                            <li className="row align-items-start subsection-wrapper">
                                <div className="col-md-6 mb-4">
                                    <img className="w-100" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajk0YnZtNm03bzQ0ZGlrdHMybzU2bnpyOWc5ZWx4amZ6d3lrYmc0MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cv1s6W7xhMCFYsO6R5/giphy.gif" alt="Rewards & Environment Unlock"></img>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="theme mb-3">#5: Rewards & Environment Unlock</h6>
                                    <p>
                                    <b>Intermixing</b> gaming elements and <b>priming emotions</b> through warm color palette to reduce seriousness of productivity app
                                    </p>
                                </div>
                            </li>
                        </ScrollReveal>
                        <ScrollReveal>
                            <li className="flex-row-reverse row align-items-start subsection-wrapper">
                                <div className="col-md-6 mb-4">
                                    <img className="w-100" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHJ6Z3phbzFvaWtyenRvMGxyMWE2ODV3N3g2NDE1NHU5cjVvOXoxcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oxChvgPxbR0tQ42p3I/giphy.gif" alt="Progress Tracking & Visual Achievement"></img>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="theme mb-3">#6: Progress Tracking & Visual Achievement</h6>
                                    <p>
                                    Giving rewards and visualizing progress based on <b>principles of persuasion to promote consistency and commitment</b> to goal achievement
                                    </p>
                                </div>
                            </li>
                        </ScrollReveal>
                    </ul>
                </div>
            </div> 
        },
        {
            name: "Background",
            content:
            <div className="container">
                <div className="topic-container section-wrapper">
                    <ScrollReveal>
                        <h3 className="my-5">📚 What's the Problem? </h3>
                        <p className="mb-5">
                        Many college students (ranging from undergraduate to PhDs) suffer from decision paralysis due to information overload and anxiety induced by prolonged procrastination on tasks that are either <b className="theme">too complex</b> or <b className="theme">too time consuming</b>.
                        </p>
                    </ScrollReveal>

                    <div className="subsection-wrapper">
                        <ScrollReveal>
                            <h6>What Do People Think about Work?</h6>
                            <div className="row statistics-container my-5">
                                <div className="col-md-4 d-flex flex-column align-items-center">
                                    <h3 className="theme p-bold">3</h3>
                                    <p>Focus Groups</p>
                                </div>
                                <div className="col-md-4 d-flex flex-column align-items-center">
                                    <h3 className="theme p-bold">10</h3>
                                    <p>Participants</p>
                                </div>
                                <div className="col-md-4 d-flex flex-column align-items-center">
                                    <h3 className="theme p-bold">4</h3>
                                    <p>Concepts Evaluated</p>
                                </div>
                            </div>
                            
                            <p>
                            <a className="hyperlink" rel="noopenner noreferrer" target="_blank" href="https://imaginari.es/new-metaphors/">New Metaphors</a> were utilized to evaluate participants' associations with several concepts regarding <b className="theme">work and anxiety</b>.<br/>
                            We found that students' workload is often...
                            </p>

                            
                        </ScrollReveal>

                        <ScrollReveal>
                            <ul className="my-5 row">
                                <li className="col-md-6 my-5 d-flex flex-column">
                                    <div className="w-50 mb-5 d-flex flex-column">
                                        <img className="w-sizer-sm mb-2" src="/works/UXUI/fluffy/Yarn.svg" alt="yarn icon" />
                                    </div>
                                    <div className="mx-4 d-flex flex-column">
                                        <h6 className="theme mb-3">Non-linear</h6>
                                        <p className="">
                                        Tasks are perceived as "modular" and must be <b>unravelled & connected at various stages</b>.
                                        </p>
                                    </div>
                                </li>
                                <li className="col-md-6 my-5 d-flex flex-column">
                                    <div className="w-50 mb-5 d-flex flex-column">
                                        <img className="w-sizer-sm mb-2" src="/works/UXUI/fluffy/Boiling.svg" alt="boiling pot icon" />
                                    </div>
                                    <div className="mx-4 d-flex flex-column">
                                        <h6 className="theme mb-3">Uncontrollable</h6>
                                        <p className="">
                                        Under overwhelming situations, students feel <b>a lack of control</b> to effectively confront the challenges ahead.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        },
        {
            name: "Objective",
            content:
            <div className="theme-bg container">
                <div className="topic-container section-wrapper">
                    <ScrollReveal>
                        <div className="row mb-5">
                            <h3 className="col-md-6 mb-5">🎯 Objective</h3>
                            <div className="col-md-6">
                            <h6>Audience</h6>
                                <p>Graduate students</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="subsection-wrapper">
                            <p className="">
                                We seek to design an intervention to <b className="theme">provide more control over students' schedule and time through a customizable system based on user preferences</b> by facilitating both behavioral and attitudinal changes:
                            </p>
                            <div className="row">
                                <div className="col-md-6 my-5">
                                    <div className="col-md-6 p-3 d-flex flex-column align-items-start">
                                        <img className="w-sizer-sm mb-2" src="/works/UXUI/fluffy/Planning.svg" alt="planning icon" />
                                    </div>
                                    <div className="">
                                        <h6 className="theme mb-3">Behavioral Change</h6>
                                        <p>
                                            <ul className="list-disc">
                                                <li>
                                                Procrastinating on deliverables
                                        <br/>→ <b>Self-monitoring, increased efficiency</b>
                                                </li>
                                                <li>
                                                Working on tasks haphazardly
                                        <br/>→ <b>Planning & executing premptively, effectively</b>
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 my-5">
                                    <div className="col-md-6 p-3 d-flex flex-column align-items-start">
                                        <img className="w-sizer-sm mb-2" src="/works/UXUI/fluffy/Thinking.svg" alt="thinking icon" />
                                    </div>
                                    <div className="">
                                        <h6 className="theme mb-3">Attitudinal Change</h6>
                                        <p>
                                            <ul className="list-disc">
                                                <li>
                                                Being unmotivated
                                                <br/>→ <b>Feeling motivated to begin tasks</b>
                                                </li>
                                                <li>
                                                Feeling anxious towards the overwhelming workload
                                                <br/>→ <b>Confidence in work planning and progress</b>
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        },
        {
            name: "Ideation",
            content:
            <div className="container">
                <div className="topic-container subsection-wrapper">
                    <ScrollReveal>
                        <h3 className="my-5">🪄 Ideating On A Transformational Role-playing Game</h3>
                        <h4 className="my-5 theme">How might we facilitate attitudinal change;<br/>from work-induced anxiety to an optimistic mindset towards incoming tasks?</h4>
                    {/* <p>By designing a transformational desktop RPG, we aim to increase user engagement and playfulness while embedding <b className="theme">psychology-based activities to boost productivity.</b></p> */}
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="subsection-wrapper">
                            <div className="d-flex justify-content-center">
                                <DropdownToggle view={view} toggleView={toggleView} toggleTxt={"Show Feature's Supporting Psychology"}></DropdownToggle>
                            </div>
                            <ul className="feature-list row subsection-wrapper justify-content-center">
                                    <li className="col-md-6 mb-5 d-flex flex-column align-items-center">
                                        <div className="px-3 d-flex flex-column">
                                            <img className="w-sizer-lg mb-2" src="/works/UXUI/fluffy/Avatar.svg" alt="avatar icon" />
                                        </div>
                                        <div className="text-center">
                                            <h6 className="my-3">Personalized Avatar</h6>
                                            <p className="dropdown-reveal"
                                            style={{overflow: "hidden", height: view ? "auto" : "0", opacity: view ? "100%" : 0}}>
                                                Users can choose a character of their liking as their “buddy” in the game which will interact and work with users in the virtual environment. Such an environment simulates a <b>distancing effect</b> while providing a form of social support from the avatar.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="col-md-6 mb-5 d-flex flex-column align-items-center">
                                        <div className="px-3 d-flex flex-column">
                                            <img className="w-sizer-lg mb-2" src="/works/UXUI/fluffy/Communication.svg" alt="communication icon" />
                                        </div>
                                        <div className="text-center">
                                            <h6 className="my-3">Self-affirmation Dialogues</h6>
                                            <p className="dropdown-reveal"
                                            style={{overflow: "hidden", height: view ? "auto" : "0", opacity: view ? "100%" : 0}}>
                                            Through the avatar, users receive self-affirmations to remind themselves of positive attributes and/or values which forms a <b>positive feedback loop of sustained productivity and sense of self-confidence</b>.                                                                            
                                            </p>
                                            {/* <p className="dropdown-reveal"
                                            style={{opacity: view ? "100%" : "0%"}}>
                                                Sustained productivity and sense of self-confidence
                                            </p> */}
                                        </div>
                                    </li>
                                    <li className="col-md-6 mb-5 d-flex flex-column align-items-center">
                                        <div className="px-3 d-flex flex-column">
                                            <img className="w-sizer-lg mb-2" src="/works/UXUI/fluffy/Pomodoro.svg" alt="pomodoro icon" />
                                        </div>
                                        <div className="text-center">
                                            <h6 className="my-3">Focus Pomodoro Sessions</h6>
                                            <p className="dropdown-reveal"
                                            style={{overflow: "hidden", height: view ? "auto" : "0", opacity: view ? "100%" : 0}}>
                                            Adopting the Pomodoro technique, we design a focus timer <b>interweaving short breaks with work sessions</b> in which users focus with the avatar in the background working with them. By filling out details of the task, users learn to organize tasks efficiently, increasing their ability level in Elaboration Likelihood Model (ELM).                                            
                                            </p>
                                            {/* <p className="dropdown-reveal"
                                            style={{opacity: view ? "100%" : "0%"}}>
                                                Increasing efficiency and motivation with higher ELM ability levels
                                            </p> */}
                                        </div>
                                    </li>
                                    <li className="col-md-6 mb-5 d-flex flex-column align-items-center">
                                        <div className="px-3 d-flex flex-column">
                                            <img className="w-sizer-lg mb-2" src="/works/UXUI/fluffy/Badge.svg" alt="badge icon" />
                                        </div>
                                        <div className="text-center">
                                            <h6 className="my-3">Visualized Progress & Achievement</h6>
                                            <p className="dropdown-reveal"
                                            style={{overflow: "hidden", height: view ? "auto" : "0", opacity: view ? "100%" : 0}}>
                                            Users' progress is visible through gaining rewards upon completing tasks,  
                                            leveling up and unlocking new environments, and data visualizations of task completion and time spent in focus that users can review and strive to sustain their productivity to ensure consistency and commitment.
                                            </p> 
                                            {/* <p className="dropdown-reveal"
                                            style={{opacity: view ? "100%" : "0%"}}>
                                                Data visualizations ensuring consistency & commitment
                                            </p> */}
                                        </div>
                                    </li>
                                    <li className="col-md-6 mb-5 d-flex flex-column align-items-center">
                                        <div className="px-3 d-flex flex-column">
                                            <img className="w-sizer-lg mb-2" src="/works/UXUI/fluffy/Reward.svg" alt="reward icon" />
                                        </div>
                                        <div className="text-center">
                                            <h6 className="my-3">Task Completion Rewards</h6>
                                            <p className="dropdown-reveal"
                                            style={{overflow: "hidden", height: view ? "auto" : "0", opacity: view ? "100%" : 0}}>
                                            After a focus session, users are congratulated for completing a task with a <b>self-affirmation and choice of reward item</b> to decorate their virtual environment. Personal relevance and motivation in ELM is increased through giving users control in choosing rewards and decorating, so they are more motivated to work on tasks.
                                            </p>                                       
                                            
                                            {/* <p className="dropdown-reveal"
                                            style={{opacity: view ? "100%" : "0%"}}>
                                                Higher personal relevance & motivation in ELM leading to higher work motivation
                                            </p> */}
                                        </div>
                                    </li>
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="d-flex flex-column align-items-center mb-5">
                            <div className="mt-5 mb-3 d-flex justify-content-center flex-wrap">
                                <img className="artwork p-1" src="/works/UXUI/fluffy/design/2-visual/2-0-env.jpg" alt="environments" />
                                <img className="artwork p-1" src="/works/UXUI/fluffy/design/2-visual/1-1-avatar.jpg" alt="animal avatars" />   
                            </div>
                            <p className="caption text-center">Sketches of the game environment & animal avatars <br/>(Yes, I drew these!)</p>
                        </div>
                        <div className="d-flex flex-column align-items-center mb-5">
                            <div className="mt-0 mb-5 d-flex justify-content-center flex-wrap">                 
                                <img className="artwork p-1" src="/works/UXUI/fluffy/design/2-visual/2-1-room.png" alt="room environment" />
                                <img className="artwork p-1" src="/works/UXUI/fluffy/design/2-visual/2-2-attic.png" alt="attic environment" />
                                <img className="artwork p-1" src="/works/UXUI/fluffy/design/2-visual/2-3-garden.png" alt="garden environment" />
                                <img className="artwork p-1" src="/works/UXUI/fluffy/design/2-visual/1-2-cat.PNG" alt="garden environment" />
                            </div>
                            <p className="caption text-center">Digitized environments & animal avatar (Again, I drew these!)</p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        },
        {
            name: "Iterations",
            content:
            <div className="container">

                <div className="topic-container subsection-wrapper">
                    <ScrollReveal>
                        <h3 className="my-5">🌒 Iterating Our Design from Low-fi Wireframes </h3>
                        <div className="my-1 d-flex justify-content-center flex-wrap">
                            <img className="artwork p-1" src="/works/UXUI/fluffy/design/4-prototype/1-lofi/0.jpg" alt="brainstorming intervention" />
                            <img className="artwork p-1" src="/works/UXUI/fluffy/design/4-prototype/1-lofi/1.jpg" alt="user interface design session" />   
                            <img className="artwork p-1" src="/works/UXUI/fluffy/design/4-prototype/1-lofi/2.png" alt="low-fi prototype Figma" />  
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="subsection-wrapper">
                            <h6 className="mb-5">User Test Results</h6>
                            <ul className="list-disc">
                                <li className="mb-5">
                                    <p>
                                        <b className="theme">Ambiguity in the interface</b><br/>
                                        No clear instructions on how to proceed to the next step, icons with vague semantic meaning
                                    </p>
                                </li>
                                <li className="mb-5">
                                    <p>
                                        <b className="theme">Insufficient customizability</b><br/>
                                        Users wish to be able to set due dates/task start time/reminders for better task management, use the Pomodoro technique for longer tasks, and reschedule unfinished tasks
                                        </p>
                                </li>
                                <li className="mb-5">
                                    <p>
                                        <b className="theme">Desire for additional motivation beyond receiving rewards upon task completion</b><br/>
                                        Sneak peek of locked rewards or environments and overview of current progress and XP level to enhance goal-setting capabilities
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="topic-container subsection-wrapper">
                    <ScrollReveal>
                        <h3 className="my-5">🌓 Mid-fi Prototype</h3>
                        <h6 className="mb-3">Iteration</h6>
                        <div className="my-1 d-flex justify-content-center flex-wrap">
                            <img className="artwork p-1" src="/works/UXUI/fluffy/design/4-prototype/2-midfi/1.jpg" alt="midfi sketch- task page" />
                            <img className="artwork p-1" src="/works/UXUI/fluffy/design/4-prototype/2-midfi/2.jpg" alt="midfi sketch- task creation" />   
                            <img className="artwork p-1" src="/works/UXUI/fluffy/design/4-prototype/2-midfi/3.jpg" alt="midfi sketch- task kanban" />  
                        </div>

                        <p>
                            <ul className="list-disc my-5">
                                <li className="mb-3">Increased customizability of task list- daily/weekly/monthly view, prioritizing task, drag-and-drop task reordering</li>
                                <li className="mb-3">Added an onboarding tutorial</li>
                                <li className="mb-3">Implemented the Pomodoro technique</li>
                                <li className="mb-3">Enhanced clarity and motivation of the reward system- decoration choosing, leveling up</li>
                                <li className="mb-3">Incorporated sidebar navigation</li>
                            </ul>
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="my-5 d-flex justify-content-center flex-wrap">
                            <img className="artwork p-1" src="/works/UXUI/fluffy/design/4-prototype/2-midfi/5.png" alt="midfi figma prototype" />
                        </div>

                        <h6 className="mb-3">User Test Results</h6>
                        
                        <p className="my-5">
                            <ul className="list-disc my-5">
                                <li className="mb-3">Overall positivity expressed toward the onboarding dialogues- enhanced intuitiveness</li>
                                <li className="mb-3">Suggestion to extend tutorial to the Pomodoro work session and reward page for greater coherence</li>
                                <li className="mb-3">Desire for a more tangible sense of accomplishment beyond receiving rewards</li>
                                <li className="mb-3">Confusion among users regarding the avatar's role- whether it represents users themselves or an NPC in the virtual world, which hinders sense of social support and distancing</li>
                            </ul>
                        Apart from insights gathered during usability testing, valuable input from Professor Kaufman significantly influenced our next steps. Currently, our design emphasized too many peripheral features, rather than delving into the substantive aspects of design—namely, <b>fostering a sense of immersion in the narrative, role-playing, and world-building elements</b>. Additionally, we were advised to explore ways of incorporating more distancing into the design, particularly in <b>defining user roles and framing the wording for task and dialogue</b>.
                        </p>
                    </ScrollReveal>
                </div>
            </div>
        },
        {
            name: "Final",
            content:
            <div className="container">
                <div className="topic-container">
                    <ScrollReveal>
                        <h3 className="my-5">🎪 Final Showcase</h3>
                        <div className="mt-5 d-flex flex-column align-items-center">
                            <img className="w-sizer p-1" src="/works/UXUI/fluffy/result/1.jpg" alt="science fair" />
                        </div>
                        <div className="mb-5 d-flex justify-content-center flex-wrap">
                            <img className="artwork p-1" src="/works/UXUI/fluffy/result/2.jpg" alt="science fair" />
                            <img className="artwork p-1" src="/works/UXUI/fluffy/result/3.jpg" alt="science fair" />
                            <img className="artwork p-1" src="/works/UXUI/fluffy/result/4.jpg" alt="science fair" />
                            <img className="artwork p-1" src="/works/UXUI/fluffy/result/5.jpg" alt="science fair" />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        },
        {
            name: "Conclusion",
            content:
            <div className="container">
                <div className="topic-container subsection-wrapper">
                    <ScrollReveal>
                        <h3 className="my-5">📍 So... What Did We Achieve?</h3>
                        <h4 className="my-5">
                        Fluffy Focus represents a transformative approach to student productivity, integrating persuasive techniques to influence attitudinal and behavioral changes. 
                        </h4>
                        <p>
                        The focus extends beyond mere task completion; it's about developing long-term habits that proactively engage with students to calmly tackle their academic workload and cultivate sustainable productivity practices.
                        </p>
                    </ScrollReveal>
                </div>
            </div>
        },
        {
            name: "Takeaways",
            content:
            <div className="container">
                <div className="topic-container section-wrapper">
                    <ScrollReveal>
                        <h3 className="my-5">💭 Takeaways</h3>
                    </ScrollReveal>
                    <ul className="responsive-center-list my-5">
                        <ScrollReveal>
                            <li className="subsection-wrapper row my-5">
                                <div className="col-md-4 mb-3 icon-title">
                                    <div className="w-50 mb-3 d-flex flex-column align-items-center">
                                        <img className="w-sizer mb-2" src="/works/UXUI/fluffy/Persuasion.svg" alt="persuasion icon" />
                                    </div>
                                    <h6 className="theme">Persuasive Goal over Usability</h6>
                                </div>                            
                                <p className="col-md-8">
                                As previously mentioned, our team initially put more emphasis on usability when running user tests. The purpose of these user tests, however, are not only about usability but also, if not more importantly, concept validation. Whether the user experiences a change in behavior and attitude toward immense workloads and procrastination is what we should primarily design our tests to verify. The same thing applies to other UX projects, in that we must first ensure that our product works before verifying our product works smoothly.
                                </p>
                            </li>
                        </ScrollReveal>
                        <ScrollReveal>
                            <li className="subsection-wrapper row my-5">
                                <div className="col-md-4 mb-3 icon-title">
                                    <div className="w-50 mb-3 d-flex flex-column align-items-center">
                                        <img className="w-sizer mb-2" src="/works/UXUI/fluffy/Documentation.svg" alt="Documentation icon" />
                                    </div>
                                    <h6 className="theme">Documentation Matters</h6>
                                </div>
                                <p className="col-md-8">
                                During the project, a shared Google Drive was used to store all of our meeting documents, including notes, reports, and photos of our whiteboard sessions. Organizing these documents  immensely helped us access data across different phases efficiently, much similar to how engineers “recycle” modular parts of code. Documentation also significantly reduces redundancy since the team does not need to discuss same things all over due to absence of records.
                                </p>
                            </li>
                        </ScrollReveal>
                        <ScrollReveal>
                            <li className="subsection-wrapper row my-5">
                                <div className="col-md-4 mb-3 icon-title">
                                    <div className="w-50 mb-3 d-flex flex-column align-items-center">
                                        <img className="w-sizer mb-2" src="/works/UXUI/fluffy/Rapport.svg" alt="Rapport icon" />
                                    </div>
                                    <h6 className="theme">Communication & Team Rapport</h6>
                                </div>
                                <p className="col-md-8">
                                On a more personal note, I really enjoyed working in this team and the rapport we maintained. Although it could be attributed to individual differences and compatibility, I believe certain aspects that our team strived to succeed in could help me establish harmony within my other teams in the  future. First is communication; we’d always keep our group chat active either through work messages or chit chats so members would not shy from speaking up, and the result is any issue that arose got immediately resolved because of efficient communication. 
                                <br/><br/>The second component of building a good team is viewing each other as “friends” rather than “colleagues.” At the beginning of the project, we barely knew each other; but a tradition we kept  was to start every meeting with greetings and chats, thus everyone could feel recognized and  relaxed. With this rapport established, members would naturally adopt a friendly tone and encourage more creativity when getting into serious conversations about the project.
                                </p>
                            </li>
                        </ScrollReveal>
                    </ul>
                </div>
            </div>
        }
    ];

    items.map((item, key) => {
        item.id = key;
        item.ref = createRef(null);
    });

    const img_src = 'https://live.staticflickr.com/65535/53567884525_c62af19309_h.jpg';
  
    return (
        <div id="Fluffy-Focus">
            <ProgressBar color="#417807" items={items} activeItem={activeItem} handleClick={handleSubsectionClick} />
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
                    <ProjectRec projects={projects} moreLink={"/Works/design"} />
                </ScrollReveal>

                <div className="bg-1">
                    <div className="container">
                        <div className="topic-container subsection-wrapper">
                            <h3 className="mb-5">📑 References</h3>
                            <p className="references mb-3">
                            [1] Hooda, M., & Saini, A. (2017). Academic anxiety: An overview. Educational Quest, 8(3), 807-810.
                            </p>

                            <h6>Literature Review</h6>
                            <p className="references mb-5">
                            Lukas, C. A., & Berking, M. (2018). Reducing procrastination using a smartphone-based treatment program: A randomized controlled pilot study. Internet interventions, 12, 83-90.
    <br/>
    Sun, T. (2023). Modeling Students’ Procrastination in Higher Education: Causes, Outcomes, and Prediction (Order No. 30524944). Available from ProQuest Dissertations & Theses Global. (2836863155). https://www.proquest.com/dissertations-theses/modeling-students-procrastination-higher/docview/2836863155/se-2
    <br/>
    Kachgal, M. M., Hansen, L. S., & Nutter, K. J. (2001). Academic procrastination prevention/intervention: Strategies and recommendations. Journal of Developmental Education, 25(1), 14.
    <br/>
    Brownlow, S., & Reasinger, R. D. (2000). Putting off Until Tomorrow What is Better Done Today: Academic Procrastination as a Function of Motivation Toward College Work. Journal of Social Behavior and Personality, 15(5), 15. https://www.proquest.com/scholarly-journals/putting-off-until-tomorrow-what-is-better-done/docview/1292269566/se-2
    <br/>
    Salguero-Pazos, M. R., & Reyes-de-Cózar, S. (2023). Interventions to reduce Academic procrastination: A systematic review. International Journal of Educational Research, 121, 102228.
    <br/>
    Serdar, E., Harmandar Demirel, D., & Demirel, M. (2021). The Relationship between Academic Procrastination, Academic Motivation and Perfectionism: A Study on Teacher Candidates. Turkish Online Journal of Educational Technology-TOJET, 20(4), 140-149.
    <br/>
    Alhasani, M., Alkhawaji, A., & Orji, R. (2022). Mental health and time management behavior among students during COVID-19 pandemic: towards persuasive technology design. Human Behavior and Emerging Technologies, 2022, 1-13.
    <br/>
    Smith, T. F., & Capuzzi, G. (2019). Using a mindset intervention to reduce anxiety in the statistics classroom. Psychology Learning & Teaching, 18(3), 326-336.
    <br/>
    Kamsin, A., Blandford, A., & Cox, A. L. (2012, May 5). Personal Task Management: My Tools Fall Apart When I'm Very Busy! ResearchGate. Retrieved October 20, 2023, from https://www.researchgate.net/publication/254005370_Personal_task_management_My_tools_fall_apart_when_I'm_very_busy
    <br/>
    Browne, R., Raeside, L., & Gray, G. (2018, October). Gamification in Education: Productivity and Motivation Through Gamified Time Management Software. ProQuest. Retrieved October 20, 2023, from https://www.proquest.com/docview/2131787593?pq-origsite=gscholar&fromopenview=true  
                            </p>

                            <h6>Expert Consult</h6>
                            <p className="references mb-5">
                                <ul>
                                    <li>Dan Saffer</li>
                                    <li>Elaine Fath</li>
                                    <li>Ted Talk- Tim Urban: [Inside the mind of a master procrastinator](https://www.youtube.com/watch?v=arj7oStGLkU)
                                    </li>
                                </ul>
                            </p>

                            <h6>Figma</h6>
                            <p className="references mb-5">
                            Figma Iconography Library (https://www.figma.com/file/Qk6czD5U8NHotDzpXFvZAz/Icons-(Community)?type=design&node-id=0%3A1&mode=design&t=8gPpIoAAc1UAKfrt-1)
                            </p>

                            <h6>Icons</h6>
                            <p className="references mb-5">
                            boiling pot by cre.ativo mustard from <a href="https://thenounproject.com/browse/icons/term/boiling-pot/" target="_blank" title="boiling pot Icons">Noun Project</a> (CC BY 3.0)
    <br/>
    Yarn Ball by Eucalyp from <a href="https://thenounproject.com/browse/icons/term/yarn-ball/" target="_blank" title="Yarn Ball Icons">Noun Project</a> (CC BY 3.0)
    <br/>
    cat costume avatar by Konkapp from <a href="https://thenounproject.com/browse/icons/term/cat-costume-avatar/" target="_blank" title="cat costume avatar Icons">Noun Project</a> (CC BY 3.0)
    <br/>
    dialogue by Tatyana Kyul from <a href="https://thenounproject.com/browse/icons/term/dialogue/" target="_blank" title="dialogue Icons">Noun Project</a> (CC BY 3.0)
    <br/>
    pomodoro time by Andi Nur Abdillah from <a href="https://thenounproject.com/browse/icons/term/pomodoro-time/" target="_blank" title="pomodoro time Icons">Noun Project</a> (CC BY 3.0)
    <br/>
    achievement by joe pictos from <a href="https://thenounproject.com/browse/icons/term/achievement/" target="_blank" title="achievement Icons">Noun Project</a> (CC BY 3.0)
    <br/>
    Gift by Aulia Nurfadilah from <a href="https://thenounproject.com/browse/icons/term/gift/" target="_blank" title="Gift Icons">Noun Project</a> (CC BY 3.0)
    <br/>
    think by iconixar from <a href="https://thenounproject.com/browse/icons/term/think/" target="_blank" title="think Icons">Noun Project</a> (CC BY 3.0)
    <br/>
    Planning by Maria Kislitsina from <a href="https://thenounproject.com/browse/icons/term/planning/" target="_blank" title="Planning Icons">Noun Project</a> (CC BY 3.0)
    <br/>
    positive by nareerat jaikaew from <a href="https://thenounproject.com/browse/icons/term/positive/" target="_blank" title="positive Icons">Noun Project</a> (CC BY 3.0)
    <br/>
    database by Nizar AnT from <a href="https://thenounproject.com/browse/icons/term/database/" target="_blank" title="database Icons">Noun Project</a> (CC BY 3.0)
    <br/>
    bonding by WBcreative from <a href="https://thenounproject.com/browse/icons/term/bonding/" target="_blank" title="bonding Icons">Noun Project</a> (CC BY 3.0)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fluffy;

const cards = [
    {
        url: "/works/UXUI/fluffy/design/4-prototype/3-hifi/1.png",
        title: "Title 1",
        id: 1,
    },
    {
        url: "/works/UXUI/fluffy/design/4-prototype/3-hifi/2.png",
        title: "Title 2",
        id: 2,
    },
    {
        url: "/works/UXUI/fluffy/design/4-prototype/3-hifi/3.png",
        title: "Title 3",
        id: 3,
    },
    {
        url: "/works/UXUI/fluffy/design/4-prototype/3-hifi/4.png",
        title: "Title 4",
        id: 4,
    },
    {
        url: "/works/UXUI/fluffy/design/4-prototype/3-hifi/5.png",
        title: "Title 5",
        id: 5,
    },
    {
        url: "/works/UXUI/fluffy/design/4-prototype/3-hifi/6.png",
        title: "Title 1",
        id: 6,
    },
];
// link, data
const projects = [
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
    {
        'link': '/Works/design/2Done',
        'data': {
            'title': '2Done', 
            'id': '2Done',
            'tags': ['UX', 'UI', 'Procrastination', 'Anxiety', 'MentalHealth'],
            'desc': 'Gamified to-do list desktop app for procrastination',
            'img': 'https://live.staticflickr.com/65535/52515681442_5ac6984461_k.jpg',
            'ph': 'https://live.staticflickr.com/65535/52515681442_301610b0ec_m.jpg',
        }
    },
];