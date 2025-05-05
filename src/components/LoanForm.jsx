import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const LoanForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const loanAmount = parseFloat(amount);
    const interestRate = parseFloat(rate);
    const termYears = parseInt(term);
    if (onSubmit && !isNaN(loanAmount) && !isNaN(interestRate) && !isNaN(termYears)) {
      onSubmit(loanAmount, interestRate, termYears);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <TextField
            label="Loan Amount"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            label="Interest Rate (%)"
            fullWidth
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            label="Term (Years)"
            fullWidth
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </Grid>
        <Grid xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Calculate
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoanForm;
