import { createContext, useReducer } from "react";
import { reducer } from "./reducers/reducers";
import { initialStates } from "./initial-states/initial-states";

export const StoreContext = createContext();

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialStates);

    const centralState = {
        state,
        dispatch,
    };

    return (
        <StoreContext.Provider value={centralState}>
            {children}
        </StoreContext.Provider>
    );
};

export default AuthProvider;
