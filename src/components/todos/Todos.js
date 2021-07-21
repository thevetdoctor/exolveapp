import React from 'react'
import bio from '../../bio';
import DateHeader from '../dateheader/DateHeader'; 
import Todo from '../todo/Todo';
import './todos.css';

export default function Todos() {
    console.log(bio)
    return ( 
        <div className='todos'>
            <p>
                <DateHeader />
            </p>
            <Todo name='Cooking' done />
            <Todo name='Studying' />
            <Todo name='Travelling' done />
            <Todo name='Project' />
            <Todo name='Church Service' />
        </div>
    )
}
