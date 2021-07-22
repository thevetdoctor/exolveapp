import React from 'react'
import DateHeader from '../dateheader/DateHeader'; 
import Todo from '../todo/Todo';
import { useGlobalState } from '../../Provider';
import { IoAddCircleSharp } from 'react-icons/io5';
import './todos.css';

export default function Todos() {
    const [state, dispatch] = useGlobalState();
    
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
            {state.todos.map((todo, idx) => (
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
