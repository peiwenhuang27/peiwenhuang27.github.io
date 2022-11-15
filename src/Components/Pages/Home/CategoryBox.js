import { Link, Outlet } from "react-router-dom";
import TopicCard from "./TopicCard";

function CategoryBox (meta) {
    const prefix = meta.prefix;
    const data = meta.data; // for one category (suffix, name, items) 
    let link = `${prefix}/${data.suffix}`;

    return (
        <div id={data.suffix} className="category-box mb-5">
            <div className="title w-100 row align-items-center mb-4">
                <Link to={link} className="text-decoration-none col-md-8">
                    <h2>{data.name}</h2>
                </Link>
                <Link to={link} className="col-md-4 text-end text-decoration-none">
                    <span>View</span>
                </Link>
            </div>
            <ul className="row p-0">
                {data.items.map(item =>
                    <li className="col-6">
                        <TopicCard link={`${link}/${item.title.replace(/[^\p{L}\d]/gu, "-")}`} data={item} />
                        {/* item.title.replace(/\s/g , "-") */}
                    </li>
                )}
            </ul>

            <Outlet />
        </div>
    );
};

export default CategoryBox;