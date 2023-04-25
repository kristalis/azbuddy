import React, { useState } from 'react';
import '../App.css'
import logo from '../assets/mychurchbuddy-logo-profile.png';
import Bottomtab from '../navigation/Bottomtab'; 
import Button from '../components/PressableButton';
import { FaArchive  } from "react-icons/fa";
import biblebooks  from '../data/bible-books';
import bibleversions from '../data/bible-versions';
import SelectData from '../components/select';
import Swal from 'sweetalert2';


function Scriptures() {
    const [datas, setDatas] = useState(JSON.parse(localStorage.getItem('scriptures')) || []);

    const [showForm, setShowForm] = useState(false);
    const [showDataForm, setShowData] = useState(false);
    const [formData, setFormData] = useState('');
    const [memoryForm, setShowMemoryForm] = useState(false);
    const [memoryValue, setMemoryValue ]= useState('');
    const [gapForm, setShowGapForm] = useState(false);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDataIndex, setSelectedDataIndex] = useState(-1);
    const [book, setBiblebook] = useState('');
    const [version, setBibleversion] = useState('');
    const [verses, setVerses] = useState('');
    const [chapter, setChapter] = useState('');
    const [comment, setComment] = useState('');
    const [gapcomment, setGapComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { version, book, chapter, verses, comment};
        const updatedDatas = [...datas, newData];
        setDatas(updatedDatas);
        localStorage.setItem('scriptures', JSON.stringify(updatedDatas));
        setBiblebook('');
        setBibleversion('');
        setChapter('');
        setVerses('');     
        setComment('');
        setShowForm(false);
        setShowMemoryForm(false);
      };

      const addDataForm = () => {
        setShowForm(true);
        setShowData(false);
        setShowMemoryForm(false);
      }

   
    const handleDataClick = (index) => {
        const originalIndex = datas.findIndex((data) =>
        data.version === filteredDatas[index].version &&
        data.book === filteredDatas[index].book &&
        data.chapter === filteredDatas[index].chapter &&
        data.verses === filteredDatas[index].verses &&
        data.comment === filteredDatas[index].comment
      );        setShowForm(false);
        setShowMemoryForm(false);
        setShowData(true);
        setSelectedDataIndex(originalIndex);
        setFormData({
          version: datas[originalIndex].version,
          book: datas[originalIndex].book,
          chapter: datas[originalIndex].chapter,
          verses: datas[originalIndex].verses,
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
          version: formData.version,
          book: formData.book,
          chapter: formData.chapter,
          verses: formData.verses,
          comment: formData.comment
        };
        const updatedDatas = [...datas];
        updatedDatas[selectedDataIndex] = updatedData;
        setDatas(updatedDatas);
        setShowData(false);
        setShowForm(false);
        localStorage.setItem('scriptures', JSON.stringify(updatedDatas));
      };
      

    

  

    const handleNotesChange = (event) => {
    setFormData({ ...formData, comment: event.target.value });
    };
    const handleChapter = (event) => {
    setFormData({ ...formData, chapter: event.target.value });
    };
    const handleVerses = (event) => {
        setFormData({ ...formData, verses: event.target.value });
    };
    const handleBook = (event) => {
        setFormData({ ...formData, book: event.target.value });
    };
    const handleVersion = (event) => {
        setFormData({ ...formData, version: event.target.value });
    };
 
   
    const handleSearch = (event) => {
    setShowForm(false);
    setShowData(false);
    setShowMemoryForm(false);
    setSearchQuery(event.target.value);
  

    };

    const filteredDatas = datas.filter((data) => {
        return data.book.toLowerCase().includes(searchQuery.toLowerCase());
    });
      

 const setBooks = (value) => {
    setBiblebook(value);
  }
  const setVersions = (value) => {
    setBibleversion(value);
  }

  const handleMemoryTest = (index) => {
    setShowMemoryForm(true);
    setShowGapForm(false);

    setShowForm(false);
    setShowData(false);
    const originalIndex = datas.findIndex((data) =>
        data.version === filteredDatas[index].version &&
        data.book === filteredDatas[index].book &&
        data.chapter === filteredDatas[index].chapter &&
        data.verses === filteredDatas[index].verses &&
        data.comment === filteredDatas[index].comment
    );
    
    setFormData({
      book: datas[originalIndex].book,
      chapter: datas[originalIndex].chapter,
      verses: datas[originalIndex].verses,
      comment: datas[originalIndex].comment,
    });

    setMemoryValue('');

    const element = document.querySelector('#memory-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
   

  };

  const handleGapClick = (index) => {
    const originalIndex = datas.findIndex((data) =>
      data.version === filteredDatas[index].version &&
      data.book === filteredDatas[index].book &&
      data.chapter === filteredDatas[index].chapter &&
      data.verses === filteredDatas[index].verses &&
      data.comment === filteredDatas[index].comment
    );
    setFormData({
        book: datas[originalIndex].book,
        chapter: datas[originalIndex].chapter,
        verses: datas[originalIndex].verses,
        comment: datas[originalIndex].comment,
      });
      setMemoryValue('');
    const gapcomment = datas[originalIndex].comment;
  
    // Split the comment into an array of words
    const words = gapcomment.split(' ');
 
    // Create a new array of words with some words randomly replaced with a gap
    const newWords = words.map((word) => {
      if (Math.random() < 0.3) {
        // Replace the word with a gap
        return '_'.repeat(word.length);
      } else {
        return word;
      }
    });
    
    // Join the new array of words into a new comment string
    const newComment = newWords.join(' ');
    setGapComment(newComment);

    setShowMemoryForm(true);
    setShowGapForm(true);
    setShowForm(false);
    setShowData(false);

    const element = document.querySelector('#memory-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  const handleMemorySubmit = (event) => {
    event.preventDefault();
    if (formData.comment === memoryValue) {
        Swal.fire({
            title: "Success!",
            text: "Blessed One, Congratulations on quoting the scripture",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Blessed one, try again",
            icon: "error",
          });
    }
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
            <h1 className=" text-[1.5rem] lg:text-[2.5rem] font-bold leading-[4rem] tracking-wider text-amber-700 font-greatvibes">Must Know Scriptures</h1>
          </div>
        </div>
        {!showForm && (
          <Button className="bg-secondary uppercase text-white mb-2" clickMe={addDataForm}>
            Add Must Know Scriptures
          </Button>
        )}

       
        {showForm && (
          <form onSubmit={handleSubmit}>
           <SelectData
                options={bibleversions}
                placeholderlabel='Select version'
                setValue={setVersions}
            />
            <SelectData
                options={biblebooks}
                placeholderlabel='Select book'
                setValue={setBooks}
            />
            <input
            type="number"
            required
            className="form-control block w-full px-3 py-1.5 mb-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary rounded-[0.9rem] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="chapter [e.g. 6 ]"
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
            />
           <input
                type="text"
                required
                className="form-control  block w-full px-3 py-1.5 mb-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary rounded-[0.9rem] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="verses [e.g. 30 - 33]"
                value={verses}
                onChange={(e) => setVerses(e.target.value)}
            />
                  
            <textarea
              rows="4"
              className="
              form-control
              
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
              placeholder="Scripture"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button className="bg-secondary uppercase text-white mb-2"  type="submit">Save Scripture</Button>
          </form>
        )}
       {showDataForm && (
        <form id='contact-form' onSubmit={handleFormSubmit} className="block rounded-lg shadow-lg bg-gray-100 text-center p-3 mt-4 mb-2">
       
          <label htmlFor="callsmade" className="block text-left mb-1">Version</label>
          <input type="text" id="version" name="version" value={formData.version}    className="w-full border rounded-lg p-2 mb-2" onChange={handleVersion}  readOnly/>
          <label htmlFor="telechurch" className="block text-left mb-1">Book</label>
          <input type="text" id="book" name="book" value={formData.book}    className="w-full border rounded-lg p-2 mb-2" onChange={handleBook}  readOnly/>
          <label htmlFor="meeting" className="block text-left mb-1">Chapter</label>
          <input type="text" id="chapter" name="chapter" value={formData.chapter}    className="w-full border rounded-lg p-2 mb-2"  onChange={handleChapter} />
          <label htmlFor="ministrychurch" className="block text-left mb-1">Verse(s)</label>
          <input type="text" id="ministrychurch" name="ministrychurch" value={formData.verses}    className="w-full border rounded-lg p-2 mb-2"  onChange={handleVerses} />
        
          <label htmlFor="comment" className="block text-left mb-1">Scripture</label>
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
      
        {memoryForm && (
          <form id='memory-form' onSubmit={handleMemorySubmit}>
         
            <label htmlFor="comment" className="block text-left text-lg mb-1 font-bold"> {gapForm ? 'Fill the gap for ' : 'Quote'} {formData.book}  {formData.chapter} : {formData.verses} </label>
          
            { gapForm&& (
            gapcomment
            )}
            <textarea
              rows="4"
              className="
              form-control
              
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
              placeholder="Scripture"
              value={memoryValue}
              onChange={(e) => setMemoryValue(e.target.value)}
            />
            <Button className="bg-black uppercase text-white mb-2"  type="submit">Check Now </Button>
          </form>
        )}
 
    


        <div>
   
            <input
                type="text"
                placeholder="Search by book"
                className="w-full border rounded-lg p-2 mb-2"
                value={searchQuery}
                onChange={handleSearch}
            /> 
        </div>

          {datas.length > 0 && (
      <div className="grid md:grid-cols-3 gap-2">
        {
            filteredDatas.map((data, index) => (
            <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-3' key={index}>
                <div className="flex justify-between items-center mb-4">
                    <div className="text-left">
                   {data.book} {data.chapter} : {data.verses}
                    </div>
                    <div>
                    
                    <FaArchive size={25} className="inline-block mb-1 text-blue-400" onClick={() => handleDataClick(index)}/>

                    </div>
                </div> 
                <div className="flex justify-center">
                    <Button className="bg-amber-700 uppercase text-white mr-2"clickMe={() => handleMemoryTest(index)}>
                      Memory Test
                    </Button>
                    <Button className="bg-purple-700 uppercase text-white" clickMe={() => handleGapClick(index)}>
                         Fill the Gaps
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

export default Scriptures