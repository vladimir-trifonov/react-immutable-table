import React, { PureComponent } from 'react'
import styles from './Table.module.css'
import Row from './Row'
import Header from './Header'
import Title from './Title'
import Search from './Search'

export default class Table extends PureComponent {
  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    const { onClick, columns } = this.props
    const rowIndex = e.target.parentElement.rowIndex
    const cellIndex = e.target.cellIndex
    if (!!onClick && typeof rowIndex !== 'undefined' && typeof cellIndex !== 'undefined') {
      onClick(!!columns ? rowIndex - 1 : rowIndex, cellIndex)
    }
  }

  render () {
    const { items, columns, title, count, renderControls, onSearch } = this.props

    return (
      <div className={styles.table}>
        {title && <Title title={title} renderControls={renderControls} />}
        {onSearch && <Search onSearch={onSearch} />}
        <table>
          {columns && <Header columns={columns} />}
          {!!count &&
            <tbody onClick={this.handleClick}>
              {items.map((item, i) => (
                <Row key={i} item={item} />
              ))}
            </tbody>
          }
        </table>
      </div>
    )
  }
}
