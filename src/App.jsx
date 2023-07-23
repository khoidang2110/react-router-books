import React from "react";
import "./App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";


import Invoices from "./components/Invoices.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import NotFound from "./components/NotFound.jsx";
import Invoice from "./components/Invoice.jsx";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="invoices" element={<Invoices />} >
            <Route index element={<h2 style={{padding: '1rem'}}>Please select an Invoice</h2>}/>
            <Route path=':invoiceId' element={<Invoice/>}/>
          </Route>
          <Route path='*' element={<NotFound/> }/>
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
