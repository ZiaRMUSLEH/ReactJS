import MyComponent from "./components/01-my-component/MyComponent";
import { AnotherComponent } from "./components/01-my-component/MyComponent";
import Jsx1 from "./components/02-jsx/Jsx1";
import Jsx2 from "./components/02-jsx/Jsx2";
import Jsx3 from "./components/02-jsx/Jsx3";
import Jsx4 from "./components/02-jsx/Jsx4";
import ExternalStyling from "./components/03-styles/ExternalStyling";
import InlineStyling from "./components/03-styles/InlineStyling";
import InternalStyling from "./components/03-styles/InternalStyling";
import ModuleStyling from "./components/03-styles/ModuleStyling";
import Scss from "./components/03-styles/Scss";
import DigitalClock1 from "./components/04-digital-clock1/DigitalClock1";

const App = () => {
    return (
        <div>
            <div className="external-styling-container">
                <h1>EXTERNAL STYLING</h1>
                <ul id="external-styling-list">
                    <li>Internal Styling</li>
                    <li>Inline Styling</li>
                    <li>External Styling</li>
                </ul>
            </div>
            <MyComponent />
            <AnotherComponent />
            {/* JSX */}
            <Jsx1 />
            <Jsx2 />
            <Jsx3 />
            <Jsx4 />
            {/* STYLES */}
            <InlineStyling />
            <InternalStyling />
            <ExternalStyling />
            <ModuleStyling />
            <Scss />
            {/* DIGITAL CLOCKS */}
            <DigitalClock1 />
        </div>
    );
};

export default App;
