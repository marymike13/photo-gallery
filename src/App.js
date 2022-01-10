import './App.css';
import Layout from './components/Layout/Layout';
import './components/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import React, {Component} from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { website: "JMJ Creations", response: [] };
  }

  render() {
  

    return (
    <Router>
    <div>
    <Header website={this.state.website} />
    <div className="main">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/">
            <Layout />
    
          </Route>
         
        </Switch>
        </div>
        <Footer website={this.state.website} />
      </div>
    </Router>
  );
}
}

export default App;
