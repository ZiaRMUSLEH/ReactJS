import { useState } from "react";
import Exchange from "./components/Exchange";
import CurrencyContext from "./context/context";
import { useEffect } from "react";
import { getCurrencyRates } from "./api/currency-service";

const App = () => {
    const [currencies, setCurrencies] = useState(null);

    useEffect(() => {
        getCurrencyRates("TRY").then((data) => {
            setCurrencies(data.rates);
        });
    }, []);

    return (
        <CurrencyContext.Provider value={{ currencies }}>
            <Exchange />
        </CurrencyContext.Provider>
    );
};

export default App;
