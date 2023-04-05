import React from 'react'
import adImg from '../assets/mychurchbuddy-ad.jpeg';

function Advert() {
  return (
    <div className="mt-10 flex justify-center">
        <img className="h-96 w-full rounded-xl object-cover lg:w-4/5" src={adImg}  alt="A-Z Bible Characters"/>
    </div>
  )
}

export default Advert