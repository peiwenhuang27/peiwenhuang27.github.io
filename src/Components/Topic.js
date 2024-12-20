import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react";
import Transitions from "./Helpers/Transition";

import Fairplay from "./Pages/Works/UXUI/Fairplay";
import Vision from "./Pages/Works/UXUI/Vision";
import Fluffy from "./Pages/Works/UXUI/Fluffy";
import PetitMood from './Pages/Works/UXUI/PetitMood';
import SousChef from "./Pages/Works/UXUI/SoufChef";
import ToDone from './Pages/Works/UXUI/2Done';
import Mindful from "./Pages/Works/UXUI/Mindful";
import SLZ from "./Pages/Works/UXUI/SLZ";
import TourBot from "./Pages/Works/Frontend/Tourbot";
import Bookworm from "./Pages/Works/UXUI/Bookworm";
import Alchemy from "./Pages/Works/UXUI/Alchemy";

function Topic ({ pageHeight }) {
    let { workId } = useParams();
    let work;
    // click to navigate to a section within a project
    const handleSubsectionClick = (e) => {
        let headerOffset = document.getElementById("header").offsetHeight + document.getElementById("topic-navigation").offsetHeight;
        let elementPosition = e.getBoundingClientRect().top;
        let offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    if(workId === 'Fairplay') {
        work = <Fairplay pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} />;
    }
    if(workId === 'Fluffy-Focus') {
        work = <Fluffy pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} />;
    }
    if(workId === 'Vision') {
        work = <Vision pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} />;
    }
    if(workId === 'Sous-Chef') {
        work = <SousChef pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} />;
    }
    if(workId === 'Petit-Mood') {
        work = <PetitMood pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} />;
    }
    if(workId === 'SLZ') {
        work = <SLZ pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} />;
    }
    if(workId === 'Bookworm-Meeter') {
        work = <Bookworm pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} />;
    }
    if(workId === '2Done') {
        work = <ToDone pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} />;
    }
    if (workId === 'Mindful-Diary') {
        work = <Mindful pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} />;
    }
    if ( workId === 'TourBot') {
        work = <TourBot pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} />;
    }
    if ( workId === 'Mindfulness-Alchemy') {
        work = <Alchemy pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} />;
    }

    return (
        <Transitions key="topic">
            {work}
        </Transitions>
    );
};

function Subsection ({ id, subsectionRef, activeItem, setActiveItem, pageHeight, content}) {
    const observerMargin = Math.floor(pageHeight / 2);

    useEffect(() => {
        const observerConfig = {
            rootMargin: `-${pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin}px 0px -${observerMargin}px 0px`,
        };
        const handleIntersection = function( entries ) {
          entries.forEach((entry) => {
            if (entry.target.id !== activeItem && entry.isIntersecting) {
              setActiveItem(entry.target.id);
            }
          });
        };
        const observer = new IntersectionObserver(handleIntersection, observerConfig);
        observer.observe(subsectionRef.current);
        return () => observer.disconnect();
      }, [activeItem, setActiveItem, subsectionRef]);

      return (
        <section id={id} ref={subsectionRef}>
            {content}
        </section>
      )
}

export default Topic;
export { Subsection };