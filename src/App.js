import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import Nav from './components/Navbar';
import Main from './components/Main';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Map from './components/Map-Customer';

function App() {
  return (
    <div className="App" id="page-top">
      <Nav />
      <Main />
      <Services />
      <Map />
      {/* <Portfolio /> */}
      {/* <About /> */}
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

{
  /* <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/envato.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/designmodo.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/themeforest.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/creative-market.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section> */
}
