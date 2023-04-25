
import '../App.css'
import {
    Link
} from 'react-router-dom'
import logo from '../assets/mychurchbuddy-logo-profile.png';
import Bottomtab from '../navigation/Bottomtab'; 
import Footer from '../navigation/Footer';


function About() {

  return (
    <> 

    <Bottomtab/>
  
      <main>
   
          <header className="flex justify-center py-2">
            <img src={logo}   alt="A-Z Bible Characters"/>
          </header>
          <div className=" justify-center text-center px-3">
            <p className="text-lg font-medium leading-8 text-white">myChurchBuddy<sup className='font-greatvibes tracking-widest
             text-secondary text-lg'>beta</sup></p>
         <h1 className=" text-[1.5rem] lg:text-[2.5rem] font-bold leading-[4rem] tracking-wider text-amber-700 font-greatvibes">#1 bookmarker</h1>

         </div>
   
      <div className="container mx-auto px-4 py-2">
        <div className="mx-auto mb-4">
            We are putting together all our apps at one place mychurchbuddy.com to help believers manage their ministry work and activities from one source.
            <br/>This is your own personal app so anything you do is stored on your phone so as to give you easy access 
            <br/>
            Always make sure your data is always backup
        </div>
        <Link
          to="/settings" className=" bg-secondary uppercase text-white  text-center
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
        </div>
        <div className="container mx-auto px-4 mb-12 text-center">
        <div className="mx-auto py-6">
          <h1 className="my-4 font-greatvibes text-xl font-bold text-gray-500 lg:text-3xl">Become a Church Buddy and Let's together Grow in Faith</h1>
   
        </div>
    </div>
   
   
      <Footer/>
      </main>  

    </>
  );
}

export default About
