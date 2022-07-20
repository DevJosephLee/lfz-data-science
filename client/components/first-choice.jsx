import React from 'react';

export default function FirstChoice() {
  return (
    <div className="pb-5 pt-5" style={{ backgroundImage: 'url(../../images/first-choice-bg.png' }}>
      <div className="pb-5 pt-5">
        <div className="container pb-5">
          <div className="text-center pb-5">
            <h1 className="header">The first choice of employers in tech</h1>
            <p className="paragraphs-lists">With world-class curriculum, our students land jobs as web developers, data scientists, and software engineers</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="w-25 d-flex justify-content-center">
              <img src="../../images/auto-id-logo.png" />
            </div>
            <div className="w-25 d-flex justify-content-center">
              <img src="../../images/intuit-logo.png" />
            </div>
            <div className="w-25 d-flex justify-content-center">
              <img src="../../images/experian-logo.png" />
            </div>
            <div className="w-25 d-flex justify-content-center">
              <img src="../../images/nike-logo.png" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="w-25 d-flex justify-content-center">
              <img src="../../images/verizon-logo.png" />
            </div>
            <div className="w-25 d-flex justify-content-center">
              <img src="../../images/zillow-logo.png" />
            </div>
            <div className="w-25 d-flex justify-content-center">
              <img src="../../images/viewsonic-logo.png" />
            </div>
            <div className="w-25 d-flex justify-content-center">
              <img src="../../images/kbb-logo.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center mb-5 pb-5">
        <div className="d-flex justify-content-center w-45">
          <div className="w-65">
            <h1 className="header" style={{ color: '#21aebf' }}>In-Person or Remote</h1>
            <h1 className="header mb-4" style={{ color: '#21aebf' }}>Live Instruction</h1>
            <p className="paragraphs-lists list-text" style={{ lineHeight: '2.5rem' }}>Students will maximize their experience and learning by having direct interaction with instructors, whether attending in-person or live online, around the fundamental concepts of Data Science.</p>
          </div>
        </div>
        <div className="d-flex justify-content-end w-55">
          <img src="../../images/first-choice-1.png" className="w-100" />
        </div>
      </div>
      <div className="d-flex align-items-center pt-5 pb-5">
        <div className="d-flex justify-content-start w-55">
          <img src="../../images/first-choice-2.png" className="w-100" />
        </div>
        <div className="d-flex justify-content-center w-45">
          <div className="w-65">
            <h1 className="header mb-4" style={{ color: '#21aebf', textAlign: 'right' }}>Daily Live Chat Support</h1>
            <p className="paragraphs-lists list-text" style={{ textAlign: 'right', lineHeight: '2.5rem' }}>Students are never truly alone, even when working after hours as the class will have its own chat room and question queue administered by an instructor. Students can ask questions, collaborate and work together throughout the week.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
