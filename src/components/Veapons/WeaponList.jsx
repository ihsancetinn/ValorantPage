import React from 'react'
import { useContext } from 'react'
import AppLevelContext from '../../context/AppLevelContext';
import styles from '../../styles/AgentList.module.css';
import WeaponsItem from "./WeaponsItem";

const WeaponList = () => {
  const { weapons } = useContext(AppLevelContext)
  return (
    <div className={styles.agentList}>


  {weapons.map((weapon, idx) => (
    <WeaponsItem weapon={weapon} key={idx} />
    
))}

    </div>
  )
}

export default WeaponList;