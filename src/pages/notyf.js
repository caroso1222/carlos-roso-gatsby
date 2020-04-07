import React, { useState, useEffect } from "react"
import "./notyf.scss"
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { useForm } from 'react-hook-form';
import Circle from '../images/notyf/circle.inline.svg';
import Dots from '../images/notyf/dots.inline.svg';
import Cross from '../images/notyf/cross.inline.svg';
import DoubleZigZag from '../images/notyf/double-zigzag.inline.svg';
import Line from '../images/notyf/line.inline.svg';
import Triangle from '../images/notyf/triangle.inline.svg';
import TripleZigZag from '../images/notyf/triple-zigzag.inline.svg';
import Helmet from "react-helmet"
import { Link } from "gatsby"
import CttiBanner from "../components/ctti-banner";

let notyf;

const NotyfPage = () => {

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    const isSSR = typeof window === "undefined";
    if (isSSR) return;
    notyf = new Notyf({
      types: [
        {
          type: 'custom',
          backgroundColor: 'linear-gradient(45deg, rgb(239, 253, 33), rgb(255, 0, 0))'
        }
      ]
    });

    setValue('message', 'They see me rolling');
    setValue('duration', 2000);
    setValue('positionX', 'right');
    setValue('positionY', 'bottom');
    setValue('ripple', true);
    setValue('dismissible', false);
    setValue('type', 'success');
  }, []);

  const fireNotyf = data => {
    const { type, message, duration, positionX, positionY, dismissible, ripple } = data;
    notyf.open({
      type, message, duration, dismissible, ripple,
      position: {
        x: positionX,
        y: positionY
      }
    });
  }

  const title = 'Notyf: A minimalistic JavaScript library for toast notifications.';
  const description = 'Notyf is a JavaScript library for toast notifications. Responsive, A11Y, dependency-free. Tiny (~3KB). Easy integration with React, Angular and Vue'

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
    <div className="notyf-ctti-banner">
      <CttiBanner />
    </div>
    <div className="notyf-page">
      <div className="container p-relative">
        <div className="row">
          <div className="col-sm-6 notyf-page__left">
            <h1>Notyf</h1>
            <h2>
              <p>A minimalistic JavaScript library for toast notifications. Responsive, A11Y, dependency-free. Tiny (~3KB).</p>
              <p>Easy integration with React, Angular and Vue.</p>
            </h2>

            <div className="notyf-page__docs only-desktop">
              <a href="https://github.com/caroso1222/notyf">
                <span className="as-header">See documentation</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" fill="white" role="img" viewBox="0 0 24 24"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              </a>
            </div>
            <Link className="notyf-page__credits only-desktop as-header" to="/">Carlos Roso © 2020</Link>
            <Dots />
          </div>
          <div className="col-sm-6 d-flex justify-content-center align-items-center flex-column">
            <div className="notyf-page__controller-wrapper">
              <form className="notyf-page__controller" onSubmit={handleSubmit(fireNotyf)}>
                <section>
                  <label className="as-header">Message</label>
                  <input type="text" name="message" className="as-header" ref={register}></input>
                </section>
                <section>
                  <label className="as-header">Duration</label>
                  <input type="number" name="duration" className="as-header" ref={register}></input>
                </section>
                <section>
                  <label className="as-header">Position - X</label>
                  <div className="d-flex">
                    <div className="d-flex mr-1 align-items-center">
                      <input id="x-left" value="left" type="radio" className="as-header" name="positionX" ref={register}></input>
                      <label className="as-header" htmlFor="x-left">Left</label>
                    </div>
                    <div className="d-flex mr-1 align-items-center">
                      <input id="x-center" value="center" type="radio" className="as-header" name="positionX" ref={register}></input>
                      <label className="as-header" htmlFor="x-center">Center</label>
                    </div>
                    <div className="d-flex mr-1 align-items-center">
                      <input id="x-right" value="right" type="radio" className="as-header" name="positionX" ref={register}></input>
                      <label className="as-header" htmlFor="x-right">Right</label>
                    </div>
                  </div>
                </section>
                <section>
                  <label className="as-header">Position - Y</label>
                  <div className="d-flex">
                    <div className="d-flex mr-1 align-items-center">
                      <input id="y-top" value="top" type="radio" className="as-header" name="positionY" ref={register}></input>
                      <label className="as-header" htmlFor="y-top">Top</label>
                    </div>
                    <div className="d-flex mr-1 align-items-center">
                      <input id="y-bottom" value="bottom" type="radio" className="as-header" name="positionY" ref={register}></input>
                      <label className="as-header" htmlFor="y-right">Bottom</label>
                    </div>
                  </div>
                </section>
                <section>
                  <label className="as-header">Behavior</label>
                  <div className="d-flex">
                    <div className="d-flex mr-1 align-items-center">
                      <input id="with-ripple" type="checkbox" className="as-header" ref={register} name="ripple"></input>
                      <label className="as-header" htmlFor="with-ripple">With ripple</label>
                    </div>
                    <div className="d-flex align-items-center">
                      <input id="dismissible" type="checkbox" className="as-header" ref={register} name="dismissible"></input>
                      <label className="as-header" htmlFor="dismissible">Dismissible</label>
                    </div>
                  </div>
                </section>
                <section>
                  <label className="as-header">Type</label>
                  <div className="d-flex">
                    <div className="d-flex mr-1 align-items-center">
                      <input id="type-success" type="radio" className="as-header" name="type" value="success" ref={register}></input>
                      <label className="as-header" htmlFor="type-success">Success</label>
                    </div>
                    <div className="d-flex mr-1 align-items-center">
                      <input id="type-error" type="radio" className="as-header" name="type" value="error" ref={register}></input>
                      <label className="as-header" htmlFor="type-error">Error</label>
                    </div>
                    <div className="d-flex mr-1 align-items-center">
                      <input id="type-custom" type="radio" className="as-header" name="type" value="custom" ref={register}></input>
                      <label className="as-header" htmlFor="type-custom">Custom</label>
                    </div>
                  </div>
                </section>
                <button type="submit" className="notyf-page__cta as-header">Fire!</button>
              </form>
            </div>
            <div className="notyf-page__docs only-mobile">
              <a href="https://github.com/caroso1222/notyf">
                <span className="as-header">See documentation</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" fill="white" role="img" viewBox="0 0 24 24"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              </a>
            </div>
            <Link className="notyf-page__credits only-mobile as-header" to="/">Carlos Roso © 2020</Link>
          </div>
        </div>
        <div className="notyf-page__things">
          <Circle className="notyf-page__thing notyf-page__thing--circle-1"/>
          <DoubleZigZag className="notyf-page__thing notyf-page__thing--double-zigzag"/>
          <Line className="notyf-page__thing notyf-page__thing--line-1"/>
          <Cross className="notyf-page__thing notyf-page__thing--upper-cross"/>
          <Cross className="notyf-page__thing notyf-page__thing--lower-cross"/>
          <Circle className="notyf-page__thing notyf-page__thing--circle-2"/>
          <Line className="notyf-page__thing notyf-page__thing--line-2"/>
          <Triangle className="notyf-page__thing notyf-page__thing--triangle"/>
          <TripleZigZag className="notyf-page__thing notyf-page__thing--triple-zigzag"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default NotyfPage
