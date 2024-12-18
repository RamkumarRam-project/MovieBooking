import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="container-fluid mt-5 p-5" style={{ backgroundColor: "#ff7979", color: "white" }}>
      <div className="row">
        <div className="col-sm-12 col-md-12 d-flex footer-sec">
          <img
            src="/images/RAMLOGO.webp"
            alt="RAMLOGO"
            className="logo-images"
          />
          <h6 className="text-center text-white fs-5">
            RAMKUMAR. &copy; {currentYear} All Rights Reserved
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
