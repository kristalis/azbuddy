import {
    Link, useLocation
} from 'react-router-dom'
import {useContext,useState } from 'react'
import authContext from '../context';
import '../App.css'
import SideMenu from './SideMenu';



  
import { FaBars, FaArchive, FaBible, FaBullseye, FaPray } from "react-icons/fa";

function Bottomtab() {

  const { userData, setUserData } = useContext(authContext);
  const location = useLocation()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <section id="bottom-navigation" className="lg:hidden block fixed inset-x-0 bottom-0 z-10 bg-secondary shadow">
      <div id="tabs" className="flex justify-between ml-2">
      <Link
          to="/"
          className={`w-full text-white hover:text-white active:bg-white justify-center inline-block text-center pt-2 pb-1 ${
            location.pathname === '/' ? 'text-amber-600' : ''
          }`}
        >
          <FaBullseye size={20} className="inline-block mb-1" />
          <span className="tab tab-explore block text-xs">Daily Goals</span>
        </Link>
        
        <Link
          to="/msg_notes"
          className={`w-full text-white hover:text-white active:bg-white justify-center inline-block text-center pt-2 pb-1 ${
            location.pathname === '/msg_notes' ? 'text-amber-600' : ''
          }`}
        >
          <FaArchive size={20} className="inline-block mb-1" />
          <span className="tab tab-notes block text-xs">YS Notes</span>
        </Link>
        <Link
          to="/quiet_time"
          className={`w-full text-white hover:text-white active:bg-white justify-center inline-block text-center pt-2 pb-1 ${
            location.pathname === '/quiet_time' ? 'text-amber-600' : ''
          }`}
        >
          <FaPray size={20} className="inline-block mb-1" />
          <span className="tab tab-explore block text-xs">QuietTime</span>
        </Link>

        <Link
          to="/bible_characters"
          className={`w-full text-white hover:text-white active:bg-white justify-center inline-block text-center pt-2 pb-1 ${
            location.pathname === '/bible_characters' ? 'text-amber-600' : ''
          }`}
        >
          
          <FaBible size={20} className="inline-block mb-1" />
          <span className="tab tab-home block text-xs">Must Know</span>
        </Link>
        
  
        <Link className={`w-full active:bg-white justify-center inline-block text-center pt-2 pb-1 text-amber-300`}
          onClick={toggleDrawer}  >
          <FaBars size={20} className="inline-block mb-1" />
          <span className="tab tab-kategori block text-xs">More</span>
        </Link>
        <SideMenu  isOpen={isDrawerOpen} onClose={toggleDrawer} />
     
      </div>
    
    </section>
    
  )
}

export default Bottomtab