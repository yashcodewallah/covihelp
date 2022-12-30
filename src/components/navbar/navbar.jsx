import React from 'react'
import {
  Link,
} from 'react-router-dom';

import "./navbar.css"
export default function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='nav-left'>
            <h1 className='site-heading'>COVIHELP</h1>
        </div>
        
        <div className='nav-right'>
         <Link to="/">Home</Link>
         <Link to="/reports">Reports</Link>
         <Link  to="/about">About</Link>
         <Link  to="/contact">Contact</Link>
         <Link  to="/center">Center</Link>
         <Link  to="/symptoms">Symptoms</Link>
        </div>
    </div>
  )
}
