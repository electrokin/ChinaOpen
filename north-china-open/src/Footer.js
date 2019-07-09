import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {

  render() {

    return (
      <div>

        <div className="SponsorWrapper">
          <a href="https://www.frontlinegaming.org/community/frontline-gamings-independent-tournament-circuit/" className="Sponsor" id="itc-logo"> </a>
          <a href="https://www.gamemat.eu/" className="Sponsor" id="gamemat-logo"> </a>
          <a href="http://www.tablewar.com/" className="Sponsor" id="tablewar-logo"> </a>
          <a href="http://www.tablewar.com/" className="Sponsor" id="SOGOFUNlogo"> </a>
        </div>
        <p className="CopyrightNotice">&copy; ITC North China Open 2019 - Web Design by Addam Martin Digital</p>

      </div>
    );
  }
}

export default Footer;
