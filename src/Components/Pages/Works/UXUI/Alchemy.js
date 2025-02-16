import { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProjectRec from "../../../ProjectRec";
import { ScrollReveal } from "../../../Helpers/SmoothScroll";

function Alchemy ({ pageHeight, handleSubsectionClick, projRecLink, projRecs }) {
    const [isLoading, setIsLoading] = useState(false);
    const img_src = 'https://live.staticflickr.com/65535/53802506955_acc7ed3403_o.png';
    const hideSpinner = () => {
        setIsLoading(false);
    };

    return (
        <div id="Mindfulness-Alchemy">
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img_src})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <ScrollReveal>
                        <div className="topic-title-container mb-5">
                                <h3 className="mb-1 color-dark text-bold date">October 2023 - December 2023</h3>
                                <h2 className="mb-1">Mindfulness Alchemy: Web 3D Role-playing Game of Self-care Practice</h2>
                                <h3 className="theme mb-5">Game Design, Web Developing, Social Computing, Mental Health, Self-Care</h3>
                                <p className="mb-5">
                                Are you, too, feeling a bit worn out from the fast-paced world? Mindful Alchemy is a <b>web-based 3D role-playing game to promote mindfulness</b> with gamified practices of breathing techniques, self-affirmation, and medicinal herb knowledge.
                                <br/><br/>Join me in this magical land, and enjoy a moment of peace.                                
                                </p>
                                <button className="view-more-btn h-6">
                                    <a href="https://peiwenhuang.github.io/bunny-alchemist/" target="_blank" rel="noreferrer noopener">
                                        Play Game
                                    </a>
                                </button>

                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="section-wrapper row mb-5">
                            <div className="topic-desc-container col-md-6 col-sm-6 mb-5">
                                <h6 className="theme mb-3">Duration </h6>
                                <ul>
                                    <li>3 months</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col-md-6 col-sm-6 mb-5">
                                <h6 className="theme mb-3">Tool</h6>
                                <ul>
                                    <li>Figma</li>
                                    <li>ReactJS & R3F</li>
                                    <li>SketchFab</li>
                                    <li>BlockadeLab</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col-md-6 col-sm-6 mb-5">
                                <h6 className="theme mb-3">Role</h6>
                                <ul>
                                    <li>Game Designer</li>
                                    <li>UI Engineer</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col-md-6 col-sm-6 mb-5">
                                <h6 className="theme mb-3">Team</h6>
                                <ul>
                                    <li>Solo Project</li>
                                </ul>
                            </div>
                            
                            <div className="topic-desc-container col mb-5">
                                <h6 className="theme mb-3">Responsibilities</h6>
                                <ul className="list-disc">
                                    <li>Mapping attitudinal goals to gamified elements</li>
                                    <li>Designing UI visuals</li>
                                    <li>Developing game interface</li>
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>

            


            <ScrollReveal>
                <ProjectRec projects={projRecs} moreLink={projRecLink} />
            </ScrollReveal>

        </div>
    );
};

export default Alchemy;