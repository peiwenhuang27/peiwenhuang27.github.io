import {Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

function getPxfromVh(vh) {
    const { innerWidth: width, innerHeight: height } = window;
  
    return (vh * height)/100;
}

function LeftScrollNav (meta) {
    const data = meta.data;
    var offset = getPxfromVh(10);
    var categoryTitle = () => {
        if(meta.showTitle) {
            return (
                <h5 className="mt-2 mb-4">Category</h5>
            );
        }
        else {
            return null;
        }
    };

    return (
        <div className="category-menu col-2 mb-5">
            {categoryTitle}
            <ul className="list-unstyled d-flex flex-column">
                {data.map(item =>
                    <li className="mb-3">
                        <ScrollLink to={item.name} spy={true} smooth={true} offset={-offset}>
                            {item.name}
                        </ScrollLink>
                    </li>
                )}
            </ul>
        </div>
    );
};

function LeftLinkNav ({ showTitle, focusIdx, prefix, data }) {

    var categoryTitle = null;
    if(showTitle) {
        categoryTitle = (<h5 className="mt-2 mb-4">Category</h5>);
    }

    return (
        <div className="category-menu border-0 col-2 mb-5">
            {categoryTitle}
            <ul className="list-unstyled d-flex flex-column">
                {data.map((item, i) => {
                    if( i === focusIdx ) {
                        return (
                            <li className="mb-3">
                                <Link id="nav-focus" to={`${prefix}/${item.suffix}`}>{item.name}</Link>
                            </li>
                        );
                    }
                    else {
                        return (
                            <li className="mb-3">
                                <Link to={`${prefix}/${item.suffix}`}>{item.name}</Link>
                            </li>
                        );
                    }
                }
                    
                )}
            </ul>
        </div>
    );
};

export { LeftScrollNav, LeftLinkNav };