import MyComponent from "./components/01-my-component/MyComponent";
import { AnotherComponent } from "./components/01-my-component/MyComponent";
import Jsx1 from "./components/02-jsx/Jsx1";
import Jsx2 from "./components/02-jsx/Jsx2";
import Jsx3 from "./components/02-jsx/Jsx3";
import Jsx4 from "./components/02-jsx/Jsx4";
import InlineStyling from "./components/03-styles/InlineStyling";

const App = () => {
    return (
        <div>
            <MyComponent />
            <AnotherComponent />
            {/* JSX */}
            <Jsx1 />
            <Jsx2 />
            <Jsx3 />
            <Jsx4 />
            {/* STYLES */}
            <InlineStyling />
        </div>
    );
};

export default App;
