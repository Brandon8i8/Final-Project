// /client/Table.js

import React from 'react'
import { Table as MuiTable, TableBody as MuiTableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>URL</TableCell>
        <TableCell>Category</TableCell>
        <TableCell>Remove</TableCell>
      </TableRow>
    </TableHead>
  )
}

const TableBody = (props) => {
  const rows = props.linkData.map((row, index) => {
    return (
      <TableRow key={index}>
        <TableCell>{row.name}</TableCell>
        <TableCell>
          <a href={row.url}>{row.url}</a>
        </TableCell>
        <TableCell>{row.category}</TableCell>
        <TableCell>
          <IconButton edge="end" aria-label="delete" onClick={() => props.removeLink(index)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    )
  })
  
  return <MuiTableBody>{rows}</MuiTableBody>
}

const Table = (props) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHeader />
        <TableBody linkData={props.linkData ? props.linkData : []} 
        removeLink={props.removeLink} />
      </MuiTable>
    </TableContainer>
  )
}

export default Table
