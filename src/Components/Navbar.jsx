import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import linkedIn from './Images/LinkedinImg.png';
import Gmail from './Images/GmailImg.png';
import Instagram from './Images/InstagramImg.png';
const Navbar=()=>
{ 
  return (
    <> 
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container-fluid ">
        <Link className="navbar-brand  text-light fs-2 mx-5" to="/">NewsX</Link>
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav fs-5 text-center"> 
            <li className="nav-item mx-2 text-align-center rounded"><Link className="nav-link active text-light" to="/general">All</Link> </li>
            <li className="nav-item mx-2 text-align-center rounded"><Link className="nav-link active text-light" to="/health">Health</Link> </li>
            <li className="nav-item mx-2 text-align-center rounded"><Link className="nav-link active text-light" to="/science">Science</Link> </li>
            <li className="nav-item mx-2 text-align-center rounded"><Link className="nav-link active text-light" to="/sports">Sports</Link> </li>
            <li className="nav-item mx-2 text-align-center rounded"><Link className="nav-link active text-light" to="/business">Business</Link> </li>
            <li className="nav-item mx-2 text-align-center rounded"><Link className="nav-link active text-light" to="/technology">Technology</Link> </li>
            <li className="nav-item mx-2 text-align-center rounded"><Link className="nav-link active text-light" to="/entertainment">Entertainment</Link> </li>
          </ul> text-align-center 
            {/* <li className="nav-item rounded "><Link className="nav-link active text-light text-center" to="/about">About Me</Link> </li> */}
          <div class="dropdown mx-3">
          <button class="btn btn-secondary dropdown-toggle fs-5 fw-semibold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact Me
          </button>

          <ul class="dropdown-menu text-center bg-transparent">  
            <li >
              <a href="https://www.linkedin.com/in/dhanush-abb811259/" target='_blank'>
                <img style={{width:'55px',height:'55px'}} src={linkedIn} alt="" />
                </a> 
            </li>
            <li>
              <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'>
                <img style={{width:'50px',height:'50px'}} src={Gmail} alt="" />
                </a> 
            </li>  
            <li>
              <a href="https://www.instagram.com/mr__perfect_41/" target='_blank'>
                <img style={{width:'50px',height:'50px'}} src={Instagram} alt="" />
                </a> 
            </li> 
          </ul>
        </div> 
        </div>
      </div>
    </nav>
    </>
    ); 
}
export default Navbar; 
