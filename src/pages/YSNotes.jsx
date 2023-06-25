import {useRef,useState,useEffect} from 'react'
import '../App.css'
import logo from '../assets/mychurchbuddy-logo-profile.png';
import Button from '../components/PressableButton';
import Bottomtab from '../navigation/Bottomtab'; 
import { FaYoutube, FaVimeo, FaClipboardCheck, FaUpload, FaVideo, FaAudible, FaFileAudio, FaAudioDescription, FaTasks } from "react-icons/fa";
import Swal from 'sweetalert2';
import Mnotes from '../components/Mnotes';
import { message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Title from '../components/Title';

function YSNotes({ fixed }) {
    const [link, setLink] = useState('');
    const [videoId, setVideoId] = useState('');
    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');
    const [reference, setReference] = useState('');
    const [revelation, setRevelation] = useState('');
    const [savedVideos, setSavedVideos] = useState([]);
    const [videoType, setVideoType] = useState('');
    const [errMsg, setErrMsg] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [noteFlag, setNoteFlag] = useState(null);
    const [audioFile, setAudioFile] = useState(null);
    const hiddenFileInput = useRef(null);
    const objectUrlRef = useRef(null);

    useEffect(() => {
      const savedVideos = JSON.parse(localStorage.getItem('savedVideos')) || [];
      setSavedVideos(savedVideos);

    }, []);
    const [isFixed, setIsFixed] = useState(false);


    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 0) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
    useEffect(() => {
      if (notes !== "" || reference != "" || revelation != "") { 
      const savedVideo = {
        link,
        title,
        notes,
        reference,
        revelation,
        audioFile
      };
    
      const videoIndex = savedVideos.findIndex((video) => video.title === title);
    
      if (videoIndex === -1) {
        const updatedSavedVideos = [...savedVideos, savedVideo];
        setSavedVideos(updatedSavedVideos);
        localStorage.setItem("savedVideos", JSON.stringify(updatedSavedVideos));
      } else {
        const updatedSavedVideos = [...savedVideos];
        updatedSavedVideos[videoIndex].audioFile = audioFile;
        updatedSavedVideos[videoIndex].notes = notes;
        updatedSavedVideos[videoIndex].reference = reference;
        updatedSavedVideos[videoIndex].revelation = revelation;
        setSavedVideos(updatedSavedVideos);
        localStorage.setItem("savedVideos", JSON.stringify(updatedSavedVideos));
      }
    }}, [notes, reference, revelation]);

    const extractVideoId = (url) => {
      
      let videoId = null;
      let type = '';

      if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1]?.split('&')[0];
        type = 'youtube';
      } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0];
        type = 'youtube';
      } else if (url.includes('youtube.com/live/')) {
        videoId = url.split('youtube.com/live/')[1]?.split('?')[0];
        type = 'youtube';
      }
       else if (url.includes('vimeo.com/')) {
        videoId = url.split('vimeo.com/')[1]?.split('?')[0];
        type = 'vimeo';
       } 

      setVideoType(type);
      return videoId;
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      const id = extractVideoId(link);
      if (id) {
        setErrMsg(null);
        setNotes('');
        setVideoId(id);
        if (link.includes('youtube.com/watch?v=') || link.includes('youtu.be/')  || link.includes('youtube.com/live/')) {
          const url = `https://www.youtube.com/watch?v=${id}`;
          fetch(`https://www.youtube.com/oembed?url=${url}&format=json`)
            .then((response) => response.json())
            .then((data) => setTitle(data.title))
            .catch((error) => console.error(error));
        } else if (link.includes('vimeo.com/')) {
          fetch(`https://vimeo.com/api/oembed.json?url=${link}`)
            .then((response) => response.json())
            .then((data) => setTitle(data.title))
            .catch((error) => console.error(error));
         } 

      }  else {
        setVideoType('');
        setErrMsg('Message could not be loaded. Try pasting the right link [youtube.com/watch?v=][youtu.be/][youtube.com/live/][vimeo.com/]')
       }
    };
  
    const handleNotesChange = (e) => {
      setNotes(e.target.value);
      setNoteFlag(false)
    };
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
 
    const handleReferenceChange = (e) => {
      setReference(e.target.value);
    };
    const handleRevelationChange = (e) => {
      setRevelation(e.target.value);
    };
 
    const handleSave = () => {

    setNotes('');
    setLink('');
    setVideoId('');
    setTitle('');
    setReference('');
    setRevelation('');
    setAudioFile('');
    setNoteFlag(false);
    setErrMsg(null);
  };
  
  const handleSavedVideoClick = (index) => {

    const reversedVideos = filteredVideos.slice().reverse();
    const savedVideo = reversedVideos[index];
   // const videoIndex = filteredVideos.indexOf(savedVideo);
    setVideoId(extractVideoId(savedVideo.link));
    setTitle(savedVideo.title);
    setNotes(savedVideo.notes);
    setReference(savedVideo.reference);
    setRevelation(savedVideo.revelation);
    setLink(savedVideo.link);
    setAudioFile(savedVideo.audioFile);
    setErrMsg(null);
    setNoteFlag(null);
    // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
  };

 const handleMsgType = (noteFlag) => {
    setNoteFlag(noteFlag);
    setNotes('');
    setLink('');
    setVideoId('');
    setTitle('');
    setReference('');
    setRevelation('');
    setAudioFile('');
    setErrMsg(null);
 }

  const handleDelete = (index) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover the notes on this message!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
    const reversedVideos = savedVideos.slice().reverse();
    const updatedSavedVideos = [...reversedVideos];
    updatedSavedVideos.splice(index, 1);
    setSavedVideos(updatedSavedVideos);
    localStorage.setItem('savedVideos', JSON.stringify(updatedSavedVideos));
    Swal.fire(
      'Deleted!',
      '',
      'success'
    )
  }
})
};
const filteredVideos = savedVideos.filter((video) =>
video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
video.notes.toLowerCase().includes(searchTerm.toLowerCase())
);

function handleFileChange(event) {
  const file = event.target.files[0];
  setTitle(file.name);
  const objectUrl = URL.createObjectURL(file);
 // console.log(file); 
  setAudioFile(objectUrl);
}
const uploadFile = event => {
  setAudioFile(null);
  hiddenFileInput.current.click();
};


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
            <h1 className=" text-[1.5rem] lg:text-[2.5rem] font-bold leading-[4rem] tracking-wider text-amber-700 font-greatvibes">Young Solomon Notes</h1>
          </div>
      </div> 
      <div className="flex justify-center mb-2">
      <Button className="inline-block mb-1 w-36 text-white bg-black focus:bg-secondary"  clickMe={()=>{handleMsgType('video')}} data-tip="Click me!" data-for="my-tooltip"><FaVideo size={36}/></Button>

      <Button className="inline-block mb-1 w-36 bg-black text-white focus:bg-secondary"  clickMe={()=>{handleMsgType('custom')}}><FaTasks size={36} /></Button>

      {/* <Button className="inline-block mb-1 w-36 bg-black text-white focus:bg-secondary"  clickMe={()=>{handleMsgType('audio')}}>< FaAudible size={36}/></Button> */}
      </div> 
      
      { noteFlag == 'video' ?
        <>
        <div className="flex justify-center mb-3">
                <input
                  id="link"
                  type="url"
                  required
                  className="
                    form-control
                    text-center
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid  border-secondary
                    rounded-[0.9rem]
                    transition
                    ease-in-out
                    m-0             "
                  placeholder="Paste Youtube or Vimeo msg link here"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
        </div>
        <div className="flex justify-center mb-1">
              <Button className="bg-secondary uppercase text-white" clickMe={handleSubmit}>load message</Button>
        </div> 
        <div className="flex justify-center mb-2">
        <FaYoutube size={25} className="inline-block mb-1 text-red-600"/><FaVimeo size={25} className="inline-block mb-1 text-blue-400"/><FaClipboardCheck size={25} className="inline-block mb-1 text-green-400"/>
        </div></>    : null
      }
{ noteFlag == 'custom' ?
        <>
        <Title
          placeholder="Add Message Title Here"
          value={title}
          handleTitleChange={(e) => setTitle(e.target.value)}
        />
      
  
        <div className="flex justify-center mb-2">
        <FaYoutube size={25} className="inline-block mb-1 text-red-600"/><FaVimeo size={25} className="inline-block mb-1 text-blue-400"/><FaClipboardCheck size={25} className="inline-block mb-1 text-green-400"/>
        </div> </>:
        null
    }
{/* { noteFlag == 'audio' ?
        <>
        <div className="flex justify-center mb-2">
        <Button className=" bg-slate-400 uppercase text-white" clickMe={uploadFile} >Select Audio File</Button>
          <input type="file" 
          accept="audio/*"
          onChange={handleFileChange}   
          ref={hiddenFileInput}
          style={{display: 'none'}}
          />
         
        </div>
        <Title
          placeholder="Add Message Title Here"
          title={title}
          handleTitleChange={handleTitleChange}
        />
      
        
        <div className="flex justify-center mb-2">
        <FaYoutube size={25} className="inline-block mb-1 text-red-600"/><FaVimeo size={25} className="inline-block mb-1 text-blue-400"/><FaClipboardCheck size={25} className="inline-block mb-1 text-green-400"/>
        </div> </>:
        null
    } */}


      <div className="flex justify-center mb-2">
            <h3 className='text-lg font-bold text-black text-center'>{errMsg ? errMsg : ''}</h3>
      </div>  
        
      {videoType === 'youtube' && videoId && (
        <>
     
        <div className={isFixed ? "video-container-fixed" : "video-container"}>    
            <div className="flex justify-center mb-5">
            <iframe
                title="YouTube Video"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>
          </div>
        </>
      )}
  {videoType === 'vimeo' && videoId && (
  <>
  
    <div className={isFixed ? "video-container-fixed" : "video-container"}>
    <div className="flex justify-center mb-2">
      <iframe
        title="Vimeo Video"
        width="560"
        height="315"
        src={`https://player.vimeo.com/video/${videoId}`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    </div>
    </>
  
)}
     {title && !errMsg && (
      <>
       
      <Mnotes handleNotesChange={handleNotesChange} notes={notes} titleFlag={true} title={title} handleTitleChange={handleTitleChange} reference={reference} handleReferenceChange={handleReferenceChange} revelation={revelation} handleRevelationChange={handleRevelationChange} audioFile={audioFile}/>
      <div className="flex justify-center mb-5">
            <Button className=" bg-neutral-900 uppercase text-white" clickMe={handleSave}>Close</Button>
      </div>
       </>
      )}

<div className="flex justify-center mb-1">
        <input
                type="text"
                placeholder="Search messages by title or notes"
                className="w-full border rounded-lg p-2 mb-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            /> 
</div>
{
  savedVideos.length > 0 && (
      <div className="grid md:grid-cols-3 gap-2">
      {
            filteredVideos.slice().reverse().map((savedVideo, index)=> (
              <div className='block rounded-lg shadow-lg bg-gray-100 text-center p-3' key={index}>
              <div className="mb-4">
                <a href="#" onClick={() => handleSavedVideoClick(index)} className="font-gillsansnovaabook hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-xl font-bold">
                  {savedVideo.title}
                </a>
              </div> 
              <div className="flex justify-center">
                <Button className="bg-amber-700 uppercase text-white mr-2" clickMe={() => handleSavedVideoClick(index)}>
                  Open
                </Button>
                <Button className="bg-purple-700 uppercase text-white" clickMe={() => handleDelete(index)}>
                  Delete
                </Button>
              </div>
            </div>
       
            )
        )
      }
      </div>
)
}
<div className='block rounded-lg shadow-lg bg-primary py-5'>
  </div>

      <footer className="hidden lg:block container mx-auto px-6 py-6 bg-white dark:bg-gray-900 fixed  inset-x-0  bottom-0 border-t-2 border-red-500">
  
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

export default YSNotes
