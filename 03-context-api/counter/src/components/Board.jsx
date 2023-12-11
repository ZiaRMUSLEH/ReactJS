import { useContext } from "react";
import { Store } from "../context/store";

const Board = () => {
    const centralState = useContext(Store);
    const { state } = centralState;

    return <p>Counter: {state.count}</p>;
};

export default Board;
