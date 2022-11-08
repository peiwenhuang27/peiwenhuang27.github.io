import { Link, Outlet } from "react-router-dom";
import TopicCard from "./TopicCard";

function CategoryBox (meta) {
    const prefix = meta.prefix;
    const data = meta.data; // for one category (suffix, name, items)
    let link = `${prefix}/${data.suffix}`;

    // console.log("in category box, link = ", link);
    // console.log("in category box, data.items = ", data.items);

    return (
        <div id={data.name} className="category-box mb-5">
            <div className="title w-100 row align-items-center mb-4">
                <Link to={link} className="text-decoration-none col-md-8">
                    <h2>{data.name}</h2>
                </Link>
                {/* <Link to={link} className="col-md-4 text-end text-decoration-none">
                    <span>More</span>
                </Link> */}
            </div>
            <ul className="row p-0">
                {data.items.map(item =>
                    <li className="col-6">
                        <TopicCard prefix={link} data={item} />
                    </li>
                )}
            </ul>
        </div>
    );
};

export default CategoryBox;