import React, { PureComponent } from 'react'
import styles from './Title.module.css'

export default class extends PureComponent {
  render () {
    const { title, renderControls } = this.props
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
}
