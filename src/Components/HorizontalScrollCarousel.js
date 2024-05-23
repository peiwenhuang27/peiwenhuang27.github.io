import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { ArrowIcon } from "./Icons";

// TODO: arrow icon

const HorizontalCarousel = ({ cards }) => {
  console.log("cards, ", cards);

  return (
    <div className="artwork-feed mt-5 mb-3 d-flex justify-content-start">
      {/* <span className="arrow-btn">
        <ArrowIcon />
      </span> */}
      
      {
        cards.map(card => {
          return <img key={card.id} className="artwork p-1" src={card.url} alt={card.title} />
        })
      }
    </div>
  );
};

const HorizontalScrollCarousel = ({ cards, bgc, responsiveVertical = false, title = null }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  // responsiveVerticle flex direction to column when mobile

  let x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768; // tablet size

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  
  return (
    <section ref={targetRef} className={`${responsiveVertical ? "responsive-": ""}horizontal-carousel`}
    style={{ backgroundColor: bgc}}>
      <div className="carousel-wrapper">
        <div className="container topic-container pt-5 pb-0 mb-0">
          {title}
        </div>
        <div className="topic-container d-flex align-items-center">
          <motion.div
          style={
            width <= breakpoint ? { backgroundColor: bgc } : { x, backgroundColor: bgc }}
          className={`${responsiveVertical ? "responsive-vertical ": ""}card-wrapper`}>
            {cards.map((card) => {
                return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <img src={card.url} className="card-content" key={card.id}/>
  );
};

export default HorizontalScrollCarousel;
export { HorizontalCarousel };

