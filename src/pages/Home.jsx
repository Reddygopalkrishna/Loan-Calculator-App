import React, { useState } from "react";
import { Container, Typography, Paper, Box, Grid, Button, Divider } from "@mui/material";
import LoanForm from "../components/LoanForm";
import useAmortizationSchedule from '../hooks/useAmortizationSchedule';
import AmortizationTable from '../components/AmortizationTable';
import CurrencySelector from "../components/CurrencySelector";
import { useCurrency } from "../context/CurrencyContext";

const Home = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');

  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [termYears, setTermYears] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const { baseCurrency } = useCurrency();

  const { emi, schedule } = useAmortizationSchedule(loanAmount, interestRate, termYears);

  const handleFormSubmit = (amountVal, rateVal, termVal) => {
    setLoanAmount(amountVal);
    setInterestRate(rateVal);
    setTermYears(termVal);
  };

  const handleReset = () => {
    setAmount('');
    setRate('');
    setTerm('');
    setLoanAmount(0);
    setInterestRate(0);
    setTermYears(0);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Typography variant="h4" align="left" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Loan Calculator Dashboard
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 3, bgcolor: 'background.paper' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3}>
            <LoanForm
              amount={amount}
              setAmount={setAmount}
              rate={rate}
              setRate={setRate}
              term={term}
              setTerm={setTerm}
              onSubmit={handleFormSubmit}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <CurrencySelector />
          </Grid>
          {schedule.length > 0 && (
            <Grid item xs={12} md={2}>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ mt: { xs: 2, md: 0 }, width: '100%' }}
                onClick={handleReset}
              >
                RESET TABLE
              </Button>
            </Grid>
          )}
          <Grid item xs={12} md={schedule.length > 0 ? 5 : 7}>
            {emi > 0 && (
              <Typography variant="h6" sx={{ mt: { xs: 2, md: 0 } }}>
                Monthly EMI: {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: baseCurrency
                }).format(emi)}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Paper>
      {schedule.length > 0 && (
        <Paper elevation={3} sx={{ p: 2, mb: 3, bgcolor: 'background.paper' }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
            Amortization Schedule ({baseCurrency})
          </Typography>
          <AmortizationTable schedule={schedule} currency={baseCurrency} />
        </Paper>
      )}
    </Container>
  );
};

export default Home;
