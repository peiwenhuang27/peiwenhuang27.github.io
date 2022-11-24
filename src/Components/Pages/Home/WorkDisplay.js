import { Link } from "react-router-dom";
import CategoryBox from "./CategoryBox";
import { LeftLinkNav } from "./LeftNav";

function WorkDisplay ({ data }) {
    let prefix = "Works";

    return (
        <div className="main-body intro-body">
            <div className="container pt-5">
                <div className="topic-container">
                    <div className="intro">
                        <h2 className="text-bold ">Introduction</h2>
                        <p className="intro-text pt-3 pb-5">
                        I am a designer & engineer with 4+ years of experience during which I utilize my expertise to recognize problems, analyze causes, and implement solutions.
                        This portfolio presents my works in the fields of Design, CS and Business.<br/><br/>
                        
                        In <Link className="bold-link" to="/Works/UXUI">UX/UI design</Link>, I dive into mental health topics via interviewing users and referencing related studies to propose mobile apps eliminating user pain points.
                        
                        In <Link className="bold-link" to="/Works/DataScience-SystemDesign">Data Science & System Design</Link>, I collaborate with teammates to devise effective solutions for travel recommendation, user profiling, and fake news, utilizing my capabilities in NLP, ML, System Analysis & Design, and Frontend Development.
                    
                        In <Link className="bold-link" to="">Case Study</Link>, I critically analyze a local company and propose solutions on digital transformation.
                            
                        Moreover, my creativity is unleashed to bring abstract concepts into visual forms in <Link className="bold-link" to="/Works/Web-Visuals">Web Visuals</Link>, <Link className="bold-link" to="/Works/Editorial-Print">Editorials & Prints</Link>, <Link className="bold-link" to="/Works/Poster">Poster Design</Link>, and <Link className="bold-link" to="/Works/Event-Visuals">Event Visuals</Link>.
                        </p>
                    </div>
                    
                </div>
                <div className="row">
                    <LeftLinkNav showTitle={true} prefix={prefix} data={data} />
                    <div className="work-list col-10">
                        <ul className="work-cards flex-column">
                            {data.map(item =>
                                <li className="w-100">
                                    <CategoryBox prefix={prefix} data={item} />
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkDisplay;