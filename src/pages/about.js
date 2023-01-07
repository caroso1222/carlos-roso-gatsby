import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import aboutPic from '../images/about-pic.jpg';
import './about.scss';

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="container main-container">
      <div className="about">
        <h1 className="as-body col-sm-12 p-0 headline">Hey there, I'm Carlos Roso</h1>
        <div className="row">
          <div className="col-sm-7">
            <p>
              I'm a Software Engineer at Meta. Former SDE at Amazon. Ex digital nomad writing code at{' '}
              <a
                href="https://www.toptal.com/#join-only-great-devs"
                target="_blank"
                rel="noopener noreferrer"
              >
                TopTal
              </a>
              . I love doing{' '}
              <a href="https://github.com/caroso1222/" target="_blank" rel="noopener noreferrer">
                open source
              </a>{' '}
              (+3.1K stars &amp; 4M installs) and{' '}
              <a href="https://logoquiz.dev/" target="_blank" rel="noopener noreferrer">
                personal projects
              </a>{' '}
              in my spare time. As of early 2020, I'm git-ranked in my country as the{' '}
              <a
                href="http://git-awards.com/users/search?login=caroso1222"
                target="_blank"
                rel="noopener noreferrer"
              >
                Top 2 and Top 4
              </a>{' '}
              developer for JavaScript and TypeScript, correspondingly. Amateur{' '}
              <a href="https://dribbble.com/caroso1222" target="_blank" rel="noopener noreferrer">
                designer
              </a>{' '}
              for life. Fun facts: I enjoy{' '}
              <a href="https://www.youtube.com/watch?v=epg8b5helt0" target="_blank" rel="noopener noreferrer">
                playing piano
              </a>{' '}
              and I’m an award wining{' '}
              <a href="https://youtu.be/fMS2VRplCqE?t=166" target="_blank" rel="noopener noreferrer">
                robotics
              </a>{' '}
              engineer.
            </p>
            <h2 className="about__subheadline as-body">What moves me</h2>
            <p>
              My mission is to teach everything I learn. While doing that, I hope to become a better software
              developer. I live to impact as many lives as possible with my writings and my code.
            </p>
          </div>
          <div className="col-sm-5">
            <div className="about-pic d-flex justify-content-center">
              <img className="about-pic__img" src={aboutPic} alt="About pic" />
            </div>
          </div>
        </div>
        <h2 className="about__subheadline as-body">Motto</h2>
        <p>
          The secret of living is giving. We make a living by what we get. We make a life by what we give.
        </p>
        <h2 className="about__subheadline as-body">About this site</h2>
        <p>
          This is my negligible corner on the internet. I put everything here from my personal side projects,
          my views on life and personal growth, technical writings, and more.
        </p>
        <p>
          Whether or not I’m nomading, I am and will always be a big advocate of remote work. You’ll find a
          lot of writings and recommendations on this topic here.
        </p>
        <p>
          Want to say hi? <a href="/contact">Let's get in touch!</a>
        </p>
      </div>
    </div>
  </Layout>
);

export default About;
