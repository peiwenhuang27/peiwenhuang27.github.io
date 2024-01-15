import { Link } from "react-router-dom";
import CategoryBox from "./CategoryBox";
import { LeftLinkNav } from "./LeftNav";

function WorkDisplay ({ data }) {
    let prefix = "Works";

    return (
        <div className="main-body intro-body">
            <div className="container pt-5">
                    <div className="intro">
                        <h4>A bit about me...</h4>
                        <p className="px-5 py-3">
                        I am a UX designer, researcher, and engineer with 3 years of experience during which I utilize my expertise to identify problems, analyze causes, and implement solutions.
                        <br/><br/>Driven by a desire to enhance the quality of life, I’m always looking for areas of opportunity to use my skills and catalyze change.
                        </p>
                    </div>
            </div>
            <div className="quote-wrapper">
                <div className="container">
                    <div className="quote quotation-mark">〝</div>
                    <div className="quote">
                    Do your little bit of good where you are; it’s those little bits of good put together that overwhelm the world.
                    <br/>_<br/>
                    <div className="quote-author">Desmond Tutu</div>
                    </div>

                </div>
            </div>
            <div className="container section-wrapper">
                <div className="work-list">
                    <ul className="w-100 work-cards flex-column">
                        {data.map(item =>
                            <li className="w-100">
                                <CategoryBox prefix={prefix} data={item} />
                            </li>
                        )}
                    </ul>
                    <button className="h-6"><Link to="/Works/design">View All Projects</Link></button>
                </div>
            </div>
        </div>
    );
};

export default WorkDisplay;