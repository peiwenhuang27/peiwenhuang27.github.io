import { useParams } from "react-router-dom";
import Transitions from "./Transition";

import Vision from "./Pages/Works/UXUI/Vision";
import Fluffy from "./Pages/Works/UXUI/Fluffy";
import PetitMood from './Pages/Works/UXUI/PetitMood';
import ToDone from './Pages/Works/UXUI/2Done';
import Mindful from "./Pages/Works/UXUI/Mindful";
import TourBot from "./Pages/Works/Frontend/Tourbot";
import Bookworm from "./Pages/Works/UXUI/Bookworm";

function Topic () {
    let { workId } = useParams();
    var work;

    if(workId === 'Fluffy-Focus') {
        work = <Fluffy />;
    }
    if(workId === 'Ford-Vision') {
        work = <Vision />;
    }
    if(workId === 'Petit-Mood') {
        work = <PetitMood />;
    }
    if(workId === 'Bookworm-Meeter') {
        work = <Bookworm />;
    }
    if(workId === '2Done') {
        work = <ToDone />;
    }
    if (workId === 'Mindful-Diary') {
        work = <Mindful />;
    }
    if ( workId === 'TourBot') {
        work = <TourBot />;
    }

    return (
        <Transitions key="topic">
            {work}
        </Transitions>
    );
};

export default Topic;