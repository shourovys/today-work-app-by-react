
import React, { useState, useEffect } from 'react';
import './CalendarCS.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDate } from '../useDate/useDate';


function CalendarCS() {
    const [value, onChange] = useState(new Date());

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const selectedDay = value.getDate()
    const selectedMonth = months[value.getMonth()]
    const selectedYear = value.getFullYear()
    const clientDate = `${selectedDay} ${selectedMonth} ${selectedYear}`
    const serverDate = `${selectedDay}${selectedMonth}${selectedYear}`

    const [selectedDate, setSelectedDate] = useDate()

    useEffect(() => {
        setSelectedDate(
            { clientDate, serverDate }
        )
    }, [value])


    return (
        <div>
            <Calendar className='CalendarCS'
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default CalendarCS