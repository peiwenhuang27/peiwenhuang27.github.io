import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from './Pages/Home/Home';
import About from './Pages/About';
import Art from "./Pages/Art";
import Category from './Category';
import Topic from './Topic';


function Switch ({ homeData, workData, lifeData, view, setView, pageHeight }) { 

  return (
    <AnimatePresence mode="wait">
      <Routes >
        <Route exact path="/" element={<Home data={homeData} view={view} setView={setView} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Works">
          {workData.map((item) =>
            <Route path={`${item.suffix}/:workId`} element={<Topic name={item.name} pageHeight={pageHeight} workData={workData} />} />
          )}

          <Route path=":categoryId" element={<Category prefix="/Works" workData={workData} lifeData={lifeData} />} />
        </Route>
        <Route path="/Art" element={<Art />} />
      </Routes>
    </AnimatePresence>
    
  );
}

export default Switch;