import { useEffect, useState } from "react";

function ProgressBar ({ color }) {
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

    return (
        <div className="progress-bar"
        style={{
            background: `linear-gradient(to right, ${color} ${scroll}%, transparent 0)`
        }}>

        </div>
    );
}

export default ProgressBar;