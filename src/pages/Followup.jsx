    import React, { useState } from 'react';
    import moment from 'moment';
    import '../App.css'
    import logo from '../assets/mychurchbuddy-logo-profile.png';
    import Bottomtab from '../navigation/Bottomtab'; 
    import Button from '../components/PressableButton';
    import { FaArchive, FaWhatsapp,FaPhone,FaSms  } from "react-icons/fa";

    function Followup() {
      const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
      const [name, setName] = useState('');
      const [number, setNumber] = useState('');
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
        const newContact = { name, number, comment, timestamp };
        const updatedContacts = [...contacts, newContact];
        setContacts(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        setName('');
        setNumber('');
        setComment('');
        setShowForm(false);

      };

      const handleContactClick = (index) => {
        setShowForm(false);
        setSelectedContactIndex(index);
        setShowContact(true);
        setFormData({
            name: contacts[index].name,
            number: contacts[index].number,
            comment:contacts[index].comment,
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
    const url =
        "https://api.whatsapp.com/send?phone=" +
        formData.contact +
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
            <h3>Save outreach contacts here</h3>
          </div>
        </div>
        {!showForm && (
          <Button className="bg-secondary uppercase text-white mb-2" clickMe={() => setShowForm(true)}>
            Add Contact
          </Button>
        )}

        <div>
            <input
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
           
        </div>
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
              placeholder="Contact Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
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
            <Button className="bg-secondary uppercase text-white mb-2"  type="submit">Save Contact</Button>
          </form>
        )}
          {showContact && (
        <form id='contact-form' onSubmit={handleFormSubmit} className="block rounded-lg shadow-lg bg-gray-100 text-center p-3 mt-4 mb-2">
          <label htmlFor="name" className="block text-left mb-1">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleNameChange}  className="w-full border rounded-lg p-2 mb-2" />

          <label htmlFor="number" className="block text-left mb-1">Contact</label>
          <input type="number" id="number" name="number" value={formData.number} onChange={handleContactChange}  className="w-full border rounded-lg p-2 mb-2" />

          <label htmlFor="comment" className="block text-left mb-1">Comment</label>
          <textarea id="comment" name="comment" value={formData.comment} onChange={handleNotesChange} className="w-full border rounded-lg p-2 mb-2" />
          <div className="flex justify-center mb-2">
                <FaWhatsapp size={45} onClick={handleWhatsAppClick} className="inline-block mb-1 text-green-400 mr-4"/><FaPhone size={45} onClick={handlePhoneClick} className="inline-block mb-1 text-blue-400 mr-4"/><FaSms size={45} onClick={handleSmsClick} className="inline-block mb-1 text-gray-600 mr-4"/>
            </div>  
 
          <Button type="submit" className="bg-green-700 uppercase text-white">
            Update Notes
          </Button>
        </form>
      )}

{filteredContacts.map((contact) => (
                <div key={contact.id}>
                <p>{contact.name}</p>
                <p>{contact.phone}</p>
                </div>
            ))}
          {contacts.length > 0 && (
      <div className="grid md:grid-cols-3 gap-2">
        {
        contacts.map((contact, index) => (
            <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-3' key={index}>
            <div className="flex justify-between items-center mb-4">
                <div className="text-left">
                <a href="#" onClick={() => handleSavedVideoClick(index)} className="font-gillsansnovaabook hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-xl font-bold">
                    {contact.name}
                </a>
                </div>
                <div>
                
                <FaArchive size={25} className="inline-block mb-1 text-blue-400" onClick={() => handleContactClick(index)} />

                </div>
            </div> 
            <div className="flex justify-center">
                <Button className="bg-amber-700 uppercase text-white mr-2">
                {moment(contact.timestamp).format('D MMM @ HH:mm')}
                </Button>
                <Button className="bg-purple-700 uppercase text-white">
                {contact.number}
                </Button>
            </div>
            </div>
        ))
        }
   
      </div>
)
}
     
        </main>
        </>
      );
    }

export default Followup