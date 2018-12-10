# react-immutable-table
React immutable table component

## Installation

1. Install the latest version of [react-immutable-table](https://github.com/vladimir-trifonov/react-immutable-table):

  ```
  npm install --save react-immutable-table
  ```

2. At this point you can import `react-immutable-table` in your application as follows:

  ```js
  import Table from 'react-immutable-table'

## Usage

```js
 <Table
    items={items}
    onClick={this.handleClick}
    title = 'React Immutable Table'
    columns={['Id', 'Name']}
    count={items.length}
    onSearch={this.onSearch}
/>
```

## API

### Properties

#### Table

Name                | Type                              | Default | Description
:---                | :---                              | :------ | :----------
columns             | String[]                          | []      | The columns titles.
items               | Object[]                          | []      | Items records array to be rendered.
onClick             | Function(rowIndex, colIndex)      |         | Handle cell click action.
count               | Integer                           |         | Items count.
onSearch            | Function(query)                   |         | Handle search action.
title               | String                            |         | The title of the table.
theme               | String                            |         | The style of the table.

## License

MIT
