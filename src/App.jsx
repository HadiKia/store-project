import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import ScrollToTop from "./helpers/ScrollToTop";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import HelpCenter from "./pages/HelpCenter";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PageNotFound from "./pages/404";
import ProductProvider from "./context/ProductContext";
import QueryProvider from "./context/QueryContext";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <QueryProvider>
          <Layout>
            <ScrollToTop />
            <Routes>
              <Route index element={<Navigate to="/products" replace />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<DetailsPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </Layout>
        </QueryProvider>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
