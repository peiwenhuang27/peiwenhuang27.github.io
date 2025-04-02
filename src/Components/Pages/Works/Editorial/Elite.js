import { createRef, useState } from "react";
import ProjectRec from "../../../Navigation/ProjectRec";
import { ScrollReveal } from "../../../Helpers/SmoothScroll";
import ProgressBar from "../../../Helpers/ScrollBar";
import { Subsection } from "../../../Containers/Topic";

function Elite({ pageHeight, handleSubsectionClick, projRecLink, projRecs }) {
    const [activeItem, setActiveItem] = useState(0);
    const img_src = "https://live.staticflickr.com/65535/52505254991_f45213c95a_h.jpg";


    const items = [
        {
            name: "Intro",
            content:
            <div className="container">
                <div className="topic-container py-5">
                    <ScrollReveal>
                        <div className="topic-title-container mb-5">
                                <h3 className="mb-1 color-dark text-bold date">August 2019</h3>
                                <h2 className="mb-1">Elite Camp: 18th NTU x PKU Elite Camp Memory Book</h2>
                                <h3 className="theme mb-5">Visual Design, Graphic Design, Editorial</h3>
                                <p className="mb-5">
                                Elite Camp is an annual summer camp facilitating interaction between  <a className="link" href="https://management.ntu.edu.tw/en" target="_blank" rel="noreferrer noopener">College of Management at National Taiwan University (NTU)</a> and <a className="link" href="https://en.gsm.pku.edu.cn/index.htm" target="_blank" rel="noreferrer noopener">Guanghua School of Management at Peking University (PKU)</a> sponsored by Dr. Samuel Yin. This project was the commemorative brochure produced at the end of the camp. <br/>
The large, brush fonts shows a sense of bravery and boldness, accentuated by the lion stone statues in The Palace Museum at Beijing. Small texts of city names decorating the background are cities visited in the camp. In addition, the overall nostalgic theme is created by adding vintage filters to the photo to mimic old newspapers.
                                </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="subsection-wrapper">
                            <div className="row">
                                <div className="topic-desc-container col-md-6 mb-5">
                                    <h6 className="theme mb-3">Duration</h6>
                                    <ul>
                                        <li>1 month</li>
                                    </ul>
                                </div>
                                <div className="topic-desc-container col-md-6 mb-5">
                                    <h6 className="theme mb-3">Tool</h6>
                                    <ul>
                                        <li>Illustrator</li>
                                        <li>InDesign</li>
                                    </ul>
                                </div>
                                <div className="topic-desc-container col-md-6 mb-5">
                                    <h6 className="theme mb-3">Role</h6>
                                    <ul>
                                        <li>Lead Visual Designer</li>
                                    </ul>
                                </div>
                                <div className="topic-desc-container col-md-6 mb-5">
                                    <h6 className="theme mb-3">Team</h6>
                                    <ul>
                                        <li>10 People</li>
                                    </ul>
                                </div>
                                <div className="topic-desc-container col-md-12 mb-5">
                                    <h6 className="theme mb-3">Responsibilities</h6>
                                    <ul>
                                        <li>Spearheaded book visuals, cover design, section pages</li>
                                        <li>Established the design system, including the typology, color scheme, and components</li>
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
                    <div className="row justify-content-end">
                        <img className="col-md-8" src="https://live.staticflickr.com/65535/52505731565_b2ed905e93_h.jpg" alt="pages preview" />
                    </div>
                </ScrollReveal>
            </>
        }
    ];

    items.map((item, key) => {
        item.id = key;
        item.ref = createRef(null);
    });

    return (
        <div id="Elite-Camp">
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


export default Elite;