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
      
        <div className="CNEN"><p>CN/EN: Looking for this page in English? Check out the English site <a href="https://www.chinawarhammer.com">here</a>.</p></div>

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
                <h2 className="date">2019/09/14-15th</h2>
                <h1>2019华东战锤登记</h1>
                <h2 className="HeroCopyTagline">中国大陆最大的ITC认证Warhammer 40,000比赛</h2>
                <br />
              </div>
            </div>
            
            <form className="SignupForm" name="nco-register" method="POST" data-netlify="true" action="/">
              <h1>选手信息</h1>
              <input type="hidden" name="form-name" value="nco-register" />
              <p><label>名:<br /> <input type="text" name="firstname" /></label></p>
              <p><label>姓:<br /> <input type="text" name="lastname" /></label></p>
              <p><label>邮箱地址:<br /> <input type="email" name="email" /></label></p>
              <p><label>俱乐部:<br /> <input type="text" name="club" /></label></p>
              <p><button className="greenBtn" type="submit">预订名额</button></p>
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
