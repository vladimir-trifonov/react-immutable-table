import React, { PureComponent } from 'react'
import styles from './Header.module.css'

export default class extends PureComponent {
  render () {
    const { columns, getStyles } = this.props
    return (
      <thead>
        <tr>
          {columns && columns.map((data, i) => (
            <th key={i} className={getStyles(styles, 'col')} >
              {data}
            </th>
          ))}
        </tr>
      </thead>
    )
  }
}
