import {useState,useContext,useEffect} from 'react'
import authContext from '../context';
import '../App.css'
import logo from '../assets/mychurchbuddy-logo-profile.png';
import {ChAPI_URL } from '../constants/apiUrl';
import Churchab from '../navigation/Churchtab';
 

function Profile({ fixed }) {

  const { userData, setUserData } = useContext(authContext);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
      fetchProfile(userData.id); 
  }, []);
  
  const fetchProfile = async (userid) => {
      let headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + userData.token
      }
      const resp = await fetch (
          `${ChAPI_URL}/${userid}/profile`,
          { headers:headers }
      );
      
      const results = await resp.json(); 
      setProfile(results.data);
      };




  return (
    <>
      <Churchab/>
      
      <main>
        <div className="relative px-2 lg:px-8 py-2">
          <header className="flex justify-center ">
            <img src={logo}   alt="A-Z Bible Characters" className='logo'/>
          </header>
          <div className="text-center">
            <p className="text-lg font-medium leading-8 text-indigo-600/95">myChurchBuddy</p>
            <h1 className=" text-[1.5rem] lg:text-[3.5rem] font-bold leading-[4rem] tracking-tight text-amber-700 font-gillsansnovaabook ">{userData.branch}</h1>
          </div>
      </div>

   
      <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-6 mb-2'>
        <div className="flex mb-2">
          <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Recommended Message</a>
        </div>
        <div className="flex mb-2">
          <a href="#!" className="font-medium text-dark-600 hover:text-purple-700 focus:text-dark-800 duration-300 transition ease-in-out text-sm">{profile?.msg}</a>
        </div>
      </div>
      <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-6 mb-2'>
        <div className="flex mb-2">
           <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Recommended Book</a>
        </div>
        <div className="flex mb-4">
          <a href="#!" className="font-medium text-dark-600 hover:text-purple-700 focus:text-dark-800 duration-300 transition ease-in-out text-sm">{profile?.book}</a>
        </div>
      </div>
      <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-6 mb-2'>
        <div className="flex mb-2">
           <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Links</a>
        </div>
        <div className="flex mb-4">
          { profile?.links?.map((item,i)=>(
              <p key={i} className="font-medium text-dark-600 hover:text-purple-700 focus:text-dark-800 duration-300 transition ease-in-out text-sm mb-2">{item}</p>                           
            ))
          }
        </div>
      </div>
{/*  
    
   


      
        {
            profile?.links?.map((item,i)=>(
              <p key={i} className="text-gray-700 mb-6">{item}</p>                           
            ))
        }
      
      </div>
    </div> */}
 
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

export default Profile