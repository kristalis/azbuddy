import '../App.css'
import logo from '../assets/mychurchbuddy-logo-profile.png';
import {ChAPI_URL } from '../constants/apiUrl';
import Churchab from '../navigation/Churchtab';
 
import {useState,useContext,useEffect} from 'react'
import authContext from '../context';

function Prayers({ fixed }) {

    const { userData, setUserData } = useContext(authContext);
    const [prayers, setPrayers] = useState([]);
    
    useEffect(() => {
        fetchPrayers(userData.id); 
    }, []);
    
    const fetchPrayers = async (userid) => {
        let headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userData.token
        }
        const resp = await fetch (
            `${ChAPI_URL}/${userid}/profile`,
            { headers:headers }
        );
        
        const results = await resp.json(); 
        setPrayers(results.data.prayers);
        console.log(results.data.prayers)
        
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
            <p className=" text-[1.5rem] lg:text-[3.5rem] font-bold leading-[4rem] tracking-wider text-amber-700 font-greatvibes">Prophetic Prayers<sup>2023</sup></p>
          </div>
      </div> 
      <div class="grid md:grid-cols-3 gap-4">
      {
            prayers?.map((item, i) => (
        <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-12' key={i}>
          <div className="flex flex-col mb-4">
             <p className=" font-gillsansnovaabook text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">
              {i+1}
              </p>
            </div>
            <p className="text-gray-700 mb-6 font-gillsansnovaabook">{item}</p>
         
        </div>
       
            )
      )
}
 
      {/* <div className="flex justify-center">   
          <ol className="border-l-2 border-purple-600 ">
          { prayers?.map((item, i) => (
            <li key={i}>
              <div className="md:flex flex-start">
                <div className="bg-secondary text-white w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                  {i+1}
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                  <div className="flex justify-between mb-4">
                    <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">New Web Design</a>
                    <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">04 / 02 / 2022</a>
                  </div>
                  <p className="text-gray-700 mb-6">{item}</p>
                </div>
              </div>
            </li>
          ))
          }
          </ol> */}
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

export default Prayers
