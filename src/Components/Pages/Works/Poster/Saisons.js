import { createRef, useState } from "react";
import ProjectRec from "../../../ProjectRec";
import { ScrollReveal } from "../../../Helpers/SmoothScroll";
import ProgressBar from "../../../ScrollBar";
import { Subsection } from "../../../Topic";

function Saisons({ pageHeight, handleSubsectionClick, projRecLink, projRecs }) {
    const [activeItem, setActiveItem] = useState(0);
    const img_src = "https://live.staticflickr.com/65535/52505805268_7fce1ebdc9_k.jpg";

    const items = [
        {
            name: "Intro",
            content:
            <div className="container">
                <div className="topic-container py-5">
                    <ScrollReveal>
                        <div className="topic-title-container mb-5">
                                <h3 className="mb-1 color-dark text-bold date">March 2022</h3>
                                <h2 className="mb-1">Les Saisons de l'Année: Poster Series of Personified Seasons</h2>
                                <h3 className="theme mb-5">Visual Design, Poster, Collage Art</h3>
                                <p className="mb-5">
                                Les saisons de l'année, "Seasons of the year" in French. This poster collection imagines personification of seasons, expressing the atmosphere each season eludes. With the collage technique to interweave human and elements of the weather, flora & fauna, and festivals, the personalities of the seasons are vividly expressed.
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
            <>
                <ScrollReveal>
                    <div className="row">
                        <div className="col-md-3 m-0 px-0 py-5 d-flex flex-column align-items-center">
                            <img className="w-100 mb-3" src="https://live.staticflickr.com/65535/52505261182_086fe94ef3_k.jpg" alt="spring"/>
                        </div>
                        <div className="col-md-3 m-0 px-0 py-5 d-flex flex-column align-items-center">
                            <img className="w-100 mb-3" src="https://live.staticflickr.com/65535/52506222670_0626b3a5c0_k.jpg" alt="summer"/>
                        </div>
                        <div className="col-md-3 m-0 px-0 py-5 d-flex flex-column align-items-center">
                            <img className="w-100 mb-3" src="https://live.staticflickr.com/65535/52505261237_b706eaac4e_k.jpg" alt="autumn"/>
                        </div>
                        <div className="col-md-3 m-0 px-0 py-5 d-flex flex-column align-items-center">
                            <img className="w-100 mb-3" src="https://live.staticflickr.com/65535/52505745701_356f70cd99_k.jpg" alt="winter"/>
                        </div>
                    </div>
                </ScrollReveal>
            </>
        },
        {
            name: "Concepts",
            content:
            <div className="container">
                <div className="topic-container py-5">
                    <ScrollReveal>
                        <h3 className="mb-5">💭 Concepts</h3>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <h6>Printemps: Spring</h6>
                                <p>Romance, birth, blooms, roses, cherry blossoms, humming bird, pink</p>
                            </div>
                            <div className="col-md-6">
                                <h6>Été: Summer</h6>
                                <p>Liveliness, life, exploration, leaves, trees, hydrangeas, sunflowers, parrot, green</p>
                            </div>
                            <div className="col-md-6">
                                <h6>Autumne: Autumn</h6>
                                <p>Abundance, sentiment, coziness, maple leaves, pumpkins, nuts, mushrooms, fox, yellow</p>
                            </div>
                            <div className="col-md-6">
                                <h6>Hiver: Winter</h6>
                                <p>Closure, coldness, christmas, nightlight, snow flakes, pinecones, rosemary, anises, blue</p>
                            </div>
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
        <div id="Saisons">
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


export default Saisons;