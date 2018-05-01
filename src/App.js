import React, { Component } from 'react';
import { TransitionSwitch } from 'react-router-v4-transition'
import { BrowserRouter, Link, Redirect, Route } from 'react-router-dom'
import Transition from './Transition'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App">
            <Link to="/">Home</Link><br />
            <Link to="/some-route">Some route</Link><br />
            <Link to="/other-route">Other route</Link><br />
            
            <Route exact path="/" render={() => (
              <Redirect to="/some-route" />
            )} />

            <TransitionSwitch parallel={false}>
              <Route path="/some-route">
                <Transition>
                  <p>some route</p>
                </Transition>
              </Route>

              <Route path="/other-route">
                <Transition>
                  <p>other route</p>
                </Transition>
              </Route>
            </TransitionSwitch>

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
