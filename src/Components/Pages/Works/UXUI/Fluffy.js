import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactLoading from "react-loading";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Iframe from 'react-iframe';

// TODO
// sidebar navigation
// header/footer no container
// demo section of screenshots (mockup of laptop)

function Fluffy () {
    const [isLoading, setIsLoading] = useState(false);

    const img_src = 'https://live.staticflickr.com/65535/53567884525_c62af19309_h.jpg';
    // const img_ph  = 'https://live.staticflickr.com/65535/53567884525_c62af19309_c.jpg';
    
    const hideSpinner = () => {
        setIsLoading(false);
    };

    const figma = (
        <Iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} 
        width="800" height="450" 
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FmowJpjVRC4mzX0TjmkIkf1%2FFluffy-Focus%3Fpage-id%3D612%253A753%26type%3Ddesign%26node-id%3D697-350%26viewport%3D272%252C357%252C0.02%26t%3DHtJWBR8zvCt140jN-1%26scaling%3Dscale-down%26starting-point-node-id%3D697%253A350%26show-proto-sidebar%3D1%26mode%3Ddesign"
        onLoad={hideSpinner}
        allowfullscreen />
    );


    return (
        <div>
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img_src})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h3 className="mb-1 color-dark text-bold date">October 2023 - December 2023</h3>
                            <h2 className="mb-1">Fluffy Focus: Transformational Mobile RPG Against Work-Induced Anxiety</h2>
                            <h3 className="theme mb-5">Persuasive Design, Behavior Change, Game Design, UX, Psychology</h3>
                            <p className="mb-5">
                            Graduate students, under significant academic pressure, often struggle with time management and suffer from anxiety and/or procrastination when facing immense workload. 
                            To reduce the level of anxiety ad increase motivation to finish upcoming tasks on time, 
                            we designed Fluffy Focus: <b>a transformational mobile role-playing game to facilitate behavior and attitudinal change in grad students' task management.</b>
                            </p>
                    </div>
                    <div className="section-wrapper row mb-5">
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h6 className="theme mb-3">Duration </h6>
                            <ul>
                                <li>3 months</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h6 className="theme mb-3">Role</h6>
                            <ul>
                                <li>Lead Designer</li>
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
                </div>
            </div>

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

                        {/* TODO: demo section of screenshots */}
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container section-wrapper">
                    <h3 className="my-5">📚 Background </h3>
                    <p className="mb-5">
                    Many college students (ranging from undergraduate to PhDs) suffer from decision paralysis due to information overload and anxiety induced by prolonged procrastination on tasks that are either <b>too complex</b> or <b>too time consuming</b>. Anxiety also kicks in when there is a gap between current quality of work and the expected state for people who strive for perfectionism. 
                    </p>
                    <h6 className="mt-5">Focus Group</h6>
                    <div className="row statistics-container my-5">
                        <div className="col-md-4 d-flex flex-column align-items-center">
                            <h3 className="theme p-bold">3</h3>
                            <p>Sessions Held</p>
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
                    Utilizing New Metaphors [1], participants were given several metaphors and asked to pick from them one that they associated with a specific concept. For example, one may choose the image of “the cat untangling yarn” as a metaphor of “time/task management.”  
                    </p>
                    <ul className="my-5 row">
                        <li className="col-md-6 my-5 d-flex flex-column align-items-center">
                            <div className="w-50 mb-5 d-flex flex-column align-items-center">
                                <img className="w-sizer mb-2" src="/works/UXUI/fluffy/yarn.svg" alt="yarn icon" />
                            </div>
                            <div className="mx-4 d-flex flex-column align-items-center">
                                <h6 className="mb-3">Nonlinear Nature of Task Management</h6>
                                <p className="center">
                                No one out of the 10 participants associated Cat Untangling Yarn with task and time management. To them, time management and organization are more similar to a modular process that must unravel and connect at various stages.                                    </p>
                            </div>
                        </li>
                        <li className="col-md-6 my-5 d-flex flex-column align-items-center">
                            <div className="w-sizer mb-5 d-flex flex-column align-items-center">
                                <img className="w-50 mb-2" src="/works/UXUI/fluffy/boiling.svg" alt="boiling pot icon" />
                            </div>
                            <div className="mx-4 d-flex flex-column align-items-center">
                                <h6 className="mb-3">Lack of Perceived Control</h6>
                                <p className="center">
                                In the context of High-density Workload, Overboiling Pot symbolizes an unchangeable pattern beyond their control. <b>When facing stressful and overwhelming situations, perceived control could help participants effectively confront the challenges ahead.</b>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="topic-container section-wrapper">
                    <h3 className="my-5">🎯 Objective</h3>
                    <p>
                    Based on user research, we seek to design an intervention that facilitates both behavioral and attitudinal changes especially in the following aspects:
                    </p>
                    <ul className="my-5">
                        <li className="row my-5 d-flex align-items-center">
                            <div className="col-md-3 mx-3 d-flex flex-column align-items-center">
                                <img className="w-sizer mb-2" src="/works/UXUI/fluffy/Planning.svg" alt="planning icon" />
                            </div>
                            <div className="col-md-8">
                                <h6 className="mb-3">Behavioral</h6>
                                <p>
                                Procrastinating on deliverables
                                <br/>→ <b>Staying self-monitoring/regulated with increased levels of efficiency</b>
                                <br/><br/>
                                Working on tasks haphazardly
                                <br/>→ <b>Planning ahead, organizing & prioritizing by duration, deadline, etc.</b>
                                </p>
                            </div>
                        </li>
                        <li className="row my-5 d-flex align-items-center">
                            <div className="col-md-3 mx-3 d-flex flex-column align-items-center">
                                <img className="w-sizer mb-2" src="/works/UXUI/fluffy/Thinking.svg" alt="thinking icon" />
                            </div>
                            <div className="col-md-8">
                                <h6 className="mb-3">Attitudinal</h6>
                                <p>
                                Being unmotivated
                                <br/>→ <b>Feeling motivated to begin focusing on tasks</b>
                                <br/><br/>
                                Feeling anxious towards the overwhelming workload
                                <br/>→ <b>Being confident in decision making skills and content about their progress</b>
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div className="row">
                        <div className="col-md-6 px-5">
                            <h6>Audience</h6>
                            <p>Graduate students aged 21-25 who would like more control over their schedule and time through a customizable system based on user's preferences</p>
                        </div>
                        <div className="col-md-6 px-5">
                            <h6>Environment</h6>
                            <p>Home, library, other work environments</p>
                        </div>
                    </div>
                </div>

                <div className="topic-container section-wrapper">
                    <h3 className="my-5">🧠 Ideation</h3>
                    <div className="my-3 d-flex flex-column align-items-center">
                        <img className="w-sizer" src="/works/UXUI/fluffy/ideation/affinity.png" alt="voting of ideas" />
                        <p className="table-caption mt-3">Affinity diagram of intervention ideas with votes</p>
                    </div>
                    <h6 className="mt-5">Framework</h6>
                    <p>After several rounds of voting, we agreed to design a <b>transformational mobile RPG for grad students with work-induced anxiety towards incoming tasks</b>. </p>
                    <ul className="my-5">
                        <li className="my-5 row d-flex align-items-center">
                            <div className="col-md-3 px-3 d-flex flex-column align-items-center">
                                <img className="w-sizer mb-2" src="/works/UXUI/fluffy/Avatar.svg" alt="avatar icon" />
                            </div>
                            <div className="col-md-9">
                                <h6 className="my-3">Personalized Animal Avatar</h6>
                                <p>
                                    Users can choose a character of their liking as their “buddy” in the game which will interact and work with users in the virtual environment. Such an environment simulates a <b>distancing effect</b> while providing a form of social support from the avatar.
                                </p>
                            </div>
                        </li>
                        <li className="my-5 row d-flex align-items-center flex-row-reverse">
                            <div className="col-md-3 px-3 d-flex flex-column align-items-center">
                                <img className="w-sizer mb-2" src="/works/UXUI/fluffy/Communication.svg" alt="communication icon" />
                            </div>
                            <div className="col-md-9">
                                <h6 className="my-3">Periodic Self-affirmation Dialogues</h6>
                                <p>
                                    Through the avatar, users receive self-affirmations to remind themselves of positive attributes and/or values which forms a <b>positive feedback loop of sustained productivity and sense of self-confidence</b>.                                
                                    </p>
                            </div>
                        </li>
                        <li className="my-5 row d-flex align-items-center">
                            <div className="col-md-3 px-3 d-flex flex-column align-items-center">
                                <img className="w-sizer mb-2" src="/works/UXUI/fluffy/Pomodoro.svg" alt="pomodoro icon" />
                            </div>
                            <div className="col-md-9">
                                <h6 className="my-3">Focus Pomodoro Sessions with Avatar</h6>
                                <p>
                                Adopting the Pomodoro technique, we design a focus timer <b>interweaving short breaks with work sessions</b> in which users focus with the avatar in the background working with them. By filling out details of the task, users learn to organize tasks efficiently, increasing their ability level in Elaboration Likelihood Model (ELM).
                                </p>
                            </div>
                        </li>
                        <li className="my-5 row d-flex align-items-center flex-row-reverse">
                            <div className="col-md-3 px-3 d-flex flex-column align-items-center">
                                <img className="w-sizer mb-2" src="/works/UXUI/fluffy/Badge.svg" alt="badge icon" />
                            </div>
                            <div className="col-md-9">
                                <h6 className="my-3">Visualization of Progress & Achievement</h6>
                                <p>
                                Users' progress is visible through gaining rewards upon completing tasks, 
leveling up and unlocking new environments, and data visualizations of task completion and time spent in focus that users can review and strive to sustain their productivity to ensure consistency and commitment.
                                </p>
                            </div>
                        </li>
                        <li className="my-5 row d-flex align-items-center">
                            <div className="col-md-3 px-3 d-flex flex-column align-items-center">
                                <img className="w-sizer mb-2" src="/works/UXUI/fluffy/Reward.svg" alt="reward icon" />
                            </div>
                            <div className="col-md-9">
                                <h6 className="my-3">Gaining Rewards upon Task Completion</h6>
                                <p>
                                After a focus session, users are congratulated for completing a task with a <b>self-affirmation and choice of reward item</b> to decorate their virtual environment. Personal relevance and motivation in ELM is increased through giving users control in choosing rewards and decorating, so they are more motivated to work on tasks.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="topic-container section-wrapper">
                    <h3 className="my-5">🪄 Design Process</h3>
                    <h4 className="my-5 theme">How might we facilitate an attitudinal change in users with work-induced anxiety to adopt a optimistic mindset towards incoming tasks?</h4>
                    <div className="subsection-wrapper row">
                        <div className="col-md-4">
                            <h6>Platform</h6>
                            <p>Desktop application</p>
                        </div>
                        <div className="col-md-4">
                            <h6>Avatars</h6>
                            <p>Animal avatars- to provide friendliness and companionship</p>
                        </div>
                        <div className="col-md-4">
                            <h6>Environments</h6>
                            <p>Diverse environments to provide higher degree of personalization</p>
                        </div>
                    </div>

                    <div className="my-5 d-flex justify-content-center flex-wrap">
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/design/2-visual/2-0-env.jpg" alt="environments" />
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/design/2-visual/1-1-avatar.jpg" alt="animal avatars" />   
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/design/1-platform.png" alt="voting of modality" />                     
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/design/2-visual/2-1-room.png" alt="room environment" />
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/design/2-visual/2-2-attic.png" alt="attic environment" />
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/design/2-visual/2-3-garden.png" alt="garden environment" />
                    </div>
                    
                    <div className="subsection-wrapper row">
                        <div className="col-md-6">
                            <h6>Branding and Iconography</h6>
                            <p>Neutral, pastel color palette rooted in mainly warm tones used to induce calmness and combat users' high stress environment</p>
                        </div>
                        <div className="col-md-6">
                            <h6>Typography</h6>
                            <p>Matching the “soft & friendly” characteristics of the visuals to convey serenity for users consistently under high stress and pressure from academic workloads</p>
                        </div>
                    </div>
                    
                    <div className="my-1 d-flex justify-content-center flex-wrap">
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/design/3-branding/1-palette.jpg" alt="palette" />
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/design/3-branding/2-typography.jpg" alt="typography" />   
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/design/3-branding/3-icon.jpg" alt="icons" />  
                    </div>
                </div>

                <div className="topic-container subsection-wrapper">
                    <h3 className="my-5">🌒 Lo-fi Prototype</h3>
                    <div className="my-1 d-flex justify-content-center flex-wrap">
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/design/4-prototype/1-lofi/0.jpg" alt="brainstorming intervention" />
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/design/4-prototype/1-lofi/1.jpg" alt="user interface design session" />   
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/design/4-prototype/1-lofi/2.png" alt="low-fi prototype Figma" />  
                    </div>

                    <div className="subsection-wrapper">
                        <h6 className="mb-3">User Test Results</h6>
                        <p className="mb-5">The feedback received was generally positive regarding the effectiveness of our intervention's mechanism. Participants expressed that the <b>integration of body-doubling and gaming elements into the productivity tool indeed served as a motivating factor, facilitating task completion with reduced stress</b>. However, certain areas for improvement were identified:</p>
                        <ul>
                            <li className="mb-5">
                                <h6 className="theme">Ambiguity in the interface</h6>
                                <p>No clear instructions on how to proceed to the next step, icons with vague semantic meaning</p>
                            </li>
                            <li className="mb-5">
                                <h6 className="theme">Insufficient customizability</h6>
                                <p>Users wish to be able to set due dates/task start time/reminders for better task management, use the Pomodoro technique for longer tasks, and reschedule unfinished tasks</p>
                            </li>
                            <li className="mb-5">
                                <h6 className="theme">Desire for additional motivation beyond receiving rewards upon task completion</h6>
                                <p>Sneak peek of locked rewards or environments and overview of current progress and XP level to enhance goal-setting capabilities</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="topic-container subsection-wrapper">
                    <h3 className="my-5">🌓 Mid-fi Prototype</h3>
                    <h6 className="mb-3">Iteration</h6>
                    <div className="my-1 d-flex justify-content-center flex-wrap">
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/design/4-prototype/2-midfi/1.jpg" alt="midfi sketch- task page" />
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/design/4-prototype/2-midfi/2.jpg" alt="midfi sketch- task creation" />   
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/design/4-prototype/2-midfi/3.jpg" alt="midfi sketch- task kanban" />  
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

                    <div className="my-5 d-flex justify-content-center flex-wrap">
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/design/4-prototype/2-midfi/5.png" alt="midfi figma prototype" />
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
                </div>

                <div className="topic-container subsection-wrapper">
                    <h3 className="my-5">🌕 Hi-fi Prototype</h3>
                    <h6 className="mb-3">Iteration</h6>
                    <p className="my-5">
                    Based on feedback, we enhanced our persuasive approach to <b>deepen user engagement and subtly influence user behavior</b>. <br/><br/>
                    The avatar was reframed to serve as both a mirror of the player and a supportive study partner— using “we” as the personal pronoun— to implement <b>distancing, body doubling, and social support</b>. Moreover, In response to Professor Kaufman's advice, we aimed to amplify the significance of experience points in the game, making participation more meaningful for users.
                    </p>
                    <ul className="subsection-wrapper">
                        <li className="row align-items-start subsection-wrapper">
                            <div className="col-md-6">
                                <img className="w-100" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2dmZ3J3ZHo3cWZ5MzkyOHI2Y3F1dDBydGYwMDVlNDhnajc2NjJyZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XZmPrQa21ClUdRY6Tr/giphy.gif" alt="Customization of Avatar"></img>
                            </div>
                            <div className="col-md-6">
                                <h6 className="theme mb-3">Customization of Avatar</h6>
                                <p>At the beginning of the game, players can pick an animal avatar as their “buddy” which serves as their own real-life reflection as well as an individual that would support and work with you. This setup introduces both a <b>distancing effect and body-doubling techniques</b>, offering social support through the avatar's interactions.</p>
                            </div>
                        </li>
                        <li className="flex-row-reverse row align-items-start subsection-wrapper">
                            <div className="col-md-6">
                                <img className="w-100" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHdhYjF2eTIxeXhpZGx4bGo1a2JlczFpMzVrMnhrYTg4bjhtc3R1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xlXDa18T6yEtGA9f0W/giphy.gif" alt="Empowering Self-Affirmation through Avatar Dialogues"></img>
                            </div>
                            <div className="col-md-6">
                                <h6 className="theme mb-3">Self-Affirmation Avatar Dialogues</h6>
                                <p>The avatar delivers self-affirmation dialogues, which occur upon task completion, leveling up, and idling state, to fuel their enthusiasm for work and acknowledge their inherent value. Such mechanism nurtures a positive feedback loop; users are <b>continually empowered, fostering a resilient and confident mindset</b> crucial for success.</p>
                            </div>
                        </li>
                        <li className="row align-items-start subsection-wrapper">
                            <div className="col-md-6">
                                <img className="w-100" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXNjNWp4ZjJmeGNobnh4aGk2NThoa3VuNDg1cXN3ZmMyY2ZzbWQ5dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KU3ec5QdIIZanQJnSp/giphy.gif" alt="Task & Productivity Enhancement"></img>
                            </div>
                            <div className="col-md-6">
                                <h6 className="theme mb-3">Task & Productivity Enhancement</h6>
                                <p>Players can input tasks by specifying start time, duration, task description, and reminders. The “due date” is intentionally removed from task information to mitigate anxiety linked to approaching deadlines.</p>
                            </div>
                        </li>
                        <li className="flex-row-reverse row align-items-start subsection-wrapper">
                            <div className="col-md-6">
                                <img className="w-100" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3pxaWl2NnExcmVpNDI3NnJpa3U3ZmxjaDg2cjI2ZG96bTBoYXN5NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OCKgvJ5jJZCFybWiv5/giphy.gif" alt="Pomodoro Technique & Immersive Environments"></img>
                            </div>
                            <div className="col-md-6">
                                <h6 className="theme mb-3">Pomodoro & Immersive Environments</h6>
                                <p>The Pomodoro technique, employing a focus timer that alternates short breaks with dedicated work sessions, is incorporated in the focus session to instill efficient task organization as users input task specifics, facilitating an <b>improvement in their proficiency within the Elaboration Likelihood Model (ELM)</b>.</p>
                            </div>
                        </li>
                        <li className="row align-items-start subsection-wrapper">
                            <div className="col-md-6">
                                <img className="w-100" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajk0YnZtNm03bzQ0ZGlrdHMybzU2bnpyOWc5ZWx4amZ6d3lrYmc0MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cv1s6W7xhMCFYsO6R5/giphy.gif" alt="Rewards & Environment Unlock"></img>
                            </div>
                            <div className="col-md-6">
                                <h6 className="theme mb-3">Rewards & Environment Unlock</h6>
                                <p>Congratulatory self-affirmations and a choice of reward items to embellish their virtual environment follow the focus session. By intermixing gaming elements like rewards and progression, the intervention retains a lighter tone, while the warm color palette and font choice subtly influence users' emotions, enhancing the overall experience.</p>
                            </div>
                        </li>
                        <li className="flex-row-reverse row align-items-start subsection-wrapper">
                            <div className="col-md-6">
                                <img className="w-100" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHJ6Z3phbzFvaWtyenRvMGxyMWE2ODV3N3g2NDE1NHU5cjVvOXoxcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oxChvgPxbR0tQ42p3I/giphy.gif" alt="Progress Tracking & Visual Achievement"></img>
                            </div>
                            <div className="col-md-6">
                                <h6 className="theme mb-3">Progress Tracking & Visual Achievement</h6>
                                <p>User progress is visually represented by earning rewards upon task completion, leveling up to access new environments, and data visualizations showcasing task completion and focused time. This feature empowers users to review their achievements, <b>fostering sustained productivity by promoting consistency and commitment to their goals</b>.</p>
                            </div>
                        </li>
                    </ul>
                    
                </div>

                <div className="topic-container section-wrapper">
                    <h3 className="my-5">🪧 Results</h3>
                    <h6 className="my-5">In-Class Science Fair</h6>
                    <div className="mt-5 d-flex flex-column align-items-center">
                        <img className="w-75 p-1" src="/works/UXUI/fluffy/result/1.jpg" alt="science fair" />
                    </div>
                    <div className="mb-5 d-flex justify-content-center flex-wrap">
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/result/2.jpg" alt="science fair" />
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/result/3.jpg" alt="science fair" />
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/result/4.jpg" alt="science fair" />
                        <img className="fluffy-artwork p-1" src="/works/UXUI/fluffy/result/5.jpg" alt="science fair" />
                    </div>

                    <h6 className="my-3">Future State</h6>
                    <p>
                    We envision Fluffy Focus actually taking shape and becoming a downloadable game that helps graduate students fight against procrastination and anxiety. With more time, we would improve upon the final iteration using the feedback that we received from the Science Fair presentation, which includes but not limited to:
                        <ul className="list-disc my-5">
                            <li className="mb-3">Adding a task script to starting the task</li>
                            <li className="mb-3">Adding focus session controls to destress users with anxiety</li>
                            <li className="mb-3">More interactivity between the user and avatar</li>
                            <li className="mb-3">Bringing a community together with friends and/or family</li>
                        </ul>
                        Fluffy Focus would also expand to connect with the whole Apple ecosystem to further serve its purpose of motivating students to reduce anxiety and develop long-term habits.
                        <ul className="list-disc my-5">
                            <li className="mb-3">LiveStatus on iPhone lock screen</li>
                            <li className="mb-3">Widget on iPad home screen</li>
                        </ul>
                    </p>
                    
                </div>

                <div className="topic-container section-wrapper">
                    <h3 className="my-5">📍 Conclusion</h3>
                    <h4 className="my-5">
                    Fluffy Focus represents a transformative approach to student productivity, integrating persuasive techniques to influence attitudinal and behavioral changes. 
                    </h4>
                    <p>
                    Through the strategic application of rewards and positive reinforcement within its gamified structure, this application aims to shift student attitudes towards task management. By assessing behavior modification theories, such as operant conditioning, the intent is to instigate tangible changes in how students approach and complete academic tasks. The focus extends beyond mere task completion; it's about developing long-term habits that proactively engage with students to calmly tackle their academic workload and cultivate sustainable productivity practices.
                    </p>
                </div>

                <div className="topic-container section-wrapper">
                    <h3 className="my-5">💭 Takeaways</h3>
                    <ul className="my-5">
                        <li className="row my-5">
                            <div className="col-md-4 mb-3">
                                <div className="w-50 mb-3 d-flex flex-column align-items-center">
                                    <img className="w-sizer mb-2" src="/works/UXUI/fluffy/Persuasion.svg" alt="persuasion icon" />
                                </div>
                                <h6 className="theme">Persuasive Goal over Usability</h6>
                            </div>                            
                            <p className="col-md-8">
                            As previously mentioned, our team initially put more emphasis on usability when running user tests. The purpose of these user tests, however, are not only about usability but also, if not more importantly, concept validation. Whether the user experiences a change in behavior and attitude toward immense workloads and procrastination is what we should primarily design our tests to verify. The same thing applies to other UX projects, in that we must first ensure that our product works before verifying our product works smoothly.
                            </p>
                        </li>
                        <li className="row my-5">
                            <div className="col-md-4 mb-3">
                                <div className="w-50 mb-3 d-flex flex-column align-items-center">
                                    <img className="w-sizer mb-2" src="/works/UXUI/fluffy/Documentation.svg" alt="Documentation icon" />
                                </div>
                                <h6 className="theme">Documentation Matters</h6>
                            </div>
                            <p className="col-md-8">
                            During the project, a shared Google Drive was used to store all of our meeting documents, including notes, reports, and photos of our whiteboard sessions. Organizing these documents  immensely helped us access data across different phases efficiently, much similar to how engineers “recycle” modular parts of code. Documentation also significantly reduces redundancy since the team does not need to discuss same things all over due to absence of records.
                            </p>
                        </li>
                        <li className="row my-5">
                            <div className="col-md-4 mb-3">
                                <div className="w-50 mb-3 d-flex flex-column align-items-center">
                                    <img className="w-sizer mb-2" src="/works/UXUI/fluffy/Rapport.svg" alt="Rapport icon" />
                                </div>
                                <h6 className="theme">Communication & Team Rapport</h6>
                            </div>
                            <p className="col-md-8">
                            On a more personal note, I really enjoyed working in this team and the rapport we maintained. Although it could be attributed to individual differences and compatibility, I believe certain aspects that our team strived to succeed in could help me establish harmony within my other teams in the  future. First is communication; we’d always keep our group chat active either through work messages or chit chats so members would not shy from speaking up, and the result is any issue that arose got immediately resolved because of efficient communication. 

<br/><br/>

The second component of building a good team is viewing each other as “friends” rather than “colleagues.” At the beginning of the project, we barely knew each other; but a tradition we kept  was to start every meeting with greetings and chats, thus everyone could feel recognized and  relaxed. With this rapport established, members would naturally adopt a friendly tone and encourage more creativity when getting into serious conversations about the project.
                            </p>
                        </li>
                    </ul>
                    
                    
                </div>
            </div>

            





            <div className="bg-1 pb-5">
                <div className="container">
                    <div className="topic-container py-3">
                        <h3 className="heading-3 color-gray mt-5">📑 References</h3>
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
                            <ul className="list-disc">
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
    );
};

export default Fluffy;

