import { useState,useContext } from 'react'
import '../App.css'
import logo from '../assets/mychurchbuddy-logo-profile.png';
import { API_URL, ChAPI_URL } from '../constants/apiUrl';
import Button from '../components/PressableButton';
import {
   useNavigate,
} from 'react-router-dom'

import authContext from '../context';
import Bottomtab from '../navigation/Bottomtab';

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
          console.log(resp);
          
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
 const clickMe =  () => {
  console.log("You clicked me!");
}

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
                  text-xl
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
          <div className="text-center px-8">
            <p className="text-[1.5rem] font-medium leading-8 text-black-600/95 font-mademirage">Is your Church a Buddy?</p>
            <p className="text-[1.5rem] font-medium leading-8 text-indigo-600/95 font-gillsansnovaabook">Never again will you miss out on your church activities and events with myChurchBuddy.</p>
          </div>

          <div className="mt-10 flex justify-center">
        <img className="h-96 w-full rounded-xl object-cover lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
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
    </footer>
      </main>  
     
    
 
    </>
  );
}

export default Login
