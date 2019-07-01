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
            <h1>Sign up now with<br />  BCP Player</h1>
            <h2>AVAILABLE ON THE APPSTORE, GOOGLE PLAY & APKPURE</h2>
            <p>Download the Best Coast Pairings mobile app and search 'East China Open' to register today. Completed army rosters are due by the 4th of May 2019.</p>
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
