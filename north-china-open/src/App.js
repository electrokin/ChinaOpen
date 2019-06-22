import React, { Component } from 'react';

import './App.css';
import './typography.css';

import Gallery from './Gallery';
import BCPSection from './BCPSection';
import WechatSection from './WechatSection';
import DetailsSection from './DetailsSection';
import Footer from './Footer';

class App extends Component {

  render() {

    return (
      <div>
      
<div className="CNEN"><p>CN/EN: 用<a href="https://cn.northchinaopen.com">中文</a>看这个页面 </p></div>

        <div className="Hero">
          <div className="NCOLogo"></div>

          <div className="ServoSkull" id="skull1"></div>
          <div className="ServoSkull" id="skull2"></div>
          <div className="ServoSkull" id="skull3"></div>
          <div className="ServoSkull" id="skull4"></div>
          <div className="ServoSkull" id="skull5"></div>
          <div className="ServoSkull" id="skull6"></div>
          <div className="ServoSkull" id="skull7"></div>
          <div className="ServoSkull" id="skull8"></div>
          <div className="ServoSkull" id="skull9"></div>

          <div className="CTA">
            <div className="HeroCopyWrapper">
              <div className="HeroCopy">
                <h2 className="date">MAY 18th-19th, TIANJIN</h2>
                <h1>SIGN UP NOW FOR NCO 2019</h1>
                <h2 className="HeroCopyTagline">Mainland China's First Warhammer 40,000 ITC Event</h2>
                <br />
              </div>
            </div>
            
            <form className="SignupForm" name="nco-register" method="POST" data-netlify="true" action="/">
              <h1>PLAYER DETAILS</h1>
              <input type="hidden" name="form-name" value="nco-register" />
              <p><label>First Name:<br /> <input type="text" name="firstname" /></label></p>
              <p><label>Last Name:<br /> <input type="text" name="lastname" /></label></p>
              <p><label>Email Address:<br /> <input type="email" name="email" /></label></p>
              <p><label>Club Name (<i>optional</i>):<br /> <input type="text" name="club" /></label></p>
              <p><button className="greenBtn" type="submit">Reserve Spot</button></p>
            </form>

          </div>
        
          <Gallery />
        </div>

        <WechatSection />

        <DetailsSection />

        <BCPSection />

        <Footer />

      </div>
    );
  }
}

export default App;
