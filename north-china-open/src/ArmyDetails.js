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
      
<div className="CNEN"><p>CN/EN: 用<a href="https://cn.northchinaopen.com">中文</a>看这个页面 </p></div>
      
        <a href="/" className="NCOLogo"> </a>

        <div className="SectionWrapper MetalBG">
          <div className="PageHeader">
            <h1>PLANNING YOUR ARMY</h1>
            <h2>How to build an army list for the East China Open</h2>
            <p>For full details on how to create a valid army list for ITC events and making use of the correct publications and rulesets, read on.</p>
            <p>If you are looking for hobby guidelines for building and painting your army, check out <a href="/painting">this page</a> instead.</p>
          </div>      
        </div>

        <div className="SectionWrapper">
          <div className="SectionCopy">
            <h1>THE BASICS</h1>
            <h2>What to bring</h2>
            <p>All five rounds of the ECO will be played with 2000 point armies using the Matched Play Recommendations from the Warhammer 40,000 8th Edition Ruleset and Frontline Gaming's ITC rules.</p>
            <ul><h2>SUMMARY:</h2>
              <li>A total points limit of 2000, and not a single point over!</li>
              <li>No more than 3 Detachments</li>
            </ul>
            <p>All units in each detachment of your Battle-Forged army must share at least one Faction Keyword, excluding those in the table below:</p>

            <div className="FactionTable">
              <p>Imperium</p>
              <p>Aeldari</p>
              <p>Ynnari</p>
              <p>Chaos</p>
              <p>Tyranids</p>
              <p>Unaligned</p>
            </div>

            <p>This does not apply to Fortification Network detachments.</p>
            <p>Note that this has no effect on your Army Faction. This means, for example, that your army may consist of an Astra Militarum detachment and an Imperial Knights detachment sharing the Imperium faction keyword.</p>
            <p>Please keep in mind that each Tournament Round will be limited to <strong>3 HOURS</strong> and judges will ensure that games progress acceptably.</p>
            <p>Be courteous and bring an army you can reasonably expect to finish on time with. Nobody wants to run out of time while you move 300 Grots!</p>
            <p>Remember to submit your army list on the BCP Player App by Sep 1st for approval.</p>
            <p><strong>TIP: Check out the <a href="/details">ITC Simplified Missions</a> first and plan a force with your mission objectives in mind.</strong></p>
            <p>Make sure your list clearly states all custom details such as your Warlord and his Trait, all wargear options, detachment benefits, faction keywords and command points awarded, and any other decisions made before the battle begins.</p>
            <p>If any of these rules are unclear now or on the day of the event, reach out for support from our bi-lingual judges and organisers.</p>
            <p><strong>Completed army lists should be submitted via the BCP Player App. There is no particular required format for this, though exporting your list from Battlescribe is never a bad way to go. Whatever format you decide, make sure your list is accurate and use the most up to date profiles and points costs.</strong></p> 
          </div>
        </div>

        <TranslationSection />

        <div className="SectionWrapper">
          <div className="SectionCopy">
            <h1>VALID RULESETS</h1>
            <h2>Which publications are in use for this event?</h2>
            <p>This event supports all current Warhammer 40,000 8th Edition army lists from both Games Workshop and Forge World's product lines.</p>
            <ul><h2>This includes:</h2>
              <li>All currently available Warhammer 40,000 Codex armies and units made publicly available since the release of 8th Edition.</li>
              <li>All existing Index entries for units which have not yet been updated with Codexes, or have options no longer available in their Codex versions.
              <br />NOTE: If a Codex or otherwise superseding update for a unit is avaiable, with no deprecated wargear options, it must be used.</li>
              <li>Chapter Approved 2018 will be in effect, including all subsequent alterations to the points costs of various units.</li>
              <li>All official Games Workshop publications with rules stated for Matched Play, including Campaign books such a Vigilus Defiant.</li>
              <li>Matched Play rules from White Dwarf and Warhammer Community.</li>
              <li>All official Erratat and FAQ documents from Games Workshop and Forgeworld.</li>
            </ul>
            <p>The cut off point for new approved publications is one month before the event, so if Codex: Squats comes out on the 14th of August, we sadly cannot allow it.</p>
            <p>It should be noted that only Warhammer 40,000 units may be used - no Horus Heresy or armies from other systems are included.</p>
          </div>
        </div>

        <BCPSection />       

        <Footer />

      </div>
    );
  }
}

export default ArmyDetails;
