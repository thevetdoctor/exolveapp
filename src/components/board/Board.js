/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Row from '../row/Row';
import { useSelector } from 'react-redux';
import store from '../../redux/store';
import './board.css';
 
export default function Board() {
  const {getState, dispatch} = store;
  const state = getState();
  const { repoData, username } = useSelector(state => state);
    
  const [loading, setLoading] = useState(true);
  const derivedData = repoData.map(item => {
        return {
                name: item.name,
                description: item.description,
                issues: item.open_issues_count,
                url: item.html_url,
                stargazersCount: item.stargazers_count,
                forks: item.forks_count
              }
      });
    
    const apiUrl = `https://api.github.com/users/${username}/repos?type=all&sort=updated&per_page=8&page=3`;

    useEffect(() => {
      const fetchData = async() => {
        if(username) {
          const res = await axios({
            method: 'GET',
            url: `${apiUrl}`,
            headers: {'Content-Type': 'application/json'}
          });
          // console.log("API data", res.data, apiUrl);
          dispatch({
            type: 'SET_REPO_DATA',
            data: res.data
          });    
        }
      }
      fetchData();
      return () => console.log('cleanup Board2.js')
    }, [username]);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
        return () => console.log('cleanup Board2.js')
    }, []);

    return (
        <div className='board'>
             {!loading ?
            <Fragment>
              {derivedData.length ?
                <Fragment>
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
                </Fragment>
                :
                <Fragment>
                  <div className='no-repo'>
                    No repository data available
                  </div>
                </Fragment>
              }
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
