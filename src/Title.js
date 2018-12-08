import React, { PureComponent } from 'react'
import styles from './Title.module.css'

export default class extends PureComponent {
  render () {
    const { title, renderControls, getStyles } = this.props
    return (
      <div className={getStyles(styles, 'title-wrapper')}>
        <span className={getStyles(styles, 'title')}>
          {title}
        </span>
        {renderControls && 
          <span className={getStyles(styles, 'controls')}>
            {renderControls()}
          </span>
        }
      </div>
    )
  }
}
