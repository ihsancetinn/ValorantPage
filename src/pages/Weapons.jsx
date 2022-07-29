import React from 'react';
import AppLevelContext from '../context/AppLevelContext';
import {useEffect,useContext} from 'react';
import WeaponList from "../components/Veapons/WeaponList";

const Agents = () => {
  const {fetchWeapons,weapons,setWeapons} = useContext(AppLevelContext);
  useEffect(()=>{
    fetchWeapons();
    //eslint-disable-next-line
    //console.log(fetchWeapons());
    
  });
  return (
    <>
    <WeaponList/>
    
    
    </>
  )
}

export default Agents