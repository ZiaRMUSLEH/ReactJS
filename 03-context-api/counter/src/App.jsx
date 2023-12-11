import { useReducer } from "react";
import Content from "./components/Content";
import { Store } from "./context/store";
import { counterReducer } from "./context/reducers/reducers";
import { counterInitialState } from "./context/initial-states/initial-states";

const App = () => {
    const [state, dispatch] = useReducer(counterReducer, counterInitialState);

    const centralState = {
        state,
        dispatch,
    };

    return (
        <Store.Provider value={centralState}>
            <Content />
        </Store.Provider>
    );
};

export default App;
