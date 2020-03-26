import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from './Summary.style';
import { useStoreContext } from '../../store/storeContext';

import Sort from '../../components/Sort/Sort';
import Filter from '../../components/Filter/Filter';

export default function Categories() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const [filterType, setFilterType] = useState('all');
  const [isAscending, setIsAscending] = useState(true);

  const amounts = state.categories.map((category) => {
    const count = state.budget.reduce(
      (acc, budget) => (
        budget.category === category.name && budget.type === category.type
          ? acc + +budget.amount
          : acc),
      0,
    );
    return { ...category, amount: count };
  }).filter((amount) => amount.amount !== 0);

  const filteredAmounts = filterType === 'all'
    ? [...amounts]
    : amounts.filter((amount) => amount.type === filterType);

  filteredAmounts.sort((a, b) => (
    isAscending
      ? a.amount - b.amount
      : b.amount - a.amount
  ));

  return (
    <>
      <div>
        <Sort isAscending={isAscending} setIsAscending={setIsAscending} />
        <Filter filterType={filterType} setFilterType={setFilterType} />
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.head} align="center">Category</TableCell>
              <TableCell className={classes.head} align="center">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAmounts.map((amount) => (
              <TableRow key={amount.id}>
                <TableCell align="center">{amount.name}</TableCell>
                <TableCell align="center">
                  {(amount.type === 'expense' ? '-' : '+') + amount.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
