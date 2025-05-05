
const useAmortizationSchedule = (principal, annualRate, years) => {
    const months = years * 12;
    const monthlyRate = annualRate / 12 / 100;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                (Math.pow(1 + monthlyRate, months) - 1);
  
    const schedule = [];
    let balance = principal;
  
    for (let i = 1; i <= months; i++) {
      const interest = balance * monthlyRate;
      const principalPaid = emi - interest;
      balance -= principalPaid;
  
      schedule.push({
        month: i,
        principal: principalPaid,
        interest: interest,
        balance: balance > 0 ? balance : 0,
      });
    }
  
    return { emi, schedule };
  };
  
  export default useAmortizationSchedule;
  