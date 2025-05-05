import React, { createContext, useContext, useState } from "react";

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

const CurrencyContextProvider = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState("USD");

  return (
    <CurrencyContext.Provider value={{ baseCurrency, setBaseCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
