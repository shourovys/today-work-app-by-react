import React from 'react';
import Work from '../Work/Work';
import './Todo.css'

const Todo = () => {
    return (
        <div>
            <div id='todo'>
                <h2 id="name">kamrul</h2>
                <Work />

            </div>
            <div id='todo'>
                <h2 id="name">Shourov</h2>
                <Work />

            </div>
        </div>
    );
};

export default Todo;