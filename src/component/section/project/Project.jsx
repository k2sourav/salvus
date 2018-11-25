import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <div id="portfolio" style={{padding:"100px 0 60px 0",background: "#6accaf",color: "rgba(255,255,255,.65)" }}>
                <div className="container">
                    <div className="section-title">
                        <h2>Our Works</h2>
                    </div>
                    <div className="row">
                        <div className="portfolio-items">
                            <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        <a href="img/salvus-main.jpg" title="Project Title" data-lightbox-gallery="gallery1" >
                                            <div className="hover-text">
                                                <h4>Akash Ganga</h4>
                                            </div>
                                            <img src="img/salvus-main.jpg" className="img-responsive" alt="Project Title" /> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        <a href="img/salvus-2.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                            <div className="hover-text">
                                                <h4>Gita Enclave</h4>
                                            </div>
                                            <img src="img/salvus-2.jpg" className="img-responsive" alt="Project Title" /> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        <a href="img/salvus-3.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                            <div className="hover-text">
                                                <h4>Akash Ganga</h4>
                                            </div>
                                            <img src="img/salvus-3.jpg" className="img-responsive" alt="Project Title" /> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        <a href="img/salvus-2.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                            <div className="hover-text">
                                                <h4>Gita Enclave</h4>
                                            </div>
                                            <img src="img/salvus-2.jpg" className="img-responsive" alt="Project Title" /> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        <a href="img/salvus-3.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                            <div className="hover-text">
                                                <h4>Ichapoor Enclave</h4>
                                            </div>
                                            <img src="img/salvus-3.jpg" className="img-responsive" alt="Project Title" /> </a>
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

export default Project;
