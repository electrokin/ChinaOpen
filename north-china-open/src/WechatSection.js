import React, { Component } from 'react';

import './Sections.css';

class WechatSection extends Component {

  render() {

    return (
      <section className="BCPSectionBackground">
        <div className="SectionWrapper">
          <div className="BCPCopy">
            <h1>JOIN US ON WECHAT</h1>
            <h2>The Official National Tournaments WeChat Group</h2>
            <p>Scan the QR Code to join the discussion, reach out to us with any rules queries, and stay up to date for news about the event.</p>
            <p><br /><strong><h2>QR Code not working?</h2><br />Search 'National tournaments' on WeChat or add the TO - WeChat ID: electrokin</strong></p>
          </div>

          <div className="QRCode"></div>
        </div>
      </section>
    );
  }
}

export default WechatSection;
