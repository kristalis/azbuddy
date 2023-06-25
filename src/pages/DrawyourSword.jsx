import React, { useState,useEffect } from 'react';
import logo from '../assets/mychurchbuddy-logo-profile.png';
import Bottomtab from '../navigation/Bottomtab'; 
import '../App.css';
import MustKnow from "../components/Mustknow";



function DrawyourSword () {

      const [greeting, setGreeting] = useState("");

      useEffect(() => {
        // Fetch greetings from database or API
        const greetings = [
          "Blessed",
          "Anointed",
          "Favoured",
        ];
        
        // Pick a random greeting
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        
        // Determine time of day
        const timeOfDay = new Date().getHours();
        let timeOfDayGreeting;
        if (timeOfDay < 12) {
          timeOfDayGreeting = "Morning";
        } else if (timeOfDay >= 12 && timeOfDay < 18) {
          timeOfDayGreeting = "Afternoon";
        } else {
          timeOfDayGreeting = "Evening";
        }
        
        // Combine random greeting with time of day greeting
        setGreeting(`Good ${timeOfDayGreeting} ${randomGreeting} One!`);
      }, []);   


  return (
    <>
    <Bottomtab/>
    <main>
    <div className="relative px-2 lg:px-8 py-2">
      <header className="flex justify-center ">
        <img src={logo}   alt="A-Z Bible Characters" className='logo'/>
      </header>
      <div className="text-center">
        <p className="text-lg font-medium leading-8 text-indigo-600/95">myChurchBuddy</p>
        <h1 className=" text-[1.5rem] lg:text-[2.5rem] font-bold leading-[4rem] tracking-wider text-amber-700 font-greatvibes">{greeting}</h1>
    
        <h2 className=" text-[1rem] lg:text-[2.5rem] font-bold text-indigo-600/95 font-mademirage">Test your Memory on this Month's Scriptures</h2>

      </div>
    </div>
    <MustKnow />
    </main>
    </>
  );
}

export default DrawyourSword;