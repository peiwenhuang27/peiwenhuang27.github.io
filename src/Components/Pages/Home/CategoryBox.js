import { Link, Outlet } from "react-router-dom";
import TopicCard from "./TopicCard";

function CategoryBox ({ prefix, data }) { // for one category (suffix, name, items) 
    let link = `${prefix}/${data.suffix}`;

    return (
        <div id={data.suffix} className="category-box mb-5">
            <div className="mb-5">
                <Link to={link} className="text-decoration-none">
                    <h4>{data.name}</h4>
                </Link>
            </div>
            <ul>
                {data.items.map((item, key) => {
                    let reverse = false;
                    if (key % 2 === 1) {
                        reverse = true;
                    }
                    return (
                        <li>
                            <TopicCard link={`${link}/${item.id}`} data={item} reverse={reverse} size="large" />
                        </li>
                    );
                } 
                )}
            </ul>

            <Outlet />
        </div>
    );
};

export default CategoryBox;