import { Link, Outlet } from "react-router-dom";

function TopicCard (meta) {
    const prefix = meta.prefix; // '...category/'
    const data = meta.data; // title, tags, desc, img
    let workId = data.title.replace(/\s/g , "-");
    let img_src = process.env.PUBLIC_URL + '/cover.jpg';
    // TODO: change img_src
    
    return (
        <Link to={`${prefix}/${workId}`} className="topic-card text-decoration-none mb-5">
            <div className="card mx-3">
                <img className="card-img-top" src={img_src} alt="Card image cap" />
            </div>
            <div className="flex-column align-items-start px-4 mt-4 mb-5">
                <h3 className="pl-3 pb-3">{data.title}</h3>
                <p>{data.desc}</p>
            </div>
        </Link>
    );
};

export default TopicCard;