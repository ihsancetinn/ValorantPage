import React from 'react';
import styles from '../../styles/Agent.module.css';

const WeaponsItem = ({ weapon }) => {
  return (
   
    <div className={styles.agentCard}>
      <div className={styles.agentHeading}>
        <h3>{weapon.displayName}</h3>
      </div>
      <img style={{borderRadius:"1px", width:"100%"}} src={weapon.displayIcon} alt="weapon_images" />
      <p  className={styles.category} >{weapon.category}</p>
    </div>
    
  )
}

export default WeaponsItem