


const useEmiCalculator = (principal, annualRate, tenureMonths) => {
    if (!principal || !annualRate || !tenureMonths) return 0;
  
    const monthlyRate = annualRate / 12 / 100;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  
    return emi.toFixed(2);
  };
  
  export default useEmiCalculator;
  