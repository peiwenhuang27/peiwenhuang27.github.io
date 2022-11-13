import { Link, Outlet } from "react-router-dom";

function TopicCard (meta) {
    const link = meta.link;
    const data = meta.data; // title, tags, desc, img
    
    return (
        <div className="mb-5 px-3">
            <Link to={link} className="topic-card text-decoration-none">
                <div className="topic-card-img" style={{ backgroundImage:`url(${data.img})` }}></div>
                {/* <div className="card px-3">
                    <img className="card-img" src={data.img} alt="Card image cap" />
                </div> */}
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

export default TopicCard;