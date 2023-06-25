
function Mnotes({handleNotesChange, notes,   handleReferenceChange, reference, handleRevelationChange, revelation,   title, audioFile, headerTitle}) {


  return (
 <>
   <div className="flex justify-center">
      <h3 className='text-lg text-secondary font-bold underline'>{title}</h3>
    </div>

        <div className="flex justify-center mb-2">
          { audioFile ?
            <audio controls src={audioFile} />
          : null
          }
        </div>
        <div className="flex justify-center mb-1">
        <h2 className='text-lg text-secondary'>{headerTitle}</h2>
        </div>
            <div className="flex justify-center ">
            <label className="text-left text-lg mb-2 font-bold"> Points / Notes </label>
            </div>
            <div className="flex justify-center ">       
            <textarea
              rows="5"
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
              placeholder="Points"
              value={notes}
              onChange={handleNotesChange}
            />
             </div>
             <div className="flex justify-center ">
                <label className="text-left text-lg mb-2 font-bold"> Scriptures Reference </label>
            </div>
            <div className="flex justify-center ">   
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
            placeholder="Add Reference Scriptures"
            value={reference}
            onChange={handleReferenceChange}
            /> 
            </div>
            <div className="flex justify-center ">
                <label className="text-left text-lg mb-2 font-bold"> My Revelation </label>
            </div>
            <div className="flex justify-center mb-5">   
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
            placeholder="Your Revelation"
            value={revelation}
            onChange={handleRevelationChange}
            /> </div>
            </>
           
    
  )
}

export default Mnotes