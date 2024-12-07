
import { Route, Routes } from "react-router-dom";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Layout from "./Layouts/Layouts";
import Contact from "./Routes/Contact";
import './index.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
