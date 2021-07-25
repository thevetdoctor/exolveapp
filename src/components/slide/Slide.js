import React, { useState, useEffect, Fragment } from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import Loader from 'react-loader-spinner';
import './slide.css';

export default function Slide({tag, count}) {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
      return () => console.log('cleanup Slide.js')
    }, []);
    
    return (
        <div className='tag'>
            {!loading ?
            <Fragment>
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
            </Fragment>
                :
            <Fragment>
            <Loader 
                type='ThreeDots'
                color='#00bfff'
                height={40} 
                width={40} 
            />
            </Fragment>}
        </div>
    )
}
