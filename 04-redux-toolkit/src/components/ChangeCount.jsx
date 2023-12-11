import { useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    reset,
} from "../store/count/count-slice";

const ChangeCount = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button type="button" onClick={() => dispatch(decrement())}>
                -
            </button>
            <button type="button" onClick={() => dispatch(increment())}>
                +
            </button>
            <button type="button" onClick={() => dispatch(reset())}>
                Reset
            </button>
            <button
                type="button"
                onClick={() => dispatch(incrementByAmount(20))}>
                INCREASE BY AMOUNT
            </button>
        </div>
    );
};

export default ChangeCount;
