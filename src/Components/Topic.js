import { useParams, Outlet } from "react-router-dom";
import PetitMood from './Pages/Works/UXUI/PetitMood';
import ToDone from './Pages/Works/UXUI/2Done';

function Topic () {
    let { workId } = useParams();

    if(workId === 'Petit-Mood') {
        return <PetitMood />;
    }
    if(workId === '2Done') {
        return <ToDone />;
    }
};

export default Topic;