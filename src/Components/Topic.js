import { useParams, Outlet } from "react-router-dom";
import PetitMood from './Pages/Works/UXUI/PetitMood';
import ToDone from './Pages/Works/UXUI/2Done';
import Bookworm from "./Pages/Works/UXUI/Bookworm";
import Mindful from "./Pages/Works/UXUI/Mindful";

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
};

export default Topic;