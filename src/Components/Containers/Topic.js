import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react";
import Transitions from "../Helpers/Transition";

import Fairplay from "../Pages/Works/UXUI/Fairplay";
import Vision from "../Pages/Works/UXUI/Vision";
import Fluffy from "../Pages/Works/UXUI/Fluffy";
import PetitMood from '../Pages/Works/UXUI/PetitMood';
import SousChef from "../Pages/Works/UXUI/SoufChef";
import ToDone from '../Pages/Works/UXUI/2Done';
import Mindful from "../Pages/Works/UXUI/Mindful";
import SLZ from "../Pages/Works/UXUI/SLZ";
import TourBot from "../Pages/Works/Frontend/Tourbot";
import Bookworm from "../Pages/Works/UXUI/Bookworm";
import Alchemy from "../Pages/Works/UXUI/Alchemy";
import Saisons from "../Pages/Works/Poster/Saisons";
import Surreal from "../Pages/Works/Poster/Surreal";
import Elite from "../Pages/Works/Editorial/Elite";
import Hanabi from "../Pages/Works/Event/Hanabi";

function Topic ({ pageHeight, workData }) {
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
    function removeCurrentProj(projects, id) {
        if (projects.length > 1) {
            let trimmed = projects.filter(proj => proj.id !== id);
            if (trimmed.length > 2) {
                return (trimmed.slice(0, 2));
            }
            return trimmed;
        }
        return projects;
    }

    // UIUX
    let set_UIUX = workData.find((entry) => entry.name === 'UI/UX');
    let projRecLink_UIUX = '/Works/' + set_UIUX.suffix;

    if(workId === 'Fairplay') {
        work = <Fairplay pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} projRecLink={projRecLink_UIUX} projRecs={removeCurrentProj(set_UIUX.items, workId)} />;
    }
    if(workId === 'Fluffy-Focus') {
        work = <Fluffy pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} projRecLink={projRecLink_UIUX} projRecs={removeCurrentProj(set_UIUX.items, workId)} />;
    }
    if(workId === 'Vision') {
        work = <Vision pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} projRecLink={projRecLink_UIUX} projRecs={removeCurrentProj(set_UIUX.items, workId)} />;
    }

    // Visual
    let set_Visual = workData.find((entry) => entry.name === 'Visual');
    let projRecLink_Visual = '/Works/' + set_Visual.suffix;

    if ( workId === 'Les-Saisons-de-lAnnee') {
        work = <Saisons pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} projRecLink={projRecLink_Visual} projRecs={removeCurrentProj(set_Visual.items, workId)} />;
    }
    if ( workId === 'New-Era') {
        work = <Surreal pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} projRecLink={projRecLink_Visual} projRecs={removeCurrentProj(set_Visual.items, workId)} />;
    }
    if ( workId === 'Elite-Camp') {
        work = <Elite pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} projRecLink={projRecLink_Visual} projRecs={removeCurrentProj(set_Visual.items, workId)} />;
    }
    if ( workId === 'Hanabi') {
        work = <Hanabi pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} projRecLink={projRecLink_Visual} projRecs={removeCurrentProj(set_Visual.items, workId)} />;
    }

    // Engineering
    let set_Eng = workData.find((entry) => entry.name === 'Engineering');
    let projRecLink_Eng = '/Works/' + set_Eng.suffix;

    if ( workId === 'TourBot') {
        work = <TourBot pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} projRecLink={projRecLink_Eng} projRecs={removeCurrentProj(set_Eng.items, workId)} />;
    }
    if ( workId === 'Mindfulness-Alchemy') {
        work = <Alchemy pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} projRecLink={projRecLink_Eng} projRecs={removeCurrentProj(set_Eng.items, workId)} />;
    }

    // Research
    let set_Res = workData.find((entry) => entry.name === 'Research');
    let projRecLink_Res = '/Works/' + set_Res.suffix;

    if(workId === 'Petit-Mood') {
        work = <PetitMood pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} projRecLink={projRecLink_Res} projRecs={removeCurrentProj(set_Res.items, workId)} />;
    }
    if(workId === 'SLZ') {
        work = <SLZ pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} projRecLink={projRecLink_Res} projRecs={removeCurrentProj(set_Res.items, workId)} />;
    }

    // Not in use
    if(workId === 'Sous-Chef') {
        work = <SousChef pageHeight={pageHeight} handleSubsectionClick={handleSubsectionClick} />;
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

export default Topic;
export { Subsection, TopicNav };