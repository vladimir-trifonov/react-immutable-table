import React, { PureComponent } from 'react'
import styles from './Row.module.css'

export default class Row extends PureComponent {
  constructor () {
    super()

    this.renderCell = this.renderCell.bind(this)
  }

  renderCell (data, i) {
    const { getStyles } = this.props
    return (
      <td key={i} className={getStyles(styles, 'col')} >
        {data}
      </td>
    )
  }
  
  render () {
    const { item } = this.props
    return (
      <tr>
        {typeof item === 'string' || typeof item === 'number'
          ? this.renderCell(item, 0)
          : item.map(this.renderCell)
        }
      </tr>
    )
  }
}
