import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer } from '@mui/material';

const AmortizationTable = ({ schedule, currency }) => {
  const format = (val) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency || 'USD'
  }).format(val);

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 400, overflowY: 'auto' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>Principal</TableCell>
            <TableCell>Interest</TableCell>
            <TableCell>Remaining Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((row) => (
            <TableRow key={row.month}>
              <TableCell>{row.month}</TableCell>
              <TableCell>{format(row.principal)}</TableCell>
              <TableCell>{format(row.interest)}</TableCell>
              <TableCell>{format(row.balance)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AmortizationTable;
