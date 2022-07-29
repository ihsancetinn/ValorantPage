import React from 'react';
import styles from '../../styles/Agent.module.css';

const HomeItem = ({home}) => {
  return (
    <div className={styles.agentCard}>
      <div className={styles.agentHeading}>
        <h3>{home.displayName}</h3>
        
      </div>
      <img src={home.displayIcon} alt="home_images" />
    
    </div>
  )
}

export default HomeItem;