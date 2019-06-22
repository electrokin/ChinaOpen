import React, { Component } from 'react';

import './Sections.css';

class TranslationSection extends Component {

  render() {

    return (
      <section className="BCPSectionBackground">
        <div className="SectionWrapper">
          <div className="BCPCopy">
            <h1>中文语言支持</h1>
            <h2>赛事将提供翻译支持</h2>
            <p>赛事设有现场裁判与翻译，提供规则查询与疑问解答。我们将尽力为中外玩家提供公平的比赛环境。</p>
          </div>

          <div className="TranslationImage"></div>
        </div>
      </section>
    );
  }
}

export default TranslationSection;
