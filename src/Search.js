import React from 'react'
import styles from './Search.module.css'

export default ({ onSearch }) => {
  return (
    <div className={styles['search-wrapper']}>
      <input 
        placeholder='Search...' 
        type='text' 
        onChange={(e) => onSearch(e.target.value)} 
        className={styles['search-field']}
      />
    </div>
  )
}
