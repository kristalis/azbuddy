import {useState,useContext,useEffect} from 'react'
import authContext from '../context';
import '../App.css'
import logo from '../assets/mychurchbuddy-logo-profile.png';
import {ChAPI_URL } from '../constants/apiUrl';
import Churchab from '../navigation/Churchtab';
import {
  useNavigate,
} from 'react-router-dom'
 

function Noticeboard({ fixed }) {
const navigate = useNavigate();

useEffect(() => {
  userData ?
  fetchData(userData.id)
  : navigate("/church_portal"); 
}, []);

const { userData, setUserData } = useContext(authContext);
const [announcement, setAnnouncement] = useState([]);
 


const getMonth=(date)=>{
  const options = {month: 'short'};
  const locale = 'en-US';
  return date.toLocaleDateString(locale,options);
}
const getTime=(date)=>{
  const eventDate = new Date(date);
  const hours = eventDate.getHours();
  const mins = eventDate.getMinutes();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  const hours12 = (hours % 12) || 12;
  const time = `${hours12.toLocaleString('en-US', {minimumIntegerDigits:2})}:${mins.toLocaleString('en-US', {minimumIntegerDigits:2})} ${amPm}`;
  return time;

}

const getDay=(date)=>{
  const eventDate = new Date(date);
  return eventDate.getDate()

}

const fetchData = async (userid) => {
let headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + userData.token
}
const resp = await fetch (
    `${ChAPI_URL}/${userid}/noticeboards`,
    { headers:headers }
);

const results = await resp.json(); 
setAnnouncement(results.data);
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
            <h1 className=" text-[2.5rem] lg:text-[3.5rem] font-bold leading-[4rem] tracking-wider text-amber-700 font-greatvibes">Church Board</h1>
          </div>
      </div> 
      <div className="grid md:grid-cols-3 gap-4">
      {
            announcement?.map((item, i) => (
        <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-12' key={i}>
          <div className=" mb-4">
            <a href="#" className=" font-gillsansnovaabook hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">{item.title}</a>
          </div>
          <div className="flex flex-col mb-4">
              <a href="#" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">
                {new Date(item.eventdate).getDate()} {getMonth(new Date(item.eventdate))} @ {getTime(item.eventdate)}</a>
              <a href="#" className=" font-gillsansnovaabook text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">
                {item.location}</a>
            </div>
            <p className="text-gray-700 mb-6 font-gillsansnovaabook">{item.brief}</p>
         
        </div>
       
            )
      )
}
     
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

export default Noticeboard
