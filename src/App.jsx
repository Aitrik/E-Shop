import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./CMS/Home";
import Example from "./CMS/Navbar";
import Shop from "./CMS/Shop";
import Categories from "./CMS/Categories";
import EachProduct from "./CMS/EachProduct";
import SearchResults from "./CMS/SearchResults";

function App() {
  return (
    <>
      <BrowserRouter>
        <Example />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<EachProduct />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/search/:name" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
