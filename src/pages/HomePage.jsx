import React from 'react';
import AppLevelContext from '../context/AppLevelContext';
import HomeList from '../components/Home/HomeList'
import {useEffect,useContext} from 'react';

const HomePage = () => {
  const {fetchHome} = useContext(AppLevelContext);
  useEffect(()=>{
    fetchHome();
    //eslint-disable-next-line
  })
  return (
    <>
    <HomeList/>
    
    </>
  )
}

export default HomePage