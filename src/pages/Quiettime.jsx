import React, { useState } from 'react';
import moment from 'moment';
import '../App.css'
import logo from '../assets/mychurchbuddy-logo-profile.png';
import Bottomtab from '../navigation/Bottomtab'; 
import Button from '../components/PressableButton';
import { FaArchive } from "react-icons/fa";

function Quiettime() {
//      const [datas, setDatas] = useState(JSON.parse(localStorage.getItem('quietTime')) || []);
  
//     const [selectedDate, setSelectedDate] = useState(new Date());
//     const [passage, setPassage] = useState('');
//     const [reflection, setReflection] = useState('');
//     const [reference, setReference] = useState('');
//     const [revelation, setRevelation] = useState('');

//     const [showForm, setShowForm] = useState(false);
//     const [showDataForm, setShowData] = useState(false);
//     const [formData, setFormData] = useState();

//     const [searchQuery, setSearchQuery] = useState('');
//     const [selectedDataIndex, setSelectedDataIndex] = useState(-1);

//     const handleSubmit = (e) => {
//         e.preventDefault();
    
//         const newData = { passage, reflection, selectedDate, reference, revelation };
//         const updatedDatas = [...datas, newData];
//         setDatas(updatedDatas);
//         localStorage.setItem('quietTime', JSON.stringify(updatedDatas));
//         setSelectedDate(new Date());
//         setPassage('');
//         setReflection('');
//         setReference('');
//         setRevelation('');        
//         setShowForm(false);
//       };
//       const addDataForm = () => {
//         setShowForm(true);
//         setShowData(false);
//       }

   
//     const handleDataClick = (index) => {
//         const originalIndex = datas.length - 1 - index;
//         setShowForm(false);
//         setShowData(true);
//         setSelectedDataIndex(originalIndex);
//         setFormData({
//           selectedDate: datas[originalIndex].selectedDate,
//           passage: datas[originalIndex].passage,
//           reflection: datas[originalIndex].reflection,
//           reference: datas[originalIndex].reference,
//           revelation: datas[originalIndex].revelation,
//         });
             
//         const element = document.querySelector('#buddy-form');
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       };
//       const handleFormSubmit = (e) => {
//         e.preventDefault();
//         const updatedData = {
//           selectedDate: moment(formData.selectedDate).format('YYYY-MM-DD'),
//           passage: formData.passage,
//           reflection: formData.reflection,
//           reference: formData.reference,
//           revelation: formData.revelation,
//         };
//         const updatedDatas = [...datas];
//         updatedDatas[selectedDataIndex] = updatedData;
//         setDatas(updatedDatas);
//         setShowData(false);
//         setShowForm(false);
//         localStorage.setItem('quietTime', JSON.stringify(updatedDatas));
//       };
  
   

//     const handlePassageChange = (event) => {
//     setFormData({ ...formData, passage: event.target.value });
//     };
//     const handleReflectionChange = (event) => {
//     setFormData({ ...formData, reflection: event.target.value });
//     };
//     const handleReferenceChange = (event) => {
//         setFormData({ ...formData, reference: event.target.value });
//     };
//     const handleRevelationChange = (event) => {
//         setFormData({ ...formData, revelation: event.target.value });
//     };
//     const handleDataDateChange = (event) => {
//     setFormData({ ...formData, selectedDate: new Date(event.target.value) });
//     };
   
//     const handleSearch = (event) => {
//     setShowForm(false);
//     setShowData(false);
//     setSearchQuery(event.target.value);
  

//     };

//     const filteredDatas = datas.filter((data) => {
//       //  return moment(data.selectedDate).format('YYYY-MM-DD').includes(searchQuery);
//         return data.passage.toLowerCase().includes(searchQuery.toLowerCase())||
//         data.reference.toLowerCase().includes(searchQuery.toLowerCase());
//     });
      



//   // Handle the date input change event
//   function handleDateChange(e) {
//     const selectedMonday = new Date(e.target.value);
//     setSelectedDate(selectedMonday);
//  }
  
  

      return (
        <> 
    
        <Bottomtab/>
        <main>
        {/* <div className="relative px-2 lg:px-8 py-2">
          <header className="flex justify-center ">
            <img src={logo}   alt="A-Z Bible Characters" className='logo'/>
          </header>
          <div className="text-center">
            <p className="text-lg font-medium leading-8 text-indigo-600/95">myChurchBuddy</p>
            <h1 className=" text-[1.5rem] lg:text-[2.5rem] font-bold leading-[4rem] tracking-wider text-amber-700 font-greatvibes">Daily Quiet Time</h1>
            <h3>Read your Bible, Pray Everyday</h3>
          </div>
        </div>
        {!showForm && (
          <Button className="bg-secondary uppercase text-white mb-2" clickMe={addDataForm}>
            Do your Quiet Time
          </Button>
        )}

       
        {showForm && (
          <form onSubmit={handleSubmit}>
            <input
                type="date"
                id="week-commencing-date-input"
                value={selectedDate.toISOString().slice(0, 10)}
                onChange={handleDateChange}
                className=" form-control
                text-center
                block
                w-full
                px-3
                py-1.5
                mb-2
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
            />
            <input
              type="text"
              required
              className="
                form-control
                text-center
                block
                w-full
                px-3
                py-1.5
                mb-2
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
              placeholder="Passage(s) [Matthew 6:33]"
              value={passage}
              onChange={(e) => setPassage(e.target.value)}
            />         
            <textarea
              rows="4"
              className="
              form-control
              text-center
              block
              w-full
              px-3
              py-1.5
              mb-2
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
              placeholder="Reflection on passage"
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
            />
            <textarea
              rows="3"
              className="
              form-control
              text-center
              block
              w-full
              px-3
              py-1.5
              mb-2
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
              placeholder="Deeper reference(s) on passage"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
            <textarea
              rows="4"
              className="
              form-control
              text-center
              block
              w-full
              px-3
              py-1.5
              mb-2
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
              placeholder="What is the Lord telling you"
              value={revelation}
              onChange={(e) => setRevelation(e.target.value)}
            />
            <Button className="bg-secondary uppercase text-white mb-2"  type="submit">Save Quiet Time</Button>
          </form>
        )}
       {showDataForm && (
        <form id='buddy-form' onSubmit={handleFormSubmit} className="block rounded-lg shadow-lg bg-gray-100 text-center p-3 mt-4 mb-2">
              <label htmlFor="name" className="block text-center font-bold mb-1">my Quiet Time</label>
            <input
                type="date"
                id="week-commencing-date-input"
                value={new Date(formData.selectedDate).toISOString().slice(0, 10)}
                onChange={handleDataDateChange}
                className=" form-control
                text-center
                block
                w-full
                px-3
                py-1.5
                mb-2
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
            />
          <label htmlFor="passage" className="block text-left mb-1">Passage(s)</label>
          <input type="text" id="passage" name="passage" value={formData.passage}    className="w-full border rounded-lg p-2 mb-2"   onChange={handlePassageChange}/>

          <label htmlFor="reflection" className="block text-left mb-1">Reflection</label>
          <textarea
              rows="4"
              className="w-full border rounded-lg p-2 mb-2" 
              placeholder="Reflection on passage"
              value={formData.reflection}
              onChange={handleReflectionChange}
            />

    

          <label htmlFor="reference" className="block text-left mb-1">Reference Scriptures</label>
          <textarea 
          id="reference" 
          name="reference" 
          value={formData.reference} 
          onChange={handleReferenceChange} 
          className="w-full border rounded-lg p-2 mb-2" 
          rows="4"
          />
         
         <label htmlFor="revelation" className="block text-left mb-1">What is the Lord saying?</label>
          <textarea 
          id="revelation" 
          name="revelation" 
          value={formData.revelation} 
          onChange={handleRevelationChange} 
          className="w-full border rounded-lg p-2 mb-2" 
          rows="4"
          />
 
          <Button type="submit" className="bg-green-700 uppercase text-white">
            Update Quiet Time
          </Button>
        </form>
      )}
        <div>
   
            <input
                type="text"
                placeholder="Search your Quiet Time"
                className="w-full border rounded-lg p-2 mb-2"
                value={searchQuery}
                onChange={handleSearch}
            /> 
        </div>

          {datas.length > 0 && (
      <div className="grid md:grid-cols-3 gap-2">
        {
      filteredDatas.slice().reverse().map((data, index) => (
            <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-3' key={index}>
            <div className="mb-4">
                <a href="#" onClick={() => handleDataClick(index)} className="font-gillsansnovaabook text-xl font-bold">
                  {data.passage}
                </a>
              </div>
                <div className="flex justify-between items-center mb-1">
                    <div className="text-left">
                        <Button className="bg-amber-700 uppercase text-white mr-2">
                            {new Date(data.selectedDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            })}
                        </Button>
                    </div>
                <div>
                    
                    <FaArchive size={25} className="inline-block mb-1 text-blue-400" onClick={() => handleDataClick(index)}/>

            </div>
        </div>      
        </div>
        ))
        }
   
      </div>
)
}
<div className='block rounded-lg shadow-lg bg-primary py-5'>
  </div> */}
        </main>
        </>
      );
    }

export default Quiettime