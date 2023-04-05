
import { useState } from "react";
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

function App() {
  const [userData, setUserData] = useState(null)

  return (
    <authContext.Provider value={{ userData, setUserData }} >
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/settings" element={<Settings/>}/>  
        <Route path="/church_portal" element={<Login/>}/>
        <Route path="/resource" element={<Resource/>}/>
        <Route path="/noticeboard" element={<Noticeboard/>}/>
        <Route path="/prayers" element={<Prayers/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/ysnotes" element={<YSNotes/>}/>

      </Routes>
    </authContext.Provider>
    
  );
}

export default App