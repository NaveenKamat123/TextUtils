import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar(props) {


  return (
    <>
    
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <h2 className="mx-4" >{props.title}</h2>
           
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-Link  mx-3 text-dark lead" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link  mx-3 text-dark lead" aria-current="page" to="/about">About us</Link>
                </li>
              </ul>



            </div>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={() => { props.toggleMode(null) }} />
              <label class="form-check-label" for="flexSwitchCheckChecked">{`${props.mode === 'light' ? 'Enable DarkMode' : 'Enable LightMode'}`}</label>

            </div>
          </div>


        </nav>
      </div>
    </>
  )
}

