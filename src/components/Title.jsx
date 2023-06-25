import React from 'react'

function Title({placeholder,handleTitleChange, title}) {
  return (
    <div className="flex justify-center mb-2">
    <input
      id="title"
      type="text"
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
        text-black
        bg-clip-padding
        border border-solid  border-secondary
        rounded-[0.9rem]
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      placeholder={placeholder}
      value={title}
      onChange={handleTitleChange}
    />
</div> 
  )
}

export default Title