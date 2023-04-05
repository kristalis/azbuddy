import { useState,useContext } from 'react'
import '../App.css'
import logo from '../assets/mychurchbuddy-logo-profile.png';
import { ChAPI_URL } from '../constants/apiUrl';
import Button from '../components/PressableButton';
import {
   useNavigate,
} from 'react-router-dom'

import authContext from '../context';
import Bottomtab from '../navigation/Bottomtab';
import Advert from '../components/Advert';

function Login({ fixed }) {
  const navigate = useNavigate();
  const [appLogin,setAppLogin] = useState('chlogin');
  const { setUserData } = useContext(authContext);
  const [errMsg,setErrorMessage]=useState()

  const getChurchLogin = (event) => {
 //   console.log(event.target.value)
    setAppLogin(event.target.value);
  };
  const fetchLoginData = async () => {
   console.log(appLogin);

     const requestOptions = {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ applogin: appLogin }),
     };
     fetch(`${ChAPI_URL}/applogin`, requestOptions)
       .then((response) => response.json())
       .then((resp) => {
         if (resp && resp.user) {           
          setUserData({...resp.user,token: resp.access_token})      
          navigate("/noticeboard")
         } 
         else {
          setErrorMessage("Invalid Username or Password");
         }
       })
       .catch((ex) => {
          setErrorMessage("Something went wrong. Try again later");
       });
 };


  return (
    <>
     <Bottomtab/>
      <main>



        <div className="relative px-2 lg:px-8 py-4">
          <header className="flex justify-center ">
            <img src={logo}   alt="A-Z Bible Characters" className='logo'/>
          </header>
          <div className="text-center">
            <p className="text-lg font-medium leading-8 text-indigo-600/95">myChurchBuddy</p>
            <h1 className=" m-2 text-[2.5rem] lg:text-[3.5rem] font-bold leading-[4rem] tracking-wider text-amber-700 font-greatvibes">Church Board</h1>
          </div>
      
          <div className="flex justify-center mb-3">
              <input
                type="text"
                className="
                  form-control
                  text-center
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid  border-secondary
                  rounded-[0.9rem]
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="applogin"
                name="applogin"
                placeholder="Church Login"
                onChange={getChurchLogin}
              />
        
            
          </div>
          <div className="flex justify-center mb-5">
            <Button className="bg-secondary uppercase text-white" clickMe={fetchLoginData}>login</Button>
          </div>
            
          <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-6 mb-2'>
            <div className="flex mb-2">
              <a href="/settings" className="text-[1rem] font-medium text-secondary hover:text-secondary-700 focus:text-secondary-800 duration-300 transition ease-in-out text-sm" target="_blank">Is your Church a Buddy?</a>
            </div>
            <div className="flex mb-2">
              <p className="font-medium text-dark-600 hover:text-purple-700 focus:text-dark-800 duration-300 transition ease-in-out text-sm">Never again will you miss out on your church activities and events with myChurchBuddy</p>
            </div>
            <div className="flex mb-2">
              <a href="/settings" className="text-[1rem] font-medium text-primary hover:text-purple-700 focus:text-secondary-800 duration-300 transition ease-in-out text-sm" target="_blank">Get your church to Get in Touch</a>
            </div>
          </div>
     
        <Advert/>
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
    </footer>
      </main>  
     
    
 
    </>
  );
}

export default Login
