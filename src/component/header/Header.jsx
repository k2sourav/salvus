import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand page-scroll" href="#page-top">SALVUS Realty</a>
                        <div className="phone">
                            <span>Call Today</span>+91-98926-56836</div>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#about" className="page-scroll">About</a>
                            </li>
                            <li>
                                <a href="#services" className="page-scroll">Services</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="page-scroll">Projects</a>
                            </li>
                            <li>
                                <a href="#testimonials" className="page-scroll">Testimonials</a>
                            </li>
                            <li>
                                <a href="#contact" className="page-scroll">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
