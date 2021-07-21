import React from 'react';
import bio from '../../bio';
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
import './profile.css';

export default function Profile() {
    console.log(bio)
    return (
        <div className='profile'>
            <p className=''>
                <span>
                    <img 
                        src={bio['avatar_url']}
                        alt='User avatar'
                    />
                </span>
                <span className='user-banner'>
                    <span className='username'>{bio.name}</span><br />
                    <span>{bio.login}</span>
                </span>
            </p>
            {bio.bio && <p><IoBriefcase /> <span>{bio.bio}</span></p>}
            {bio.blog && <p><IoLogoLinkedin /> <span>{bio.blog}</span></p>}
            {bio.email && <p><IoMailSharp /> <span>{bio.email}</span></p>}
            {bio.twitter_username && <p><IoLogoTwitter /> <span>@{bio.twitter_username}</span></p>}
            {bio.location && <p><IoLocationSharp /> <span>{bio.location}</span></p>}
            {bio.public_repos && <p><IoLogoBuffer /> <span>Repositories {bio.public_repos}</span></p>}
            {bio.public_gists && <p><IoEarSharp /> <span>Gists {bio.public_gists}</span></p>}
            {bio.followers && <p><IoPeopleSharp /> <span>Followers {bio.followers}</span></p>}
            {bio.following && <p><IoPawSharp /> <span>Following {bio.following}</span></p>}
        </div>
    )
}
