import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/HomePage";
import AddCart from "./Pages/AddCartPage";
import Contact from "./Pages/ContactPage";
import Blog from "./Pages/BlogPage";
import About from "./Pages/AboutPage";
import NewBook from "./Pages/NewBookPage";
import Favorite from "./Pages/FavoritePage";
import Career from "./Pages/CareerPage";
import NoPage from "./Pages/NoPage";
import { Routes, Route } from "react-router-dom";
import ViewBook from "./Pages/AddBookPage"
import Footer from "./Components/Footer";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        {/* Get url data and render without reload the page and show the content */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<AddCart />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/blog" element={<Blog />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/newbook" element={<NewBook />} exact />
          <Route path="/career" element={<Career />} exact />
          <Route path="/favorite" element={<Favorite />} exact />
          <Route path="*" element={<NoPage />} exact />
          <Route path="/books/:id" element={<ViewBook />} exact />
          <Route path="/cart/:id" element={<AddCart />} exact />
          <Route path="/favorite/:id" element={<AddCart />} exact />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
