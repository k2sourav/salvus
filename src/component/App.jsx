import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './section/header/Home';
import About from './section/about/About';
import Project from './section/project/Project';
import Contact from './section/contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
