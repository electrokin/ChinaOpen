import React, { Component } from 'react';

import './App.css';
import './typography.css';
import './Sections.css';

import Footer from './Footer';
import TranslationSection from './TranslationSection';
import BCPSection from './BCPSection';

class ArmyDetails extends Component {

  render() {

    return (
      <div>
      
        <div className="CNEN"><p>CN/EN: Looking for this page in English? Check out the English site <a href="https://www.chinawarhammer.com">here</a>.</p></div>

        <a href="/" className="NCOLogo"> </a>

        <div className="SectionWrapper MetalBG">

          <div className="PageHeader">
            <h1>军表组建</h1>
            <h2>华北公开赛组军须知</h2>
            <p>下文包括建立用于ITC认证赛事军表，以及选用适当规则、规定相关的细则</p>
            <p>若您需要查询模型制作、涂装方面的规定，请查看此 <a href="/painting">网页</a>\</p>
          </div>      

        </div>


          <div className="SectionWrapper">
            <div className="SectionCopy">
              <h1>基本要求</h1>
              <p>华东公开赛的5轮比赛均使用2000分部队进行比赛，遵循战锤40K官方第8版规则中对战模式（Matched Play）规则，以及Frontline Gaming编写的ITC赛制规则。</p>
              <ul><h2>概述</h2>
                <li>每位选手所用军表的分数限制为2000分。一分也不能超！</li>
                <li>包含至多3个分队</li>
                <li>每分队内各单位应有至少一个共通的阵营关键词，且该关键词不是帝国（IMPERIUM）、混沌（CHAOS）、灵族（AELDARI）、死神军（YNNARI）或泰伦（TYRANIDS）。</li>
                <li>单个模型的Power Level不得大于或等于32。</li>
              </ul>
              <p>请注意，赛事每一轮的时间限制为3小时。裁判将尽力确保比赛进程能够顺利推进。</p>
              <p>请保持比赛礼仪，并选用你能够在合理的时间内操纵的部队参赛。没有人想看着你移动300个屁精并把时间耗完</p>
              <p>请务必于9月1日前在BCP app上上传你的军表</p>
              <p><strong>提示：请先查阅 <a href="/details">ITC</a>任务规则，并在组军时为任务优化你的军表。</strong></p>
              <p>在比赛前，请确认必要的选项均已在军表中标识出来，包括但不限于主将和主将特性、武器选择、分队特性、阵营关键字、指挥点数量等选项。</p>
              <p>对规则有任何不清楚之处，请联系裁判和双语赛事运行人员。</p>
              <p><strong>完整的军表应通过BCP Player app提交。军表格式无专门要求，比如使用Battlescribe导出的军表就不是个坏主意。无论使用何种格式提交，请确认你的军表无误，并使用了最新版本的属性与分数。</strong></p> 
            </div>
          </div>

          <TranslationSection />

          <div className="SectionWrapper">
            <div className="SectionCopy">
              <h1>有效规则</h1>
              <h2>本赛事使用哪些规则书？</h2>
              <p>本赛事使用所有现行的，用于GW和FW产品的第8版战锤40K规则。</p>
              <ul><h2>其中包括：</h2>
                <li>第8版战锤40K发布以来，所有现行的Codex；</li>
                <li>对于尚未被Codex更新，或包含Codex版本中已不存在的选项的单位，则使用Index版本规则；
                <br />注意：若该单位已存在Codex或其他后续接替版本的规则，且该单位没有后续版本中不存在的装备选项，则必须使用较新版本的规则</li>
                <li>CA2018，包括其中所有分数调整</li>
                <li>GW官方出版物中规定可用于对战模式（Matched Play）的规则，例如Vigilus Defiant战役书中相关规则；</li>
                <li>白矮人杂志（White Dwarf）和官方社区（Warhammer Community）登载的可用于对战模式（Matched Play）的规则；</li>
                <li>所有最新版的官方勘误和FAQ。</li>
              </ul>
              <p>规则变动截止日期为比赛开始前一个月。万一8月14号真的出了太空矮人规则书，在本赛事也是用不了的。</p>
              <p>还得提一句，仅有战锤40K规则下的部队可用于此赛事。30K或者其他游戏项目的都不行。</p>
            </div>
          </div>

          <BCPSection />       

        <Footer />

      </div>
    );
  }
}

export default ArmyDetails;
