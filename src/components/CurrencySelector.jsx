import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useCurrency } from '../context/CurrencyContext';

const CurrencySelector = () => {
  const { baseCurrency, setBaseCurrency } = useCurrency();

  return (
    <FormControl size="small" sx={{ minWidth: 120, mt: 2 }}>
      <InputLabel id="currency-select-label">Currency</InputLabel>
      <Select
        labelId="currency-select-label"
        value={baseCurrency}
        label="Currency"
        onChange={(e) => setBaseCurrency(e.target.value)}
      >
        {['USD', 'INR', 'EUR', 'GBP', 'BSD'].map((code) => (
          <MenuItem key={code} value={code}>{code}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrencySelector;
