import React from "react"
import "./ctti-banner.scss"
import { Link } from "gatsby"

const CttiBanner = () => {

  return (
    <>
    <header className="ctti-banner d-flex align-items-center">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100">
          <h5 class="ctti-banner__header">Cracking the Toptal <span>Interview</span></h5>
          <Link to="/cracking-the-toptal-interview" class="ctti-banner__button as-header" type="button">Get it for free now</Link>
        </div>
        <div className="ctti-banner__bottom"></div>
      </div>
    </header>
    </>
  );
}

export default CttiBanner
