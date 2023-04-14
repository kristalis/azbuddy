import {
    Link, useLocation
} from 'react-router-dom'
import {useContext } from 'react'
import authContext from '../context';


  
import { FaRegCalendarCheck,FaBars, FaArchive, FaBible, FaPhone } from "react-icons/fa";

function Bottomtab() {

  const { userData, setUserData } = useContext(authContext);
  const location = useLocation()

  return (
    <section id="bottom-navigation" className="lg:hidden block fixed inset-x-0 bottom-0 z-10 bg-secondary shadow">
      <div id="tabs" className="flex justify-between">
        <Link
          to="/"
          className={`w-full text-white hover:text-white active:bg-white justify-center inline-block text-center pt-2 pb-1 ${
            location.pathname === '/' ? 'text-amber-600' : ''
          }`}
        >
          <FaArchive size={25} className="inline-block mb-1" />
          <span className="tab tab-notes block text-xs">YS Notes</span>
        </Link>
        <Link
          to="/bible_characters"
          className={`w-full text-white hover:text-white active:bg-white justify-center inline-block text-center pt-2 pb-1 ${
            location.pathname === '/bible_characters' ? 'text-amber-600' : ''
          }`}
        >
          <FaBible size={25} className="inline-block mb-1" />
          <span className="tab tab-home block text-xs">Must Know</span>
        </Link>

        <Link
          to={!userData ? '/church_portal' : '/noticeboard'}
          className={`w-full text-white hover:text-white active:bg-white justify-center inline-block text-center pt-2 pb-1 ${
            location.pathname === (!userData ? '/church_portal' : '/noticeboard') ? 'text-amber-600' : ''
          }`}
        >
          <FaRegCalendarCheck size={25} className="inline-block mb-1" />
          <span className="tab tab-kategori block text-xs">Noticeboard</span>
        </Link>
        <Link
          to="/contacts"
          className={`w-full text-white hover:text-white active:bg-white justify-center inline-block text-center pt-2 pb-1 ${
            location.pathname === '/contacts' ? 'text-amber-600' : ''
          }`}
        >
          <FaPhone size={25} className="inline-block mb-1" />
          <span className="tab tab-explore block text-xs">Outreach</span>
        </Link>
      </div>
    </section>
  )
}

export default Bottomtab