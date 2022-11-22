import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Iframe from 'react-iframe';

function Mindful () {
    let img = "/works/UXUI/mindful/cover.png";

    return (
        <div>
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h2 className="mb-3">Mindful Diary</h2>
                            <h3>Tags: UI Design, Diary, Mental Health</h3>
                    </div>
                    <div className="row mb-5">
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Duration </h3>
                            <ul>
                                <li>2 weeks</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Role</h3>
                            <ul>
                                <li>Designer</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Team</h3>
                            <ul>
                                <li>Solo project</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Tool</h3>
                            <ul>
                                <li>Figma</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col mb-3 mb-5">
                            <h3>Responsibilities</h3>
                            <ul className="row">
                                <li className="col-md-6">Feature Ideation</li>
                                <li className="col-md-6">UI flow design</li>
                                <li className="col-md-6">Proposal oral presentation</li>
                            </ul>
                         </div>
                    </div>

                    <div className="my-3">
                        <h3 className="heading-1 mb-5">Figma Prototype</h3>
                        <div className="d-flex justify-content-center">
                            <Iframe 
                            style="border: 1px solid rgba(0, 0, 0, 0.1);" 
                            width="800" height="450" 
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9SVmWWLfpluAwwZUnX4iXI%2FMindful-Diary-App%3Fpage-id%3D0%253A1%26node-id%3D202%253A1042%26viewport%3D-2209%252C-980%252C0.24%26scaling%3Dscale-down%26starting-point-node-id%3D227%253A3664" 
                            allowfullscreen />
                        </div>
                    </div>
                    
                    
                </div>
            </div>

            <div className="bg-1">
                <div className="container">
                    <div className="topic-container section-wrapper">
                        <h3 className="heading-1 my-4">Introduction</h3>
                        <p className="w-sizer">
                        Journal writing has long been scientifically proven to be beneficial in not only in personal growth and development, intuition and self-expression, but also critical thinking skills and stress reduction and health benefits by allowing individuals to put emotions, frustrations, and stress into perspective with words [1]. 
                        </p>
                        <p className="w-sizer">
                        In the modern world where depressive disorders and anxiety disorders run rampant, each affecting approximately 4.4% and 3.6% of the global population respectively [2], it would seem judicious and healthy that people use journaling as a source of emotion outlet. 
                        </p>
                        <h2 className="heading-2 mt-3 mb-5 text-bold">
                        Despite many people recognizing the benefits of journaling, <span className="color-bright">few actually make it a long-term habit because of a variety of reasons</span>, including [3], [4]:
                        </h2>
                        <div className="row">
                            <div className="col-md-6 d-flex my-3">
                                <div className="color-dark mx-3">
                                    <h2>1.</h2>
                                </div>
                                <div className="mx-3">
                                    <h3 className="heading-3">
                                    Writing Block
                                    </h3>
                                    <p>
                                    not knowing what to write or find daily details too trivial to record
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex my-3">
                                <div className="color-dark mx-3">
                                    <h2>2.</h2>
                                </div>
                                <div className="mx-3">
                                    <h3 className="heading-3">
                                    No Instant Gratification
                                    </h3>
                                    <p>
                                    the benefits of journal keeping do not manifest instantly
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex my-3">
                                <div className="color-dark mx-3">
                                    <h2>3.</h2>
                                </div>
                                <div className="mx-3">
                                    <h3 className="heading-3">
                                    Privacy Invasion
                                    </h3>
                                    <p>
                                    the journal risks being read by others close to you
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex my-3">
                                <div className="color-dark mx-3">
                                    <h2>4.</h2>
                                </div>
                                <div className="mx-3">
                                    <h3 className="heading-3">
                                    Lack of Purpose
                                    </h3>
                                    <p>
                                    some simply do not find it necessary to keep a journal
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex my-3">
                                <div className="color-dark mx-3">
                                    <h2>5.</h2>
                                </div>
                                <div className="mx-3">
                                    <h3 className="heading-3">
                                    Insufficient Time
                                    </h3>
                                    <p>
                                    daily schedules are too packed to find time for writing
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container section-wrapper">
                    <div className="row">
                        <div className="col-md-8">
                            <h3 className="heading-1 my-5">Objective</h3>
                            <h4 className="heading-2 mb-3">
                            This project aims to <b className="color-bright">design a mobile diary app using guided journal technique</b> to reduce the thresholds of habituating journal keeping and enable user to reduce stress or anxiety with mindful journaling.
                            </h4>
                        </div>
                        {/* <div className="col-md-4">
                            <div className="w-100 mb-3 d-flex flex-column align-items-center">
                                <img className="w-75" src="/works/UXUI/bookworm/chat.svg" alt="chat icon" />
                            </div>
                        </div> */}
                    </div>
                    
                    <div className="row">
                        <div className="col-md-4 mt-3 topic-desc-container">
                            <h3>Target User</h3>
                            <ul>
                                <li>adolescents and adults aged between 16~40 who are willing to, or have tried to but failed, start journalings</li>
                            </ul>
                        </div>
                        <div className="col-md-8 mt-3 topic-desc-container">
                            <h3>Requirement</h3>
                            <ul className="list-disc">
                                <li>Guiding user through the writing process to break through writing blocks</li>
                                <li>Visualizing user’s long-term progress for user to perform self-reflection</li>
                                <li>Ridding user’s concern of journal being read by others</li>
                                <li>Encouraging habituation of journal keeping</li>
                                <li>Educating user on the benefits of journal keeping</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="topic-container section-wrapper">
                    <h3 className="heading-1 mb-5">Design Value</h3>
                    <h3 id="mindful-value" className="heading-2">
                    Mindful Diary strives to <b>make journaling an enjoyable process</b>.
                    </h3>
                    
                    <div className="row d-flex display-row">
                        <div className="col-md-5">
                            <div className="w-100 mt-5 d-flex flex-column align-items-center">
                                <img className="w-75" src="/works/UXUI/mindful/val-1.png" alt="Information Structure" />
                            </div>
                        </div>
                        <div className="col-md-7 px-5 d-flex flex-column justify-content-center">
                            <h3 className="heading-2 mb-3">
                            Guided Journal Prompts
                            </h3>
                            <p className="">
                            Since some users find the daily details too trivial to record in the journal, 
                            guided journal prompts can be utilized to provide a specific topic for user to write about. 
                            These prompts can add depths into journals by giving different directions for user to explore their inner activities with different categories of prompts. Most important of all, <b>journal prompts can evoke certain memories or opinions in user to avoid being frustrated by writing blocks</b>.
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex display-row-reverse">
                        <div className="col-md-5">
                            <div className="w-100 mt-5 d-flex flex-column align-items-center">
                                <img className="w-75" src="/works/UXUI/mindful/val-2.png" alt="Information Structure" />
                            </div>
                        </div>
                        <div className="col-md-7 px-5 d-flex flex-column justify-content-center">
                            <h3 className="heading-2 mb-3">
                            User Progress Visualization
                            </h3>
                            <p className="">
                            The paucity of instant gratification is one of the key factors preventing user from starting journaling. In contrast, I aim to encourage user to look at the big picture instead to understand the significant benefits journaling provides in the long-term. With user inputs of daily emotions, activities, and exercise time, user’s change in mood or the distribution of different emotions can be visualized as time passes. I hope to <b>provide user gratification in seeing their long-term improvement as a result of journaling</b>.
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex display-row">
                        <div className="col-md-5">
                            <div className="w-100 mt-5 d-flex flex-column align-items-center">
                                <img className="w-75" src="/works/UXUI/mindful/val-3.png" alt="Information Structure" />
                            </div>
                        </div>
                        <div className="col-md-7 px-5 d-flex flex-column justify-content-center">
                            <div className="mb-5">
                                <h3 className="heading-2 mb-3">
                                Encouraging Habituation of Journal Keeping
                                </h3>
                                <p className="">
                                In addition to visualizing user progress in charts or bars, I design an Achievements panel which <b>rewards user “badges” upon accomplishing achievements.</b> These badges concretize user’s intangible achievements in behavior, such as continuously journaling for 10 days, or exercising for over 30 minutes in a day. With these manifest badges, user can be encouraged to strive to continue journaling to unlock more achievements.
                                </p>
                            </div>
                            <div>
                                <h3 className="heading-2 mb-3">
                                Information Channel for Mental Health Resources
                                </h3>
                                <p className="">
                                I believe the reason why some people lack purpose in keeping a journal is due to <b>unawareness of the benefits of journaling or the importance of self-care</b>. Thus, Mindful Diary aims to incorporate a session featuring news and resources on mental health, psychology, or lifestyle ideas to educate user on these aspects.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex display-row-reverse">
                        <div className="col-md-5">
                            <div className="w-100 mt-5 d-flex flex-column align-items-center">
                                <img className="w-75" src="/works/UXUI/mindful/val-4.png" alt="Information Structure" />
                            </div>
                        </div>
                        <div className="col-md-7 px-5 d-flex flex-column justify-content-center">
                            <h3 className="heading-2 mb-3">
                            Privacy Protection
                            </h3>
                            <p className="">
                            Another crucial hindrance in journaling is the fear of the contents being read by nosy others. To rid this concern, an <b>in-app password lock</b> is imposed so that user can safely store the diary in their phone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container subsection-wrapper">
                    <h3 className="heading-3 color-dark">Prototype</h3>
                    <h3 className="heading-1 mt-3 mb-5">Information Structure</h3>
                    <div className="w-100 mt-5 d-flex flex-column align-items-center">
                        <img className="w-75" src="/works/UXUI/mindful/IA.png" alt="Information Structure" />
                        <p className="table-caption mt-3">Information Structure</p>
                    </div>

                    <div className="subsection-wrapper">
                    <h3 className="heading-1 mt-3 mb-5">User Interface</h3>
                        <div className="row my-5 d-flex display-row">
                            <div className="col-md-6 d-flex flex-column justify-content-center">
                                <h3 className="heading-2 mb-4">Explore</h3>
                                <ul className="list-disc">
                                    <li><b>Quote of The Day</b>: recommending a daily quote related to self-care or positivity</li>
                                    <li><b>Achievements</b>: displays all the badges user earned after completing certain achievements, boosting user’s interest in continuing journaling to unlock more achievements</li>
                                    <li><b>What’s New Today</b>: which presents news or sources on mental health or self-care related information</li>
                                </ul>
                                
                            </div>
                            <div className="col-md-6">
                                <div className="w-100 mt-5 d-flex flex-column align-items-center">
                                    <img src="https://media.giphy.com/media/JVinRpsx4fovP9KiE2/giphy.gif" alt="prototype gif"/>
                                </div>
                            </div>
                        </div>

                        <div className="row my-5 display-row-reverse">
                            <div className="col-md-6 d-flex flex-column justify-content-center">
                                <h3 className="heading-2 mb-4">Diary</h3>
                                <ul className="list-disc">
                                    <li><b>Card / Calendar</b> view option</li>
                                    <li><b>Filter option</b>: view entries from a specific category</li>
                                </ul>
                                <p>
                                    <b>The emotions of different day</b> can be easily browsed in calendar mode, allowing user to understand their mood change with respect to time or particular events.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="w-100 mt-5 d-flex flex-column align-items-center">
                                    <img src="https://media.giphy.com/media/iMxrgEhSkSAWvYiPjP/giphy.gif" alt="prototype gif"/>
                                </div>
                            </div>
                        </div>

                        <div className="row my-5 display-row">
                            <div className="col-md-6 d-flex flex-column justify-content-center">
                                <h3 className="heading-2 mb-4">Diary Writing</h3>
                                <ul className="list-disc">
                                    <li><b>Logging of emotion, activities, and exercise time</b> to recollect the day</li>
                                    <li><b>Guided journal prompt</b>: prompts come from different categories, such as gratitude journal or mental wellness journal</li>
                                    <li>Photos can be uploaded accompanying the text content</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <div className="w-100 mt-5 d-flex flex-column align-items-center">
                                    <img src="https://media.giphy.com/media/UUHrcFY2ZMVvHaavpf/giphy.gif" alt="prototype gif"/>
                                </div>
                            </div>
                        </div>

                        <div className="row my-5 display-row-reverse">
                            <div className="col-md-6 d-flex flex-column justify-content-center">
                                <h3 className="heading-2 mb-4">Progress</h3>
                                <ul className="list-disc">
                                    <li>Weekly/monthly progress visualization</li>
                                    <li>Mood Flow line chart, Mood Distribution, or Exercise Time bar chart</li>
                                </ul>
                                <p>
                                    This section helps user <b>make sense of how the activities during the day affect their overall emotion or behavior</b>, thereby shedding new lights on themselves.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="w-100 mt-5 d-flex flex-column align-items-center">
                                    <img src="https://media.giphy.com/media/403FulHXttNjjcL70d/giphy.gif" alt="prototype gif"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            

            <div className="container">
                <div className="topic-container py-3">
                    <h3 className="heading-3 color-dark">Challenges & Solutions</h3>
                    <div className="mb-5 py-5">
                        <div className="row mb-4 d-flex align-items-end">
                            <div className="col-md-8">
                                <h3 className="heading-2">Difficulty in Dealing with Lack of Purpose</h3>
                                <p className="">
                                For users who do not find journal keeping necessary, Mindful Diary currently has limited capability to appeal to them. That is, the features of this project mainly deals with helping user <b>sustain the habit of keeping journal</b>, not attracting people to start journaling. To temporarily bypass this issue, our target user is defined as those who have intention of keeping a journal. 
                                </p>
                            </div>
                            <div className="col-md-3 my-3 d-flex justify-content-end align-items-start">
                                <img className="w-75" src="/works/UXUI/mindful/coin.svg" alt="coin"/>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="heading-3 text-bold">Solution Proposal- Creating a purpose for journaling</h4>
                            <ul className="list-disc">
                                <li>Collaborate with facilities such as counseling offices, museums, or bookstores which provide either entertainment or mental support.</li>
                                <li>User can be rewarded with <b>mindfulness coins</b> by writing diary entries</li>
                                <li>Coins are collected to exchange for discounts on counseling fees, museum tickets, or book purchases</li>
                            </ul>
                            <p>
                            By setting this enticement as an entry point, we hope the psychological benefits user experience afterward by journaling can motivate them to sustain the habit.
                            </p>
                        </div>
                    </div>

                    <div className="my-5 py-5">
                        <div className="row mb-4 d-flex align-items-end">
                            <div className="col-md-8">
                                <h3 className="heading-2">Insufficient Time for journaling</h3>
                                <p >
                                Currently Mindful Diary cannot tackle the problem of user not having enough time for journaling. In order to tackle this issue, user needs to <b>ritualize journaling</b> as part of their daily routine so that it will not be delayed or forgotten at the end of the day. 
                                </p>
                            </div>
                            <div className="col-md-3 my-3 d-flex justify-content-end align-items-start">
                                <img className="w-75" src="/works/UXUI/mindful/fire.svg" alt="fire"/>
                            </div>
                        </div>

                        <div>
                            <h4 className="heading-3 text-bold">Solution Proposal- Notification & Incorporating Streak</h4>
                            <ul className="list-disc">
                                <li>Notifications can be set up so that user can be reminded every day at a specific time to write the journal.</li>
                                <li>Referencing the success of <a className="link" href="https://www.duolingo.com" target="_blank" rel="noreferrer noopener">Duolingo</a>, <b>the streak system</b> could be incorporated in Mindful Diary to motivate user to keep the habit of journaling daily.</li>
                            </ul>
                            <p>
The idea of a streak system is like an accumulated achievement, which records the number of days user has successively performed the required activity. In order not to reset the daily incremental number, user will <b>consciously make an effort to use the application at least once a day</b>. 
<br/>
However, the system must be carefully designed so as not to place further burden on the user, which counters the purpose of Mindful Diary. Streak freeze, which is a tool that freezes the streak number for a day of inactivity, can be given to user on certain occasions to <b>reduce user’s psychological stress of maintaining the streak even on busy days</b>.
                            </p>
                        </div>
                    </div>

                    <div className="my-5 py-5">
                        <div className="row mb-4 d-flex align-items-end">
                            <div className="col-md-8">
                                <h3 className="heading-2">Complicated Process of Diary Writing</h3>
                                <p >
                                As of now, user has to go through two pages of inputting emotions, choosing journal prompts before actually starting writing. This long procedure could cause user to lose interest in journal.
                                </p>
                            </div>
                            <div className="col-md-3 my-3 d-flex justify-content-end align-items-start">
                                <img className="w-75" src="/works/UXUI/mindful/audio.svg" alt="audio"/>
                            </div>
                        </div>

                        <div>
                            <h4 className="heading-3 text-bold">Solution Proposal- Simplification of The Journaling Process</h4>
                            <ul className="list-disc">
                                    <li><b>Wrapping the setting up process into buttons in the writing page</b><br/>
    user can directly enter the writing page and choose to input other attributes later</li>
                                    <li><b>Providing audio diary and drawing diary functions</b> <br/>for those struggling with writing to journal with their most familiar means of creativity expression</li> 
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>


            <div className="bg-1 pb-5">
                <div className="container">
                    <div className="topic-container py-3">
                        <h3 className="heading-3 color-gray mt-5">References</h3>
                        <p className="references">
                        [1] Hiemstra, R. (2001). Uses and benefits of journal writing. New directions for adult and continuing education, 2001(90), 19.
                        <br/>
                        [2] World Health Organization (WHO). (2017). Depression and Other Common Mental Disorders: Global Health Estimates. World Health Organization. Retrieved November 14, 2022, from https://apps.who.int/iris/bitstream/handle/10665/254610/WHO-MSD-MER-2017.2-eng.pdf
                        <br/>
                        [3] Gagnon, Joan. (2017, March 7). 3 Reasons People Hate Journaling. LinkedIn. https://www.linkedin.com/pulse/3-reasons-people-hate-journaling-joan-gagnon/ 
                        <br/>
                        [4] alternativedoubt. (2018, December 25). Why Keeping a Diary is so Hard??. Medium. https://alternativedoubt.medium.com/why-keeping-a-diary-is-so-hard-40eabca43ffd 
                        </p>
                        <h3 className="heading-3 color-gray mt-5">Resources</h3>
                        <p className="references">
                        coin by sripfoto from <a href="https://thenounproject.com/browse/icons/term/coin/" target="_blank" title="coin Icons">Noun Project</a>
                        <br/>
                        Fire by Made from <a href="https://thenounproject.com/browse/icons/term/fire/" target="_blank" title="Fire Icons">Noun Project</a>
                        <br/>
                        books recording by Maxicons from <a href="https://thenounproject.com/browse/icons/term/books-recording/" target="_blank" title="books recording Icons">Noun Project</a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );

};

export default Mindful;