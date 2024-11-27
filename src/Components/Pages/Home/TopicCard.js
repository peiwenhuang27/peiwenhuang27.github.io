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
    const justifyDirection = reverse ? "justify-content-end" : "";

    
    if ( size === 'large' ) {
        return (
            <div className="subsection-wrapper-bottom mb-5">
                <Link to={link} className={`topic-card text-decoration-none row ${flexDirection} ${justifyDirection}`}>
                    <div className="col-md-8 mb-5">
                        <div className="topic-card-img-container-lg" >
                            <div className="topic-card-img" style={{ backgroundImage:`url(${data.img})` }} />
                        </div>
                    </div>
                    
                    <div className={`topic-card-title-container col-md-4 mb-5 d-flex justify-content-start`}>
                        {/* an extra container so underline length = heading */}
                        <div>
                            <h5 className="mb-0">{data.title}</h5>
                            {/* <p className="p-bold mb-0">{data.desc}</p> */}
                            <p className="p-bold mb-1">{data.desc}</p>
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
                <Link to={link} className={`topic-card text-decoration-none ${flexDirection}`}>
                    <div className=" mb-3">
                        <div className="topic-card-img-container-lg" >
                            <div className="topic-card-img" style={{ backgroundImage:`url(${data.img})` }} />
                        </div>
                    </div>
                    <div className={`topic-card-title-container d-flex flex-column justify-content-center`}>
                        {/* an extra container so underline length = heading */}
                        <div>
                            <h5 className="mb-0">{data.title}</h5>
                            <p className="p-bold mb-1">{data.desc}</p>
                            <p>{tag}</p>
                        </div>
                    </div>
                    
                </Link>

                <Outlet />
            </div>
        );
    }
    if ( size === 'small' ) {
        return (
            <div className="mb-3">
                <Link to={link} className={`topic-card text-decoration-none`}>
                    <div>
                        <div className="topic-card-img-container-md" >
                            <div className="topic-card-img" style={{ backgroundImage:`url(${data.img})` }} />
                        </div>
                    </div>
                    <div className={`topic-card-title-container-md d-flex flex-column justify-content-center`}>
                        {/* an extra container so underline length = heading */}
                        <div >
                            <h5 className="mb-1">{data.title}</h5>
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