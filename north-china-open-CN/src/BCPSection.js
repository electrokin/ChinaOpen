import React, { Component } from 'react';

import './Sections.css';

class BCPSection extends Component {

  render() {

    let BCPSectionWrapper = {
      paddingBottom: '0'
    }

    return (
      <section className="BCPSectionBackground">
        <div className="SectionWrapper" style={ BCPSectionWrapper }>
          <div className="BCPCopy">
            <h1>赶快通过BCP Player注册吧</h1>
            <h2>APPLE APPSTORE, GOOGLE PLAY & APKPURE</h2>
            <p>下载“Best Coast Pairings mobile”APP，搜索“North China Open”来进行注册。完整军表的提交截止日期为2019年5月4日。</p>
            <br />
          </div>

          <div className="BCPBtns">
            <a className="greenBtn" href="https://itunes.apple.com/us/app/best-coast-pairings-player/id1193209310?mt=8">Appstore</a>
            <a className="greenBtn" href="https://play.google.com/store/apps/details?id=com.bestcoastpairings.playerapp&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">Play Store</a>
            <a className="greenBtn" href="https://apkpure.com/bcp-player/com.bestcoastpairings.playerapp">APK Pure</a>
          </div>

          <div className="BCPImage"></div>
        </div>
      </section>
    );
  }
}

export default BCPSection;
