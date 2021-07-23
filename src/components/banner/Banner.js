/* eslint-disable no-unused-vars */
import React from 'react';
import Slide from '../slide/Slide';
import { useSelector } from 'react-redux';
import store from '../../redux/store';
import './banner.css';

export default function Banner() {
    const {getState, dispatch} = store;
    const state = getState();  
    const { public_repos, 
            public_gists, 
            followers, 
            following 
            } = useSelector(state => state.publicData);
            
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
