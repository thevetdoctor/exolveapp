/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import axios from 'axios';
import Row from '../row/Row';
// import data from '../../data';
import { useGlobalState } from '../../Provider';
import './board.css';

export default function Board() {
    const [state, dispatch] = useGlobalState();
    const derivedData = state.repoData.map(item => {
        return {
                name: item.name,
                description: item.description,
                issues: item.open_issues_count,
                url: item.html_url,
                stargazersCount: item.stargazers_count,
                forks: item.forks_count
              }
      });
    
    const apiUrl = `https://api.github.com/users/${state.username}/repos?type=all&sort=updated`;

//   useEffect(() => {
//     setTimeout(()=> {
//         dispatch({
//             type: 'SET_REPO_DATA',
//             data
//         });
//     }, 1000);
//     return () => console.log('cleanup Board.js')
//   }, []);
  useEffect(() => {
    const fetchData = async() => {
      const res = await axios({
        method: 'GET',
        url: `${apiUrl}`,
        headers: {'Content-Type': 'application/json'}
      });
      console.log("API data", res.data);
      dispatch({
        type: 'SET_REPO_DATA',
        data: res.data
      })      
    }
    fetchData();
    return () => console.log('cleanup Board.js')
  }, [state.username]);

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
