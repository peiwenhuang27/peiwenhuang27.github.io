import { createRef, useState } from "react";
import ProjectRec from "../../../Navigation/ProjectRec";
import { ScrollReveal } from "../../../Helpers/SmoothScroll";
import ProgressBar from "../../../Helpers/ScrollBar";
import { Subsection } from "../../../Containers/Topic";

function Hanabi({ pageHeight, handleSubsectionClick, projRecLink, projRecs }) {
    const [activeItem, setActiveItem] = useState(0);
    const img_src = "https://live.staticflickr.com/65535/52505936586_9dd5f32352_k.jpg";

    const items = [
        {
            name: "Intro",
            content:
            <div className="container">
                <div className="topic-container py-5">
                    <ScrollReveal>
                        <div className="topic-title-container mb-5">
                                <h3 className="mb-1 color-dark text-bold date">March 2020</h3>
                                <h2 className="mb-1">Hanabi: NTU IM Night Event Visuals</h2>
                                <h3 className="theme mb-5">Visual Design, Graphic Design, Event Visuals</h3>
                                <p className="mb-5">
                                花火, hanabi-- is the Japanese word of “fireworks”. The background of the design uses navy blue for a nighttime feeling, accentuating the main peach pink palette. The radial shape of the design imitates firework explosion, the middle of which is a kaleidoscopic pattern. This design implies the similarity between life and kaleidoscope; ever-changing, forming a uniquely beautiful view at any moment. Some moments in, nevertheless, are as resplendent as fireworks, blossoming in the nightsky of life.  
                                </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="subsection-wrapper">
                            <div className="row">
                                <div className="topic-desc-container col-md-6 mb-5">
                                    <h6 className="theme mb-3">Duration</h6>
                                    <ul>
                                        <li>2 weeks</li>
                                    </ul>
                                </div>
                                <div className="topic-desc-container col-md-6 mb-5">
                                    <h6 className="theme mb-3">Tool</h6>
                                    <ul>
                                        <li>Illustrator</li>
                                    </ul>
                                </div>
                                <div className="topic-desc-container col-md-6 mb-5">
                                    <h6 className="theme mb-3">Role</h6>
                                    <ul>
                                        <li>Visual Designer</li>
                                    </ul>
                                </div>
                                <div className="topic-desc-container col-md-6 mb-5">
                                    <h6 className="theme mb-3">Team</h6>
                                    <ul>
                                        <li>Freelance Project</li>
                                    </ul>
                                </div>
                                <div className="topic-desc-container col-md-12 mb-5">
                                    <h6 className="theme mb-3">Responsibilities</h6>
                                    <ul>
                                        <li>Designed the event visual logo</li>
                                        <li>Established the event's online presence, including social media profile</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        },
        {
            name: "Demo",
            content:
            <>
                <ScrollReveal>
                    <div className="row justify-content-start mb-3">
                        <img className="col-md-8" src={img_src} alt="cover mockup" />
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className="row justify-content-end mb-3">
                        <img className="col-md-8" src="https://live.staticflickr.com/65535/52506209299_67ecabf218_h.jpg" alt="logo preview" />
                    </div>
                </ScrollReveal>
            </>
        },
    ];

    items.map((item, key) => {
        item.id = key;
        item.ref = createRef(null);
    });

    return (
        <div id="Hanabi">
            <div>
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
                    <ProjectRec projects={projRecs} moreLink={projRecLink} />
                </ScrollReveal>
            </div>
        </div>
    );
};


export default Hanabi;