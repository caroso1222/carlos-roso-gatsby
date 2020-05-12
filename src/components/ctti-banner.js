import React from 'react';
import './ctti-banner.scss';
import { Link } from 'gatsby';

const CttiBanner = () => {
  return (
    <>
      <header className="ctti-banner d-flex align-items-center">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-100">
            <h5 className="ctti-banner__header">
              You can crack the tech <span>Interview</span> too!
            </h5>
            <Link to="/cracking-the-toptal-interview" className="ctti-banner__button as-header">
              Get my guide for free
            </Link>
          </div>
          <div className="ctti-banner__bottom"></div>
        </div>
      </header>
    </>
  );
};

export default CttiBanner;
