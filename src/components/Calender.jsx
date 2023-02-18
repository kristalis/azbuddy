
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';

const Calendar = ({dayText, size, color}) => (
    <div className="bg-white w-6 h-6 flex items-center justify-center square-full -ml-3 text-sm">
        <FaRegCalendar size={size} color={color || 'red'} />
        <div style={{ position: 'absolute', paddingTop:4 }}> {dayText} </div> 

    </div>
);

export default Calendar;

