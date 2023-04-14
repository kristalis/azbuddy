import {
    Link
} from 'react-router-dom'
  
import { FaCalendar,FaPrayingHands,FaChurch, FaHome, FaReadme } from "react-icons/fa";

function Churchab() {
  return (
    <section id="bottom-navigation" className="lg:hidden block fixed inset-x-0 bottom-0 z-10 bg-secondary shadow">   
    {/* <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> */}
      <div id="tabs" className="flex justify-between">
        <Link to="/noticeboard" className="w-full text-black-700  hover:text-blue-700 focus:text-white justify-center inline-block text-center pt-2 pb-1">
          <FaCalendar size={25} className="inline-block mb-1"/>
          <span className="tab tab-home block text-xs">Events</span>
        </Link>
        <Link to="/prayers"  className="w-full text-black-700  hover:text-blue-700  focus:text-white justify-center inline-block text-center pt-2 pb-1">
          <FaPrayingHands size={25} className="inline-block mb-1"/>
          <span className="tab tab-kategori block text-xs">Prayers</span>
        </Link>
        <Link to="/resource" className="w-full text-black-700  hover:text-blue-700  focus:text-white justify-center inline-block text-center pt-2 pb-1">
          <FaReadme size={25} className="inline-block mb-1"/>
          <span className="tab tab-explore block text-xs">Resource</span>
        </Link>
        <Link to="/profile" className="w-full text-black-700  hover:text-blue-700  focus:text-white justify-center inline-block text-center pt-2 pb-1">
          <FaChurch size={25} className="inline-block mb-1"/>
          <span className="tab tab-explore block text-xs">Profile</span>
        </Link>
        <Link to="/" className="w-full text-black-700  hover:text-blue-700  focus:text-white justify-center inline-block text-center pt-2 pb-1">
          <FaHome size={25} className="inline-block mb-1"/>
          <span className="tab tab-explore block text-xs">Home</span>
        </Link>
      </div>
    </section>
  )
}

export default Churchab