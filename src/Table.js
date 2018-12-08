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
    this.getStyles = this.getStyles.bind(this)
  }

  handleClick (e) {
    const { onClick, columns } = this.props
    if (!onClick) return

    const rowIndex = e.target.parentElement.rowIndex
    const cellIndex = e.target.cellIndex
    if (typeof rowIndex !== 'undefined' && typeof cellIndex !== 'undefined') {
      onClick(!!columns ? rowIndex - 1 : rowIndex, cellIndex)
    }
  }

  getStyles (styles, defaultStyle) {
    const { theme } = this.props
    return !!theme && ['dark1'].includes(theme) && !!styles[`${defaultStyle}-${theme}`]
      ? [styles[defaultStyle], styles[`${defaultStyle}-${theme}`]].join(' ') 
      : styles[defaultStyle]
  }

  render () {
    const { items, columns, title, count, renderControls, onSearch } = this.props

    return (
      <div className={this.getStyles(styles, 'table')}>
        {title && <Title getStyles={this.getStyles} title={title} renderControls={renderControls} />}
        {onSearch && <Search getStyles={this.getStyles} onSearch={onSearch} />}
        <table>
          {columns && <Header getStyles={this.getStyles} columns={columns} />}
          {!!count &&
            <tbody onClick={this.handleClick}>
              {items.map((item, i) => (
                <Row getStyles={this.getStyles} key={i} item={item} />
              ))}
            </tbody>
          }
        </table>
      </div>
    )
  }
}
