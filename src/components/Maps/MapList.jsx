import React from 'react'
import { useContext } from 'react'
import AppLevelContext from '../../context/AppLevelContext';
import styles from '../../styles/AgentList.module.css';
import MapItem from './MapItem';

const MapList = () => {
    const { maps } = useContext(AppLevelContext)
    return (
      <div className={styles.agentList}>
        {maps.map((map, idx) => (
        <MapItem map={map} key={idx} />
      ))}
      </div>
  
    )
}

export default MapList