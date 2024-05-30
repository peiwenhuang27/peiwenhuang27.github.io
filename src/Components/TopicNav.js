import React, {useEffect, useRef} from 'react';
import React from 'react';

function TopicNav ({ items, activeItem }) {
    function renderItems () {
        return items.map((item) => {
            const activeClass = activeItem === item.name ? "navigation-list__item--active" : "";
            return (
                <li
                key={item.name}
                id={item.name}
                className={`navigation-list__item ${activeClass}`}>
                    {item.name}
                </li>
            )
        })
    }

    return (
        <ul className='navigation-list'>
            {renderItems()}
        </ul>
    )
}
export default TopicNav;