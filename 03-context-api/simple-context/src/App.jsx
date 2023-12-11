import { useState } from "react";
import Counters from "./components/Counters";
import StoreContext from "./store/store";

const App = () => {
    const [counter, setCounter] = useState(0);

    return (
        <StoreContext.Provider value={{ counter, setCounter }}>
            <div>
                <h1>APP</h1>
                <Counters />
            </div>
        </StoreContext.Provider>
    );
};

export default App;
