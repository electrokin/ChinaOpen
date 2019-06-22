import React, { Component } from 'react';

import './Sections.css';

class WechatSection extends Component {

  render() {

    return (
      <section className="BCPSectionBackground">
        <div className="SectionWrapper">
          <div className="BCPCopy">
            <h1>在微信上联系我们</h1>
            <h2>华北公开赛官方微信群</h2>
            <p>扫描二维码加入讨论，解答您的疑问，了解赛事最新信息</p>
          </div>

          <div className="QRCode"></div>
        </div>
      </section>
    );
  }
}

export default WechatSection;
