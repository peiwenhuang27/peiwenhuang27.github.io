import { useEffect } from "react";
import { Link } from "react-router-dom";
import Transitions from "../Transition";
import { EduIcon, SkillIcon, LangIcon, InterestIcon } from "../Icons";
import { InstaPost } from "../Helpers/Insta";
import Iframe from "react-iframe";

function About () {
    useEffect(() => {
        if (window.instgrm)
            window.instgrm.Embeds.process();
    }, []);

    return (
        <Transitions>
        <div className="about">
            <div className="container">
                <div className="topic-container section-wrapper">
                    <div className="about-container row mb-5">
                        <div className="col-md-6 p-1 about-intro-container">
                            <h1 className="color-dark heading-1 mb-3">Hi! I am Pei-Wen (Joanne), <br/>pleasure to meet you!</h1>
                            <p>
                                I am a recent graduate with B.B.A. in Information Management from National Taiwan University in pursuit of humanity via HCI, UX/UI, and Social Computing. I am currently pursuing a Master’s degree in the field of HCI to extend my capability and initiate studies/projects with an impactful outreach.
                            </p>
                            <p>
                            <b className="">I aim to promote mental health and emotional wellness 
                            with my comprehensive technical skillset, communication skills and a keen perception.</b> I utilize technology
                            to develop human-computer interactions to alleviate human’s internal suffering.

                            </p>
                            <p>
                            With my expertise in data science, deep learning, NLP, UX/UI design, graphic design, and business knowledge, I executed projects to help people suffering from anxiety or depression and provided convenient solutions to user frustrations. I also utilized my social skills to act as the team leader, project manager, and presenter in my teams.
                            </p>
                        </div>
                        <div className="col-md-6 px-3">
                            <div className="pfp-round" />
                        </div>
                    </div>

                    <div className="education section-wrapper">
                        <div className="about-icon d-flex flex-column align-items-center">
                            <EduIcon />
                            <h2 className="heading-1 text-bold color-gray-400 my-3">Education</h2>
                        </div>
                        
                        <span className="heading-2 mb-1 text-center text-bold ">National Taiwan University, B.B.A. in Information Management</span>
                        <p className="text-center color-gray mb-4">September 2018-June 2022 | Taipei, Taiwan</p>
                        <p className="text-center w-sizer-lg mb-2">Major GPA: <b className="color-bright">4.19/4.30</b> | Overall GPA: 4.16/4.30 (received 2 NTU Presidential Awards)</p>
                        <p className="text-center w-sizer-lg">
                        Graduate level courses: Human-Computer Interaction, Social Media Analytics,
Machine Learning, Information Retrieval and Text Mining, Big Data and
Business Analytics.
                        </p>
                    </div>

                    <div className="skills section-wrapper">
                        <div className="about-icon d-flex flex-column align-items-center">
                            <SkillIcon />
                            <h2 className="heading-1 text-bold color-gray-400 my-3">Skills</h2>
                        </div>
                    
                        <div className="w-100 row mt-3">
                            <div className="col-md-3 d-flex flex-column align-items-center mb-5">
                                <h3 className="skill-heading heading-3">Programming</h3>
                                <ul className="d-flex flex-column align-items-center">
                                    <li>C++</li>
                                    <li>Python</li>
                                    <li>HTML</li>
                                    <li>CSS/SCSS</li>
                                    <li>Javascript</li>
                                </ul>
                            </div>
                            <div className="col-md-3 d-flex flex-column align-items-center mb-5">
                                <h3 className="skill-heading heading-3">Framework</h3>
                                <ul className="d-flex flex-column align-items-center">
                                    <li>Tensorflow</li>
                                    <li>Keras</li>
                                    <li>PyTorch</li>
                                    <li>Scikit-learn</li>
                                    <li>ReactJS</li>
                                    <li>Neural Compressor</li>
                                </ul>
                            </div>
                            <div className="col-md-3 d-flex flex-column align-items-center mb-5">
                                <h3 className="skill-heading heading-3">Tool/Environment</h3>
                                <ul className="d-flex flex-column align-items-center">
                                    <li>Docker</li>
                                    <li>GitHub</li>
                                    <li>VS Code</li>
                                    <li>Jupyter</li>
                                    <li>Google Cloud Platform</li>
                                    <li>Weights & Biases</li>
                                </ul>
                            </div>
                            <div className="col-md-3 d-flex flex-column align-items-center mb-5">
                                <h3 className="skill-heading heading-3">Design</h3>
                                <ul className="d-flex flex-column align-items-center">
                                    <li>Figma</li>
                                    <li>Illustrator</li>
                                    <li>Photoshop</li>
                                    <li>InDesign</li>
                                    <li>Premiere Pro</li>
                                    <li>After Effects</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="languages section-wrapper d-flex flex-column align-items-center">
                        <div className="about-icon d-flex flex-column align-items-center">
                            <LangIcon />
                            <h2 className="heading-1 text-bold color-gray-400 my-3">Languages</h2>
                        </div>
                        <ul className="w-sizer d-flex flex-column align-items-center">
                            <li className="w-100 d-flex justify-content-between">
                                <span className="heading-3 text-bold">English:</span>
                                <span className="heading-3">Superior (<b className="color-bright">TOEFL: 119/120, GRE: 339/340, TOEIC: 990/990</b>)</span>
                            </li>
                            <li className="w-100 d-flex justify-content-between">
                                <span className="heading-3 text-bold">Mandarin:</span>
                                <span className="heading-3">Native</span>
                            </li>
                            <li className="w-100 d-flex justify-content-between">
                                <span className="heading-3 text-bold">French:</span>
                                <span className="heading-3">Novice</span>
                            </li>
                            <li className="w-100 d-flex justify-content-between">
                                <span className="heading-3 text-bold">Japanese:</span>
                                <span className="heading-3">Novice</span>
                            </li>
                        </ul>
                    </div>

                    <div className="interests section-wrapper">
                        <div className="about-icon d-flex flex-column align-items-center">
                            <InterestIcon />
                            <h2 className="heading-1 text-bold color-gray-400 my-3">Interests</h2>
                        </div>

                        <div className="w-100 row mt-3">
                            <div className="col-md-4 d-flex flex-column align-items-center mb-5">
                                <h3 className="skill-heading heading-3">Art</h3>
                                <ul className="d-flex flex-column align-items-center">
                                    <li>Illustration</li>
                                    <li>Digital Art</li>
                                    <li>Journaling</li>
                                    <li>Photagraphy</li>
                                </ul>
                            </div>
                            <div className="col-md-4 d-flex flex-column align-items-center mb-5">
                                <h3 className="skill-heading heading-3">Music</h3>
                                <ul className="d-flex flex-column align-items-center">
                                    <li>Singing</li>
                                    <li>Guitar</li>
                                    <li>Piano</li>
                                    <li>Song Writing</li>
                                </ul>
                            </div>
                            <div className="col-md-4 d-flex flex-column align-items-center mb-5">
                                <h3 className="skill-heading heading-3">Mindfulness</h3>
                                <ul className="d-flex flex-column align-items-center">
                                    <li>Yoga</li>
                                    <li>Meditation</li>
                                </ul>
                            </div>
                        </div>

                        <div className="section-wrapper">
                            <h2 className="heading-2 mb-5">In my free time, I capture beauty of a moment...</h2>
                            <div className="photo-feed d-flex justify-content-center flex-wrap">
                                <img id="photo-1" className="photo p-1" alt="photagraphy work" src="https://unsplash.com/photos/tJXLT5m5DBw/download?ixid=MnwxMjA3fDB8MXxhbGx8MXx8fHx8fDJ8fDE2NjkzODE0Njk&force=true&w=1920"></img>
                                <img id="photo-2" className="photo p-1" alt="photagraphy work" src="https://64.media.tumblr.com/e7397c177b0d0a153d0dc56b8e6bca29/17a097e06bde82be-7b/s2048x3072/4aabc5a8b378622bb42c452c73b460bb59348f87.jpg"></img>
                                <img id="photo-3" className="photo p-1" alt="photagraphy work" src="https://64.media.tumblr.com/d67f70e908c081ebf6869ac1dd0a4653/2bc0cb1353ea6c46-8e/s2048x3072/e8cee6bed8bc71cc5ee750349d003bb807b61292.jpg"></img>
                                <img id="photo-4" className="photo p-1" alt="photagraphy work" src="https://64.media.tumblr.com/fc61c552668369bc97c86852caa8248d/091ae0c19a1c5d66-0d/s2048x3072/b0f2b53a08db5879758ac897d0ad3db760098181.jpg"></img>
                                <img id="photo-5" className="photo p-1" alt="photagraphy work" src="https://64.media.tumblr.com/ec2bcd40149c023b98f452a6266ad612/091ae0c19a1c5d66-2f/s2048x3072/5db1a7a005d2147fdfe8acbc39f4ec451cb1da96.jpg"></img>
                                <img id="photo-6" className="photo p-1" alt="photagraphy work" src="https://unsplash.com/photos/TThaFalzB4o/download?ixid=MnwxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE2NjkzODE0Njk&force=true&w=1920"></img>
                                <img id="photo-7" className="photo p-1" alt="photagraphy work" src="https://64.media.tumblr.com/aef8b08635d4ccc3fda26ab972651646/ab5d0d4f1918d258-d5/s2048x3072/3d7a6041b9a2e2201433498b329af6dab408b1a4.jpg"></img>
                                <img id="photo-9" className="photo p-1" alt="photagraphy work" src="https://64.media.tumblr.com/1d4b79c03b9311450892810ae278ba2f/61b3a9bbf50c2655-88/s1280x1920/594d7bcd4810b623e3a36567632452bbc4223513.jpg"></img>
                                <img id="photo-8" className="photo p-1" alt="photagraphy work" src="https://64.media.tumblr.com/3421e078bff93ceea6b64a9a0bd95d09/ab5d0d4f1918d258-d1/s2048x3072/5420a698291482cd2b9daf13e0914532a3a07121.jpg"></img>
                                
                            </div>
                        </div>

                        <div className="section-wrapper row display-row-reverse align-items-center">
                            <h2 className="col-md-6 text-center heading-2 mb-3">Share my art on <a className="bold-link" href="https://www.instagram.com/pwh_27/" target="_blank" rel="noreferrer noopenner">Instagram</a>...</h2>
                            <div className="col-md-6">
                                <InstaPost
                                dataInstaPermalink="https://www.instagram.com/p/Ck049AgByQy/?utm_source=ig_embed&amp;utm_campaign=loading"
                                linkAHref_1="https://www.instagram.com/p/Ck049AgByQy/?utm_source=ig_embed&amp;utm_campaign=loading"
                                linkAHref_2="https://www.instagram.com/p/Ck049AgByQy/?utm_source=ig_embed&amp;utm_campaign=loading"></InstaPost>
                            </div>
                            
                        </div>

                        <div className="section-wrapper row display-row align-items-center ">
                            <h2 className="col-md-6 text-center heading-2 mb-3">And post music/covers on <a className="bold-link" href="https://www.youtube.com/@pwh_27/featured" target="_blank" rel="noreferrer noopenner">YouTube</a>!</h2>
                            <div className="col-md-6">
                            <Iframe width="560" height="315" src="https://www.youtube.com/embed/6UTG4yMHs8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                            </div>
                            
                        </div>

                        <div className="section-wrapper d-flex flex-column align-items-center">
                            <h2 className="about-work-title mt-5 mb-4">Let's get serious.</h2>
                            <Link className="about-link" to="/#works">View My Works in HCI, Data Science, and More <span className="px-3">➙</span></Link>
                        </div>
                    </div>
                    
                </div>
                
                <div className="topic-container">
                    <p className="about-references text-center">Resources: education by Creative Mania from <a href="https://thenounproject.com/browse/icons/term/education/" target="_blank" rel="noreferrer noopenner" title="education Icons">Noun Project</a> Business by Creative Mania from <a href="https://thenounproject.com/browse/icons/term/business/" target="_blank" rel="noreferrer noopenner" title="Business Icons">Noun Project</a> Travel by Creative Mania from <a href="https://thenounproject.com/browse/icons/term/travel/" target="_blank" rel="noreferrer noopenner" title="Travel Icons">Noun Project</a> flowers by Creative Mania from <a href="https://thenounproject.com/browse/icons/term/flowers/" target="_blank" rel="noreferrer noopenner" title="flowers Icons">Noun Project</a> export by Satisfactory from <a href="https://thenounproject.com/browse/icons/term/export/" target="_blank" rel="noreferrer noopenner" title="export Icons">Noun Project</a>
                    </p>
                </div>
            </div>
        </div>
        </Transitions>

    );
};

export default About;