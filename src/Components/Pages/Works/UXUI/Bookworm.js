import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function Bookworm () {
    let img = "/works/UXUI/bookworm/cover.png";

    return (
        <div>
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h2 className="mb-3">Bookworm Meeter</h2>
                            <h3>Tags: Design Thinking, Reading, Social APP</h3>
                    </div>
                    <div className="row mb-5">
                        <div className="topic-desc-container col-md-4">
                            <h3>Duration </h3>
                            <ul>
                                <li>4 weeks</li>
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
                                <li>Miro</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col">
                            <h3>Responsibilities</h3>
                            <ul className="row">
                                <li className="col-md-4">Conducting field study</li>
                                <li className="col-md-4">Designing user interview questions</li>
                                <li className="col-md-4">Feature Ideation</li>
                                <li className="col-md-4">Leading group discussion</li>
                                <li className="col-md-4">UI flow design</li>
                                <li className="col-md-4">Proposal oral presentation</li>
                            </ul>
                         </div>
                    </div>
                </div>
            </div>

            <div className="bg-1">
                <div className="container">
                    <div className="topic-container section-wrapper">
                        <h3 className="heading-1 my-4">Introduction</h3>
                        <h2 className="heading-2 my-3 color-dark text-bold">How can introverted book readers share their reading experience with others?</h2>
                        <p className="w-sizer">In Bookworm Meeter, we aimed to <b>enhance the reading experience of avid book readers</b>. The following user study was conducted:</p>
                        <ul className="list-disc">
                            <li>
                            A field study a fusion bookstore cafe 
                            </li>
                            <li>
                            A group interview with 3 active book readers
                            </li>
                        </ul>
                        <p className="w-sizer">
                        2 of the interviewees expressed interests in exchanging book quotes and post-read thoughts with other readers, but they found it difficult to find people in real-life who share similar interests.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container section-wrapper">
                    <div className="row">
                        <div className="col-md-8">
                            <h3 className="heading-1 my-5">Objective</h3>
                            <h4 className="heading-2 mb-3">
                            In order to help the shy bookworms, we intend to design a <b className="color-bright">book-themed social networking platform</b> for users to make friends with more like-minded readers and receive more information about books.
                            </h4>
                        </div>
                        <div className="col-md-4">
                            <div className="w-100 mb-3 d-flex flex-column align-items-center">
                                <img className="w-75" src="/works/UXUI/bookworm/chat.svg" alt="chat icon" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-4 mt-3 topic-desc-container">
                            <h3>Target User</h3>
                            <ul>
                                <li>Active book readers</li>
                            </ul>
                        </div>
                        <div className="col-md-8 mt-3 topic-desc-container">
                            <h3>Requirement</h3>
                            <ul className="list-disc">
                                <li>Providing a forum for discussion on book-related topics</li>
                                <li>Combining the dating app function for users to chat with other readers in private</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="topic-container section-wrapper">
                    <h3 className="heading-1 mb-5">Design Value</h3>
                    <ul className="list-disc">
                        <li>
                            Niche target audience of book readers in dating app market
                        </li>
                        <li>
                            innovative design for meeting new friends and sharing book information
                        </li>
                    </ul>
                    <div className="w-100 mt-5 d-flex flex-column align-items-center">
                        <img className="w-100" src="/works/UXUI/bookworm/1-design value.jpg" alt="design value" />
                        <p className="table-caption mt-3">Design Value</p>
                    </div>
                    <div id="bookworm-value" className="py-5">   
                        <h3>
                            Through this social networking platform, we can enable introverted readers to <b>meet more bookworms online</b> without the excruciating experience of awkwardly conversing with strangers in person or never finding people with similar interests in real life.
                        </h3>
                    </div>
                </div>

                <div className="topic-container subsection-wrapper">
                    <h3 className="heading-3 color-dark">Design Process</h3>
                    <div className="row mb-5">
                        <div className="col-md-8">
                        <h3 className="heading-1 mt-3 mb-5">Empathize</h3>
                            <h4 className="heading-2 mt-5 text-bold">Field study</h4>
                            <p className="mb-0">Participants: 18 observed</p>
                            <p className="mb-0">Duration: 30 minutes</p>
                            <p className="mb-0">Location: a fusion bookstore cafe</p>
                            <h4 className="heading-2 mt-4 text-bold">Observation</h4>
                            <ul className="list-disc">
                                <li>
                                Majority of customers (16 out of 18) there visited it as a cafe to enjoy the atmosphere rather than a bookstore
                                </li>
                                <li>
                                2 people actually browsed books displayed on the bookshelves
                                </li>
                                <li>
                                1 out of 18 were reading, and 2 others were studying or doing homework
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="w-100 mb-3 d-flex flex-column ">
                                <img className="w-75" src="/works/UXUI/bookworm/magnifying-glass.svg" alt="magnifying glass icon" />
                            </div>
                        </div>
                    </div>

                    <div className="w-100 mb-3 d-flex flex-column align-items-center">
                        <img className="w-75" src="/works/UXUI/bookworm/2-Observational-Map.jpg" alt="observational map" />
                        <p className="table-caption mt-3">Observational Map</p>
                    </div>

                    <h4 className="heading-2 mt-5 text-bold">Group User Interview</h4>
                    <p className="mb-0">Participants: 3 active book readers (2 males, 1 male, all aged between 21~30)</p>
                    <h4 className="heading-2 my-4 text-bold">Results</h4>
                    <div className="row my-3">
                        <div className="col-md-3">
                            <div className="w-100 mb-3 d-flex flex-column align-items-center">
                                <img className="w-75 mb-3" src="/works/UXUI/bookworm/user.svg" alt="user icon" />
                                {/*  */}
                            </div>
                        </div>
                        <div className="col-md-9 d-flex flex-column justify-content-center">
                            <h4 className="heading-3 color-dark text-bold">Difficulty to express opinions about their favorite books</h4>
                            <p>
                                3 users all found it difficult to meet people in real life who shared similar taste in books, since their friends or family in real life were uninterested in discussing about these topics.
                            </p>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-3">
                            <div className="w-100 mb-3 d-flex flex-column align-items-center">
                                <img className="w-75 mb-3" src="/works/UXUI/bookworm/book.svg" alt="book icon" />
                            </div>
                        </div>
                        <div className="col-md-9 d-flex flex-column justify-content-center">
                            <h4 className="heading-3 color-dark text-bold">Difference in book purchasing and information channels</h4>
                            <p>
                            1 user liked to browse bookshelves in indie bookstores to find a book of interest, while the other 2 preferred looking for information from sources like bookshop websites or online bloggers
                            </p>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-3">
                            <div className="w-100 mb-3 d-flex flex-column align-items-center">
                                <img className="w-75 mb-3" src="/works/UXUI/bookworm/drawer.svg" alt="drawer icon" />
                            </div>
                        </div>
                        <div className="col-md-9 d-flex flex-column justify-content-center">
                            <h4 className="heading-3 color-dark text-bold">Scattered source of book information</h4>
                            <p>
                            Users agreed that their current source of book information was scattered and would like a more consistent channel that regularly provides book recommendation tailored to their interests
                            </p>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-3">
                            <div className="w-100 mb-3 d-flex flex-column align-items-center">
                                <img className="w-75 mb-3" src="/works/UXUI/bookworm/paperwork.svg" alt="paperwork icon" />
                            </div>
                        </div>
                        <div className="col-md-9 d-flex flex-column justify-content-center">
                            <h4 className="heading-3 color-dark text-bold">Disorganized Note-taking System</h4>
                            <p>
                            1 user mentioned that he liked to write his thoughts and notes about books on mobile note application or physical notebooks. However, he found it frustrating to find notes about a specific book scattered in a pile of notes.
                            </p>
                        </div>
                    </div>
                    
                </div>

                <div className="topic-container subsection-wrapper">
                    <h3 className="heading-1 mb-3">Define</h3>
                    <p className="w-sizer">
                    Combining our observation in the field study and the user interviews, we put together a primary persona— Felicity.
                    </p>
                    <div className="w-100 mb-3 d-flex flex-column align-items-center">
                        <img className="w-100 my-3" src="/works/UXUI/bookworm/3-persona.png" alt="persona" />
                    </div>

                    <h3 className="heading-2 my-3">Pain Points</h3>
                    <p>According to the persona, there are 4 pain points Felicity experiences which we would focus on in the ideation process.</p>
                    <div className="d-flex justify-content-center">
                        <ul id="book-pain-point-list" className="row my-5 d-flex justify-content-center align-items-center">
                            <li className="col-md-4 m-4 d-flex align-items-center justify-content-center">
                                <h3 className="w-sizer heading-2 m-0">Unable to make friends fast due to shyness</h3>
                            </li>
                            <li className="col-md-4 m-4 d-flex align-items-center justify-content-center">
                                <h3 className="w-sizer heading-2 text-bold m-0">Lack of social channel to share book quotes or post-read thoughts</h3>
                            </li>
                            <li className="col-md-4 m-4 d-flex align-items-center justify-content-center">
                                <h3 className="w-sizer heading-2 m-0">Need an information input channel to be recommended more books</h3>
                            </li>
                            <li className="col-md-4 m-4 d-flex align-items-center justify-content-center">
                                <h3 className="w-sizer heading-2 text-bold m-0">Cannot systematically organize reading notes in papers or digital notes</h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="bg-1 pb-5">
                <div className="container">
                    <div className="topic-container subsection-wrapper">
                        <h3 className="heading-1 mt-3 mb-5">Ideate</h3>
                        <div className="row">
                            <div className="col-md-8 d-flex flex-column justify-content-center">
                                <h4 className="heading-2 text-bold">Kano Model Analysis</h4>
                                <p className="">
                                A brainstorming session was done to explore how the pain points could be resolved with different media and different approaches. After using Kano Model Analysis to with 5 users to evaluate the Satisfaction Index (SI) and Dissatisfaction Index (DSI) each solution provides, we decided to create a social networking app for book readers (Concept 2-2).
                                </p>
                            </div>
                            <div className="col-md-4">
                                <div className="w-100 d-flex flex-column align-items-end">
                                    <img className="w-75 " src="/works/UXUI/bookworm/4.jpg" alt="brainstorming" />
                                    <p className="table-caption mt-3">Feature brainstorming</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="my-5 row d-flex align-items-center">
                            <div className="col-md-6">
                                <div className="w-100 d-flex flex-column align-items-center">
                                    <img className="w-100 " src="/works/UXUI/bookworm/5-kano/all.png" alt="kano evaluation" />
                                    <p className="table-caption mt-3">Evaluation process of Kano Model</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="w-100 d-flex flex-column align-items-center">
                                    <img className="w-100 " src="/works/UXUI/bookworm/5-kano/5.jpg" alt="kano results" />
                                    <p className="table-caption mt-3">Results of Kano Analysis</p>
                                </div>
                            </div>
                        </div>

                        <h4 className="heading-2 text-bold">User Journey Map</h4>
                        <p className="w-sizer">
                        We imagined the thought process of the user with a user journey map. It gave us an understanding on how the features of Bookworm Meeter should be designed to provide satisfying services in different phases, such as
                        </p>
                        <ul className="list-disc">
                            <li className="text-bold">
                            Preference-based social group recommendation
                            </li>
                            <li className="text-bold">
                            AI-powered pairing suggestion bot
                            </li>
                        </ul>

                        <div className="w-100 my-5 d-flex flex-column align-items-center">
                            <img className="w-75 " src="/works/UXUI/bookworm/6-User-Journey-Map.jpg" alt="user journey map" />
                            <p className="table-caption mt-3">User Journey Map</p>
                        </div>

                        <h4 className="heading-2 text-bold">Feature Ideation</h4>
                        <p className="w-sizer">
                        Another brainstorming session was held to imagine possible features that could resolve the user pain points or add amusement to the user experience. Some of the designs were noted, ranging from <b>basic functionality to data-driven services</b> leveraging user data:
                        </p>

                        <ul className="p-5">
                            <li className="mb-5">
                                <h4 className="heading-3 feat-box mt-3">Social Groups</h4>
                                <p className="p-3">
                                Book-related topic groups are created and run autonomously by any user who wishes to discuss a specific topic   
                                </p>
                            </li>
                            <li className="mb-5">
                                <h4 className="heading-3 feat-box mt-3">Anonymity</h4>
                                <p className="p-3">
                                Users are displayed as anonymous by default in public groups for introverted users to comfortably share opinions without feeling exposed   
                                </p>
                            </li>
                            <li className="mb-5">
                                <h4 className="heading-3 feat-box mt-3">Privacy Protection</h4>
                                <p className="p-3">
                                User name and other details will be revealed to another user once a friend invitation is accepted, after which users can talk in their private chatroom
                                </p>
                            </li>
                            <li className="mb-5">
                                <h4 className="heading-3 feat-box mt-3">AI-powered pairing bot</h4>
                                <p className="p-3">
                                AI leverages data from user reading preferences and behavioral data on the app to suggest pairing candidate daily
                                </p>
                            </li>
                            <li className="mb-5">
                                <h4 className="heading-3 feat-box mt-3">Safe dating environment</h4>
                                <p className="p-3">
                                User identity is viewable by the other paired user only after both users express interest by sending friend invitation to the other
                                </p>
                            </li>
                            <li className="mb-5">
                                <h4 className="heading-3 feat-box mt-3">Weekly book recommendation</h4>
                                <p className="p-3">
                                A new book based on user preferences will be recommended weekly via Tarot-like card drawing
                                </p>
                            </li>
                            <li className="mb-5">
                                <h4 className="heading-3 feat-box mt-3">Library & Ex Libris</h4>
                                <p className="p-3">
                                A user page is treated as a “library” with “Ex Libris”, which documents not only basic book attributes but also book quotes and user notes. User can store their reading experiences in the form of Ex Libris in their library and retrieve them with self-defined tags or other attributes
                                </p>
                            </li>
                        </ul>

                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="w-100 mb-3 d-flex flex-column align-items-center ">
                                    <img className="w-75" src="/works/UXUI/bookworm/7.jpg" alt="feature brainstorming" />
                                    <p className="table-caption mt-3">Feature brainstorming</p>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="w-100 mb-3 d-flex flex-column align-items-center">
                                    <img className="w-100" src="/works/UXUI/bookworm/9-functional-map.jpg" alt="functional map" />
                                    <p className="table-caption mt-3">Functional Map of features</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="topic-container subsection-wrapper">
                    <h3 className="heading-1 mb-3">Prototype</h3>
                    <h4 className="heading-2 mt-5 text-bold">User Story & Storyboard</h4>
    
                    <div className="w-100 my-3 d-flex flex-column align-items-center ">
                        <img className="w-75" src="/works/UXUI/bookworm/8-user-story-map.png" alt="feature brainstorming" />
                        <p className="table-caption mt-3">User Story Map</p>
                    </div>

                    <div className="w-100 my-3 d-flex flex-column align-items-center ">
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
                                    <img className="w-100 journey-map-img" src="/works/UXUI/bookworm/10-story-board/1.jpg" alt="user storyboard"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="d-flex justify-content-center align-items-center">
                                    <img className="w-100 journey-map-img" src="/works/UXUI/bookworm/10-story-board/2.jpg" alt="user storyboard"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="d-flex justify-content-center align-items-center">
                                    <img className="w-100 journey-map-img" src="/works/UXUI/bookworm/10-story-board/3.jpg" alt="user storyboard"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="d-flex justify-content-center align-items-center">
                                    <img className="w-100 journey-map-img" src="/works/UXUI/bookworm/10-story-board/4.jpg" alt="user storyboard"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="d-flex justify-content-center align-items-center">
                                    <img className="w-100 journey-map-img" src="/works/UXUI/bookworm/10-story-board/5.jpg" alt="user storyboard"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="d-flex justify-content-center align-items-center">
                                    <img className="w-100 journey-map-img" src="/works/UXUI/bookworm/10-story-board/6.jpg" alt="user storyboard"/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <p className="table-caption mt-3">User Storyboard</p>
                    </div>

                    <h4 className="heading-2 my-5 text-bold">Information Architecture</h4>
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                        <img className="w-75" src="/works/UXUI/bookworm/IA-08.jpg" alt="Information Architecture"/>
                    </div>
                </div>
            </div>
            
            <div style={{backgroundColor: "#F5F5F5"}} className=" d-flex flex-column justify-content-center align-items-center">
                <div className="container">
                    <div className="topic-container">
                        <h4 className="heading-2 mt-5 text-bold">UI Wireflow</h4>
                    </div>
                </div>
                <div className="w-75 d-flex flex-column justify-content-center align-items-center">
                    <img className="w-sizer-sm p-5" src="/works/UXUI/bookworm/11-UI-flow.png" alt="UI wireflow"/>
                </div>
            </div>
            

            <div className="container">
                <div className="topic-container subsection-wrapper">
                    <h3 className="heading-3 color-dark">Business Proposal</h3>
                    <h3 className="heading-1 my-4">Business Model</h3>
                    <p className="w-sizer">
                    We have constructed a business model which summarizes what we aim to achieve and what the revenue streams and cost structure comprise.
                    </p>
                    <div className="my-4 w-100 d-flex flex-column justify-content-center align-items-center">
                        <img className="w-75" src="/works/UXUI/bookworm/12-business-model.jpg" alt="business model"/>
                    </div>
                    <div className="py-4 design-statement d-flex flex-column align-items-center">
                        <div className="d-flex flex-column align-items-center">
                            <h2>✼</h2>
                        </div>
                        <div>
                            <h3>
                            Through providing a social networking platform specifically designed for book lovers, Bookworm Meeter enables users to <b>meet their kindred spirits, to exchange opinions, and to archive their unique reading experience</b>.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-1 pb-5">
                <div className="container">
                    <div className="topic-container py-3">
                        <h3 className="heading-1 my-5">Challenges</h3>
                        <div className="mb-5">
                            <h3 className="heading-2">Paucity of Field Study Observation</h3>
                            <p>
                            Due to lack of time and resources, our field study was only done once and in a short interval of 30 minutes, consisting of only 18 observed people. These factors made it hard to gather sufficient amount of observation to see a general behavioral pattern in the readers, especially when the representativeness of the whole reader population cannot be verified in such a small sampling population.
                            </p>
                        </div>
                        <div className="mb-5">
                            <h3 className="heading-2">Evaluation of Effectiveness & Profitability </h3>
                            <p>
                            There was currently no usability test or pilot study done to verify the effectiveness of Bookworm Meeter in enabling users to meet other fellow book lovers. Thus, we were unable to iterate our design based on user feedback nor provide evidence of efficacy for the application. Furthermore, since this is a course project with no collaboration to real companies in the industry, the actual numbers of advertisement fee, salary, and other accounts were difficult to estimate without available data. As a result, we could not produce a precise analysis to prove the profitability of our proposal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container subsection-wrapper">
                    <h3 className="heading-1 my-5">Takeaways</h3>
                    <p className="mb-5">As my first project in the field of user experience, Bookworm Meeter allowed me to explore the design thinking process and encouraged me to dive deeper into the core of issues. In particular, I experienced the difficulty of designing a <b>user interview that truly draws out the crucial information we hope to gain from the users</b>. For example, I spent a lot of time working on the interview questions to make them straight-forward enough to cut to the chase, inquisitive enough to invite user to share personal stories, and gentle enough so as not to seem intimidating. This process sharpened my communication skills to express my intentions clearly.
<br/><br/>
Moreover, my teammates and I also found it especially challenging to <b>group our features into categories to form a functional map</b>. It urged us to analyze the abstract properties of a feature to clarify what is the purpose of having it. We often disagreed upon what criterion by which to classify features, but this also allowed us to engage in a comprehensive discourse to see things from different perspective before reaching consensus. All in all, I was able to not only enhance abstract reasoning capability but also become more open-minded to view matters from many angles.</p>
                </div>
            </div>

            <div className="bg-1 pb-5">
                <div className="container">
                    <div className="topic-container py-3">
                        <h3 className="heading-3 color-gray my-5">Resources</h3>
                        <p className="references">
                            Chat Messages by Mark Jayvee Pabilonia from <a href="https://thenounproject.com/browse/icons/term/chat-messages/" target="_blank" title="Chat Messages Icons">Noun Project</a>
                            <br/>
                            Magnifying Glass by Mark Jayvee Pabilonia from <a href="https://thenounproject.com/browse/icons/term/magnifying-glass/" target="_blank" title="Magnifying Glass Icons">Noun Project</a>
                            <br/>
                            user account by Mark Jayvee Pabilonia from <a href="https://thenounproject.com/browse/icons/term/user-account/" target="_blank" title="user account Icons">Noun Project</a>
                            <br/>
                            Book by Mark Jayvee Pabilonia from <a href="https://thenounproject.com/browse/icons/term/book/" target="_blank" title="Book Icons">Noun Project</a>
                            <br/>
                            drawer by Mark Jayvee Pabilonia from <a href="https://thenounproject.com/browse/icons/term/drawer/" target="_blank" title="drawer Icons">Noun Project</a>
                            <br/>
                            paperwork by Mark Jayvee Pabilonia from <a href="https://thenounproject.com/browse/icons/term/paperwork/" target="_blank" title="paperwork Icons">Noun Project</a>
                            <br/>
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Bookworm;