import React from 'react';
import AppLevelContext from '../context/AppLevelContext';
import MapList from '../components/Maps/MapList'
import {useEffect,useContext} from 'react';

const Maps = () => {
  const {fetchMaps} = useContext(AppLevelContext);
  useEffect(()=>{
    fetchMaps();
    //eslint-disable-next-line
  })
  return (
    <>
    <MapList/>
    </>
  )
}

export default Maps