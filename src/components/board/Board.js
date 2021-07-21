import React from 'react';
import Row from '../row/Row';
import data from '../../data';
import './board.css';

export default function Board() {
    const derivedData = data.map(item => {
        return {
                name: item.name,
                description: item.description,
                issues: item.open_issues_count,
                url: item.html_url,
                stargazersCount: item.stargazers_count,
                forks: item.forks_count
              }
      });
    return (
        <div className='board'>
            <Row 
                rowName='name' 
                description='description'
                issues='open_issues'
                url='homepage url/stargazers_count'
                stargazersCount=''
                forks='fork'
                rowClass='row-heading'
            />
            {derivedData.map((item, idx) => (
                <Row
                    key={idx}
                    rowName={item.name}
                    description={item.description}
                    issues={item.issues}
                    url={item.url}
                    stargazersCount={item.stargazersCount}
                    forks={item.forks}
                />
            ))}
        </div>
    )
}
