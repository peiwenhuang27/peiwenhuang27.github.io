import { useState, useRef } from "react";
import Iframe from 'react-iframe';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProjectRec from "../../../ProjectRec";
import { ScrollReveal } from "../../../Helpers/SmoothScroll";
import ProgressBar from "../../../ScrollBar";

function SousChef () {
    const demoVid = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const img_src = "https://live.staticflickr.com/65535/53739446457_946f2e3bfd_o.png";
    
    const hideSpinner = () => {
        setIsLoading(false);
    };



    return (
        <div id="Sous-Chef">
            {/* <ProgressBar color="#c8333b" /> */}
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img_src})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <ScrollReveal>
                        <div className="topic-title-container mb-5">
                                <h3 className="mb-1 color-dark text-bold date">March 2024 - April 2024</h3>
                                <h2 className="mb-1">Giant Eagle Sous Chef: Post-work Meals & Home-cook Starters</h2>
                                <h3 className="theme mb-5">Service Design, User Research, Giant Eagle, Meal Planning</h3>
                                <p className="mb-5">
                                In partnership with Giant Eagle, we were challenged to think about “impulse purchases” and “increasing customers’ number of purchases per week” by focusing on meal solutions offered in Giant Eagle stores.<br/><br/>
                                Our team proposed a service hypothesis through research that <b>Strategically placing fresh, partially-prepared meal starters at/near workplaces at the end of workday encourages frequent purchases, promotes a sense of active home-cooking, and reduces guilt associated with frozen/take-out meals.</b> From the testing, positive sentiments towards the service were received for its convenience, and the time-saving factor.                         
                                </p>
                                <button className="view-more-btn h-6">
                                    <a href="https://medium.com/@pwh27design/sous-chef-post-work-meals-home-cook-starters-243feef17c1f" target="_blank" rel="noreferrer noopener">
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
                                    <li>2 months</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col-md-4 col-sm-6 mb-5">
                                <h6 className="theme mb-3">Role</h6>
                                <ul>
                                    <li>Lead Designer</li>
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
                                    <li>Miro</li>
                                    <li>ProCreate</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col mb-5">
                                <h6 className="theme mb-3">Responsibilities</h6>
                                <ul className="row">
                                    <li className="col-md-6">Spearheading the service blueprint</li>
                                    <li className="col-md-6">Leading concept ideation sessions</li>
                                    <li className="col-md-6">Facilitating user test iteration meetings</li>
                                    <li className="col-md-6">Producing visuals of concept movie & poster</li>
                                </ul>
                            </div>
                        </div>
                        <p className="italic">Note: This project is in partnership with Giant Eagle for the Service Design class project at CMU Spring 2024.</p>

                    </ScrollReveal>

                </div>
            </div>

            <ScrollReveal>
                <div className="theme-bg">
                    <div className="container">
                        <div className="topic-container subsection-wrapper">
                            <h3 className="mb-5">💻 Demo</h3>
                            <div ref={demoVid} className="subsection-wrapper" >
                                <div className="responsive-iframe">
                                    <Iframe src="https://www.youtube.com/embed/D-Y0Lp8um0k?si=7HB2NOiMUVMc5QYF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            


            <ScrollReveal>
                <ProjectRec projects={projects} moreLink={"/Works/design"} />
            </ScrollReveal>

        </div>
    );
};

export default SousChef;

const projects = [
    { // service design
        'link': '/Works/design/Fluffy-Focus',
        'data': {
            'title': 'Fluffy Focus', 
            'id': 'Fluffy-Focus',
            'tags': ['Persuasive Design', 'Behavior Change', 'Game Design', 'UX', 'Psychology'],
            'desc': 'Transformational Desktop RPG Against Work-Induced Anxiety',
            'img': 'https://live.staticflickr.com/65535/53567884525_c169b9e51c_b.jpg',
            'ph': 'https://live.staticflickr.com/65535/53567884525_c169b9e51c_b.jpg',
          }
    },
    {
        'link': '/Works/design/Ford-Vision',
        'data': {
            'title': 'Ford Vision', 
            'id': 'Ford-Vision',
            'tags': ['Interaction Design Fundamentals', 'UX', 'Autonomous Vehicle'],
            'desc': 'Redefining Semi-Autonomous Electric Vehicle Paradigm',
            'img': 'https://live.staticflickr.com/65535/53573556154_cdbcf18027_b.jpg',
            'ph': 'https://live.staticflickr.com/65535/53573556154_cdbcf18027_b.jpg',
        }
    },
];