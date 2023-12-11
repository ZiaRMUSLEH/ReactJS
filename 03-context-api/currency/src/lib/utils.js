export const formatCurrency = (currency, currencies) => {
    const result = currencies ? (1 / currencies[currency]).toFixed(4) : 0;
    return result;
};

// currencies["USD"] = currencies.USD
