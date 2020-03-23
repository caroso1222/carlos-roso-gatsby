import React, { useState } from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import IndexFeed from "../components/index-feed"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.scss"
import profilePic from '../images/profile-pic.jpg'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { FaExclamation, FaCheck } from 'react-icons/fa';

const IndexPage = () => {

  const [email, setEmail] = useState('');

  const [emailSuccess, setEmailSuccess] = useState('');

  const [isSubscribed, setIsSubscribed] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(email)
      .then((data) => {
        if (data.result === 'error') {
          setIsSubscribed(true);
        } else {
          setEmailSuccess(true);
        }
      })
      .catch(error => {
        // will likely never come here
      });
  };
  
  const handleEmailChange = e => {
    setEmail(e.currentTarget.value);
  };

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container main-container">
        <div className="row">
          <div className="col-sm-7">
            <h1 className="as-body col-sm-12 p-0 headline">Hey there, I'm Carlos Roso</h1>
            <h2 className="as-body sub-headline">I’m a software developer, remote work advocate, open source contributor, productivity hacker and designer.</h2>

            <p className="subscribe-line p-0">I write about remote work, software and personal growth. Subscribe to enjoy my articles every once in a while (hopefully weekly).</p>
            {!emailSuccess && !isSubscribed && <div className="col-sm-12">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-8 p-0 mb-1">
                    <input className="cr-input"  
                          name="email"
                          type="text" placeholder="Your email..."
                          onChange={handleEmailChange}></input>
                  </div>
                  <div className="col-sm-4 cta-button-wrapper">
                    <button type="submit" className="cta-button mb-1">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
            }
            {emailSuccess && <p className="cr-info-message">
              <FaCheck className="cr-info-message__icon cr-info-message__icon--success" /> All set. Thanks for subscribing!
            </p>
            }
            {isSubscribed && <p className="cr-info-message">
              <FaExclamation className="cr-info-message__icon cr-info-message__icon--error"/>Oops. It seems like you're already subscribed.
            </p>}
          </div>
          <div className="col-sm-5">
            <div className="profile-pic d-flex justify-content-center">
              <img className="profile-pic__img" src={profilePic} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="latest">
        <div className="container">
          <h3 className="latest__header">Latest articles</h3>
          <IndexFeed/>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
