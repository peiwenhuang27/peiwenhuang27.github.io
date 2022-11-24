import { Link, Outlet } from "react-router-dom";
import ProgressiveImage from 'react-progressive-bg-image';

function TopicCard ({ link, data, size }) { // title, tags, desc, img
    let img_class = "topic-card-img-container";
    if ( size === 'large' ) {
        img_class = "topic-card-img-container-lg";
    }
    let tag = `#${data.tags[0]}`;
    for (let i = 1; i < data.tags.length; i++) {
        tag += " #" + data.tags[i];
    }
    
    return (
        <div className="mb-5 px-3">
            <Link to={link} className="topic-card text-decoration-none">
                <div className={img_class} >
                    <div className="topic-card-img" style={{ backgroundImage:`url(${data.img})` }} />
                    {/* <ProgressiveImage
                    className="topic-card-img"
                    src={data.img}
                    placeholder={data.ph}
                    style={{
                        
                    }}
                    /> */}
                </div>
                <div className="topic-text-container mt-4 mb-5">
                    <div className="flex-column align-items-start">
                        <h3 className="pb-3">{data.title}</h3>
                        <p className="tag mb-1">{tag}</p>
                        <p className="mb-1">{data.desc}</p>
                        
                    </div>
                </div>
                
            </Link>

            <Outlet />
        </div>
    );
};

export default TopicCard;