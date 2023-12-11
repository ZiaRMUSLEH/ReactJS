import { useDispatch, useSelector } from "react-redux";
import ChangeCount from "./ChangeCount";
import ShowCount from "./ShowCount";
import { toggleTheme } from "../store/theme/theme-slice";

const Content = () => {
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    const containerStyle = {
        height: "100%",
        backgroundColor: theme.value === "dark" ? "black" : "white",
        color: theme.value === "dark" ? "white" : "black",
    };

    return (
        <div style={containerStyle}>
            <ShowCount />
            <ChangeCount />
            <button type="button" onClick={() => dispatch(toggleTheme())}>
                TOGGLE THEME
            </button>
        </div>
    );
};

export default Content;
