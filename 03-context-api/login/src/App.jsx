import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import LoginPage from "./pages/auth/login";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<HomePage />} />
            </Route>
        </Routes>
    );
};

export default App;
