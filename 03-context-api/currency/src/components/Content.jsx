import { useContext } from "react";
import { useState } from "react";
import CurrencyContext from "../context/context";

const Content = () => {
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState("USD");
    const { currencies } = useContext(CurrencyContext);

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "amount") {
            setAmount(value);
        } else if (name === "currency") {
            setCurrency(value);
        }
    };

    const result = amount ? (amount / currencies[currency]).toFixed() : 0;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                padding: "1rem",
                height: "200px",
            }}>
            <form>
                <input
                    type="number"
                    name="amount"
                    placeholder="Enter the amount..."
                    value={amount}
                    onChange={handleChange}
                />
                <select
                    name="currency"
                    value={currency}
                    onChange={handleChange}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
            </form>
            <p>RESULT: {result} ₺</p>
        </div>
    );
};

export default Content;
