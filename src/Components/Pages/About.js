import { useEffect } from "react";
import { Link } from "react-router-dom";
import Transitions from "../Transition";
import { EduIcon, SkillIcon, LangIcon, InterestIcon, ArrowIcon } from "../Icons";

import { ScrollReveal } from "../Helpers/SmoothScroll";

function Intro () {
    return (
        <div className="about-intro row">
            <h4 className="mb-5 ">Hi! I am Peiwen, pleasure to meet you...</h4>
            <div className="row flex-row-reverse justify-content-center">
                <div className="mb-5 pfp-container col-md-4">
                    <div className="pfp-round" />
                </div>
                <div className="px-5 col-md-8 about-intro-container">
                    
                    <p>
                    I'm in constant pursuit of <b className="p-bold">enriching people's lives through empathy and creativity</b>. Further fueled by curiosity, I aspire to help build a world of justness and abundance by challenging the status quo.
                    </p>
                    <p>
                    With my expertise in UX design, research, and engineering, I designed apps to combat anxiety, envisioned semi-autonomous vehicle to redefine transportation paradigm, and built game to cultivate mindfulness. I also utilized my communication skills as the team leader, project manager, and presenter.
                    </p>
                    <p>
                    You may find me channeling my creativity through drawing, singing, and writing in my free time as emotional outlets. Let’s talk art if you are a kindred spirit!
                    </p>
                </div>
            </div>
        </div>
    );
}

function Education () {
    return (
        <div className="education section-wrapper">
            <div className="about-icon d-flex flex-column align-items-center">
                <EduIcon />
                <h4>Education</h4>
            </div>
            
            <div className="w-100 d-flex flex-column align-items-center mb-5">
                <h5 className="text-center mb-2">Carnegie-Mellon University, <br/> Master of Human-Computer Interaction</h5>
                <p className="caption mb-4">August 2023 - August 2024 (expected) | Pittsburgh, Pennsylvania</p>
                <p className="text-center w-sizer-lg mb-2">Overall GPA: <b className="highlight">4.19/4.30</b> (Cumulative QPA: 4.20/4.30)</p>
                <p className="text-center w-sizer-lg">
                Courses: Interaction Design Fundamentals, Persuasive Design, User-centered Research & Evaluation
                </p>
            </div>
            
            <div className="w-100 d-flex flex-column align-items-center">
                <h5 className="text-center mb-2">National Taiwan University, <br/> Bachelor of Business Administration in Information Management</h5>
                <p className="caption mb-4">September 2018-June 2022 | Taipei, Taiwan</p>
                <p className="text-center w-sizer-lg mb-2">Major GPA: 4.19/4.30 | Overall GPA: 4.16/4.30 (received 2 NTU Presidential Awards)</p>
                <p className="text-center w-sizer-lg">
                Graduate level courses: Human-Computer Interaction, Social Media Analytics, Machine Learning, Information Retrieval and Text Mining, Big Data and Business Analytics.
                </p>
            </div>
        </div>
    );
}

function Skills () {
    return (
        <div className="skills section-wrapper">
            <div className="about-icon d-flex flex-column align-items-center">
                <SkillIcon />
                <h4>Skills</h4>
            </div>
        
            <div className="w-100 row mt-3">
                <div className="col-md-3 d-flex flex-column align-items-center mb-5">
                    <h6>Design</h6>
                    <ul>
                        <li>Figma</li>
                        <li>Illustrator</li>
                        <li>Photoshop</li>
                        <li>InDesign</li>
                        <li>Premiere Pro</li>
                    </ul>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center mb-5">
                    <h6>Programming</h6>
                    <ul>
                        <li>C++</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS/SCSS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center mb-5">
                    <h6>Tool/Environment</h6>
                    <ul>
                        <li>Docker</li>
                        <li>GitHub</li>
                        <li>VS Code</li>
                        <li>Jupyter</li>
                        <li>Google Cloud Platform</li>
                    </ul>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center mb-5">
                    <h6>Framework</h6>
                    <ul>
                        <li>Tensorflow</li>
                        <li>Keras</li>
                        <li>PyTorch</li>
                        <li>Scikit-learn</li>
                        <li>ReactJS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function Languages () {
    return (
        <div className="languages section-wrapper d-flex flex-column align-items-center">
            <div className="about-icon d-flex flex-column align-items-center">
                <LangIcon />
                <h4>Languages</h4>
            </div>
            <div className="w-100 row mt-3 justify-content-center">
                <div className="col-md-3 d-flex flex-column align-items-center mb-5">
                    <h6>English</h6>
                    <ul>
                        <li>Superior</li>
                        <li><b className="highlight">TOEFL 119/120</b></li>
                        <li>GRE 339/340</li>
                    </ul>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center mb-5">
                    <h6>Mandarin</h6>
                    <ul>
                        <li>Native</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function Interests () {
    return (
        <div className="interests section-wrapper">
            <div className="about-icon d-flex flex-column align-items-center">
                <InterestIcon />
                <h4>Interests</h4>
            </div>

            <div className="w-100 row mt-3">
                <div className="col-md-3 d-flex flex-column align-items-center mb-5">
                    <h6>Art</h6>
                    <ul>
                        <li>Illustration</li>
                        <li>Digital Art</li>
                        <li>Journaling</li>
                        <li>Photagraphy</li>
                    </ul>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center mb-5">
                    <h6>Music</h6>
                    <ul>
                        <li>Singing</li>
                        <li>Guitar</li>
                        <li>Piano</li>
                        <li>Song Writing</li>
                    </ul>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center mb-5">
                    <h6>Literature</h6>
                    <ul>
                        <li>Reading</li>
                        <li>Poetry Art</li>
                        <li>Prose</li>
                    </ul>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center mb-5">
                    <h6>Mindfulness</h6>
                    <ul>
                        <li>Yoga</li>
                        <li>Meditation</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function ReadMoreBtn () {
    return (
        <div className="section-wrapper d-flex flex-column align-items-center">
            <h5 className="my-4">Let's get serious.</h5>
            <Link className="about-link h-4 d-flex" to="/Works/design">View My Works in Design, Research, and Engineering<span><ArrowIcon /></span></Link>
        </div>
    );
}

function About ({ variants }) {
    useEffect(() => {
        if (window.instgrm)
            window.instgrm.Embeds.process();
    }, []);

    return (
        <Transitions>
        <div className="about">
            <div className="topic-container">
                <div className="section-wrapper">
                    <ScrollReveal>
                        <Intro />
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <Education />
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <Skills />
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <Languages />
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <Interests />
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <ReadMoreBtn />
                    </ScrollReveal>  
                    
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