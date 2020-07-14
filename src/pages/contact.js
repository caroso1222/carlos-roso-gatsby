import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = () => {
  const [addressV, setAddressV] = useState(false);
  const [foo, setFoo] = useState('');

  useEffect(() => {
    window.captchaSuccess = () => {
      setAddressV(true);
      setFoo('ce.roso398');
    };
  });

  return (
    <>
      <Helmet>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </Helmet>

      <Layout>
        <SEO title="About" />
        <div className="container main-container">
          <h1 className="as-body col-sm-12 p-0 headline">Let's get in touch!</h1>
          {addressV ? (
            <>
              <p>
                Please send me an email at <a href={`mailto:${foo}@gmail.com`}>{`${foo}@gmail.com`}</a>. I
                normally reply within a week or so.
              </p>
              <p>
                You can also shoot me a DM in{' '}
                <a href="https://twitter.com/caroso1222" target="_blank">
                  Twitter
                </a>{' '}
                or{' '}
                <a href="https://www.linkedin.com/in/carlos-edinson-roso-espinosa-41577886/" target="_blank">
                  LinkedIn
                </a>
                .
              </p>
            </>
          ) : (
            <p>
              Send me an email at <b>ce.ros</b>... wait, can you please first confirm you're not a robot?
            </p>
          )}

          {!addressV && (
            <form action="?" method="POST">
              <div
                className="g-recaptcha"
                data-callback="captchaSuccess"
                data-sitekey="6LdPV7EZAAAAAOcMEDMhJfdTflh7gpPIH9id_dxB"
              ></div>
            </form>
          )}
          <br />
        </div>
      </Layout>
    </>
  );
};
export default Contact;
