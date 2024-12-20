import { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProjectRec from "../../../ProjectRec";
import { ScrollReveal } from "../../../Helpers/SmoothScroll";

function SLZ () {
    const [isLoading, setIsLoading] = useState(false);

    const img_src = 'https://live.staticflickr.com/65535/53740501173_cf89e967ac_h.jpg';
    
    const hideSpinner = () => {
        setIsLoading(false);
    };



    return (
        <div id="SLZ">
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img_src})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <ScrollReveal>
                        <div className="topic-title-container mb-5">
                                <h3 className="mb-1 color-dark text-bold date">September 2023 - December 2023</h3>
                                <h2 className="mb-1">Park Smart, Deliver Fast: Pittsburgh Smart Loading Zone Google Map Integration</h2>
                                <h3 className="theme mb-5">User Research, City Planning</h3>
                                <p className="mb-5">
                                Smart Loading Zones (SLZs) are a program introduced by the City of Pittsburgh to implement short-term loading/parking zones to increase curbside parking turnover, reduce idling and thus carbon emissions. To help tackle the parking problem and help Pittsburgh residents adopt to SLZs, we pinpointed pain points in the delivery process through research and designed a Google Map integration visualizing nearby SLZs during navigation to provide parking options real-time and thereby encourage SLZ usage.
                                </p>
                                <button className="view-more-btn h-6">
                                    <a href="https://medium.com/@pwh27design/park-smart-deliver-swift-981f54f25ee9" target="_blank" rel="noreferrer noopener">
                                        Read More
                                    </a>
                                </button>

                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="section-wrapper row mb-5">
                            <div className="topic-desc-container col-md-4 col-sm-6 mb-5">
                                <h6 className="theme mb-3">Duration </h6>
                                <ul>
                                    <li>4 months</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col-md-4 col-sm-6 mb-5">
                                <h6 className="theme mb-3">Role</h6>
                                <ul>
                                    <li>Lead Researcher</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col-md-4 col-sm-6 mb-5">
                                <h6 className="theme mb-3">Team</h6>
                                <ul>
                                    <li>4 people</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col-md-4 col-sm-6 mb-5">
                                <h6 className="theme mb-3">Tool</h6>
                                <ul>
                                    <li>Figma</li>
                                    <li>Figjam</li>
                                    <li>Miro</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col mb-5">
                                <h6 className="theme mb-3">Responsibilities</h6>
                                <ul className="row">
                                    <li className="col-md-6">Moderating 4 user interviews</li>
                                    <li className="col-md-6">Producing research reports</li>
                                    <li className="col-md-6">Leading research synthesis sessions</li>
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>

            


            <ScrollReveal>
                <ProjectRec projects={projects} moreLink={"/Works/design"} />
            </ScrollReveal>

        </div>
    );
};

export default SLZ;

const projects = [
    {
        'link': '/Works/design/Fairplay',
        'data': {
            'title': 'FairPlay', 
            'id': 'Fairplay',
            'tags': ['Product Design', 'App Design', 'Consumer Products', 'Advocacy'],
            'desc': 'Your AI Advocate for All Things Customer Service',
            'img': 'https://i.imgur.com/RcjjaFq.png',
            'ph': 'https://i.imgur.com/RcjjaFq.png',
        }
    },
    {
        'link': '/Works/research/Petit-Mood',
        'data': {
            'title': 'Petit Mood', 
            'id': 'Petit-Mood',
            'tags': ['HCI', 'UX', 'AR', 'GameDesign', 'MentalHealth'],
            'desc': 'An AR Pet game to relieve university students\' emotions',
            'img': 'https://live.staticflickr.com/65535/52515678782_7a973a13a8_k.jpg',
            'ph': 'https://live.staticflickr.com/65535/52515678782_b86ed4f440_m.jpg',
          },
    },
];