import React, { useState } from 'react'
import "./notyf.scss"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import "./cracking-the-toptal-interview.scss"
import profilePic from '../images/profile-pic.jpg'
import Dots from '../images/ctti/dots.inline.svg';
import Triangle from '../images/ctti/triangle.inline.svg';
import MiniDots from '../images/ctti/mini-dots.inline.svg';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { FaExclamation, FaCheck } from 'react-icons/fa'

const CrackingTheToptalInterview = () => {
  const title = 'Cracking the Toptal Interview';

  const description = 'The ultimate FREE guide to clear the interview at the most prestigious remote work marketplace, Toptal.';

  const [email, setEmail] = useState('');

  const [emailSuccess, setEmailSuccess] = useState('');

  const [isSubscribed, setIsSubscribed] = useState('');
  
  const handleSubmit = e => {
    console.log('handling submit');
    e.preventDefault();
    addToMailchimp(email)
      .then((data) => {
        console.log({data});
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
    <>
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: 'http://carlos-temp-public.s3.amazonaws.com/ogimage.jpg',
        },
        {
          property: `og:image:secure_url`,
          content: 'https://carlos-temp-public.s3.amazonaws.com/ogimage.jpg',
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: '@caroso1222',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    />
    <div className="ctti-wrapper xy-center">
      <div className="container ctti">
      <div className="row h-100 m-0 ctti-main-row">
        <div className="col-md-4 ctti__left">
          <div className="ctti__left-wrapper">
            <div className="ctti__profile-image-wrapper d-flex justify-content-center">
              <div className="">
                <img className="ctti__profile-image" src={profilePic} alt="Profile pic" />
              </div>
            </div>
            <h3 className="ctti__who-title as-body">Who am I?</h3>
            <hr className="ctti__hr" />
            <p className="ctti__who-body m-0">My name is Carlos Roso. I’m a Software Engineer and digital nomad. Over the past years, I’ve worked in the most prestigious remote work companies including Toptal and CrossOver. I’ve also aced interviews at Amazon and several more top talent marketplaces. I’ve helped hundreds of people go remote - <b>I think I can help you too</b>. <Link to="/about">Read more about me</Link>.</p>
          </div>
          <Triangle className="ctti__triangle ctti__triangle--upper"/>
          <Triangle className="ctti__triangle ctti__triangle--mid"/>
          <Triangle className="ctti__triangle ctti__triangle--lower"/>
          <MiniDots className="ctti__mini-dots" />
        </div>
        <div className="col-md-8 ctti__right">
          <h1 className="ctti__header as-body">
            Cracking the Toptal Interview
            <Dots className="ctti__dots" />
          </h1>
          <h2 className="ctti__subheader as-body">The ultimate FREE guide to clear the interview at the most prestigious remote work marketplace, <a href="https://www.toptal.com/#join-only-great-devs" target="_blank" rel="noopener noreferrer">Toptal</a>.</h2>
          <hr className="ctti__hr" />
          <p className="ctti__body"> <b><i>"How can I get into <a href="https://www.toptal.com/#join-only-great-devs" target="_blank" rel="noopener noreferrer">Toptal</a>?"</i></b> I've been asked this question hundreds of times. This guide is my attempt to answer it. I give advice on everything from resume, online assessment, technical interview and test project. Mainly aimed at Software Developers.</p>
          <div className="d-flex justify-content-center">
            <div className="ctti-sub">
              <p className="ctti-sub__punch">Don’t miss your chance. Join the waitlist today and be the first to get the guide for <b>FREE</b>.</p>
              {!emailSuccess && !isSubscribed && <form onSubmit={handleSubmit} className="m-0">
                <input name="email" className="ctti-sub__input" type="email"
                        placeholder="Your email" onChange={handleEmailChange}></input>
                <button className="ctti-sub__cta" type="buttom">Join the waitlist</button>
              </form>}
              {emailSuccess && <p className="ctti__response">
                <FaCheck className="ctti__icon ctti__icon--success" /> All set. The guide will be on your way soon!
              </p>}
              {isSubscribed && <p className="ctti__response">
                <FaExclamation className="ctti__icon ctti__icon--error"/>Oops. It seems like you're already subscribed.
              </p>}
              <p className="ctti-sub__disclaimer m-0">I’ll probably send you more emails about remote work and personal growth. You can unsubscribe at anytime.</p>
            </div>
          </div>
          <Dots className="ctti__lower-dots" />
        </div>
      </div>
    </div>
      <div className="ctti-wrapper__bg"></div>
      <div className="ctti-wrapper__bg ctti-wrapper__bg--2"></div>
    </div>
    </>
    )
  }
  
  export default CrackingTheToptalInterview
  