import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Header({ children }) {
    return (
        <>
        <div className="header"> 
        <header className="container">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
              <Link className="navbar-brand d-flex" href="/">
                <h1 className="m-0">
                  <img src='image/logo.png' alt="logo" />
                </h1>  
              </Link>        
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>                                               
              <div className="collapse navbar-collapse text-right" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                      <li className="{{ Request::is('/') ? 'active' : '' }}">
                          <Link className="nav-link" href="/">Home</Link>
                      </li>
                      <li className="{{ Request::is('about-us') ? 'active' : '' }}">
                          <Link className="nav-link" href={route("about-us")}>About Us</Link>
                      </li>
                      <li className="{{ Request::is('course-fee') ? 'active' : '' }}">
                          <Link className="nav-link" href={route("course-fee")}>Course & Fees</Link>
                      </li>
                      <li className="{{ Request::is('faculty') ? 'active' : '' }}">
                          <Link className="nav-link" href={route("faculty")}>Faculty</Link>
                      </li>
                      <li className="{{ Request::is('gallery') ? 'active' : '' }}">
                          <Link className="nav-link" href={route("gallery")}>Students Work</Link>
                      </li>
                      <li className="{{ Request::is('contactus') ? 'active' : '' }}">
                          <Link className="nav-link" href={route("contactus")}>Contact Us</Link>
                      </li>
                  </ul>
              </div>
            </nav>
        </header>
    </div>
        {children}
        
        </>
    );
}


