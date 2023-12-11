import { useContext } from "react";
import StoreContext from "../store/store";

const Counter = () => {
    const { counter } = useContext(StoreContext);
    // const counter = store.counter;

    return <div>Counter: {counter}</div>;
};

export default Counter;
