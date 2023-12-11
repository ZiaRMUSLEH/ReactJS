import { useContext } from "react";
import StoreContext from "../store/store";

const Button = () => {
    const { setCounter } = useContext(StoreContext);

    const handleIncrease = () => {
        setCounter((prev) => prev + 1);
    };

    return (
        <div>
            <button type="button" onClick={handleIncrease}>
                INCREASE COUNTER
            </button>
        </div>
    );
};

export default Button;
