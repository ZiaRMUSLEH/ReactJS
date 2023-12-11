import Button from "./Button";
import Counter from "./Counter";

const Counters = () => {
    return (
        <div>
            <h1>COUNTERS</h1>
            <ul>
                <li>
                    <Counter />
                    <Button />
                </li>
            </ul>
        </div>
    );
};

export default Counters;
