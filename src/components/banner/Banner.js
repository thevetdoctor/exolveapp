import React from 'react';
import Slide from '../slide/Slide';
import repos from '../../repos';
import gists from '../../gists';
import followers from '../../followers';
import following from '../../following';
import './banner.css';

export default function Banner() {
    return (
        <div className='banner'>
            <div className='dashboard-top'>
            <Slide tag='Public repos' count={repos.length} /> 
            <Slide tag='Public gists' count={gists.length} /> 
            <Slide tag='Followers' count={followers.length} /> 
            <Slide tag='Following' count={following.length} /> 
        </div> 
        </div>
    )
}
