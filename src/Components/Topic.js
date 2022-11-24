import { useParams, Outlet } from "react-router-dom";
import Transitions from "./Transition";

import PetitMood from './Pages/Works/UXUI/PetitMood';
import ToDone from './Pages/Works/UXUI/2Done';
import Bookworm from "./Pages/Works/UXUI/Bookworm";
import Mindful from "./Pages/Works/UXUI/Mindful";
import TourBot from "./Pages/Works/Frontend/Tourbot";
import News from "./Pages/Works/Frontend/News";
import EasyManager from "./Pages/Works/Frontend/EasyManager";
import Name from "./Pages/Works/Frontend/Name";
import Academic from "./Pages/Works/Web/Academic";
import Saisons from "./Pages/Works/Poster/Saisons";
import Surreal from "./Pages/Works/Poster/Surreal";
import Free from "./Pages/Works/Poster/Free";
import Vegan from "./Pages/Works/Poster/Vegan";
import Mindfulness from "./Pages/Works/Editorial/Mindfulness";
import Music from "./Pages/Works/Editorial/Music";
import Graduation from "./Pages/Works/Editorial/Graduation";
import Elite from "./Pages/Works/Editorial/Elite";
import Fireworks from "./Pages/Works/Event/Fireworks";
import Sswim from "./Pages/Works/Event/Sswim";
import Unlimited from "./Pages/Works/Event/Unlimited";
import Tea from "./Pages/Works/Case/Tea";

function Topic () {
    let { workId } = useParams();
    var work;

    if(workId === 'Petit-Mood') {
        work = <PetitMood />;
    }
    if(workId === '2Done') {
        work = <ToDone />;
    }
    if(workId === 'Bookworm-Meeter') {
        work = <Bookworm />;
    } 
    if (workId === 'Mindful-Diary') {
        work = <Mindful />;
    }
    if ( workId === 'TourBot') {
        work = <TourBot />;
    }
    if ( workId === 'Name-Entity-Classification') {
        work = <Name />;
    }
    if ( workId === 'EasyManager') {
        work = <EasyManager />;
    }
    if ( workId === 'Classifying-True-n-Fake-News') {
        work = <News />;
    }
    if ( workId === 'NTU-Academic-Counseling') {
        work = <Academic />;
    }
    if ( workId === 'Les-Saisons') {
        work = <Saisons />;
    }
    if ( workId === 'New-Era') {
        work = <Surreal />;
    }
    if ( workId === 'Vegan-Is-the-New-Black') {
        work = <Vegan />;
    }
    if ( workId === 'Mindfulness') {
        work = <Mindfulness />;
    }
    if ( workId === 'FREE') {
        work = <Free />;
    }
    if ( workId === 'Music') {
        work = <Music />;
    }
    if ( workId === 'NTU-IM-Graduation-Book') {
        work = <Graduation />;
    }
    if ( workId === 'Elite-Camp-Brochure') {
        work = <Elite />;
    }
    if ( workId === 'Fireworks--NTU-IM-Night') {
        work = <Fireworks />;
    }
    if ( workId === 'SSWIM--Orientation-Camp') {
        work = <Sswim />;
    }
    if ( workId === 'UnlIMted--NTU-IM-Week') {
        work = <Unlimited />;
    }
    if ( workId === 'Investigating-Taiwanese-Tea-Industry') {
        work = <Tea />;
    }
    

    return (
        <Transitions key="topic">
            {work}
        </Transitions>
    );
};

export default Topic;