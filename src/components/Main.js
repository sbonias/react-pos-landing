import React from 'react';
import '../App.css';
import TitleMessage from './TitleMessage';

function Main() {
  return (
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <TitleMessage />
          <div className="intro-heading text-uppercase"></div>
          <a
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#services"
          >
            Tell Me More
          </a>
        </div>
      </div>
    </header>
  );
}

export default Main;
