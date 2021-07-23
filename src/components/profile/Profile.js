/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import axios from 'axios';
import { IoLogoLinkedin, 
         IoLogoTwitter, 
         IoMailSharp, 
         IoBriefcase,
         IoPeopleSharp,
         IoPawSharp,
         IoLogoBuffer,
         IoEarSharp,
         IoLocationSharp
        } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import store from '../../redux/store';
import './profile.css';

export default function Profile() {
  const {getState, dispatch} = store;
  const state = getState();     
  const { bio,
            blog,
            name,
            login,
            avatar_url,
            email,
            twitter_username,
            location,
            public_repos, 
            public_gists, 
            followers, 
            following 
            } = useSelector(state => state.publicData);
  const { username } = useSelector(state => state);
    
    const apiUrl = `https://api.github.com/users/${username}`;
    
    useEffect(() => {
        const fetchData = async() => {
          if(username) {
            const res = await axios({
            method: 'GET',
            url: `${apiUrl}`,
            headers: {'Content-Type': 'application/json'}
            });
            console.log("API data", res.data);
            dispatch({
              type: 'SET_PUBLIC_DATA',
              publicData: res.data
            });
          }  
        }
        fetchData();
        return () => console.log('cleanup Profile.js')
      }, [username]);
      
    return (
        <div className='profile'>
            <p className=''>
                <span>
                    <img 
                        src={avatar_url}
                        alt='User avatar'
                    />
                </span>
                <span className='user-banner'>
                    <span className='username'>{name}</span><br />
                    <span>{login}</span>
                </span>
            </p>
            {bio && <p><IoBriefcase size='1.8em'/> <span>{bio}</span></p>}
            {blog && <p><IoLogoLinkedin /> <span><a href={blog}>...{blog.split('com')[1]}</a></span></p>}
            {email && <p><IoMailSharp /> <span>{email}</span></p>}
            {twitter_username && <p><IoLogoTwitter /> <span><a href={`https://www.twitter.com/${twitter_username}`}>@{twitter_username}</a></span></p>}
            {location && <p><IoLocationSharp /> <span>{location}</span></p>}
            {public_repos && <p><IoLogoBuffer /> <span>Repositories {public_repos}</span></p>}
            {public_gists && <p><IoEarSharp /> <span>Gists {public_gists}</span></p>}
            {followers && <p><IoPeopleSharp /> <span>Followers {followers}</span></p>}
            {following && <p><IoPawSharp /> <span>Following {following}</span></p>}
        </div>
    )
}
