import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { StoreContext } from "../context/store";

const ProtectedRoute = () => {
    const { state } = useContext(StoreContext);
    const { user } = state;

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default ProtectedRoute;
