import React, { PureComponent } from 'react'
import styles from './Search.module.css'

export default class extends PureComponent {
  render () {
    const { onSearch } = this.props
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
}
