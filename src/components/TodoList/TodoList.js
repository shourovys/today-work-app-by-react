import React from 'react';
import Todo from '../Todo/Todo';
import { useDate } from '../useDate/useDate';
import './TodoList.css'

const TodoList = () => {
    const [selectedDate, setSelectedDate] = useDate()
    console.log(selectedDate);


    return (
        <div id='todo-list'>
            <header id='todo-list-header'>
                <h2>Agenda</h2>
                {
                    selectedDate && <h5>{selectedDate.clientDate}</h5>
                }
            </header>
            <Todo />
        </div>
    );
};

export default TodoList;