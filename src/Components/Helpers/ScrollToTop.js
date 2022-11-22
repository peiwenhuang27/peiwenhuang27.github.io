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

export default ScrollToTop;