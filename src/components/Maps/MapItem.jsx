import React from 'react';
import styles from '../../styles/Agent.module.css';

const MapItem = ({map}) => {
  return (
    <div className={styles.agentCard}>
      <div className={styles.agentHeading}>
        <h3>{map.displayName}</h3>
        <p>{map.coordinates}</p>
      </div>
      <img src={map.displayIcon} alt="map_images" />
     <p className={styles.category}>{map.mapUrl}</p>
    </div>
  )
}

export default MapItem