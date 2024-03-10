import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { ScrollReveal } from "../../Helpers/SmoothScroll";
import CategoryBox from "./CategoryBox";

function Intro () {
    return (
        <div className="section-wrapper topic-container pt-5">
            <div className="intro">
                <h4>A bit about me...</h4>
                <p className="px-5 py-3">
                I am a UX designer, researcher, and engineer with 3 years of experience during which I utilize my expertise to identify problems, analyze causes, and implement solutions.
                <br/><br/>Driven by a desire to enhance the quality of life, I’m always looking for areas of opportunity to use my skills and catalyze change.
                </p>
            </div>
        </div>
    );
}

function Quote () {
    return (
        <div className="quote-wrapper section-wrapper">
            <div className="topic-container">
                <div className="quote quotation-mark">〝</div>
                <div className="quote">
                Do your little bit of good where you are; it’s those little bits of good put together that overwhelm the world.
                <br/>_<br/>
                <div className="quote-author">Desmond Tutu</div>
                </div>
            </div>
        </div>
    );
}

function ViewMoreBtn ({ link }) {
    return (
        <button className="view-more-btn h-6">
            <Link to={link}>View All Projects</Link>
        </button>
    );
}

function WorkList ({ data, prefix }) {
    return (
        <div className="topic-container section-wrapper">
            <div className="work-list">
                <ul className="w-100 work-cards flex-column">
                    {data.map(item =>
                        <li className="w-100">
                            <CategoryBox prefix={prefix} data={item} />
                        </li>
                    )}
                </ul>
                <ScrollReveal>
                    <ViewMoreBtn link="/Works/design" />
                </ScrollReveal>
            </div>
        </div>
    );
}

function WorkDisplay ({ data }) {
    let prefix = "Works";

    return (
        <div className="main-body intro-body">
            <ScrollReveal>
                <Intro />
            </ScrollReveal>
            
            <ScrollReveal>
                <Quote />
            </ScrollReveal>
            
            <WorkList data={data} prefix={prefix} />
        </div>
    );
};

export default WorkDisplay;
export { ViewMoreBtn };