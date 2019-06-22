import React, { Component } from 'react';

import './App.css';
import './typography.css';
import './Sections.css';

import Footer from './Footer';
import BCPSection from './BCPSection';
import WechatSection from './WechatSection';

class PaintingDetails extends Component {

  render() {

    return (
      <div>

      <div className="CNEN"><p>CN/EN: Looking for this page in English? Check out the English site <a href="https://www.northchinaopen.com">here</a>.</p></div>
      
        <a href="/" className="NCOLogo"> </a>

        <div className="SectionWrapper MetalBG">

          <div className="PageHeader">
            <h1>华北公开赛 模型制作与涂装细则</h1>
            <p>下文包括您参加ITC注册赛事时，模型制作、涂装、底盘安装等方面的细则，以及指代、改造方面的规定 </p>
            <p>若您需要查询编写与提交军表方面的规定，请查看此<a href="/army">网页</a></p>
          </div>      

        </div>

          <div className="SectionWrapper">
            <div className="SectionCopy">
              <h1>基本要求</h1>
              <p>华北公开赛的5轮比赛均使用2000分部队进行比赛，遵循战锤40K官方第8版规则中对战模式（Matched Play）规则，以及Frontline Gaming编写的ITC赛制规则。</p>
              <ul>
                <li>所见即所得：玩家使用的部队中每个模型，均须在恰当的程度上，明确体现其使用的规则。次要的装备，例如手枪、手雷等，可不作要求。</li>
                <li>所有模型应至少进行3色涂装（详情见后）。</li>
                <li>不允许指代。经赛事确认，适当改造的或“用作另一模型”的模型可以用于比赛。</li>
              </ul>
              <p>除上述基本要求外，我们对模型外观无额外要求。制作一支全涂装的部队已经需要相当程度的努力了。</p>
              <p><strong>如果您准备使用一些外观“另类”的模型，您可能需要提前确认。请联系赛事负责人确认是否可以用于比赛，以避免不必要的纠纷。</strong></p>
            </div>
          </div>

          <WechatSection />

          <div className="SectionWrapper">
            <div className="SectionCopy">
              <h1>模型制作</h1>
              <h2>技术宅必读</h2>
              <p>如果您使用了GW官方模型套件，根据说明进行制作，并使用包装盒原配的底盘，您可以略过此部分。但为避免任何可能的规则纠纷，建议不妨一读。</p>
              <p>首先，赛事所用模型应符合所见即所得的要求，不允许指代。</p>
              <ul><h2>什么是指代？</h2>
                <li>模型不能准确体现其规则的，均属指代。例如：</li>
                <li>模型实际大小与其表现的单位存在显著差别，包括底盘尺寸的差别；</li>
                <li>模型的装备，包括武器、护甲等，与军表上选用的装备明显不符；</li>
                <li>使用一款模型表现另一款模型，且未在外观上加以明显区分（例如使用Techpriest Dominus模型作为Techpriest Enginseer使用）</li>
              </ul>
              <p>这些要求是为了使模型对玩家清晰可辨，不产生混淆。我们希望在比赛桌上见到精心制作的部队。</p>
              <p>我们再来看一下何种模型符合要求</p>
              <ul><h2>什么不属指代？</h2>
                <li>模型缺少所见即所得的配件，但官方模型套件里本身就未提供相应数量的配件（例如战术小队Tactical Marines的爆弹手枪）；</li>
                <li>较早生产的模型，当时附带的底盘尺寸与现在销售款的底盘尺寸不同的（例如25mm底盘的星际战士）；</li>
                <li>明确根据规则要求改造的模型（例如装备了复合等离子枪、剑与爆弹手枪的星际战士模型，作为暗天使战团长阿兹瑞尔Azrael使用）；</li>
                <li>经赛事负责人确认的，外观主题化改造后的模型。</li>
              </ul>
              <p>除上述基本要求外，我们对模型外观无额外要求。制作一支全涂装的部队已经需要相当程度的努力了。</p>
            </div>

            <div className="SectionCopy">
              <h1>模型涂装</h1>
              <h2>3色涂装的定义</h2>
              <p>华北公开赛要求参赛选手军表中的模型均应至少使用3种颜色完全涂装。</p>
              <p>由于对涂装最低要求的理解因人而异，在此明确如下：</p>

              <div className="PaintingStandards">
                <div className="PaintImage1"></div>
                <p className="PaintCaption1">模型明显未全部涂装，仅上有1种底色——此类模型不适于参赛</p>
                <div className="PaintImage2"></div>
                <p className="PaintCaption2">模型按上桌标准涂装，使用超过3种颜色，底盘涂有底色——此类模型适于参赛</p>
                <div className="PaintImage3"></div>
                <p className="PaintCaption3">模型各细部全部涂装，且涂装了高光与阴影——十分渴望您使用此类模型参赛</p>
              </div>

              <ul><h2>“一种颜色”的定义</h2>
                <li>所有模型应当使用至少3种的底漆/面漆进行涂装；</li>
                <li>底漆，包括黑、白等色，视作1种颜色；</li>
                <li>阴影/墨水渍洗效果不视为1种颜色；</li>
                <li>边缘的干扫/描边效果视为额外1种颜色；</li>
                <li>同一种色调上的多层渐变效果视作多种颜色，例如使用Waagh Flesh、Warboss Green以及Moot Green三种颜色绘制绿色皮肤；</li>
                <li>罕见情况下，参赛模型可以无视颜色的总数，例如良好手绘的黑白二色主题；</li>
              </ul>
              <p>此外，选手使用的配色主题应与部队组成一致。军表中阵营或分队特性不同的模型，例如不同战团的星际战士，应当在外观上有一定的区分；</p>
              <p>举例，假设你的部队中包括三个星际战士分队，分别选用暗鸦守卫Raven Guard、火蜥蜴Salamanders以及极限战士Ultramarines的战团规则，则相应分队中的模型应当在配色、装饰或徽章等方面中的至少一项上，具有显而易见的区别（译注：但并不要求一定涂成黑、绿、蓝色）。无论使用者本人是否能立即区分外观相似的模型，都应遵循该项要求。</p>
            </div>

            <div className="SectionCopy">
              <h1>底盘安装（必读）</h1>
              <p>上述模型制作与涂装要求以外，华北公开赛参赛选手还需为模型安装适当的底盘。</p>
              <p>底盘整体应涂装至少1种颜色，表面附以适当的材质。我们确信该项工作可以在短期内完成，故没有理由使用无底盘的部队参赛。此外不作其他要求。</p>
              <p>不需底盘的模型，以及自带透明塑料支架的飞行单位模型，不受此规定限制。</p>
              <p>只要底盘的尺寸与形状复合要求，您也可以使用透明有机玻璃或其他非标准材质的底盘。</p>
              <p><a href="https://www.dakkadakka.com/wiki/en/Basing_Guidelines_for_Warhammer_40,000">Dakkadakka</a>提供了目前在售模型底盘尺寸的汇总表。注意，此表非权威规定，较早生产的模型亦可以当时销售的底盘规格参赛（例如25mm底盘的星际战士适于参赛；但上世纪90年代生产的终结者模型配备小底盘这类情况仍存疑，请联系赛事负责人）。</p>
              <p><strong>您的部队已经符合上述模型要求？那么赶快注册BCP app报名吧，我们五月见</strong></p>
            </div>




          </div>

         
          <BCPSection />       

        <Footer />

      </div>
    );
  }
}

export default PaintingDetails;
