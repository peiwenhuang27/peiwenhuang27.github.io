import TopicCard from "./Pages/Home/TopicCard";
import { ViewMoreBtn } from "./Pages/Home/WorkDisplay";

function ProjectRec ({ projects, moreLink }) {
    return (
        <div className="container">
            <div className="topic-container subsection-wrapper d-flex flex-column align-items-center">
                <hr className="w-25 mb-3" />
                <h3 className="text-center mb-5">Other Projects</h3>
                <div className="row">
                    {projects.map(proj => 
                        <div className="col-md-6">
                            <TopicCard link={proj.link} data={proj.data} size="medium" />
                        </div>
                    )}
                </div>
                <ViewMoreBtn link={moreLink} />
            </div>
        </div>
    );
}


                
export default ProjectRec;