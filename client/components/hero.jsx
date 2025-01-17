import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Hero() {
  return (
    <div className="position-relative">
      <img src="../../images/hero.png" className="w-100"></img>
      <div className="container d-flex justify-content-center align-items-center absolute">
        <div className="w-50 p-5" style={{ color: 'white' }}>
          <h1 className="hero-main-head-text header">Intro to Data Science</h1>
          <h6 className="hero-main-sub-text paragraphs-lists" style={{ color: '#ffffc7' }}>Learn the practical skills and concepts of Python, Statistics, and Data Science</h6>
        </div>
        <div className="w-50 p-5" style={{ color: 'white' }}>
          <div className="d-flex align-items-center mb-3">
            <img src="../../images/check.png" className="checkmark me-3"></img>
            <p className="list-text paragraphs-lists">Learn one of the most in-demand languages in the industry from professionals</p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <img src="../../images/check.png" className="checkmark me-3"></img>
            <p className="list-text paragraphs-lists">Build a hands-on project using real-world data and key libraries</p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <img src="../../images/check.png" className="checkmark me-3"></img>
            <p className="list-text paragraphs-lists">Practice the fundamental concepts of data science foundations on a part-time basis</p>
          </div>
          <div className="d-flex justify-content-start">
            <a className="ds-btn blue-btn d-flex justify-content-center me-3" href="#">Register Now</a>
            <a className="ds-btn white-outline-btn d-flex justify-content-center ms-3" href="#">Attend an Info Session</a>
          </div>
        </div>
      </div>
      <div className="absolute-bottom text-center">
        <img src="../../images/angle-down.png"></img>
      </div>
    </div>
  );
}
