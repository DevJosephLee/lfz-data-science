import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Technologies() {
  return (
    <>
      <div className="position-relative" style={{ top: '100px' }}>
        <div className="text-center mb-5">
          <h1 className="header">Technologies & Concepts</h1>
        </div>
        <div className="d-flex justify-content-around">
          <div className="d-flex justify-content-around align-items-center concepts-box w-65 pt-3 pb-3 bg-white">
            <div className="w-33 text-center">
              <img src="../../images/statistics.png" className="mb-3" />
              <p className="no-margin nexa-light">Intro to</p>
              <p className="no-margin nexa-light">Statistics</p>
            </div>
            <div className="w-33 text-center">
              <img src="../../images/data-science.png" className="mb-3" />
              <p className="no-margin nexa-light">Data Science</p>
              <p className="no-margin nexa-light">Foundations</p>
            </div>
            <div className="w-33 text-center">
              <img src="../../images/python.png" className="mb-3" />
              <p className="no-margin nexa-light">Python</p>
              <p className="no-margin nexa-light">Foundations</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-313c45 d-flex">
        <div className="w-55">
          <img src="../../images/technologies-hero-desktop.png" className="w-100"/>
        </div>
        <div className="w-45 d-flex justify-content-center align-items-center">
          <div className="w-75 pt-5" style={{ color: 'white' }}>
            <div className="mb-5 header">
              <h1>Intro to Data Science</h1>
              <h1 className="blue-bold-underline">Course Schedule</h1>
            </div>
            <div>
              <div className="d-flex">
                <img src="../../images/bullet.png" />
                <p className="list-text paragraphs-lists">2 Weeks of Live Instruction</p>
              </div>
              <div className="d-flex">
                <img src="../../images/bullet.png" />
                <p className="list-text paragraphs-lists">Monday - 7:00 p.m. to 9:00 p.m. &#40;PST&#41;</p>
              </div>
              <div className="d-flex">
                <img src="../../images/bullet.png" />
                <p className="list-text paragraphs-lists">Thursday - 7:00 p.m. to 9:00 p.m. &#40;PST&#41;</p>
              </div>
              <div className="d-flex">
                <img src="../../images/bullet.png" />
                <p className="list-text paragraphs-lists">Saturday - 10:00 a.m. to 2:30 p.m. &#40;PST&#41;</p>
              </div>
              <div className="d-flex justify-content-start align-items-center mt-5">
                <a className="ds-btn blue-btn d-flex justify-content-center me-3" href="#">Register Now</a>
                <a className="ds-btn white-outline-btn d-flex justify-content-center ms-3" href="#">Ask a Question</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
