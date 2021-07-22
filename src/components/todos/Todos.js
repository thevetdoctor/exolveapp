import React from 'react'
import DateHeader from '../dateheader/DateHeader'; 
import Todo from '../todo/Todo';
import './todos.css';

export default function Todos() {
    return ( 
        <div className='todos'>
            <div className='todo-dateheader'>
                <DateHeader />
            </div>
            <Todo name='Cooking' done />
            <Todo name='Studying' />
            <Todo name='Travelling' done />
            <Todo name='Project' />
            <Todo name='Church Service' />
        </div>
    ) 
}
