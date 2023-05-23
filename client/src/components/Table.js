// /client/Table.js

import React from 'react'

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Category</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {

  const rows = props.linkData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>
          <a href={row.url}>{row.url}</a>
        </td>
        <td>{row.category}</td>
        <td>
          <button onClick={() => props.removeLink(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  {
    return (
    <table>
      <TableHeader />
      <TableBody linkData={props.linkData ? props.linkData : []} 
      removeLink={props.removeLink} />
    </table>
    )
  }
}

export default Table
