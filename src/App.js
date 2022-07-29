import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Components
import Header from './components/header/Header.jsx'
import Weapons from "./pages/Weapons.jsx";
import Maps from "./pages/Maps.jsx";
import Agents from "./pages/Agents.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
        <Route path="/weapons" element={<Weapons/>}/>
        <Route path="/maps" element={<Maps/>}/>
        <Route path="/agents" element={<Agents/>}/>

    
      </Routes>
    </Router>
  );
}

export default App;
