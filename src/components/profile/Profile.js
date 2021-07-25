/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from 'react';
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
import Loader from 'react-loader-spinner';
import store from '../../redux/store';
import './profile.css';

export default function Profile() {
  const {getState, dispatch} = store;
  const state = getState();     

  const [loading, setLoading] = useState(true);
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
            following,
            } = useSelector(state => state.publicData);
  const { username } = useSelector(state => state);
  const blogHref = blog?.indexOf('http') > -1 ? blog : `https://www.${blog?.trim()}`;
 
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
        return () => console.log('cleanup Profile.js')
      }, []);
      
    return (
        <div className='profile'>
          {!loading ?
          <Fragment>
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
            {blog && <p><IoLogoLinkedin /> <span><a href={blogHref}>...{blog.split('.com')[1]}</a></span></p>}
            {email && <p><IoMailSharp /> <span>{email}</span></p>}
            {twitter_username && <p><IoLogoTwitter /> <span><a href={`https://www.twitter.com/${twitter_username}`}>@{twitter_username}</a></span></p>}
            {location && <p><IoLocationSharp /> <span>{location}</span></p>}
            {public_repos && <p><IoLogoBuffer /> <span>Repositories {public_repos}</span></p>}
            {public_gists > 0 && <p><IoEarSharp /> <span><a href={`https://gist.github.com/${username}`}>Gists</a> {public_gists}</span></p>}
            {followers > 0 && <p><IoPeopleSharp /> <span><a href={`https://github.com/${username}?tab=followers`}>Followers</a> {followers}</span></p>}
            {following > 0 && <p><IoPawSharp /> <span><a href={`https://github.com/${username}?tab=following`}>Following</a>{following}</span></p>}
        </Fragment>
        :
        <Fragment>
          <div>
            <Loader 
              type='ThreeDots'
              color='#00bfff'
              height={40} 
              width={40} 
            />
          </div>
        </Fragment>}
        </div>
    )
}
