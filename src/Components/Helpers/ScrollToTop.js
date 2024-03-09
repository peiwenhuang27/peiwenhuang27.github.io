import { useEffect } from "react";
import { useLocation } from "react-router";

function scroll() {
  document.documentElement.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant", // Optional if you want to skip the scrolling animation
  });
}

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    // window.setTimeout(scroll, 800);
    scroll();
    
  }, [location]);

  return <>{props.children}</>
};

const ScrollToTopBtn = ({ scrollFunc }) => {
  return (
    <button onClick={scrollFunc} className="back-to-top">
    &#9650;<br/>Top
    </button>
  );
}

export default ScrollToTop;
export { ScrollToTopBtn };
