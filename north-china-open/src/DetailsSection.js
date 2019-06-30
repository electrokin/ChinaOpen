import React, { Component } from 'react';

import './Sections.css';

class DetailsSection extends Component {

  render() {

    return (
      <section>

        <div className="SectionWrapper MetalBG">

          <div className="ThreeColumn">
            <h1>EVENT DETAILS</h1>
            <h2>THE WHERE & WHEN?</h2>
            <p>Coming from out of town? Plan your trip to Shanghai in advance to avoid getting lost or showing up late.</p>
            <br />
            <a href="/details" className="greenBtn">EVENT DETAILS</a>
          </div> 

          <div className="ThreeColumn">
            <h1>BATTLE FORGED</h1>
            <h2>2000 POINTS, 3 DETACHMENTS</h2>
            <p>Be sure to check out the full details on Force Composition before submitting your list by the 1st of September.</p>
            <br />
            <a href="/army" className="greenBtn">ARMY LIST GUIDELINES</a>
          </div>

          <div className="ThreeColumn">
            <h1>PAINTING & MODELLING</h1>
            <h2>THE THREE COLOUR MINIMUM</h2>
            <p>Ensure your army meets the minimum painting and modelling requirements and is legal for use in the event.</p>
            <br />
            <a href="/painting" className="greenBtn">HOBBY GUIDELINES</a>
          </div> 

        </div>

      </section>
    );
  }
}

export default DetailsSection;
