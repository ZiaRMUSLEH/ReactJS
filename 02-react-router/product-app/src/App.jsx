import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ProductDetailsPage from "./pages/product-details";
import NotFoundPage from "./pages/not-found";
import RootLayout from "./layouts/RootLayout";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<HomePage />} />
                <Route
                    path="products/:productId"
                    element={<ProductDetailsPage />}
                />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default App;
