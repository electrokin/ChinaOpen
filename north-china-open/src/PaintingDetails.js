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

<div className="CNEN"><p>CN/EN: 用<a href="https://cn.northchinaopen.com">中文</a>看这个页面 </p></div>      
      
        <a href="/" className="NCOLogo"> </a>

        <div className="SectionWrapper MetalBG">

          <div className="PageHeader">
            <h1>HOBBY DETAILS</h1>
            <h2>Painting and Modeling for the North China Open</h2>
            <p>For full details on modelling, painting and basing your models for an ITC, as well as guidelines on 'counts as', proxies and conversions, read on.</p>
            <p>If you are looking for rules guidelines for planning and submitting your army list, check out <a href="/army">this page</a> instead.</p>
          </div>      

        </div>

          <div className="SectionWrapper">
            <div className="SectionCopy">
              <h1>THE BASICS</h1>
              <h2>What to bring</h2>
              <p>All five rounds of the NCO will be played with 2000 point armies using the Matched Play Recommendations from the Warhammer 40,000 8th Edition Ruleset and Frontline Gaming's ITC rules.</p>
              <ul><h2>SUMMARY:</h2>
                <li>WYSIWYG: Every model in your army must accurately reflect its rules to a reasonable degree. Minor exceptions may be approved for wargear such as grenades and pistols, or suitably clear conversions.</li>
                <li>All models must be painted to at least a 3 colour minimum - more on this later.</li>
                <li>All models must be based, with the exception of models sold without bases or on clear plastic flying stands - more on this later.</li>
                <li>Proxies are not allowed. Appropriate conversions or 'counts-as' models may be allowed pending approval.</li>
              </ul>
              <p>Aside from these basic guidelines, we are pretty lax regarding the appearance of your army. As long as some effort was made to bring a fully painted army, that's all that counts.</p>
              <p><strong>TIP: If you are planning on bringing something particularly 'out there', you will likely know well in advance. Reach out and get it approved to prevent arguments on the day of the tournament.</strong></p>
            </div>
          </div>

          <WechatSection />

          <div className="SectionWrapper">
            <div className="SectionCopy">
              <h1>MODELLING</h1>
              <h2>The nerdy kind</h2>
              <p>If you are planning on bringing ordinary kits, assembled as instructed, on the bases they came with, you can likely skip this part. Nevertheless, we advise that you read on to avoid infringing any rules.</p>
              <p>First of all, every model must be WYSIWYG. What does this mean? Well, it means we don't allow proxies as per ITC rules.</p>
              <ul><h2>What is a proxy?</h2>
                <li>Any model which does not accurately reflect its rules.</li>
                <li>Any model with a significant size discrepancy from the model it is depicting, including an inaccurate base size.</li>
                <li>Any model equiped with wargear, including weapons and armour, which do not reflect those listed on their datasheet.</li>
                <li>Using one model to represent another with no visible effort made to distinguish it - e.g. using a Techpriest Dominus in place of an Enginseer.</li>
              </ul>
              <p>Now, many of you may think this impedes creativity and disallows what many see as an important part of the hobby. On the contrary, we love seeing fully painted armies of beautifully converted custom miniatures, but we also don't like seeing arguments over unclear modelling choices.</p>
              <p>With that in mind, let's take a look at what you <i>can</i> bring.</p>
              <ul><h2>What is not a proxy?</h2>
                <li>Models missing WYSIWYG wargear where an insufficient amount is included in the kit - e.g. holstered bolt pistols on Tactical Marines.</li>
                <li>Older models on the bases they were provided with which do not match the base size they are currently provided with - e.g. Space Marines on 25mm bases.</li>
                <li>Any model which has been converted to clearly reflect the wargear and stats listed on their datasheet - e.g. a Space Marine with combi-plasma, power sword and bolt pistol representing Chapter Master Azrael of the Dark Angels.</li>
                <li>Any models converted to reflect a themed army, pending approval by the Tournament Organiser.</li>
              </ul>
              <p>Aside from these basic guidelines, we are pretty lax regarding the appearance of your army. As long as some effort was made to bring a fully painted army, that's all that counts.</p>
              <p><strong>TIP: If you are planning on bringing something particularly 'out there', you will likely know well in advance. Reach out and get it approved to prevent arguments on the day of the tournament.</strong></p>
            </div>

            <div className="SectionCopy">
              <h1>PAINTING</h1>
              <h2>The three colour minimum, defined</h2>
              <p>The NCO requires that all models in a player's army <i>must</i> be fully painted to at least a three colour minimum, as per ITC suggested rules.</p>
              <p>Minimum painting standards vary between individuals and it is not always obvious to everyone what this means, so to be clear:</p>

              <div className="PaintingStandards">
                <div className="PaintImage1"></div>
                <p className="PaintCaption1">This model is clearly unpainted, with only one base colour. This standard would not be acceptable for this event.</p>
                <div className="PaintImage2"></div>
                <p className="PaintCaption2">This model is painted to a better tabletop standard, with more than 3 flat colours and basic base texture. This standard would be acceptable.</p>
                <div className="PaintImage3"></div>
                <p className="PaintCaption3">This model is fully painted, with shades, highlights, and all details. This standard is desirable for this event.</p>
              </div>

              <ul><h2>What is a colour?</h2>
                <li>All models must be painted with at least three base colours or layers.</li>
                <li>Primer, including black or white, is counted as a colour.</li>
                <li>Shades or ink washes do not count as a colour.</li>
                <li>Edge higlights or drybrushes do count as additional colours.</li>
                <li>Multiple shades or layers of the same 'colour' do counts as additonal colours - e.g. Waagh Flesh, Warboss Green, and Moot Green.</li>
                <li>Exceptions may be made in rare cases regarding the number of colours required - e.g. a well painted monochrome colour-scheme.</li>
              </ul>
              <p>In addition, your paint scheme must accurately reflect the structure of your army. By this we mean that units with different faction or detachment benefits, such as Space Marines with different Chapter Tactics, must be visually distinct in your collection.</p>
              <p>As an example, if your army contains three separate detachments of Space Marines, drawn from the Raven Guard, Salamanders and Ultramarines chapters respectively, they must be easily distinguished at a glance by either by colour scheme, trim or immediately visible markings. This applies regardless of whether you have justfied similar appearances in your personal narrative.</p>
            </div>

            <div className="SectionCopy">
              <h1>BASING</h1>
              <h2>It's not optional</h2>
              <p>In addition to the painting and modelling requirements above, the NCO requires that all players' models are based appropriately.</p>
              <p>This means that at least one colour must be applied to the whole base and that some texture is added. We believe it should be possible to achieve this basic level on an entire army in short duration, so there is no excuse for showing up with an unbased force. Other than that, there are no stringent requirements, so have fun with it.</p>
              <p>Exceptions will be made in the case of models which do not include bases or those which include clear plastic flight stands. Furthermore, if you would prefer to base your entire army on clear acrylic bases or other similar non-standard methods, this is also fine as long as they are the correct size and shape.</p>
              <p>A compilation of accepted base sizes, based on what is currently sold with the models, has been provided by <a href="https://www.dakkadakka.com/wiki/en/Basing_Guidelines_for_Warhammer_40,000">Dakka Dakka</a>. Note that this is not a definitive guide and exceptions may be made for older models using the bases they were provided with - e.g. Space Marines on 25mm bases are still acceptable, though 90s Terminators on small bases are up for debate.</p>
              <p><strong>Met all the hobby requirements? Make sure you are registered to on the BCP Player App to bring your army along in May.</strong></p>
            </div>




          </div>

         
          <BCPSection />       

        <Footer />

      </div>
    );
  }
}

export default PaintingDetails;
