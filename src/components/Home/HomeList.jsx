import React from 'react'
import { useContext } from 'react'
import AppLevelContext from '../../context/AppLevelContext';
import styles from '../../styles/AgentList.module.css';
import HomeItem from './HomeItem';

const HomeList = () => {
  const { homes } = useContext(AppLevelContext)
  return (
    <div className={styles.agentList}>
      {homes.map((home, idx) => (
      <HomeItem home={home} key={idx} />
    ))}
    </div>

  )
}

export default HomeList