import React from 'react'
import { IoCheckmarkCircle, IoEllipseOutline } from 'react-icons/io5';
import './todo.css';

export default function Todo({name, done}) {
    return (
        <div className='todo'>
            <p className={`todo-item ${done && 'done'}`}> 
                {name} 
                {done ?
                    <IoCheckmarkCircle 
                        color='#3EF520'
                    />
                    :
                    <IoEllipseOutline 
                    />
                }
            </p>
        </div>
    )
}
