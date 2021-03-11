import React, { useState } from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
    const [open, setOpen] = useState(false);



    return (
      <nav>
          <div className="logo">
              <img src="/img/embrace.svg" alt="logo" className="logo-img"/>
              <a href="" className="title">V-Helper</a>
          </div>
          <ul className="nav-links" style={{transform: open ? "translateX(100vw)" : ""}}>
              <li><Link to ="/" className="home-button">Home</Link></li>
              <li className="search-button">Search</li>
              <li className="messages-button">Messages</li>
              <li className="login-button">Login</li>
              <li><Link to ="/createevent" className="createevent-button">Create Event</Link></li>
              <li id="no-border"><button className="signup-btn">Sign Up</button></li>
          </ul>
          <i id="burger-btn" onClick={() => setOpen(!open)}  class={open ? `fas fa-times ` : `fas fa-bars`}></i>
      </nav>
    )
}

export default Nav