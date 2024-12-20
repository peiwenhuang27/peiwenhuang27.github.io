import { Link, Outlet } from "react-router-dom";
import TopicCard from "./TopicCard";

import { ScrollReveal } from "../../Helpers/SmoothScroll";

function Title ({ link, title }) {
    return (
        <div className="subsection-wrapper-bottom">
            <Link to={link} className="text-decoration-none">
                <h4>{title}</h4>
            </Link>
        </div>
    );
}

function CategoryBox ({ prefix, data }) { // for one category (suffix, name, items) 
    let link = `${prefix}/${data.suffix}`;
    
    return (
        <div id={data.suffix} className="category-box mb-5">
            <ScrollReveal>
                <Title link={link} title={data.name} />
            </ScrollReveal>
            
            <ul>
                {data.items.map((item, key) => {
                    let reverse = false;
                    if (key % 2 === 1) {
                        reverse = true;
                    }
                    return (
                        <li className="mb-5">
                            <ScrollReveal>
                                <TopicCard link={`${link}/${item.id}`} data={item} reverse={reverse} size="large" />
                            </ScrollReveal>
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