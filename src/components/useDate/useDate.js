import React from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';


const DateContext = createContext()

export const useDate = () => useContext(DateContext)

const DateContextProvider = (props) => {
    const [selectedDate, setSelectedDate] = useState(null)


    return (
        <DateContext.Provider value={[selectedDate, setSelectedDate]}>
            {props.children}
        </DateContext.Provider>
    );
};

export default DateContextProvider
