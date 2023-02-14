import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="d-flex flex-column min-vh-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page not found (404)</h1>} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
