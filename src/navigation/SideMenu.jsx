import React, { useState } from 'react';
import '../App.css'
import logo from '../assets/mychurchbuddy-logo-profile.png';
import Button from '../components/PressableButton';
import {
    Link, useLocation
} from 'react-router-dom'

function SideMenu({isOpen, onClose }) {
    const location = useLocation()

    const handleButtonClick = (link) => {
        history.push(link);
      };
    return (
  
      <div className={`side-drawer ${isOpen ? 'open' : ''} bg-secondary p-2`} onClick={onClose}>
          

       <header className="flex justify-center ">
            <img src={logo}   alt="A-Z Bible Characters" className='logo'/>
        </header>
        <div className="text-center mb-4">
            <p className="text-lg font-medium leading-8 text-primary">myChurchBuddy</p>
            <h1 className=" text-[1rem] lg:text-[2rem] text-white font-gillsansnovaabook">your #1 app to manage & bookmark <br/>your ministry activities & work</h1>
            
        </div>
        <div className="menu-container" style={{ height: 'calc(100% - 280px)', overflowY: 'scroll' }}>
        <Link
          to="/about" className=" bg-slate-200 uppercase text-black mb-2 text-center
          block
          w-full
          px-3
          py-1.5
          text-md
          font-bold
          border border-solid  border-secondary
          rounded-[0.9rem]
          transition
          ease-in-out
          m-0" >
            About
        </Link>
        <Link
          to="/contacts" className="bg-primary uppercase text-secondary mb-2 text-center
          block
          w-full
          px-3
          py-1.5
          text-md
          font-normal
          border border-solid  border-secondary
          rounded-[0.9rem]
          transition
          ease-in-out
          m-0" >
            Outreach
        </Link>
        {/* <Link
          to="/" className="bg-primary uppercase text-secondary mb-2 text-center
          block
          w-full
          px-3
          py-1.5
          text-md
          font-normal
          border border-solid  border-secondary
          rounded-[0.9rem]
          transition
          ease-in-out
          m-0" >
            Daily Ministry Goals
        </Link>      */}
        <Link
          to="/noticeboard" className=" bg-slate-200 uppercase text-black mb-2 text-center
          block
          w-full
          px-3
          py-1.5
          text-md
          font-bold
          border border-solid  border-secondary
          rounded-[0.9rem]
          transition
          ease-in-out
          m-0" >
            Noticeboard
        </Link>
        {/* <Link
          to="/msg_notes" className="bg-primary uppercase text-secondary mb-2 text-center
          block
          w-full
          px-3
          py-1.5
          text-md
          font-normal
          border border-solid  border-secondary
          rounded-[0.9rem]
          transition
          ease-in-out
          m-0" >
            Young Solomon Notes
        </Link> */}
       
        <Link
          to="/ministry" className="bg-primary uppercase text-secondary mb-2 text-center
          block
          w-full
          px-3
          py-1.5
          text-md
          font-normal
          border border-solid  border-secondary
          rounded-[0.9rem]
          transition
          ease-in-out
          m-0" >
            Ministry Work
        </Link>
        <Link
          to="/" 
          className="bg-white uppercase text-black font-bold mb-2 text-center
          block
          w-full
          px-3
          py-1.5
          text-md
          border border-solid  border-secondary
          rounded-[0.9rem]
          transition
          ease-in-out
          m-0" >
            Scriptures for the Month
        </Link>
        <Link
          to="/must_know" className="bg-primary uppercase text-secondary mb-2 text-center
          block
          w-full
          px-3
          py-1.5
          text-md
          font-normal
          border border-solid  border-secondary
          rounded-[0.9rem]
          transition
          ease-in-out
          m-0" >
            Must Know Scriptures
        </Link>
        <Link
          to="/bible_characters" className="bg-primary uppercase text-secondary mb-2 text-center
          block
          w-full
          px-3
          py-1.5
          text-md
          font-normal
          border border-solid  border-secondary
          rounded-[0.9rem]
          transition
          ease-in-out
          m-0" >
            Bible Characters
        </Link>
        {/* <Link
          to="/quiet_time" className="bg-primary uppercase text-secondary mb-2 text-center
          block
          w-full
          px-3
          py-1.5
          text-md
          font-normal
          border border-solid  border-secondary
          rounded-[0.9rem]
          transition
          ease-in-out
          m-0" >
            Quiet Time
        </Link> */}
        {/* <Link
          to="/settings" className=" bg-slate-200 uppercase text-secondary mb-2 text-center
          block
          w-full
          px-3
          py-1.5
          text-md
          font-normal
          border border-solid  border-secondary
          rounded-[0.9rem]
          transition
          ease-in-out
          m-0" >
            Testimony Blogs
        </Link>
        <Link
          to="/settings" className=" bg-slate-200 uppercase text-secondary mb-2 text-center
          block
          w-full
          px-3
          py-1.5
          text-md
          font-normal
          border border-solid  border-secondary
          rounded-[0.9rem]
          transition
          ease-in-out
          m-0" >
            Prayer Board
        </Link> */}
        {/* <Link
          to="/settings" className=" bg-slate-200 uppercase text-secondary mb-2 text-center
          block
          w-full
          px-3
          py-1.5
          text-md
          font-normal
          border border-solid  border-secondary
          rounded-[0.9rem]
          transition
          ease-in-out
          m-0" >
            Instore
        </Link> */}
        <Link
          to="/settings" className=" bg-primary uppercase text-secondary mb-2 text-center
          block
          w-full
          px-3
          py-1.5
          text-md
          font-normal
          border border-solid  border-secondary
          rounded-[0.9rem]
          transition
          ease-in-out
          m-0" >
            Contact US
        </Link>

        <Button className="bg-black uppercase text-white mb-2" clickMe={onClose}>
            Close
        </Button>
        </div>
    </div>
    
  );
}

export default SideMenu;
