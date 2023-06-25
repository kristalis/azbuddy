import mustknow from "../data/must-know";
import { FaArchive  } from "react-icons/fa";
import Button from '../components/PressableButton';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import RadioButton from "./Radio";

const MustKnow = () => {


    const [memoryScripture, setMemoryScripture] = useState('');
    const [selectedComment, setSelectedComment] = useState('');
    const [memoryValue, setMemoryValue ] = useState('');
    const [gapForm, setShowGapForm] = useState(false);
    const [gapcomment, setGapComment] = useState('');
    const [showScripture, setShowScripture] = useState(false);
    const [gameMode, setMode] = useState(0);

    const setGameLevel = (value) => {
      setMode(value);
    }

    const removeCharacters =(selectedComment) =>
    {
      gameMode == 0 ? 
      selectedComment= selectedComment.replace(/[.,:';]/g, '')
      : selectedComment;
      setSelectedComment(selectedComment)
    }   
    const handleDataClick = (selectedScripture, selectedComment) => {
        setShowGapForm(false);  
        setMemoryScripture(selectedScripture);
        setSelectedComment(selectedComment);
        setShowScripture(true);
      };

    const handleMemoryTest = (selectedScripture, selectedComment) => {
      setMemoryValue('');  
      setShowGapForm(false);  
      setShowScripture(false);
      setMemoryScripture(selectedScripture);
      setSelectedComment(selectedComment);

    };

    const handleGapClick= (selectedScripture, selectedComment) => {
        setMemoryValue('');
        setShowScripture(false);
        setMemoryScripture(selectedScripture);
        setSelectedComment(selectedComment);
          // Split the comment into an array of words
        const words = selectedComment.split(' ');
    
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
        setGapComment(gameMode == 0 ? newComment.replace(/[.,:';]/g, ''):newComment);
        setShowGapForm(true);
        

      };


    const handleMemorySubmit = (event) => {
        event.preventDefault();

        const scripture = gameMode == 0 ? selectedComment.replace(/[.,:';]/g, ''):selectedComment;
        const myscripture = gameMode == 0 ? memoryValue.replace(/[.,:';]/g, ''):memoryValue;

        if (scripture.trim().toLowerCase() === myscripture.trim().toLowerCase()) {
            Swal.fire({
                title: "Success!",
                text: "Blessed One, Congratulations on quoting the scripture",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Error",
                text: "Blessed one, quote is not complete, try again",
                icon: "error",
              });
        }
      }
      const [expandedMonths, setExpandedMonths] = useState([]);
      useEffect(() => {
        // Set the first label as expanded initially
        if (mustknow.length > 0) {
          setExpandedMonths([mustknow[0].label]);
        }
      }, []);
      const toggleExpandedMonth = (label) => {
        if (expandedMonths.includes(label)) {
          setExpandedMonths(expandedMonths.filter((month) => month !== label));
        } else {
          setExpandedMonths([...expandedMonths, label]);
        }
      };
    
      const isMonthExpanded = (label) => {
        return expandedMonths.includes(label);
      };
    return (
        <div>
           <div className="block rounded-lg shadow-lg font-bold text-center p-3">
            Difficulty Level : <RadioButton setValue={setGameLevel}/></div>
          
          {mustknow.map((month) => (
            <div className="block rounded-lg shadow-lg bg-gray-100 text-center p-3" key={month.label}>
                <Button
                    className="bg-secondary text-yellow-50 text-center"
                    type="null"
                     clickMe={() => toggleExpandedMonth(month.label)}
                >
                SCRIPTURES for {month.label}
                </Button>  
                {
                isMonthExpanded(month.label) && (
                <>
                    {
                        month.options.map((option, index) => {
                        const selectedScripture = `${option.book} ${option.chapter}:${option.verses}`;
            
                        return (
                        <div className="block rounded-lg shadow-lg bg-gray-100 text-center p-3 mb-2" key={index}>
                            <p className="text-red-500">{option.version} version</p>
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-left">
                                    {option.book} {option.chapter} : {option.verses}
                                </div>
                                
                            <div>
                                <FaArchive size={25} className="inline-block mb-1 text-blue-400" onClick={() => handleDataClick(selectedScripture, option.comment)}/>
                            </div>
                           
                         </div>
                         {memoryScripture === selectedScripture && showScripture && (
                                <div className="block rounded-lg shadow-lg bg-gray-100 text-center p-3 mb-3">
                                <p>{selectedComment}</p>
                                </div>
                            )}
                            <div className="flex justify-center">
                                <Button 
                                    className="bg-amber-700 uppercase text-white mr-2"
                                    clickMe={() => handleMemoryTest(selectedScripture, option.comment)}
                                >
                                Memory Test
                            </Button >
                            <Button className="bg-purple-700 uppercase text-white" clickMe={() => handleGapClick(selectedScripture, option.comment)}>
                                Fill the Gaps
                            </Button >
                            </div>
                        
                          

                        {memoryScripture === selectedScripture && !showScripture && (

                        <div>
                            <form id='memory-form' onSubmit={handleMemorySubmit}>
                            <label htmlFor="comment" className="block text-left text-lg mb-1 font-bold"> {gapForm ? 'Fill the gap for ' : 'Quote'} {memoryScripture}  </label>
                            { gapForm&& (
                                gapcomment
                                )}                    
                                <textarea
                                rows="5"
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
                                placeholder="Write full scripture and check now to confirm... game has 2 levels, For the HARD LEVEL, please take note of your commas, fullstops, characters, etc"
                                value={memoryValue}
                                onChange={(e) => setMemoryValue(e.target.value)}
                                />
                                <Button className="bg-black uppercase text-white mb-2"  type="submit">Check Now </Button>
                            </form>
                        </div>
                        )}
                    
                    </div>
                        );
                    })
                    }
                </>
                )
            }
            </div>
          ))}
        </div>
      );
    };
export default MustKnow