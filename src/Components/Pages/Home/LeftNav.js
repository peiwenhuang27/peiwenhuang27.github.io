import {Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

function getPxfromVh(vh) {
    const { innerWidth: width, innerHeight: height } = window;
  
    return (vh * height)/100;
}

function LeftNav (meta) {
    const prefix = meta.prefix;
    const data = meta.data;
    var offset = getPxfromVh(10); 

    return (
        <div className="category-menu col-2 mb-5">
            <h5 className="mt-2 mb-4">Category</h5>
            <ul className="list-unstyled d-flex flex-column">
                {data.map(item =>
                    <li className="mb-3">
                        {/* <Link to={`${prefix}/${item.suffix}`}>{item.name}</Link> */}
                        <ScrollLink to={item.name} spy={true} smooth={true} offset={-offset}>
                            {item.name}
                        </ScrollLink>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default LeftNav;