import React from 'react';
import './short-bio.scss';
import profilePicSm from '../images/profile-pic-sm.jpg';
import { Link } from 'gatsby';

const ShortBio = () => {
  return (
    <div className="short-bio">
      <div className="row">
        <div className="col-sm-2 d-flex short-bio__img-container">
          <div className="short-bio__img-outer">
            <div className="short-bio__img-wrapper">
              <img className="short-bio__img" src={profilePicSm} alt="Logo" />
            </div>
          </div>
        </div>
        <div className="col-sm-10">
          <p className="short-bio__content">
            <b>I'm Carlos Roso.</b> I'm a Production Engineer at Meta. Former SDE at Amazon. Ex digital nomad
            at{' '}
            <a href="https://www.toptal.com#join-only-great-devs" target="_blank" rel="noopener noreferrer">
              Toptal
            </a>{' '}
            and{' '}
            <a
              href="https://www.crossover.com/crossover-stories-carlosr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Crossover
            </a>
            . In love with{' '}
            <a href="https://github.com/caroso1222" target="_blank" rel="noopener noreferrer">
              open source
            </a>{' '}
            and{' '}
            <a href="https://dribbble.com/caroso1222" target="_blank" rel="noopener noreferrer">
              design
            </a>
            .
          </p>
          <Link to="/about" className="as-header short-bio__link">
            More about me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShortBio;
