import React, { useState, useEffect } from 'react';
import './rmind.scss';
import Helmet from 'react-helmet';
import ReactDOM from 'react-dom';
import { Link } from 'gatsby';

const RmindPage = () => {
  const [code, setCode] = useState('');
  const [numReminders, setNumReminders] = useState(0);
  const [reminderList, setReminderList] = useState([]);

  useEffect(() => {
    const isSSR = typeof window === 'undefined';
    if (isSSR) return;
    let idx = 0;
    const lines = FINAL_CODE.split('\n');
    async function printLines() {
      for (const line of lines) {
        let timeout = /^\$/g.test(line) ? 50 : 5;
        await printLine(line, timeout);
        if (/^</g.test(line)) {
          setNumReminders(num => num + 1);
          setReminderList(reminders => {
            const len = reminders.length;
            return [...reminders, FINAL_REMINDERS[len]];
          });
        } else {
          await wait(1500);
        }
        setCode(code => code + '\n');
      }
    }
    printLines();
  }, [FINAL_CODE, FINAL_REMINDERS]);

  async function printLine(line, timeout) {
    return new Promise(resolve => {
      let idx = 0;
      const interval = setInterval(() => {
        if (idx < line.length) {
          setCode(code => code + line[idx++]);
        } else {
          clearInterval(interval);
          resolve();
        }
      }, timeout);
    });
  }

  async function wait(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

  const title = 'rmind: A minimalist CLI for the macOS Reminders app';
  const description =
    'rmind is a CLI that lets you add macOS reminders from the terminal using natural language';

  const FINAL_CODE = `$ rmind clean crontab in 1 month
<span class="console__check">✔︎</span> I'll remind you to "clean crontab” (Sunday Jun 21st at 12:00 PM)

$ rmind email Sarah in 40 mins
<span class="console__check">✔︎</span> I'll remind you to "email Sarah" (Today at 11:51 AM)

$ rmind call mom tonight
<span class="console__check">✔︎</span> I'll remind you to "call mom" (Tonight at 10:00 PM)`;

  const FINAL_REMINDERS = [
    {
      message: 'Clean up crontab',
      date: '21/05/2020, 12:00 PM'
    },
    {
      message: 'Email Sarah',
      date: 'Today, 11:51 AM'
    },
    {
      message: 'Call mom',
      date: 'Today, 10:00 PM'
    }
  ];

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en'
        }}
        title={title}
        titleTemplate={`%s`}
        meta={[
          {
            name: `description`,
            content: description
          },
          {
            property: `og:title`,
            content: title
          },
          {
            property: `og:description`,
            content: description
          },
          {
            property: `og:type`,
            content: `website`
          },
          {
            property: `og:image`,
            content: 'http://carlos-temp-public.s3.amazonaws.com/rmindog.jpg'
          },
          {
            property: `og:image:secure_url`,
            content: 'https://carlos-temp-public.s3.amazonaws.com/rmindog.jpg'
          },
          {
            name: `twitter:card`,
            content: `summary`
          },
          {
            name: `twitter:creator`,
            content: '@caroso1222'
          },
          {
            name: `twitter:title`,
            content: title
          },
          {
            name: `twitter:description`,
            content: description
          }
        ]}
      />
      <div className="rmind">
        <div className="container container--rmind p-relative">
          <h1 className="rmind__header">rmind</h1>
          <h2 className="rmind__subheader">A minimalist CLI for the macOS Reminders app</h2>
          <div className="row">
            <div className="col-sm-8">
              <div className="console">
                <div className="console__header">
                  <div className="window-buttons">
                    <div className="window-buttons__button window-buttons__button--red"></div>
                    <div className="window-buttons__button window-buttons__button--yellow"></div>
                    <div className="window-buttons__button window-buttons__button--green"></div>
                  </div>
                </div>
                <div className="console__body">
                  <pre className="console__code rmind-code" dangerouslySetInnerHTML={{ __html: code }}></pre>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="reminders">
                <div className="reminders__header">
                  <div className="window-buttons">
                    <div className="window-buttons__button window-buttons__button--red"></div>
                    <div className="window-buttons__button window-buttons__button--yellow"></div>
                    <div className="window-buttons__button window-buttons__button--green"></div>
                  </div>
                </div>
                <div className="reminders__body as-header">
                  <div className="reminders__upper d-flex justify-content-between">
                    <p>Reminders</p>
                    <p>{numReminders}</p>
                  </div>
                  {reminderList.map((reminder, idx) => {
                    return (
                      <div className="reminder d-flex" key={idx}>
                        <div className="reminder__left">
                          <div className="reminder__checker"></div>
                        </div>
                        <div className="reminder__right">
                          <p className="reminder__message">{reminder.message}</p>
                          <p className="reminder__date">{reminder.date}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="rmind__links">
            <p class="rmind-code rmind-code--star">
              rmind <a href="https://github.com/caroso1222/rmind">star rmind on GitHub</a> in 1 min
            </p>
            <Link className="rmind__credits as-header d-block" to="/">
              Carlos Roso © 2020
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RmindPage;
