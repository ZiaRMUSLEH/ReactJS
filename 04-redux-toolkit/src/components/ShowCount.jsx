import { useSelector } from "react-redux";

const ShowCount = () => {
    const count = useSelector((state) => state.count);

    return (
        <div>
            <h1>Count: {count.value}</h1>
        </div>
    );
};

export default ShowCount;
