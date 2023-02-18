import { useEffect, useState } from 'react'
import '../App.css'
import { Card, Select, Space } from 'antd';
import logo from '../assets/mychurchbuddy-logo-profile.png';
import { API_URL } from '../constants/apiUrl';
import Bottomtab from '../navigation/Bottomtab'; 



function Welcome({ fixed }) {

  const { Meta } = Card;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [characterName, setCharacterName] = useState(null);
  const [selectedNarrative, setSelectedNarrative] = useState(null);

  const [bibleCharacters, setBibleCharacters] = useState([])
  const [data, setData] = useState([])
  const [loaded, isLoaded] = useState(false);


  useEffect(() => {
    fetchBibleCharacters();
  }, [])

  const fetchBibleCharacters = async () => {
    const resp = await fetch(`${API_URL}/biblecharacters`);
    const biblecharacters = await resp.json();
    
    const options = biblecharacters.users.map(character => ({value: character.name, label: character.name}));
    setData(options);
    setBibleCharacters(biblecharacters)
   // console.log( biblecharacters.users.map(character =>character.name))
  }

  
  const onChange = (value) => {
    setCharacterName(value)
    const selectedUser = bibleCharacters.users.find(user => user.name === value);
    setSelectedNarrative(selectedUser?.narrative);

    isLoaded(true);
  };

 
  const onSearch = (value) => {
    console.log('search:', value);
  };
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
            <h1 className=" m-2 text-[1.5rem] lg:text-[3.5rem] font-bold leading-[4rem] tracking-tight text-amber-700">A-Z Bible Characters</h1>
            <Select
            showSearch
            placeholder="Find out about heroes & villains in the bible ..."
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            size='large'
            className='w-full lg:w-2/3 '
          
            filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={data}
        /><p className="mt-3 text-sm text-gray-900">A-Z Bible Places<sup className='font-greatvibes tracking-widest
        text-secondary text-lg'>coming soon</sup></p>


          </div>
          <div className="container mx-auto px-4 py-8">
        <div className="mx-auto ">
          
          { loaded ?
           <>
            <h2 className="text-xl font-bold tracking-tight text-white-300 md:text-3xl text-center">
            A biblical narrative on {characterName}
            </h2>
            <p className="mt-6 text-lg text-gray-900 text-justify whitespace-pre-line lg:px-16">
            {selectedNarrative}
            </p>
            </>
            :
            null
        }
        </div>
        </div>
        <div className="container mx-auto px-4 py-4 text-center">
        <div className="mx-auto ">
       
        <h1 className="my-4 font-greatvibes text-xl font-bold text-gray-500 lg:text-3xl">Be a Buddy and Let's together Grow in Faith</h1>

        <a className="rounded-lg bg-blue-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto" href="https://www.etsy.com/uk/shop/lucigabana">Check out TeeBlessed Store</a>
   
        </div>

        <div className="mt-10 flex justify-center">
        <img className="h-96 w-full rounded-xl object-cover lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
        </div>
    </div>
   
   
      <footer className="hidden lg:block container mx-auto px-6 py-6 bg-white dark:bg-gray-900 fixed  inset-x-0  bottom-0 border-t-2 border-red-500">
 

        <div className="flex flex-col items-center justify-between sm:flex-row">
        <a href="#" className="text-2xl font-bold  transition-colors duration-300  text-white hover:text-gray-300">myChurchBuddy</a>

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

export default Welcome
