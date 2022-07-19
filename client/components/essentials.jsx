import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Essentials() {
  return (
    <div className="container d-flex pt-5 pb-5">
      <div className="w-50 pt-5 pb-5">
        <h1 className="no-margin header">Learn Essential Data Science</h1>
        <h1 className="no-margin header">Skills from Experets with 20+</h1>
        <h1 className="blue-bold-underline mb-5 no-margin header">Years of Experience</h1>
        <div className="d-flex align-items-center">
          <i className="bi bi-check-circle-fill checkmark me-2"></i>
          <p className="essential-list-text paragraphs-lists">6 training sessions over two weeks</p>
        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-check-circle-fill checkmark me-2"></i>
          <p className="essential-list-text paragraphs-lists">Sessions are recorded to allow easy access anytime</p>
        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-check-circle-fill checkmark me-2"></i>
          <p className="essential-list-text paragraphs-lists">Real world projects, coding exercises, skill assessments</p>
        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-check-circle-fill checkmark me-2"></i>
          <p className="essential-list-text paragraphs-lists">25+ Lessons & Excercises</p>
        </div>
      </div>
      <div className="w-50 position-relative">
        <div className="position-absolute" style={{ top: '20px', left: '50px' }}>
          <img src="../../images/essential-2.png"></img>
        </div>
        <div className="position-absolute" style={{ bottom: '20px', left: '90px' }}>
          <img src="../../images/essential-1.png"></img>
        </div>
        <div className="position-absolute" style={{ right: 0, top: '85px' }}>
          <img src="../../images/essential-3.png"></img>
        </div>
      </div>
    </div>
  );
}
