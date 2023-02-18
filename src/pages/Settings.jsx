import {useState,useContext,useEffect} from 'react'
import authContext from '../context';
import '../App.css'
import logo from '../assets/mychurchbuddy-logo-profile.png';

import Bottomtab from '../navigation/Bottomtab';
 

function Settings({ fixed }) {

  
  return (
    <>
      <Bottomtab/>
      
      <main>
        <div className="relative px-2 lg:px-8 py-2 pb-5">
          <header className="flex justify-center ">
            <img src={logo}   alt="A-Z Bible Characters" className='logo'/>
          </header>
          <div className="text-center">
            <p className="text-[2rem] font-greatvibes leading-8 text-indigo-600/95 ">sponsored ads</p>
           
          </div>
      </div>
  
      <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-6 mb-2'>
        <div className="flex mb-2">
          <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Checkout Teeblessed</a>
        </div>
        <div className="flex mb-2">
          <a href="#!" className="font-medium text-dark-600 hover:text-purple-700 focus:text-dark-800 duration-300 transition ease-in-out text-sm">Inspired Christian Tees for your daily outreach</a>
        </div>
      </div>
      <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-6 mb-2'>
        <div className="flex mb-2">
          <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Kristalis Digital</a>
        </div>
        <div className="flex mb-2">
          <a href="#!" className="font-medium text-dark-600 hover:text-purple-700 focus:text-dark-800 duration-300 transition ease-in-out text-sm">Get in touch to get your Web, App or Software idea developed & deployed</a>
        </div>
      </div>
      <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-6 mb-2'>
        <div className="flex mb-2">
          <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Godletts Security</a>
        </div>
        <div className="flex mb-2">
          <a href="#!" className="font-medium text-dark-600 hover:text-purple-700 focus:text-dark-800 duration-300 transition ease-in-out text-sm">Looking for security job, get in touch</a>
        </div>
      </div>
      <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-6 mb-2'>
        <div className="flex mb-2">
          <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">TakeITaKAdemy</a>
        </div>
        <div className="flex mb-2">
          <a href="#!" className="font-medium text-dark-600 hover:text-purple-700 focus:text-dark-800 duration-300 transition ease-in-out text-sm">Join the group to start learning web or software development</a>
        </div>
      </div>

      <footer className="hidden lg:block container mx-auto px-6 py-6 bg-white dark:bg-gray-900 fixed  inset-x-0  bottom-0 border-t-2 border-red-500">
  
        <div className="flex flex-col items-center justify-between sm:flex-row">
        <a href="#" className="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-300">myChurchBuddy</a>

        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
				{/* <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
					Privacy
				</a>
				<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
					GDPR
				</a> */}
				<a href="#" className= "text-orange-600 hover:text-blue-900 dark:hover:text-white font-bold">
					MOBILE APP LAUNCHING SOON
				</a>
			</div>
        </div>
    {/* </div> */}
    </footer>
      </main>  
   
    </>
  );
}


export default Settings