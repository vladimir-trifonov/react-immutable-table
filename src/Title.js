import React from 'react'
import styles from './Title.module.css'

export default ({ title, renderControls }) => {
  return (
    <div className={styles['title-wrapper']}>
      <span className={styles.title}>
        {title}
      </span>
      {renderControls && 
        <span className={styles.controls}>
          {renderControls()}
        </span>
      }
    </div>
  )
}
