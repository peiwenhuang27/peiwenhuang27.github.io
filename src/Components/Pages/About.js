import { useEffect } from "react";
import { Link } from "react-router-dom";
import Transitions from "../Helpers/Transition";
import { EduIcon, SkillIcon, LangIcon, InterestIcon, ArrowIcon } from "../Icons";

import { ScrollReveal } from "../Helpers/SmoothScroll";

function Intro () {
    return (
        <div className="about-intro row">
            
            <div className="row gx-5 justify-content-center">
                <div className="mb-5 pfp-container col-md-4">
                    <div className="pfp-round" />
                </div>
                <div className="col-md-8">
                    <h4 className="mb-3">“What if there were no limits to human potential?”</h4>
                
                <p>
                This question fuels my work as a product designer. I thrive on the challenge of enriching lives and pushing boundaries. With the right tools, designed at the right time, we can transform dreams into realities and turn pain points into opportunities.
                <br/><br/>
                Whether it's <Link to="/Works/design/Fairplay">advocating for consumer rights with advanced LLM technology</Link>, <Link to="/Works/design/Vision">reimagining transportation through accessible semi-autonomous electric mopeds</Link>, or <Link to="/Works/design/Fluffy-Focus">bringing mindfulness to productivity tools</Link>, I've had the privilege of wearing many hats: product designer, UX researcher, frontend engineer, and above all, a collaborative leader. <b>At the core of it all, I'm driven by empathy, curiosity, and the belief that good design can break limits.</b>
                <br/><br/>
                When I'm not designing, you'll find me drawing, making music, writing poetry, or hunting down the best cafes in town (while perfecting my own tea game at home). If you're passionate about designing for impact—or just want to swap tea recommendations—let's connect!
                </p>
                </div>
            </div>
        </div>
    );
}

function Education () {
    return (
        <div className="education section-wrapper">
            <div className="about-icon d-flex align-items-center">
                <EduIcon />
                <h4 className="mx-3">Education</h4>
            </div>
            
            <ScrollReveal>
                <div className="row subsection-wrapper">
                    <div className="col-md-6 d-flex flex-column align-items-start">
                        <h5 className="secondary mb-1">Carnegie-Mellon University, <br/> Master of Human-Computer Interaction</h5>
                        <p className="caption mb-5">August 2023 - August 2024 | Pittsburgh, Pennsylvania</p>
                        <p className="w-sizer-lg mb-0">Overall GPA:4.19/4.30(Cumulative QPA: 4.20/4.30)</p>
                        <p className="w-sizer-lg">
                        Courses: Interaction Design Fundamentals, Persuasive Design, User-centered Research & Evaluation
                        </p>
                    </div>
                
                    <div className="col-md-6 d-flex flex-column align-items-start">
                        <h5 className="secondary mb-1">National Taiwan University, <br/> BBA in Information Management</h5>
                        <p className="caption mb-5">September 2018 - June 2022 | Taipei, Taiwan</p>
                        <p className="w-sizer-lg mb-0">Major GPA: 4.19/4.30 | Overall GPA: 4.16/4.30<br/>(received 2 NTU Presidential Awards)</p>
                        <p className="w-sizer-lg">
                        Graduate level courses: Social Media Analytics, Machine Learning, Information Retrieval and Text Mining, Big Data and Business Analytics.
                        </p>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}

function Skills () {
    return (
        <div className="skills section-wrapper">
            <div className="about-icon d-flex align-items-center">
                <SkillIcon />
                <h4 className="mx-3">Skills</h4>
            </div>
        
            <div className="row subsection-wrapper">
                <div className="col-lg-3 col-sm-6">
                    <h6>Design</h6>
                    <ul>
                        <li>Figma</li>
                        <li>Illustrator</li>
                        <li>Photoshop</li>
                        <li>InDesign</li>
                        <li>Premiere Pro</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h6>Programming</h6>
                    <ul>
                        <li>C++</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS/SCSS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h6>Tool/Environment</h6>
                    <ul>
                        <li>Docker</li>
                        <li>GitHub</li>
                        <li>VS Code</li>
                        <li>Jupyter</li>
                        <li>Google Cloud Platform</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
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
            <div className="about-icon d-flex align-items-center">
                <LangIcon />
                <h4 className="mx-3">Languages</h4>
            </div>
            <div className="w-sizer row mt-3 justify-content-center">
                <div className="col-md-6 d-flex flex-column align-items-center mb-5">
                    <h6>English</h6>
                    <ul>
                        <li>Superior</li>
                        <li><b className="highlight">TOEFL 119/120</b></li>
                        <li>GRE 339/340</li>
                    </ul>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center mb-5">
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
            <div className="about-icon d-flex align-items-center">
                <InterestIcon />
                <h4 className="mx-3">Interests</h4>
            </div>

            <div className="row subsection-wrapper">
                <div className="col-lg-3 col-sm-6">
                    <h6>Art</h6>
                    <ul>
                        <li>Illustration</li>
                        <li>Digital Art</li>
                        <li>Journaling</li>
                        <li>Photagraphy</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h6>Music</h6>
                    <ul>
                        <li>Singing</li>
                        <li>Guitar</li>
                        <li>Piano</li>
                        <li>Song Writing</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h6>Literature</h6>
                    <ul>
                        <li>Reading</li>
                        <li>Poetry Art</li>
                        <li>Prose</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
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
        <div className="readmoreBtn section-wrapper">
            <h5 className="my-4">Let's get serious.</h5>
            <Link className="about-link h-4 d-flex flex-column align-items-center justify-content-center" to="/Works/design">
            View My Works in Design, Research, and Engineering »
                
            </Link>
        </div>
    );
}

function About () {
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
export { ReadMoreBtn };