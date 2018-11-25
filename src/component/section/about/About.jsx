import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div id="about" style={{padding:"100px 0 60px 0",background: "#111111",color: "rgba(255,255,255,.65)" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <img src="img/about.jpg" class="img-responsive" alt="" />
                        </div>
                        <div class="col-xs-12 col-md-6">
                            <div class="about-text">
                                <h2>Who We Are</h2>
                                <p>Salvus Realty Private Limited is a Private incorporated on 19 February 2015. It is classified as Non-govt company and is registered at Registrar of Companies, Kolkata. Its authorized share capital is Rs. 10,000,000 and its paid up capital is Rs. 4,535,000.It is inolved in Real estate activities with own or leased property. [This class includes buying, selling, renting and operating of self-owned or leased real estate such as apartment building and dwellings, non-residential buildings, developing and subdividing real estate into lots etc. Also included are development and sale of land and cemetery lots, operating of apartment hotels and residential mobile home sites.</p>
                                <h3>Why Choose Us?</h3>
                                <div class="list-style">
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                        <ul>
                                            <li>Years of Experience</li>
                                            <li>Fully Insured</li>
                                            <li>Cost Control Experts</li>
                                            <li>100% Satisfaction Guarantee</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                        <ul>
                                            <li>Free Consultation</li>
                                            <li>Satisfied Customers</li>
                                            <li>Project Management</li>
                                            <li>Affordable Pricing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
