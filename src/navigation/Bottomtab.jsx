import {
    Link
} from 'react-router-dom'
import {useContext} from 'react'
import authContext from '../context';
  
import { FaHome, FaRegCalendarCheck,FaBars, FaArchive } from "react-icons/fa";

function Bottomtab() {

  const { userData, setUserData } = useContext(authContext);

  return (
    <section id="bottom-navigation" className="lg:hidden block fixed inset-x-0 bottom-0 z-10 bg-secondary shadow">   
    {/* <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> */}
      <div id="tabs" className="flex justify-between">
        <Link to="/" className="w-full text-white   hover:text-white  active:bg-white justify-center inline-block text-center pt-2 pb-1">
          <FaHome size={25} className="inline-block mb-1"/>
          <span className="tab tab-home block text-xs">Home</span>
        </Link>
        <Link to="/ysnotes" className="w-full text-white  hover:text-white active:bg-white justify-center inline-block text-center pt-2 pb-1">
          <FaArchive size={25} className="inline-block mb-1"/>
          <span className="tab tab-notes block text-xs">YS Notes</span>
        </Link>
        <Link to={ !userData ? "/church_portal":"/noticeboard"}  className="w-full text-white  hover:text-white active:bg-white justify-center inline-block text-center pt-2 pb-1">
          <FaRegCalendarCheck size={25} className="inline-block mb-1"/>
          <span className="tab tab-kategori block text-xs">Noticeboard</span>
        </Link>
        <Link to="/settings" className="w-full text-white  hover:text-white active:bg-white justify-center inline-block text-center pt-2 pb-1">
          <FaBars size={25} className="inline-block mb-1"/>
          <span className="tab tab-explore block text-xs">Explore</span>
        </Link>
      </div>
    </section>
  )
}

export default Bottomtab