import { Provider } from "react-redux";
import { store } from "./store/store";
import Content from "./components/Content";

const App = () => {
    return (
        <Provider store={store}>
            <Content />
        </Provider>
    );
};

export default App;
