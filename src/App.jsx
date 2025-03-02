import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/home/Footer';
import Home from './components/Home';
import SubCategories from './components/SubCategories';
import ProductPage from './components/ProductPage';
import ParallaxPage from './components/home/subCat';
import CarouselAndCategories from './components/subsubcat';
import Pesto from './components/products';
import ProductsPageData from './components/ProductsPageData';

import Kart from './components/kart';
import Product from './components/Product';
import Aboutus from './components/Aboutus';
import ContactUs from './components/ContactUs';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/sub-categories/:id" element={<SubCategories />} />
          <Route path="/category/:category" element={<ParallaxPage />} />
          <Route path="/subcategory/:title" element={<CarouselAndCategories />} />
          <Route path="/subsubcategory/:title" element={<Pesto />} />
          <Route path="/products-list/:id" element={<ProductsPageData />} />
          <Route path="/pro/:id" element={<Kart />} />
          <Route path="/product-data/:id" element={<Product />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
