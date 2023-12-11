import { useContext } from "react";
import CurrencyContext from "../context/context";
import { formatCurrency } from "../lib/utils";

const Topbar = () => {
    const { currencies } = useContext(CurrencyContext);
    console.log(currencies);
    const styles1 = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "blue",
    };
    const styles2 = {
        display: "flex",
        gap: "1rem",
    };

    return (
        <header>
            <nav style={styles1}>
                <h3>Exchange</h3>
                <div style={styles2}>
                    <div>$: {formatCurrency("USD", currencies)}</div>
                    <div>€: {formatCurrency("EUR", currencies)}</div>
                </div>
            </nav>
        </header>
    );
};

export default Topbar;
