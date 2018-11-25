import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <header id="header">
            <div className="intro">
              <div className="overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 intro-text">
                      <h1>Salvus Realty Private Limited </h1>
                      <p>Salvus Realty have excelled in their respective fields and reach to develop Real Estate spaces which have unique architectural designs, bringing to its customers all that modern technologies can provide. We work on both Residential and Commercial projects. Our prime focus is to deliver a high value service to meet customer’s expectations & beyond. Akash Ganga Residency, a beautifully designed Complex at Howrah, Tikiapara is one of our latest offerings under construction.</p>
                      <a href="#about" className="btn btn-custom btn-lg page-scroll">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        );
    }
}

export default Home;
