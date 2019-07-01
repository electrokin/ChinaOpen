import React, { Component } from 'react';

import './App.css';
import './typography.css';
import './Sections.css';

import Footer from './Footer';
import TranslationSection from './TranslationSection';
import BCPSection from './BCPSection';

import missionsPDF from './missions.pdf';

class EventDetails extends Component {

  render() {

    return (
      <div>

      <div className="CNEN"><p>CN/EN: Looking for this page in English? Check out the English site <a href="https://www.Chinawarhammer.com">here</a>.</p></div>
      
        <a href="/" className="NCOLogo"> </a>

        <div className="SectionWrapper MetalBG">

          <div className="PageHeader">
            <h1>赛事详情</h1>
            <h2>下文包括关于华东公开赛的赛制</h2>
            <p>翻译、奖品、场馆与交通路线等内容的详情。</p>
          </div>      

        </div>


          <div className="SectionWrapper">
            <div className="SectionCopy">
              <h1>赛事赛制规则</h1>
              <p>华北公开赛将于9月14-15日（周末）于中国天津市举办，赛事为ITC认证的战锤40K比赛。</p>
              <p>赛事包括5轮，使用ECO2019编写的 <a href="https://docs.google.com/document/d/1bUs0HrJ3f6YzR6mWlT1LRLq0i9_0ekf7ah9WhCTxsIo/edit?usp=sharing">ITC</a>赛制 <a href="https://docs.google.com/document/d/18u16xnoStYHxTUL0Eodjk3kTR4MCn9zyF1r3sZkOgfo/edit">与任务规则。</a>每轮中选手们将有3小时用于完成该轮对战 </p>
              <p>赛事使用战锤40K官方第8版规则中对战模式（Matched Play）的规定与建议，详见规则书与FAQ <a href="https://www.games-workshop.com/en-US/Warhammer-40000-rulebook-eng-2017">Rulebook</a>.</p>
              <p>ITC标准比赛规模是2000分</p>
              <p>军表组建的详细规定见 <a href="/army">此</a>.</p>
              <br />
              <p><strong>点此<a href={missionsPDF} download>下载</a>规则全文.</strong></p>
            </div>
            
            <div className="SectionCopy">
              <h1>议程</h1>
            </div>
            <div className="SectionSpare">
              <h1>星期六</h1>
        <p><strong>8:00-8:15</strong> 球员简报</p>
              <p><strong>8:15-8:30</strong> 比赛 1 准备</p>
              <p><strong>8:30-11:30</strong> 比赛 1</p>
              <p><strong>11:30-12:00</strong> 午餐</p>
              <p><strong>12:00-12:15</strong> 比赛 2 准备</p>
              <p><strong>12:15-15:15</strong> 比赛 2</p>
              <p><strong>15:15-15:30</strong> 比赛 3 准备</p>
              <p><strong>15:30-18:30</strong> 比赛 3</p>
            </div>
            <div className="SectionSpare">
              <h1>Sunday</h1>
              <p><strong>8:00-8:15</strong> 比赛 4 准备e</p>
              <p><strong>8:15-11:15</strong> 比赛 4</p>
              <p><strong>11:15-11:45</strong> 休息 </p>
              <p><strong>11:45-12:00</strong> 比赛 5 准备</p>
              <p><strong>12:00-15:00</strong> 比赛 5 </p>
              <p><strong>15:00-15:30</strong>  奖品s</p>
            </div>
          </div>

          <TranslationSection />

          <div className="SectionWrapper">
            <div className="SectionCopy">
              <h1>比赛场馆</h1>
              <p>赛事举办地点为天津市滨海区泰达国际学校。</p>
              <p>从北京或上海抵达比赛场馆的最快捷办法为乘坐高铁列车（例如C2581次）在滨海站下车。注意，并非每班前往天津的列车均停靠滨海站。若您在天津南站下车，则可乘出租车或地铁（9号线）前往。</p>
              <p>为便于有同行需要的玩家，您可扫描二维码加入微信群进行交流。</p>
              <p>我们暂定赛事报名人数上限为40人，请尽早通过BCP Player APP注册，以免遗憾。</p>
            </div>
          </div>

          <BCPSection />

          <div className="SectionWrapper">
            <div className="SectionCopy">
              <h1>奖品设置</h1>

              <p>当然，本赛事是有奖赛事！</p>
              <p>主赛事的奖品尚未最终确定，但若干模型公司和桌游店已经赞助了我们。成绩最高的若干名选手将获得奖品，赛事还将设有最佳涂装和最具体育精神奖。</p>
              <p>“木勺奖”的角逐也很激烈！该奖项将颁发给5轮后总积分最低的选手。</p>
              <p>此外，现场所有参赛玩家还可以参加抽奖，不是人人有奖，但大家都有机会</p>
              <p><strong>赶快注册BCP app报名吧</strong></p>
            </div>
          </div>          

        <Footer />

      </div>
    );
  }
}

export default EventDetails;
