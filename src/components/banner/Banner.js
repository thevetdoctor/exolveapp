import React from 'react';
import Slide from '../slide/Slide';
import { useGlobalState } from '../../Provider';
import './banner.css';

export default function Banner() {
    const [state] = useGlobalState();
    const { public_repos, 
            public_gists, 
            followers, 
            following 
            } = state.publicData;
            
    return (
        <div className='banner'>
            <div className='dashboard-top'>
            <Slide tag='Public repos' count={public_repos} /> 
            <Slide tag='Public gists' count={public_gists} /> 
            <Slide tag='Followers' count={followers} /> 
            <Slide tag='Following' count={following} /> 
        </div> 
        </div>
    )
}
