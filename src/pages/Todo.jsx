import React, { useState,useEffect } from 'react';
import logo from '../assets/mychurchbuddy-logo-profile.png';
import Bottomtab from '../navigation/Bottomtab'; 
import '../App.css';
import Goals from '../components/Goals';



function Todo() {

  
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
        <h1 className=" text-[1.5rem] lg:text-[2.5rem] font-bold leading-[4rem] tracking-wider text-amber-700 font-greatvibes">my Daily Ministry Goals</h1>
       

      </div>
    </div>
    <Goals datasource={'todos'} btnTitle={'Add Goal'} placeholder={'add goals for the day'}/>
    </main>
    </>
  );
}

export default Todo;