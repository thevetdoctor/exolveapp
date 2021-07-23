/* eslint-disable no-unused-vars */
import React from 'react'
import DateHeader from '../dateheader/DateHeader'; 
import Todo from '../todo/Todo';
import { useSelector } from 'react-redux';
import store from '../../redux/store';
import { IoAddCircleSharp } from 'react-icons/io5';
import './todos.css';

export default function Todos() {
    const {getState, dispatch} = store;
    const state = getState();
    const { todos } = useSelector(state => state);
    
    const addTodo = () => {
        dispatch({
            type: 'ADD_TODO',
            addTodo: true
        });
    };

    return ( 
        <div className='todos'>
            <div className='todo-dateheader'>
                <DateHeader />
            </div>
            {todos.map((todo, idx) => (
                <Todo 
                    key={idx}
                    id={todo.id}
                    name={todo.name} 
                    done={todo.done} 
                />
            ))}
            <div className='add-todo'>
                <span onClick={() => addTodo()}>
                    <IoAddCircleSharp 
                        size='4em' 
                        color='#609FFF'
                    />
                </span>
            </div>
        </div>
    ) 
}
