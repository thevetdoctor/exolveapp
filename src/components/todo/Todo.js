import React from 'react'
import { IoCheckmarkCircle, IoEllipseOutline } from 'react-icons/io5';
import { useGlobalState } from '../../Provider';
import './todo.css';

export default function Todo({id, name, done}) {
    const [, dispatch] = useGlobalState();

    const handleDone = (e) => {
        e.preventDefault();
        dispatch({
            type: 'HANDLE_DONE',
            id
        });
    }
    return (
        <div className='todo'>
            <p className={`todo-item ${done && 'done'}`}> 
                {name} 
                {done ?
                    <span onClick={e => handleDone(e)}>
                        <IoCheckmarkCircle 
                        color='#3EF520'
                        />
                    </span>
                    :
                    <span onClick={e => handleDone(e)}>
                        <IoEllipseOutline 
                        />
                    </span>
                }
            </p>
        </div>
    )
}
