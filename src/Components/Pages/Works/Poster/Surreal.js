import { createRef, useState } from "react";
import ProjectRec from "../../../Navigation/ProjectRec";
import { ScrollReveal } from "../../../Helpers/SmoothScroll";
import ProgressBar from "../../../Helpers/ScrollBar";
import { Subsection } from "../../../Containers/Topic";

function Surreal({ pageHeight, handleSubsectionClick, projRecLink, projRecs }) {
    const [activeItem, setActiveItem] = useState(0);
    const img_src = "https://live.staticflickr.com/65535/52505805468_8e26ceb65e_k.jpg";

    const items = [
        {
            name: "Intro",
            content:
            <div className="container">
                <div className="topic-container py-5">
                    <ScrollReveal>
                        <div className="topic-title-container mb-5">
                                <h3 className="mb-1 color-dark text-bold date">March 2022</h3>
                                <h2 className="mb-1">New Era: Poster of An Envisioned Future</h2>
                                <h3 className="theme mb-5">Visual Design, Poster, Collage Art, Surrealism</h3>
                                <p className="mb-5">
                                What will the future world look like?<br/><br/>
                                This work explores the possibility of the future of the universe and planets. <br/>
                                The crystall ball manifests the current that which will have been the past, a time long gone into the parallel track of the world.
                                Whale, jelly fish, and stingray swim across the universe, sharing the infinite space with Saturn, as if the world has sunk deep into an ocean.
                                The pair of astronauts gaze afar with hands intertwined symbolizes human's spirit to stand in solidarity no matter the circumstances.
                                
                                </p>

                                
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="subsection-wrapper">
                            <div className="row">
                                <div className="topic-desc-container col-md-6 mb-5">
                                    <h6 className="theme mb-3">Duration</h6>
                                    <ul>
                                        <li>1 week</li>
                                    </ul>
                                </div>
                                <div className="topic-desc-container col-md-6 mb-5">
                                    <h6 className="theme mb-3">Tool</h6>
                                    <ul>
                                        <li>Photoshop</li>
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
                                        <li>Solo Project</li>
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
            <div className="container">
                <div className="topic-container py-5">
                    <ScrollReveal>
                    <div className="p-5">
                            <img className="w-sizer" src="https://live.staticflickr.com/65535/52505393697_3a8aa1ea45_k.jpg" alt="new era poster"/>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        }
    ];

    items.map((item, key) => {
        item.id = key;
        item.ref = createRef(null);
    });

    return (
        <div id="NewEra">
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


export default Surreal;