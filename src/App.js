import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./component/Home";
import Products from "./component/Products";
import Vegetable from "./component/Vegetable";
import SnackSpices from "./component/SnackSpices";
import Fruits from "./component/Fruits";
import BlogNews from "./component/BlogNews";
import Discover from "./component/Discover";
import Vendor from "./component/VendorCategory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="blog" element={<BlogNews />} />
          <Route path="discover" element={<Discover />} />
          <Route path="vendor" element={<Vendor />} />
          <Route path="vegetable" element={<Vegetable />} />
          <Route path="snackspices" element={<SnackSpices />} />
          <Route path="fruits" element={<Fruits />} />

          {/* 404 Fallback Route */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
