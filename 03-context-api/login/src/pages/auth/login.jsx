import { useContext, useState } from "react";
import { login } from "@/api/api";
import { StoreContext } from "@/context/store";
import * as actions from "@/context/actions/actions";
import { useNavigate } from "react-router-dom";

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
};

const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "400px",
    marginTop: "3rem",
};

const inputContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
};

const inputStyle = {
    height: "30px",
};

const buttonStyle = {
    height: "30px",
    cursor: "pointer",
};

// atuny0
// 9uQFF1Lh

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch } = useContext(StoreContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userObject = {
            username,
            password,
        };

        try {
            const data = await login(userObject);

            if (!data) return console.log("No data");

            dispatch(actions.loginSuccess(data));
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={containerStyle}>
            <h1>LOGIN TO YOUR ACCOUNT</h1>
            <form onSubmit={handleSubmit} style={formStyle}>
                <div style={inputContainerStyle}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username..."
                        style={inputStyle}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div style={inputContainerStyle}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="passwod"
                        id="password"
                        name="password"
                        placeholder="Enter your password..."
                        style={inputStyle}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button style={buttonStyle} type="submit">
                    LOGIN
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
