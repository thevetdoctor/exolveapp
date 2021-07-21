import React from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import './slide.css';

export default function Slide({tag, count}) {
    return (
        <div className='tag'>
            <div className='tag-left'>
                <p className='slide-count'>
                    {count}
                </p>
                <p className='slide-tag'>
                    {tag}
                </p>
            </div>
            <div className='tag-right'>
                <BiInfoCircle size='25'/>
            </div>
        </div>
    )
}
