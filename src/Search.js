import React, { PureComponent } from 'react'
import styles from './Search.module.css'

export default class extends PureComponent {
  render () {
    const { onSearch, getStyles } = this.props
    return (
      <div className={getStyles(styles, 'search-wrapper')}>
        <input 
          placeholder='Search...' 
          type='text' 
          onChange={(e) => onSearch(e.target.value)} 
          className={getStyles(styles, 'search-field')}
        />
      </div>
    )
  }
}
