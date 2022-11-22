import { Link, Outlet } from "react-router-dom";
import ProgressiveImage from 'react-progressive-bg-image';

function TopicCard (meta) {
    const link = meta.link;
    const data = meta.data; // title, tags, desc, img
    
    return (
        <div className="mb-5 px-3">
            <Link to={link} className="topic-card text-decoration-none">
                <div className="topic-card-img-container" >
                    <div className="topic-card-img" style={{ backgroundImage:`url(${data.img})` }} />
                </div>
                <div className="topic-text-container my-4">
                    <div className="flex-column align-items-start">
                        <h3 className="pb-3">{data.title}</h3>
                        <p>{data.desc}</p>
                    </div>
                </div>
                
            </Link>

            <Outlet />
        </div>
    );
};

{/* <ProgressiveImage
                    className="topic-card-img"
                    src={data.img}
                    placeholder={data.ph}
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                    /> */}

export default TopicCard;