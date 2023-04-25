    import React, { useState } from 'react';
    import moment from 'moment';
    import '../App.css'
    import logo from '../assets/mychurchbuddy-logo-profile.png';
    import Bottomtab from '../navigation/Bottomtab'; 
    import Button from '../components/PressableButton';
    import { FaArchive, FaWhatsapp,FaPhone,FaSms  } from "react-icons/fa";
    import countries from '../data/countries';


    function Followup() {

  
    const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(countries[0].code);

    //   const [numberError, setNumberError] = useState('');
      const [comment, setComment] = useState('');
      const [showForm, setShowForm] = useState(false);
      const [showContact, setShowContact] = useState(false);
      const [formData, setFormData] = useState({
        name: '',
        number: '',
        comment: ''
      });
      const [searchQuery, setSearchQuery] = useState('');
      const [selectedContactIndex, setSelectedContactIndex] = useState(-1);
   
      const handleSubmit = (e) => {
        e.preventDefault();
        const timestamp = moment().format();
        const newContact = { name, number, selectedCountry, comment, timestamp };
        const updatedContacts = [...contacts, newContact];
        setContacts(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        setName('');
        setNumber('');
        setComment('');
        setShowForm(false);

        console.log(updatedContacts);

      };
      const addContactForm = () => {
        setShowForm(true);
        setShowContact(false);
      }

      const handleContactClick = (index) => {
        const originalIndex = contacts.findIndex((contact) => contact.timestamp === filteredContacts[index].timestamp);
        setShowForm(false);
        setSelectedContactIndex(originalIndex);
        setShowContact(true);
        setFormData({
          name: contacts[originalIndex].name,
          number: contacts[originalIndex].number,
          comment:contacts[originalIndex].comment,
          selectedCountry:contacts[originalIndex].selectedCountry,
        });
      
        const element = document.querySelector('#contact-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const handleFormSubmit = (event) => {
        event.preventDefault();
        const updatedContact = {
          ...contacts[selectedContactIndex],
          name: formData.name,
          number: formData.number,
          comment: formData.comment,
          
        };
        const updatedContacts = [      ...contacts.slice(0, selectedContactIndex),      updatedContact,      ...contacts.slice(selectedContactIndex + 1)    ];
        setContacts(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        setShowContact(false);
        setSelectedContactIndex(-1);
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

    const handlePhoneClick = () => {
    window.location.href = `tel:${formData.number}`;
    }

    const handleSmsClick = () => {
    window.location.href = `sms:${formData.number}?body=${formData.comment}`;
    };

    const handleNotesChange = (event) => {
    setFormData({ ...formData, comment: event.target.value });
    };
    const handleNameChange = (event) => {
    setFormData({ ...formData, name: event.target.value });
    };

    const handleContactChange = (event) => {
    setFormData({ ...formData, number: event.target.value });
    };
    const handleSearch = (event) => {
    setShowForm(false);
    setShowContact(false);
    setSearchQuery(event.target.value);

    };
    
    const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchQuery.toLowerCase());
    });


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
            <h1 className=" text-[1.5rem] lg:text-[2.5rem] font-bold leading-[4rem] tracking-wider text-amber-700 font-greatvibes">Outreach Contacts</h1>
            <h3>Save & follow outreach contacts here</h3>
          </div>
        </div>
        {!showForm && (
          <Button className="bg-secondary uppercase text-white mb-2" clickMe={addContactForm}>
            Add Contact
          </Button>
        )}

       
        {showForm && (
          <form onSubmit={handleSubmit}>
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
              placeholder="Contact Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <select
                value={selectedCountry}
                className="form-control text-center block w-full px-3 py-1.5 mb-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary rounded-[0.9rem] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onChange={(e) => setSelectedCountry(e.target.value)}
                >
                {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                    {country.name} 
                    </option>
                ))}
            </select>
            <div className="relative">
            <div className="absolute top-0 left-0 bottom-0 flex items-center px-3 pointer-events-none">
                <span className="text-gray-500">{selectedCountry}</span>
            </div>
           <input
                type="number"
                required
                className="form-control text-center block w-full px-3 py-1.5 mb-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary rounded-[0.9rem] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Input contact number"
                value={number}
                onChange={(e) => {
                    const inputNumber = e.target.value;
                    setNumber(inputNumber);
                    // const numberPattern = /^0\d{10}$/;
                    // if (!numberPattern.test(inputNumber)) {
                    // setNumberError('Please enter a valid UK phone number');
                    // } else {
                    // setNumberError('');
                    // }
                }}
            />
            </div>

            {/* {numberError && (
            <p className="text-red-500 text-xs italic">{numberError}</p>
            )} */}
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
            <Button className="bg-secondary uppercase text-white mb-2"  type="submit">Save Contact</Button>
          </form>
        )}
          {showContact && (
        <form id='contact-form' onSubmit={handleFormSubmit} className="block rounded-lg shadow-lg bg-gray-100 text-center p-3 mt-4 mb-2">
          <label htmlFor="name" className="block text-left mb-1">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleNameChange}  className="w-full border rounded-lg p-2 mb-2" />

          <label htmlFor="number" className="block text-left mb-1">Contact</label>
          <div className="relative">
            <div className="absolute top-0 left-0 bottom-0 flex items-center px-3 pointer-events-none">
                <span className="text-gray-500">{formData.selectedCountry}</span>
            </div>
          <input type="number" id="number" name="number" value={formData.number} onChange={handleContactChange}  className="w-full border rounded-lg p-2 mb-2 text-center block px-3 py-1.5" />
          </div>

          <label htmlFor="comment" className="block text-left mb-1">Message</label>
          <textarea 
          id="comment" 
          name="comment" 
          value={formData.comment} 
          onChange={handleNotesChange} 
          className="w-full border rounded-lg p-2 mb-2" 
          rows="4"
          />
          <div className="flex justify-center mb-2">
                <FaWhatsapp size={45} onClick={handleWhatsAppClick} className="inline-block mb-1 text-green-400 mr-4"/><FaPhone size={45} onClick={handlePhoneClick} className="inline-block mb-1 text-blue-400 mr-4"/><FaSms size={45} onClick={handleSmsClick} className="inline-block mb-1 text-gray-600 mr-4"/>
            </div>  
 
          <Button type="submit" className="bg-green-700 uppercase text-white">
            Update Notes
          </Button>
        </form>
      )}
        <div>
            <input
                type="text"
                placeholder="Search by name"
                className="w-full border rounded-lg p-2 mb-2"
                value={searchQuery}
                onChange={handleSearch}
            /> 
        </div>

          {contacts.length > 0 && (
      <div className="grid md:grid-cols-3 gap-2">
        {
        filteredContacts.map((contact, index) => (
            <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-3' key={index}>
                <div className="flex justify-between items-center mb-4">
                    <div className="text-left">
                    <div className="font-gillsansnovaabook hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-xl font-bold">
                        {contact.name}
                    </div>
                    </div>
                    <div>
                    
                    <FaArchive size={25} className="inline-block mb-1 text-blue-400" onClick={() => handleContactClick(index)} />

                    </div>
                </div> 
                <div className="flex justify-center">
                    <Button className="bg-amber-700 uppercase text-white mr-2">
                    {moment(contact.timestamp).format('D MMM @ HH:mm')}
                    </Button>
                    <Button className="bg-purple-700 uppercase text-white" clickMe={() => window.location.href = `tel:${contact.number}`}>
                         {contact.number}
                    </Button>
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

export default Followup