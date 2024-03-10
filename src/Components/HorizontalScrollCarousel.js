import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarousel = ({ cards, bgc, responsiveVertical = false, title = null }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  // responsiveVerticle flex direction to column when mobile

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  
  if(!responsiveVertical) {
    return (
      <section ref={targetRef} className="horizontal-carousel"
      style={{ backgroundColor: bgc}}>
        <div className="carousel-wrapper">
          <div className="container topic-container subsection-wrapper">
            {title}
          </div>
          <div className="topic-container d-flex align-items-center">
            <motion.div style={{ x, backgroundColor: bgc }} className="card-wrapper section-wrapper">
              {cards.map((card) => {
                  return <Card card={card} key={card.id} />;
              })}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
  else {
    return (
      <section ref={targetRef} className="responsive-horizontal-carousel"
      style={{ backgroundColor: bgc}}>
        <div className="carousel-wrapper">
          <div className="container topic-container subsection-wrapper">
            {title}
          </div>
          <div className="topic-container d-flex align-items-center">
            <motion.div style={{ backgroundColor: bgc }} className="responsive-vertical card-wrapper section-wrapper">
              {cards.map((card) => {
                  return <Card card={card} key={card.id} />;
              })}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
};

const Card = ({ card }) => {
  return (
    <img src={card.url} className="card-content" key={card.id}/>
    // <div
    //   key={card.id}
    //   className="card-content"
    // >
    //   <div
    //     style={{
    //       backgroundImage: `url(${card.url})`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //     }}
    //     className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
    //   ></div>
      
    //   <div className="absolute inset-0 z-10 grid place-content-center">
    //     <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
    //       {card.title}
    //     </p>
    //   </div>
    // </div>
  );
};

export default HorizontalScrollCarousel;

