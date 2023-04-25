import { useEffect, useState} from 'react'
import '../App.css'
import { Card, Select } from 'antd';
import logo from '../assets/mychurchbuddy-logo-profile.png';
import { ChAPI_URL } from '../constants/apiUrl';
import Bottomtab from '../navigation/Bottomtab'; 
import Footer from '../navigation/Footer';
import ClipLoader from "react-spinners/ClipLoader";
import {
  Link
} from 'react-router-dom'
import Button from '../components/PressableButton';

function Welcome({ fixed }) {

  const { Meta } = Card;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [characterName, setCharacterName] = useState(null);
  const [selectedNarrative, setSelectedNarrative] = useState(null);

  const [bibleCharacters, setBibleCharacters] = useState([])
  const [data, setData] = useState([])
  const [loaded, isLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    fetchBibleCharacters();
  }, [])

  const fetchBibleCharacters = async () => {
    setIsLoading(true);
    const resp = await fetch(`${ChAPI_URL}/biblecharacters`);
    const biblecharacters = await resp.json();
    
    const options = biblecharacters.users.map(character => ({value: character.name, label: character.name}));
    setData(options);
    setBibleCharacters(biblecharacters)
    setIsLoading(false);
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
            <h1 className=" m-2  text-[1.5rem] lg:text-[3.5rem] font-bold leading-[4rem] tracking-tight text-amber-700">A-Z Bible Characters</h1>
          
       
        
            {isLoading ? (
              <ClipLoader color={'#fff'} size={150} />
            ) : (
          <>
            <Select
            showSearch
            placeholder="Find out about heroes & villains in the bible ..."
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            size='large'
            className='w-full lg:w-2/3 my-3 '
          
            filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={data}
            />
          <div className="container mx-auto px-4  text-center ">
            <Link to="/settings" className="p-6 text-md text-gray-900 " >To add your hero<sup className='font-greatvibes tracking-widest
          text-secondary text-lg'>let us know</sup></Link>
          </div>

             <Link
            to="/must_know" 
            className=" bg-black  
            uppercase 
            text-white
            mb-2 text-center
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
              Must Know Scriptures
          </Link> 
         </>
        )
           
          }
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
            <a className="mt-6 text-lg text-gray-900 text-center whitespace-pre-line lg:px-16" href='/settings'>
            We have curated from the bible, an A-Z list of heroes and villains to gather more insight into their characters, the good and bad to help us gain wisdom in our walk with the Lord.
            <br/>Send us more indepth knowledge of the characters if we have missed some key points or a relevant character is not in the list, click here to send us the info 
            </a>
        }
        </div>
        </div>
        <div className="container mx-auto px-4 mb-12 text-center">
        <div className="mx-auto py-6">
          <h1 className="my-4 font-greatvibes text-xl font-bold text-gray-500 lg:text-3xl">Become a Church Buddy and Let's together Grow in Faith</h1>
          {/* <a className="rounded-lg bg-blue-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto" href="#" target="_blank">Check out the Book Store</a> */}
        </div>

        {/* <div className="mt-10 flex justify-center">
        <img className="h-96 w-full rounded-xl object-cover lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
        </div> */}
    </div>
   
   
      <Footer/>
      </main>  

    </>
  );
}

export default Welcome
