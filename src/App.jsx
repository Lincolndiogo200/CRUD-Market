import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import Products from "./pages/Products";
import { DataProvider } from "./contexts/data-context";
import { HomeAdminPage } from "./pages/HomeAdminPage";
import { ProductsAdmin } from "./pages/ProductsAdmin";
import { UsersAdmin } from "./pages/UsersAdmin";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cadastro" element={<CreateUser />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/admin" element={<HomeAdminPage />} />
          <Route path="/products/admin" element={<ProductsAdmin />} />
          <Route path="/users/admin" element={<UsersAdmin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
