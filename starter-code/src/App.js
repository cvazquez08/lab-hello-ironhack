import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="darkBackground">
          <div className="nav">
            <img className="leftMenu" src="/images/ironhack-logo.svg" />
            <img className="rightMenu" src="/images/menu-top.svg" />
          </div>
        
        <div className='header'>
          <div>
            <h1 className="headerLargeText">Say hello to</h1>
            <h1 className="headerLargeText"> ReactJS</h1>
            <p className="headerSmallText">You will learn a Frontend</p>
            <p className="headerSmallText">framework from scratch, to</p>
            <p className="headerSmallText">become a Ninja Developer</p>
          </div>

          <div className="button">
            <button className="buttonStyle">Awesome!</button>
          </div>
          </div>
        </div>

        <div className="icons">
          <div>
            <div>
              <img src="/images/icon1.png" />
            </div>
            <div>
              <h1 className='iconHeader'>Declarative</h1>
              <p className='iconSmallText'>React makes it</p>
              <p className='iconSmallText'>painless to create</p>
              <p className='iconSmallText'>interactive UIs</p>
            </div>
          </div>

          <div>
            <div>
              <img src="/images/icon2.png" />
            </div>
            <div>
              <h1 className='iconHeader'>Components</h1>
              <p className='iconSmallText'>Build encapsulated</p>
              <p className='iconSmallText'>components that</p>
              <p className='iconSmallText'>manage their state</p>
            </div>
          </div>

          <div>
            <div>
              <img src="/images/icon3.png" />
            </div>
            <div>
              <h1 className='iconHeader'>Single-Way</h1>
              <p className='iconSmallText'>A set of immutable</p>
              <p className='iconSmallText'>values are passed to</p>
              <p className='iconSmallText'>the component's.</p>
            </div>
          </div>

          <div>
            <div>
              <img src="/images/icon4.png" />
            </div>
            <div>
              <h1 className='iconHeader'>JSX</h1>
              <p className='iconSmallText'>Statically-typed,</p>
              <p className='iconSmallText'>designed to run on</p>
              <p className='iconSmallText'>modern browsers.</p>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
