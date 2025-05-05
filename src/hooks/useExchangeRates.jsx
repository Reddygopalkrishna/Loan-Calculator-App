import { useEffect, useState } from 'react';
import axios from 'axios';

const useExchangeRates = (base = 'INR') => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://v6.exchangerate-api.com/v6/32544821464f0cfba57d54f8/latest/${base}`);
        setRates(res.data.conversion_rates);
      } catch (err) {
        setError('Failed to fetch exchange rates');
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [base]);

  return { rates, loading, error };
};

export default useExchangeRates;
