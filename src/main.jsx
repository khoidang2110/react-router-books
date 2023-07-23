import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";


import Invoices from "./components/Invoices.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import NotFound from "./components/NotFound.jsx";
import Invoice from "./components/Invoice.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="invoices" element={<Invoices />} >
            <Route index element={<h2 style={{padding: '1rem'}}>Please select an Invoice</h2>}/>
            <Route path=':invoiceId' element={<Invoice/>}/>
            
          </Route>
          <Route path='*' element={<NotFound/>}/>
     </Route>
     
        
      </Routes>
      
    </BrowserRouter>

);
