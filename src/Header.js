import React, { PureComponent } from 'react'
import styles from './Header.module.css'

export default class extends PureComponent {
  render () {
    const { columns } = this.props
    return (
      <thead>
        <tr>
          {columns && columns.map((data, i) => (
            <th key={i} className={styles.col}>
              {data}
            </th>
          ))}
        </tr>
      </thead>
    )
  }
}
