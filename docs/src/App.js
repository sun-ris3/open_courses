import './App.css';
import {
  matchRoutes,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from './Home';
import K12 from './TabPages/K12';
import Undergraduate from './TabPages/Undergraduate';
import Graduate from './TabPages/Graduate';
import TabPages from './TabPages';
import { NavBar, Tabs, getBavStore } from './Nav';


function App() {
  const navStore = getBavStore();

  const matches = matchRoutes([{ path: "/:level" }, { path: "/:level/:category" }], useLocation());

  if (matches) {
    navStore.level = matches[0].params.level;
    navStore.category = matches[0].params.category;
  }
  console.log(navStore.level)

  return (
    <div className="App">
      <NavBar level={navStore.level} category={navStore.category} />
      <Tabs level={navStore.level} category={navStore.category} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:level" element={<TabPages level={navStore.level} category={navStore.category} />} />
        <Route path="/k12/:category" element={<K12 level={navStore.level} category={navStore.category} />} />
        <Route path="/undergraduate/:category" element={<Undergraduate level={navStore.level} category={navStore.category} />} />
        <Route path="/graduate/:category" element={<Graduate level={navStore.level} category={navStore.category} />} />
      </Routes>
    </div >
  );
}

export default App;
