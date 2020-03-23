import React from 'react'
import "./short-bio.scss"
import profilePicSm from '../images/profile-pic-sm.jpg'

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
          <p className="short-bio__content"><b>I'm Carlos Roso.</b> I'm a Software Engineer and digital nomad at <a href="https://www.toptal.com#join-only-great-devs" target="_blank" rel="noopener noreferrer">Toptal</a>. Previously Software Architect at <a href="https://www.crossover.com/crossover-stories-carlosr" target="_blank" rel="noopener noreferrer">Crossover</a>. In love with open source and design.</p>
          <a className="as-header short-bio__link" target="_blank" rel="noopener noreferrer" href="https://legacy.carlosroso.com">More about me</a>
        </div>
      </div>
    </div>
  );
}

export default ShortBio
