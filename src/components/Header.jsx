import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1>Bookkeeper</h1>
      <nav style={{ borderBottom: "1px solid", paddingBottom: "1rem" }}>
        <Link to="/home">Home</Link> {" | "}
        <Link to="/contact">Contact</Link> {" | "}
        <Link to="/invoices">Invoices</Link>
        <br/>
        <br/>
       <Link to='/home'> <button >Test navigate home</button> </Link>
      </nav>
    </>
  )
}

export default Header