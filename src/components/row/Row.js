import React from 'react';
import './row.css';
import { IoEllipsisVertical, IoChevronDownCircleOutline } from 'react-icons/io5';

export default function Row({rowName, description, issues, url, stargazersCount, forks, rowClass}) {
    return (
        <div className={`row ${rowClass}`}>
            <span className='mini-span-small'>
                <input
                    type='checkbox' 
                />
            </span>
            <span className={`mini-span-small ${rowClass && 'hide'}`}>
                <IoChevronDownCircleOutline 
                    size='1.3em'
                />
            </span>
            <span className='mini-span span-name'>
                {rowName}
            </span>
            <span className='main-span desc'>
                {description ? <>{description.slice(0, 125)}</> : 'No description specified'}
            </span>
            <span className='mini-span'>
                {typeof(issues) !== 'string' ? 
                    <span>
                        {issues ? 
                            <span className='issues valid'>
                                {issues > 1 ? 
                                `${issues} issues` 
                                : 
                                `${issues} issue`} found
                            </span>
                            : 
                            <span className='issues invalid'>No issues</span>
                        }
                    </span>
                    :
                    <span>{issues}</span>}

            </span>
            <span className='main-span'>
                {url}
                <p>
                    {typeof(stargazersCount) !== 'string' ? 
                        <span>
                            {stargazersCount ? 
                                <span className='count gazers'>
                                    {stargazersCount > 1 ? 
                                    `${stargazersCount} stargazers` 
                                    : 
                                    `${stargazersCount} stargazer`}
                                </span>
                                : 
                                <span className='zero gazers'>No stargazers</span>
                            }
                        </span>
                        :
                        <span></span>
                    }
                </p>
            </span>
            <span className='mini-span'>
                {typeof(forks) !== 'string' ? 
                    <span>{forks < 10 ?
                        <span className='forks low'>&lt; 10</span>
                        :
                        <span className='forks high'>&gt; 10</span>
                    }
                    </span>
                    :
                    <span>{forks}</span>
                }
            </span>
            <span className='mini-span-small'>
                <IoEllipsisVertical />
            </span>
        </div>
    )
}
