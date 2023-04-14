    import React, { useState } from 'react';
    import moment from 'moment';
    import ReactWhatsapp from 'react-whatsapp';

    
    function Followup() {
      const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
      const [name, setName] = useState('');
      const [number, setNumber] = useState('');
      const [comment, setComment] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const timestamp = moment().format();
        const newContact = { name, number, comment, timestamp };
        const updatedContacts = [...contacts, newContact];
        setContacts(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      };
    
      const handleWhatsAppMessage = (msg) => {
        <ReactWhatsapp number={msg.number} message={msg.text} />
      //  window.open(`https://api.whatsapp.com/send?phone=${msg.number}&text=${msg.text}`);
      };
    
      const handleTextMessage = (msg) => {
        // You can integrate an SMS API here to send a text message
        console.log('Sending text message:', msg);
      };
    
      return (
        <div className="App">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <textarea
              rows="3"
              placeholder="Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit">Save Contact</button>
          </form>
    
          <ul>
            {contacts.map((contact, index) => (
              <li key={index}>
                <p>Name: {contact.name}</p>
                <p>Number: {contact.number}</p>
                <p>Comment: {contact.comment}</p>
                <p>Timestamp: {moment(contact.timestamp).format('YYYY-MM-DD HH:mm:ss')}</p>
                {/* <WhatsappShareButton
                  phone={contact.number}
                  text={`Hello ${contact.name}, I just wanted to send you a message.`}
                >
                  Send WhatsApp Message
                </WhatsappShareButton> */}
                <button
                  onClick={() =>
                    handleTextMessage({
                      number: contact.number,
                      text: `Hello ${contact.name}, I just wanted to send you a message.`,
                    })
                  }
                >
                  Send Text Message
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

export default Followup