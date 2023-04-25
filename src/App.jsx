
import { useState,useEffect } from "react";
import './App.css'
import {
  Routes,
  Route
} from 'react-router-dom'

import Resource from './pages/Resource'
import Noticeboard from './pages/Noticeboard'
import Settings from './pages/Settings';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Prayers from './pages/Prayers';
import authContext from "./context";
import Welcome from "./pages/Welcome";
import YSNotes from "./pages/YSNotes";
import Contacts from "./pages/Followup";
import Ministry from "./pages/Ministry";
import Testimony from "./pages/Testimony";
import Todo from "./pages/Todo";
import About from "./pages/About";

import Scriptures from "./pages/Scriptures"; 
function App() {
  const [userData, setUserData] = useState(null)
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () =>
        setWidth(window.innerWidth)
      );
  }, []);
  return (
    <authContext.Provider value={{ userData, setUserData }} >
      <Routes>
      {width > 768 ? (
          <Route path="/" element={<Welcome />} />
        ) : (
          <Route path="/" element={<Todo />} />
        )}
       
        <Route path="/bible_characters" element={<Welcome/>}/>
        <Route path="/settings" element={<Settings/>}/>  
        <Route path="/church_portal" element={<Login/>}/>
        <Route path="/resource" element={<Resource/>}/>
        <Route path="/noticeboard" element={<Noticeboard/>}/>
        <Route path="/prayers" element={<Prayers/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/ministry" element={<Ministry/>}/>
        <Route path="/testimony" element={<Testimony/>}/>
        <Route path="/msg_notes" element={<YSNotes/>}/>
        <Route path="/must_know" element={<Scriptures/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </authContext.Provider>
    
  );
}

export default App