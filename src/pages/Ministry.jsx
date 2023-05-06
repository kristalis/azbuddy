import React, { useState } from 'react';
import moment from 'moment';
import '../App.css'
import logo from '../assets/mychurchbuddy-logo-profile.png';
import Bottomtab from '../navigation/Bottomtab'; 
import Button from '../components/PressableButton';
import { FaArchive, FaWhatsapp,FaPhone,FaSms  } from "react-icons/fa";

function Ministry() {
     const [datas, setDatas] = useState(JSON.parse(localStorage.getItem('datas')) || []);
    const [callsmade, setCallsMade] = useState('');
    const [telechurch, setTeleChurch] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [comment, setComment] = useState('');
    const [ministrymeeting, setMinistryMeeting] = useState('');
    const [ministrychurch, setMinistryChurch] = useState('');
    const [prayers, setPrayers] = useState('');
    const [outreach, setOutreach] = useState('');

    const [showForm, setShowForm] = useState(false);
    const [showDataForm, setShowData] = useState(false);
    const [formData, setFormData] = useState();

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDataIndex, setSelectedDataIndex] = useState(-1);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newData = { callsmade, telechurch, selectedDate, comment, ministrychurch, ministrymeeting, prayers, outreach };
        const updatedDatas = [...datas, newData];
        setDatas(updatedDatas);
        localStorage.setItem('datas', JSON.stringify(updatedDatas));
        setCallsMade('');
        setTeleChurch('');
      //  setSelectedDate(getMonday(new Date()));
        setSelectedDate(new Date());
        setMinistryMeeting('');
        setMinistryChurch('');
        setPrayers('');
        setOutreach('');        
        setComment('');
        setShowForm(false);
      };
      const addDataForm = () => {
        setShowForm(true);
        setShowData(false);
      }

   
    const handleDataClick = (index) => {
       // const originalIndex = datas.findIndex((data) => data.selectedDate === filteredDatas[index].selectedDate);
        const originalIndex = datas.length - 1 - index;
        setShowForm(false);
        setShowData(true);
        setSelectedDataIndex(originalIndex);
        setFormData({
          selectedDate: datas[originalIndex].selectedDate,
          callsmade: datas[originalIndex].callsmade,
          telechurch: datas[originalIndex].telechurch,
          ministrymeeting: datas[originalIndex].ministrymeeting,
          ministrychurch: datas[originalIndex].ministrychurch,
          prayers: datas[originalIndex].prayers,
          outreach: datas[originalIndex].outreach,
          comment: datas[originalIndex].comment,
        });
             
        const element = document.querySelector('#contact-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const handleFormSubmit = (e) => {
        e.preventDefault();
        const updatedData = {
          selectedDate: moment(formData.selectedDate).format('YYYY-MM-DD'),
          callsmade: formData.callsmade,
          telechurch: formData.telechurch,
          ministrymeeting: formData.ministrymeeting,
          ministrychurch: formData.ministrychurch,
          prayers: formData.prayers,
          outreach: formData.outreach,
          comment: formData.comment
        };
        const updatedDatas = [...datas];
        updatedDatas[selectedDataIndex] = updatedData;
        setDatas(updatedDatas);
        setShowData(false);
        setShowForm(false);
        localStorage.setItem('datas', JSON.stringify(updatedDatas));
      };
  
    const handleWhatsAppClick = () => {
        const formattedPhoneNumber = formData.number.replace(/^0+/, '');
    const url =
        "https://api.whatsapp.com/send?phone=" +
        encodeURIComponent(selectedCountry + formattedPhoneNumber)   +
        "&text=" +
        encodeURIComponent(formData.comment);
    window.open(url);
    };

    const handleSmsClick = () => {
    window.location.href = `sms:${formData.number}?body=${formData.comment}`;
    };

    const handleNotesChange = (event) => {
    setFormData({ ...formData, comment: event.target.value });
    };
    const handleCallsChange = (event) => {
    setFormData({ ...formData, callsmade: event.target.value });
    };
    const handleTelechurchChange = (event) => {
        setFormData({ ...formData, telechurch: event.target.value });
    };
    const handleMinistryMeetingChange = (event) => {
        setFormData({ ...formData, ministrymeeting: event.target.value });
    };
    const handleMinistryChurchChange = (event) => {
        setFormData({ ...formData, ministrychurch: event.target.value });
    };
    const handlePrayersChange = (event) => {
        setFormData({ ...formData, prayers: event.target.value });
    };
    const handleOutreachChange = (event) => {
        setFormData({ ...formData, outreach: event.target.value });
    };
    const handleDataDateChange = (event) => {
    setFormData({ ...formData, selectedDate: new Date(event.target.value) });
    };
   
    const handleSearch = (event) => {
    setShowForm(false);
    setShowData(false);
    setSearchQuery(event.target.value);
  

    };

    const filteredDatas = datas.filter((data) => {
        return moment(data.selectedDate).format('YYYY-MM-DD').includes(searchQuery);
    });
      

   // Get the date of the Monday for the selected date
 function getMonday(d) {
    d = new Date(d);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is Sunday
    return new Date(d.setDate(diff));
  }
  
  // Format the date as "MM/DD/YYYY"
  function formatDate(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  // Handle the date input change event
  function handleDateChange(e) {
    const selectedMonday = new Date(e.target.value);
    setSelectedDate(selectedMonday);
 }
  
  

      return (
        <> 
    
        <Bottomtab/>
        <main>
        <div className="relative px-2 lg:px-8 py-2">
          <header className="flex justify-center ">
            <img src={logo}   alt="A-Z Bible Characters" className='logo'/>
          </header>
          <div className="text-center">
            <p className="text-lg font-medium leading-8 text-indigo-600/95">myChurchBuddy</p>
            <h1 className=" text-[1.5rem] lg:text-[2.5rem] font-bold leading-[4rem] tracking-wider text-amber-700 font-greatvibes">Ministry is Work</h1>
            <h3>Record your Ministry Work for the Week</h3>
          </div>
        </div>
        {!showForm && (
          <Button className="bg-secondary uppercase text-white mb-2" clickMe={addDataForm}>
            Add Data
          </Button>
        )}

       
        {showForm && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="block text-center font-bold mb-1">Weekly activity</label>
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
              type="number"
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
              placeholder="Nr. of successfull calls you made"
              value={callsmade}
              onChange={(e) => setCallsMade(e.target.value)}
            />
            <input
            type="number"
            required
            className="form-control text-center block w-full px-3 py-1.5 mb-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary rounded-[0.9rem] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="How many came to church"
            value={telechurch}
            onChange={(e) => setTeleChurch(e.target.value)}
            />
           <input
                type="number"
                required
                className="form-control text-center block w-full px-3 py-1.5 mb-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary rounded-[0.9rem] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Attendance @ ministry meeting"
                value={ministrymeeting}
                onChange={(e) => setMinistryMeeting(e.target.value)}
            />
            <input
            type="number"
            required
            className="form-control text-center block w-full px-3 py-1.5 mb-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary rounded-[0.9rem] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="How many came to church"
            value={ministrychurch}
            onChange={(e) => setMinistryChurch(e.target.value)}
            />
            <input
                type="number"
                required
                className="form-control text-center block w-full px-3 py-1.5 mb-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary rounded-[0.9rem] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="How many hours of prayer"
                value={prayers}
                onChange={(e) => setPrayers(e.target.value)}
            />
            <input
                type="number"
                required
                className="form-control text-center block w-full px-3 py-1.5 mb-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary rounded-[0.9rem] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Outreach made during the week"
                value={outreach}
                onChange={(e) => setOutreach(e.target.value)}
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
              placeholder="Any notes"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button className="bg-secondary uppercase text-white mb-2"  type="submit">Save Data</Button>
          </form>
        )}
       {showDataForm && (
        <form id='contact-form' onSubmit={handleFormSubmit} className="block rounded-lg shadow-lg bg-gray-100 text-center p-3 mt-4 mb-2">
              <label htmlFor="name" className="block text-center font-bold mb-1">Weekly Activity</label>
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
          <label htmlFor="callsmade" className="block text-left mb-1">Successful Calls Made</label>
          <input type="text" id="callsmade" name="callsmade" value={formData.callsmade}    className="w-full border rounded-lg p-2 mb-2"   onChange={handleCallsChange}/>
          <label htmlFor="telechurch" className="block text-left mb-1">How many members came to church</label>
          <input type="text" id="telechurch" name="telechurch" value={formData.telechurch}    className="w-full border rounded-lg p-2 mb-2"  onChange={handleTelechurchChange} />
          <label htmlFor="meeting" className="block text-left mb-1">Ministry Meeting Attendance</label>
          <input type="text" id="meeting" name="meeting" value={formData.ministrymeeting}    className="w-full border rounded-lg p-2 mb-2"  onChange={handleMinistryMeetingChange} />
          <label htmlFor="ministrychurch" className="block text-left mb-1">Meeting members on Sunday</label>
          <input type="text" id="ministrychurch" name="ministrychurch" value={formData.ministrychurch}    className="w-full border rounded-lg p-2 mb-2"  onChange={handleMinistryChurchChange} />
          <label htmlFor="prayers" className="block text-left mb-1">Hours of Prayers</label>
          <input type="text" id="prayers" name="prayers" value={formData.prayers}    className="w-full border rounded-lg p-2 mb-2"   onChange={handlePrayersChange}/>
          <label htmlFor="outreach" className="block text-left mb-1">Outreaches made</label>
          <input type="text" id="outreach" name="outreach" value={formData.outreach}    className="w-full border rounded-lg p-2 mb-2"  onChange={handleOutreachChange} />




          <label htmlFor="comment" className="block text-left mb-1">Comment</label>
          <textarea 
          id="comment" 
          name="comment" 
          value={formData.comment} 
          onChange={handleNotesChange} 
          className="w-full border rounded-lg p-2 mb-2" 
          rows="4"
          />
         
 
          <Button type="submit" className="bg-green-700 uppercase text-white">
            Update Data
          </Button>
        </form>
      )}
        <div>
   
            <input
                type="text"
                placeholder="Search by day of the month - e.g. 03"
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
                <div className="flex justify-between items-center mb-4">
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
  </div>
        </main>
        </>
      );
    }

export default Ministry