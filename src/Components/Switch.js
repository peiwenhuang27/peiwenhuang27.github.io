import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from './Pages/Home/Home';
import About from './Pages/About';
import Art from "./Pages/Art";
import Category from './Category';
import Topic from './Topic';


function Switch ({ homeData, workData, lifeData, view, setView, ref, variants }) {
  // const location = useLocation();
  

  return (
    // AnimatePresence: initial={false}
    // Routes: location={location} key={location.pathname}
    <AnimatePresence mode="wait">
      <Routes >
        <Route exact path="/" element={<Home data={homeData} view={view} setView={setView} ref={ref} variants={variants} />} />
        <Route path="/About" element={<About ref={ref} variants={variants} />} />
        <Route path="/Works">
          {workData.map((item) =>
            <Route path={`${item.suffix}/:workId`} element={<Topic name={item.name} ref={ref} variants={variants} />} />
          )}

          <Route path=":categoryId" element={<Category prefix="/Works" workData={workData} lifeData={lifeData} ref={ref} variants={variants} />} />
        </Route>
        <Route path="/Art" element={<Art ref={ref} variants={variants} />} />
      </Routes>
    </AnimatePresence>
    
  );
}

export default Switch;