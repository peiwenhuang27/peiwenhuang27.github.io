import { act } from "react";
import { useEffect, useState } from "react";

function ProgressBar ({ color, items, activeItem, handleClick }) {
    const [scroll, setScrollPosition] = useState(0);

    const getDocHeight  =  ()  =>  {
        return Math.max(
            document.body.scrollHeight,  document.documentElement.scrollHeight,
            document.body.offsetHeight,  document.documentElement.offsetHeight,
            document.body.clientHeight,  document.documentElement.clientHeight
        );
    }

    const calculateScrollDistance = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = getDocHeight();

        const  totalDocScrollLength = docHeight - windowHeight;
        const  scrollPostion  =  Math.floor(scrollTop  /  totalDocScrollLength  *  100);

        setScrollPosition(scrollPostion);
    };

    useEffect(() => {
        const listenToScrollEvent = () => {
            document.addEventListener("scroll", () => {
              requestAnimationFrame(() => {
                calculateScrollDistance();
              });
            });
        };

        listenToScrollEvent();
    }, []);

    function renderItems () {
        return items.map((item) => {
            const activeClass = Number(activeItem) === item.id ? "navigation-list__item--active" : "";
            return (
                <li
                key={item.name}
                id={item.id}
                onClick={() => handleClick(item.ref.current)}
                className={`navigation-list__item ${activeClass}`}
                style={Number(activeItem) === item.id ? {
                    color: `${color}`,
                    borderBottom: `2px solid ${color}`
                    }: null}>
                    {item.name}
                </li>
            )
        })
    }

    return (
        <div id="topic-navigation">
            <ul className='navigation-list'>
                {renderItems()}
            </ul>
        </div>
    );
}

export default ProgressBar;