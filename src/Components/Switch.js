import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from './Pages/Home/Home';
import About from './Pages/About';
import Category from './Category';
import Topic from './Topic';


function Switch ({ data, view, setView }) {
  // const location = useLocation();
  

  return (
    // AnimatePresence: initial={false}
    // Routes: location={location} key={location.pathname}
    <AnimatePresence mode="wait">
      <Routes >
        <Route exact path="/" element={<Home data={data} view={view} setView={setView} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Works">
          {data.map((item) =>
            <Route path={`${item.suffix}/:workId`} element={<Topic name={item.name}/>} />
          )}

          <Route path=":categoryId" element={<Category prefix="/Works" data={data} />} />
        </Route>
      </Routes>
    </AnimatePresence>
    
  );
}

export default Switch;