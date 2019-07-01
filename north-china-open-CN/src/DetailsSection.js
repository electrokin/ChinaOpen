import React, { Component } from 'react';

import './Sections.css';

class DetailsSection extends Component {

  render() {

    return (
      <section>

        <div className="SectionWrapper MetalBG">

          <div className="ThreeColumn">
            <h1>赛事详情</h1>
            <h2>赛事举办的时间地点？</h2>
            <p>从外地赶来参赛？安排您的行程，以免迷路或迟到</p>
            <br />
            <a href="/details" className="greenBtn">赛事详情</a>
          </div> 

          <div className="ThreeColumn">
            <h1>战火锤炼</h1>
            <h2>2000分，3个分队</h2>
            <p>提交军表前，请务必确认您的部队组成无误，提交截止日期为9月1日</p>
            <br />
            <a href="/army" className="greenBtn">军表编写须知</a>
          </div>

          <div className="ThreeColumn">
            <h1>模型制作与涂装</h1>
            <h2>至少3色涂装</h2>
            <p>确保您的部队符合赛事对模型制作与涂装的最低需求，以适于参赛</p>
            <br />
            <a href="/painting" className="greenBtn">模型制作须知</a>
          </div> 

        </div>

      </section>
    );
  }
}

export default DetailsSection;
