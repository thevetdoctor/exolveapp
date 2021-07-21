import React from 'react';
import './dateheader.css';

export default function DateHeader() {
    const dateDetails = new Date();
    const weekday = dateDetails.getDay();
    const weekdays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    const dateArray = dateDetails.toDateString().split(' ');
    console.log(dateArray)

    return (
        <div className='date-header'>
           <div className='date-day'>
               <div>
                    {dateArray[2]}
               </div>
               <div className='date-month-year'>
                   <span>{dateArray[1].toUpperCase()}</span>
                   <span>{dateArray[3]}</span>
               </div>
            </div>
           <div className='weekday'>{weekdays[weekday].toUpperCase()}</div> 
        </div>
    )
}
