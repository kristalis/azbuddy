import {useState,useContext,useEffect} from 'react'
import '../App.css'
import logo from '../assets/mychurchbuddy-logo-profile.png';
import Button from '../components/PressableButton';
import Bottomtab from '../navigation/Bottomtab';
 

function Settings({ fixed }) {
  const [title,setTitle] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      message,
    };
  fetch('mailto:kmabora@hotmail.com?subject=myChuchBuddy Submission&body=' + JSON.stringify(data))
  .then(() => {
    console.log('Email sent successfully!');
    setName('');
    setMessage('');
  })
  .catch((error) => {
    console.error('Error sending email:', error);
    alert('An error occurred while sending your email. Please try again later.');
  });
};
   

  return (
    <>
      <Bottomtab/>
      
      <main>
        <div className="relative px-2 lg:px-8 py-2 pb-5">
          <header className="flex justify-center ">
            <img src={logo}   alt="A-Z Bible Characters" className='logo'/>
          </header>
          <div className="text-center">
            <p className="text-[2rem] font-greatvibes leading-8 text-indigo-600/95 ">Get in Touch </p>
           
          </div>
        </div>
        <form onSubmit={handleSubmit}>
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
                  placeholder="Character or Place or Subject"
                  id="title" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)}
                />
          </div>
          <div className="flex justify-center mb-3">
            <textarea
              class="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid  border-secondary
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              placeholder="Your write up here"/>
          </div>
          <div className="flex justify-center mb-5">
              <Button className="bg-secondary uppercase text-white" type="submit">Submit</Button>
          </div>
        </form>
        <div className="text-center my-3">
            <p className="text-[2rem] font-greatvibes leading-8 text-indigo-600/95 ">sponsored ads</p>
        </div>
   
      <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-6 mb-2'>
        <div className="flex mb-2">
          <a href="https://www.instagram.com/teescriptures" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm" target='_blank'>Checkout Teeblessed</a>
        </div>
        <div className="flex mb-2">
          <p className="font-medium text-dark-600 hover:text-purple-700 focus:text-dark-800 duration-300 transition ease-in-out text-sm">Inspired Christian Tees for your daily outreach</p>
         
        </div>
        <div className="flex mb-2">
      
          <p className="font-medium text-dark-600 hover:text-purple-700 focus:text-dark-800 duration-300 transition ease-in-out text-sm">Looking for Bulk printing, get in touch</p>
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
{/*       
      <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-6 mb-2'>
        <div className="flex mb-2">
          <a href="http://takeitakademy.com" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm" target="_blank">TakeITaKAdemy</a>
        </div>
        <div className="flex mb-2">
          <p className="font-medium text-dark-600 hover:text-purple-700 focus:text-dark-800 duration-300 transition ease-in-out text-sm">Join the group to start learning web or software development</p>
        </div>
      </div> */}
     
      <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-6 mb-2'>
       
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