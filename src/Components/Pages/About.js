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
                Whether it's <Link to="/Works/uiux/Fairplay">advocating for consumer rights with advanced LLM technology</Link>, <Link to="/Works/uiux/Vision">reimagining transportation through accessible semi-autonomous electric mopeds</Link>, or <Link to="/Works/uiux/Fluffy-Focus">bringing mindfulness to productivity tools</Link>, I've had the privilege of wearing many hats: product designer, UX researcher, frontend engineer, and above all, a collaborative leader. <b>At the core of it all, I'm driven by empathy, curiosity, and the belief that good design can break limits.</b>
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
        <div className="education subsection-wrapper">
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
        <div className="skills subsection-wrapper">
            <div className="about-icon d-flex align-items-center">
                <SkillIcon />
                <h4 className="mx-3">Skills</h4>
            </div>
        
            <div className="row gx-5 subsection-wrapper">
                <div className="col-lg-4 col-sm-6">
                    <h6 className="mb-5">Design</h6>
                    <p>
                    Figma, Photoshop, Illustrator, Premiere, Prototyping, Wireframing, UI flows, User story, User journey, Personas, Design systems, Service blueprints
                    </p>
                </div>
                
                <div className="col-lg-4 col-sm-6">
                    <h6 className="mb-5">Research</h6>
                    <p>
                    Usability Testing, User Interview, Directed Storytelling, Questionnaires, Quantitative Data Analysis, Contextual Inquiry, Heuristic Evaluation, Guerrilla, Speed Dating
                    </p>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <h6 className="mb-5">Engineering</h6>
                    <p>
                    HTML, CSS, Javascript, React, C++, Python, GitHub, Frontend, System Design, Machine Learning, Natural Language Processing
                    </p>
                </div>
            </div>
        </div>
    );
}

function Languages () {
    return (
        <div className="languages subsection-wrapper">
            <div className="about-icon d-flex align-items-center">
                <LangIcon />
                <h4 className="mx-3">Languages</h4>
            </div>
            <div className="row gx-5 subsection-wrapper">
                <div className="col-lg-3 col-sm-6">
                    <h6>English</h6>
                    <p>
                        Bilingual (TOEFL 119/120, TOEIC 990/990, GRE 339/340)
                    </p>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h6>Japanese</h6>
                    <p>Conversational (obtaining JLPT N1 in July, 2025)</p>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h6>Mandarin</h6>
                    <ul>
                        <li>Native</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h6>French</h6>
                    <ul>
                        <li>Beginner</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function Interests () {
    return (
        <div className="interests subsection-wrapper">
            <div className="about-icon d-flex align-items-center">
                <InterestIcon />
                <h4 className="mx-3">Interests</h4>
            </div>

            <div className="row gx-5 subsection-wrapper">
                <div className="col-lg-3 col-sm-6">
                    <h6 className="mb-3">Art</h6>
                    <p>Illustration, Digital art, Journaling, Photagraphy</p>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h6 className="mb-3">Music</h6>
                    <p>Singing, Guitar, Piano, Song writing</p>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h6 className="mb-3">Literature</h6>
                    <p>Reading, Poetry writing</p>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h6 className="mb-3">Mindfulness</h6>
                    <p>Tea zen, Yoga, meditation</p>
                </div>
            </div>
        </div>
    );
}

function ReadMoreBtn () {
    return (
        <div className="readmoreBtn section-wrapper">
            <h5 className="my-4">Let's get serious.</h5>
            <Link className="about-link h-4 d-flex flex-column align-items-center justify-content-center" to="/Works/uiux">
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
export { ReadMoreBtn };