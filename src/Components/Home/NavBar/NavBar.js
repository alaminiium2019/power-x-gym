import React from 'react';
import './Navbar.css';

const NavBar = () => {
    return (
        <section className="container navSection">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand text-white" href="#" style={{fontSize:'40px',paddingLeft:'0px'}}>POWERX</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active ">
                            <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Our Classes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">About us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    );
};

export default NavBar;