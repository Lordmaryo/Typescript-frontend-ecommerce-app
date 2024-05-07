import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import NavBar from "./components/NavBar";
import Category from "./components/Category";
import Watches from "./pages/Watches";
import Necklaces from "./pages/Necklaces";
import Rings from "./pages/Rings";
import Footer from "./components/Footer";
import Searched from "./pages/Searched";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <div>
        <div className="fixed left-0 top-0 z-10 w-full">
          <NavBar />
          <Category />
        </div>
        <div className="pt-[80px] md:pt-[140px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/watches" element={<Watches />} />
            <Route path="/necklaces" element={<Necklaces />} />
            <Route path="/rings" element={<Rings />} />
            <Route path="/Searched/:params" element={<Searched />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
