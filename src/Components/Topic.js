import { useParams, Outlet } from "react-router-dom";
import PetitMood from './Pages/Works/UXUI/PetitMood';
import ToDone from './Pages/Works/UXUI/2Done';
import Bookworm from "./Pages/Works/UXUI/Bookworm";
import Mindful from "./Pages/Works/UXUI/Mindful";
import TourBot from "./Pages/Works/Frontend/Tourbot";
import EasyManager from "./Pages/Works/Frontend/EasyManager";
import Academic from "./Pages/Works/Web/Academic";
import Saisons from "./Pages/Works/Poster/Saisons";
import Surreal from "./Pages/Works/Poster/Surreal";
import Free from "./Pages/Works/Poster/Free";
import Vegan from "./Pages/Works/Poster/Vegan";
import Mindfulness from "./Pages/Works/Editorial/Mindfulness";

function Topic () {
    let { workId } = useParams();

    if(workId === 'Petit-Mood') {
        return <PetitMood />;
    }
    if(workId === '2Done') {
        return <ToDone />;
    }
    if(workId === 'Bookworm-Meeter') {
        return <Bookworm />;
    } 
    if (workId === 'Mindful-Diary') {
        return <Mindful />;
    }
    if ( workId === 'TourBot') {
        return <TourBot />;
    }
    if ( workId === 'EasyManager') {
        return <EasyManager />;
    }
    if ( workId === 'NTU-Academic-Counseling') {
        return <Academic />;
    }
    if ( workId === 'Les-Saisons') {
        return <Saisons />;
    }
    if ( workId === 'New-Era') {
        return <Surreal />;
    }
    if ( workId === 'Vegan-Is-the-New-Black') {
        return <Vegan />;
    }
    if ( workId === 'Mindfulness') {
        return <Mindfulness />;
    }
    if ( workId === 'FREE') {
        return <Free />;
    }
};

export default Topic;