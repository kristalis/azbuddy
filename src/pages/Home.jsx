import { useEffect, useState } from 'react'
import '../App.css'
import { Card, Select, Space } from 'antd';
import logo from '../assets/mychurchbuddy-logo-profile.png';
import { API_URL } from '../constants/apiUrl';
import Bottomtab from '../navigation/Bottomtab'; 



function App({ fixed }) {

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
        <div className="relative px-2 lg:px-8 py-4">
          <header className="flex justify-center py-2">
            <img src={logo}   alt="A-Z Bible Characters"/>
          </header>
          <div className="text-center">
            <p className="text-lg font-medium leading-8 text-indigo-600/95">myChurchBuddy<sup className='font-greatvibes tracking-widest
             text-secondary text-lg'>beta</sup></p>
            <h1 className=" m-2 text-[1.5rem] lg:text-[3.5rem] font-bold leading-[4rem] tracking-tight text-amber-700">A-Z Bible Characters</h1>
          </div>
          <div className="lg:px-10">
          <Space
            direction="vertical"
            style={{
              width: '100%',
              paddingBottom: '25px'
            }}
         
          >
            <Select
              showSearch
              placeholder="Find out about heroes & villains in the bible ..."
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
            
              size='large'
              style={{
                width: '100%',
              }}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={data}
            />
            {/* <div className="mt-2 flex items-center justify-center gap-4">
              <a href="#" className="transform rounded-md  px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-orange-300">A-Z Bible Places</a>
      
            </div> */}
              {
            loaded ?
              <div className="mb-4">
                <div className=" text-justify">
                  <h2 className="text-sm font-bold tracking-tight text-gray-900 sm:text-3xl">
                  A biblical narrative on {characterName}
                  </h2>
                  <p className="mt-6 text-lg text-gray-600 whitespace-pre-line">
                    {selectedNarrative}
                  </p>
                </div>
                <div className="sm:mb-8 sm:flex sm:justify-center mb-6 mt-3">
                  <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    For more studies, check out the following christian living resources
                    <a href="https://amzn.to/3IccXmw" target="_blank" className="font-semibold text-indigo-600">
                      <span className="absolute inset-0" aria-hidden="true" />
                      &nbsp; click here <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            : null
          }
          </Space>
          </div>
        
          {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div> */}



      
     
    
       
      </div> 
      <footer className="hidden lg:block container mx-auto px-6 py-6 bg-white dark:bg-gray-900 fixed  inset-x-0  bottom-0 border-t-2 border-red-500">
    {/* <div className="container mx-auto px-6 py-12"> */}
        {/* <div className="md:-mx-3 md:flex md:items-center md:justify-between">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white md:mx-3 xl:text-4xl">Subscribe our newsletter to get update.</h1>

        <div className="mt-6 shrink-0 md:mx-3 md:mt-0 md:w-auto">
            <a href="#" className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2 text-sm text-white duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            <span className="mx-2">Sign Up Now</span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mx-2 h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            </a>
        </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700 md:my-10" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
    

        <div>
            <p className="font-semibold text-gray-800 dark:text-white text-start">Industries</p>

            <div className="mt-5 flex flex-col items-start space-y-2">
            <a href="#" className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Retail & E-Commerce</a>
            <a href="#" className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Information Technology</a>
            <a href="#" className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Finance & Insurance</a>
            </div>
        </div>

        <div>
            <p className="font-semibold text-gray-800 dark:text-white text-start">Services</p>

            <div className="mt-5 flex flex-col items-start space-y-2">
            <a href="#" className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Translation</a>
            <a href="#" className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Proofreading & Editing</a>
            <a href="#" className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Content Creation</a>
            </div>
        </div>

        <div>
            <p className="font-semibold text-gray-800 dark:text-white text-start ">Contact Us</p>

            <div className="mt-5 flex flex-col items-start space-y-2">
            <a href="#" className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">+880 768 473 4978</a>
            <a href="#" className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">info@merakiui.com</a>
            </div>
        </div>
        </div> */}

        {/* <hr className="my-6 border-gray-200 dark:border-gray-700 md:my-10" /> */}

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

export default App
