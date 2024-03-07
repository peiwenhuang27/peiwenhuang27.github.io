import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactLoading from "react-loading";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Iframe from 'react-iframe';

// TODO
// sidebar navigation
// header/footer no container
// demo section of screenshots (mockup of laptop)

function Vision () {
    const [isLoading, setIsLoading] = useState(false);
    const img_src = "https://live.staticflickr.com/65535/53573556154_493507ae43_h.jpg";

    const hideSpinner = () => {
        setIsLoading(false);
    };

    const figma = (
        <Iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} 
        width="800" height="450" 
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FmowJpjVRC4mzX0TjmkIkf1%2FFluffy-Focus%3Fpage-id%3D612%253A753%26type%3Ddesign%26node-id%3D697-350%26viewport%3D272%252C357%252C0.02%26t%3DHtJWBR8zvCt140jN-1%26scaling%3Dscale-down%26starting-point-node-id%3D697%253A350%26show-proto-sidebar%3D1%26mode%3Ddesign"
        onLoad={hideSpinner}
        allowfullscreen />
    );


    return (
        <div>
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img_src})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h3 className="mb-1 color-dark text-bold date">October 2023 - December 2023</h3>
                            <h2 className="mb-1">Ford Vision: Defining Semi-Autonomous Electric Vehicle Paradigm</h2>
                            <h3 className="theme mb-5">Interaction Design Fundamentals, Autonomous Vehicle, UX</h3>
                            <p className="mb-5">
                            Graduate students, under significant academic pressure, often struggle with time management and suffer from anxiety and/or procrastination when facing immense workload. 
                            To reduce the level of anxiety ad increase motivation to finish upcoming tasks on time, 
                            we designed Fluffy Focus: <b>a transformational mobile role-playing game to facilitate behavior and attitudinal change in grad students' task management.</b>
                            </p>
                    </div>
                    <div className="section-wrapper row mb-5">
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h6 className="theme mb-3">Duration </h6>
                            <ul>
                                <li>3 months</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h6 className="theme mb-3">Role</h6>
                            <ul>
                                <li>Lead Designer</li>
                                <li>Researcher</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h6 className="theme mb-3">Team</h6>
                            <ul>
                                <li>5 people</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h6 className="theme mb-3">Tool</h6>
                            <ul>
                                <li>Figma</li>
                                <li>Miro</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col mb-5">
                            <h6 className="theme mb-3">Responsibilities</h6>
                            <ul className="row">
                                <li className="col-md-6">Feature conceptualization</li>
                                <li className="col-md-6">Wireframing & prototyping</li>
                                <li className="col-md-6">UX writing</li>
                                <li className="col-md-6">Visual style design</li>
                                <li className="col-md-6">User research & testing</li>
                                <li className="col-md-6">Literature review</li>
                            </ul>
                         </div>
                    </div>
                </div>
            </div>

            <div className="theme-bg">
                <div className="container">
                    <div className="topic-container section-wrapper">
                        <h3 className="mb-5">💻 Demo</h3>
                        <div className="d-flex justify-content-center">
                            {isLoading ? (
                                <ReactLoading type="bubbles" color="#e0e0e0"
                                height={100} width={50} />
                            ) : figma}
                        </div>

                        {/* TODO: demo section of screenshots */}
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container section-wrapper">
                    <h3 className="my-5">📚 Background </h3>
                    <p className="mb-5">
                    Many college students (ranging from undergraduate to PhDs) suffer from decision paralysis due to information overload and anxiety induced by prolonged procrastination on tasks that are either <b>too complex</b> or <b>too time consuming</b>. Anxiety also kicks in when there is a gap between current quality of work and the expected state for people who strive for perfectionism. 
                    </p>
                    <h6 className="mt-5">Focus Group</h6>
                    <div className="row statistics-container my-5">
                        <div className="col-md-4 d-flex flex-column align-items-center">
                            <h3 className="theme p-bold">3</h3>
                            <p>Sessions Held</p>
                        </div>
                        <div className="col-md-4 d-flex flex-column align-items-center">
                            <h3 className="theme p-bold">10</h3>
                            <p>Participants</p>
                        </div>
                        <div className="col-md-4 d-flex flex-column align-items-center">
                            <h3 className="theme p-bold">4</h3>
                            <p>Concepts Evaluated</p>
                        </div>
                    </div>
                    <p>
                    Utilizing New Metaphors [1], participants were given several metaphors and asked to pick from them one that they associated with a specific concept. For example, one may choose the image of “the cat untangling yarn” as a metaphor of “time/task management.”  
                    </p>
                    <ul className="my-5 row">
                        <li className="col-md-6 my-5 d-flex flex-column align-items-center">
                            <div className="w-50 mb-5 d-flex flex-column align-items-center">
                                <img className="w-sizer mb-2" src="/works/UXUI/fluffy/yarn.svg" alt="yarn icon" />
                            </div>
                            <div className="mx-4 d-flex flex-column align-items-center">
                                <h6 className="mb-3">Nonlinear Nature of Task Management</h6>
                                <p className="center">
                                No one out of the 10 participants associated Cat Untangling Yarn with task and time management. To them, time management and organization are more similar to a modular process that must unravel and connect at various stages.                                    </p>
                            </div>
                        </li>
                        <li className="col-md-6 my-5 d-flex flex-column align-items-center">
                            <div className="w-sizer mb-5 d-flex flex-column align-items-center">
                                <img className="w-50 mb-2" src="/works/UXUI/fluffy/boiling.svg" alt="boiling pot icon" />
                            </div>
                            <div className="mx-4 d-flex flex-column align-items-center">
                                <h6 className="mb-3">Lack of Perceived Control</h6>
                                <p className="center">
                                In the context of High-density Workload, Overboiling Pot symbolizes an unchangeable pattern beyond their control. <b>When facing stressful and overwhelming situations, perceived control could help participants effectively confront the challenges ahead.</b>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>


            </div>

            





            <div className="bg-1 pb-5">
                <div className="container">
                    <div className="topic-container py-3">
                        <h3 className="heading-3 color-gray mt-5">📑 References</h3>
                        <p className="references mb-3">
                        [1] Hooda, M., & Saini, A. (2017). Academic anxiety: An overview. Educational Quest, 8(3), 807-810.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;

