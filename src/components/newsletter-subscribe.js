import React, { useState } from 'react'
import "./newsletter-subscribe.scss"
import { FaExclamation, FaCheck } from 'react-icons/fa'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const NewsletterSubscribe = () => {

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
    <div>
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
    </p>}</div>
  )
}

export default NewsletterSubscribe;