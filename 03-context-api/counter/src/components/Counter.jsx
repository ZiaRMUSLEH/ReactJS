import { useContext } from "react";
import { Store } from "../context/store";
import * as actions from "../context/actions/actions";

// actions = { increment, decrement, reset }

// const user = {
//     name: "John",
//     age: 34,
// };

// const user2Array = ["Jane", "23"];

const Counter = () => {
    const { dispatch } = useContext(Store);

    // const [username, userage] = user2Array;

    // // console.log(user2Array[0]);
    // // console.log(user2Array[1]);

    // console.log(username);
    // console.log(userage);

    // const { name, age } = user;

    // console.log(user.name);
    // console.log(user.age);
    // console.log(name);
    // console.log(age);

    const btnStyle = {
        cursor: "pointer",
        fontSize: "1.5rem",
        display: "inline-block",
        width: "200px",
    };

    return (
        <div>
            <button
                onClick={() => dispatch(actions.increment(20))}
                style={btnStyle}>
                INCREMENT
            </button>
            <button
                onClick={() => dispatch(actions.decrement())}
                style={btnStyle}>
                DECREMENT
            </button>
            <button onClick={() => dispatch(actions.reset())} style={btnStyle}>
                RESET
            </button>
        </div>
    );
};

export default Counter;
