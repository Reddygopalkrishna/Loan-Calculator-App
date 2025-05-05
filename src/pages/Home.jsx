import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import LoanForm from "../components/LoanForm";
import useAmortizationSchedule from '../hooks/useAmortizationSchedule';
import AmortizationTable from '../components/AmortizationTable';
import CurrencySelector from "../components/CurrencySelector";
import { useCurrency } from "../context/CurrencyContext";
import { Button } from '@mui/material';

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
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Loan EMI Calculator
      </Typography>

      <LoanForm
      amount={amount}
      setAmount={setAmount}
      rate={rate}
      setRate={setRate}
      term={term}
      setTerm={setTerm}
      onSubmit={handleFormSubmit}/>

      <CurrencySelector />

    <Button
      variant="outlined"
      color="secondary"
      sx={{ mt: 2 }}
      onClick={handleReset}
    >
      Reset Table
    </Button>


      {emi > 0 && (
        <Typography variant="h6" sx={{ mt: 3 }}>
          Monthly EMI: {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: baseCurrency
          }).format(emi)}
        </Typography>
      )}

      {schedule.length > 0 && (
        <AmortizationTable schedule={schedule} currency={baseCurrency} />
      )}
    </Container>
  );
};

export default Home;
