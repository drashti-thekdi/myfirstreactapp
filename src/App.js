import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Navbar />

      <Routes>
        {/* default homepage */}
        <Route path="/" element={<Home />} />
        {/* other pages */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* catch-all fallback redirects to homepage */}
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
