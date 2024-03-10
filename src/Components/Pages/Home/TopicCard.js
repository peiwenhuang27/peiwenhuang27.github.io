import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";

function TopicCard ({ link, data, size, reverse = false }) { // title, tags, desc, img
    let img_class = "topic-card-img-container";
    if ( size === 'large' ) {
        img_class = "topic-card-img-container-lg";
    }
    let tag = `${data.tags[0]}`;
    for (let i = 1; i < data.tags.length; i++) {
        tag += ", " + data.tags[i];
    }
    const flexDirection = reverse ? "flex-row-reverse" : "";
    const textDirection = reverse ? "text-reverse" : "";

    
    if ( size === 'large' ) {
        return (
            <div className="mb-3">
                <Link to={link} className={`topic-card text-decoration-none row d-flex ${flexDirection}`}>
                    <div className="col-md-6 mb-3 p-0">
                        <div className="topic-card-img-container-lg" >
                            <div className="topic-card-img" style={{ backgroundImage:`url(${data.img})` }} />
                        </div>
                    </div>
                    <div className={`topic-card-title-container col-md-6 d-flex flex-column justify-content-center ${textDirection}`}>
                        {/* an extra container so underline length = heading */}
                        <div>
                            <h4 className="mb-0">{data.title}</h4>
                            <p className="p-bold mb-0">{data.desc}</p>
                            <p>{tag}</p>
                        </div>
                    </div>
                    
                </Link>

                <Outlet />
            </div>
        );
    }
    if ( size === 'medium' ) {
        return (
            <div className="mb-3">
                <Link to={link} className={`topic-card text-decoration-none`}>
                    <div>
                        <div className="topic-card-img-container-md" >
                            <div className="topic-card-img" style={{ backgroundImage:`url(${data.img})` }} />
                        </div>
                    </div>
                    <div className={`topic-card-title-container-md d-flex flex-column justify-content-center ${textDirection}`}>
                        {/* an extra container so underline length = heading */}
                        <div >
                            <h4 className="mb-3">{data.title}</h4>
                            <p className="p-bold mb-1">{data.desc}</p>
                            <p>{tag}</p>
                        </div>
                    </div>
                    
                </Link>

                <Outlet />
            </div>
        );
    }
};

export default TopicCard;