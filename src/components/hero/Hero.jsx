import React, { useState } from 'react';

const Hero = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="position-relative">
        <div className="menu">
          <div className="container main-menu w-100 d-flex justify-content-between">
              <div className="logo">
                <img className="img-fluid" src="/images/white_full.png" alt="logo" />
              </div>
              <div className="box">
                <div className={`btn ${isActive ? 'active' : 'not-active'}`} onClick={handleClick}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
          </div>
        </div>
        <div className="row">
            <div className="col-12 bg-left d-flex align-items-center">
              <div className="container">
                <h2 className="fw-bold text-white">"An Ambition as high as sky"</h2>
                <div className="down-and-lang d-flex justify-content-between">
                  <div className="down-arrow">
                    <img src="/images/Arrow_down.svg" alt="down arrow" />
                  </div>
                  <div className="lang">
                    <h6 className="fw-bold text-white">AR / EN</h6>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="row">
          <div className="col-12 right-img">

          </div>
            {/* <img src="/images/Home-page.png" alt="home" /> */}
        </div>
    </div>
  )
}

export default Hero;