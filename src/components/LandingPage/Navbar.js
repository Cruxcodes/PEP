import React,{useEffect,useState} from 'react'


function Navbar() { 
    const [clicked  ,setClick] = useState(true)



  return (
    <header class="header" data-header>
      <div class="container">
        <a href="#" class="logo">
          <img
            src="https://github.com/Cruxcodes/images-repository/blob/main/header.png?raw=true"
            width="170"
            height="40"
            alt="Pfolio home"
          />
        </a>

        <button
          class="nav-toggle-btn"
          data-nav-toggler
          data-nav-toggle-btn
          aria-label="Toggle menu"
          onClick={() => {}}
        >
          <span class="line line-1"></span>
          <span class="line line-2"></span>
        </button>

        <nav class="navbar" data-navbar>
          <ul class="navbar-list">
            <li>
              <a href="#" class="navbar-link">
                Home
              </a>
            </li>

            <li>
              <a href="#" class="navbar-link">
                Resume
              </a>
            </li>

            <li>
              <a href="#" class="navbar-link">
                Services
              </a>
            </li>

            <li>
              <a href="#" class="navbar-link">
                Blog
              </a>
            </li>

            <li>
              <a href="#" class="navbar-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div class="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
}

export default Navbar