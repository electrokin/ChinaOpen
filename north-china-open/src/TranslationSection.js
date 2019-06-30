import React, { Component } from 'react';

import './Sections.css';

class TranslationSection extends Component {

  render() {

    return (
      <section className="BCPSectionBackground">
        <div className="SectionWrapper">
          <div className="BCPCopy">
            <h1>Chinese Language Support</h1>
            <h2>Translation Support Available throughout the Event</h2>
            <p>The ECO will feature on-site bilingual judges, ready to help with any rules queries or unclear translations. We aim to provide a fair playing field for both local and foreign players.</p>
          </div>

          <div className="TranslationImage"></div>
        </div>
      </section>
    );
  }
}

export default TranslationSection;
