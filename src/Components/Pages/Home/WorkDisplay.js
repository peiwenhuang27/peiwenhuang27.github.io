import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { ScrollReveal } from "../../Helpers/SmoothScroll";
import CategoryBox from "./CategoryBox";

function Quote () {
    return (
        <div className="quote-wrapper section-wrapper">
            <div className="topic-container-lg d-flex flex-column align-items-center">
            <h4 className="mb-5">Looking to create, collaborate, or just have a chat?</h4>
            <p className="text-center w-sizer">
            Let’s connect—whether it’s about design, mindfulness, or the perfect cup of tea.


            </p>
            {/* <h4 className="text-center">Do your little bit of good where you are; it’s those little bits of good put together that overwhelm the world.<br/><span className="italic">by Desmond Tutu</span></h4>                 */}
            </div>
        </div>
    );
}

function FinalCTA () {
    return (
        <div id="final-CTA" className="section-wrapper">
            <div className="topic-container">
                <h1 className="col-md-8 mb-5">Looking to create, collaborate, or just have a great chat?</h1>
                <div className="d-flex">
                    <button className="primary-btn h-6">
                        <a href="mailto:pwh27design@gmail.com" target="_blank" rel="noreferrer noopener">
                        Email Me
                        </a>
                    </button>
                    <button className="view-more-btn h-6">
                        <a href="https://drive.google.com/file/d/1jDE4psau-YQiJkma2WFhWQx2ABuxqJeJ/view?usp=sharing" target="_blank" rel="noreferrer noopener">
                        View Resume
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

function ViewMoreBtn ({ link, id="", text = "View More" }) {
    return (
        <button
        className="view-more-btn h-6"
        id={id}>
            <Link to={link}>{text}</Link>
        </button>
    );
}

function WorkList ({ data, prefix }) {
    return (
        <div className="topic-container-lg subsection-wrapper">
            <div className="work-list">
                <ul className="w-100 work-cards flex-column">
                    {data.map(item =>
                        <li className="w-100">
                            <CategoryBox prefix={prefix} data={item} />
                        </li>
                    )}
                </ul>
                
                <ScrollReveal>
                        <h4 className="text-center mb-3">Browse Projects by Category</h4>
                        <div className="group-btn">
                            <ViewMoreBtn 
                            link="/Works/uiux"
                            id="uiux-link"
                            text="UIUX"
                            />
                            <ViewMoreBtn 
                            link="/Works/visual"
                            id="visual-link"
                            text="Visual"
                            />
                            <ViewMoreBtn 
                            link="/Works/research"
                            id="research-link"
                            text="Research"
                            />
                            <ViewMoreBtn 
                            link="/Works/engineering"
                            id="engineering-link"
                            text="Engineering"
                            />
                        </div>
                </ScrollReveal>
            </div>
        </div>
    );
}

function WorkDisplay ({ data }) {
    let prefix = "Works";

    return (
        <div className="main-body intro-body">
            <WorkList data={data} prefix={prefix} />
            <ScrollReveal>
                <FinalCTA />
            </ScrollReveal>
        </div>
    );
};

export default WorkDisplay;
export { ViewMoreBtn };