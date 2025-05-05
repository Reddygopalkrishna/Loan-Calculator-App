import React from 'react';
import { Typography } from '@mui/material';
import ExchangeRateTable from '../components/ExchangeRateTable';

const ExchangeRates = () => {
  return (
    <div>
      <Typography variant="h4" align="center" sx={{ mt: 3 }}>
        Exchange Rates (Live)
      </Typography>
      <ExchangeRateTable baseAmount={1000} /> {/* You can pass EMI here */}
    </div>
  );
};

export default ExchangeRates;
