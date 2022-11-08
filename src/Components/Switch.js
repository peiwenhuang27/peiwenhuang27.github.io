import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About';
import Category from './Category';
import Topic from './Topic';

function Switch (meta) {
  const data = meta.data;

  return (
    <Routes>
      <Route exact path="/" element={<Home data={data}/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Works">
        {data.map(item =>
          <Route path={`${item.suffix}/:workId`} element={<Topic name={item.name}/>} />
        )}

        <Route path=":categoryId" element={<Category />} />
      </Route>
    </Routes>
  );
}

export default Switch;