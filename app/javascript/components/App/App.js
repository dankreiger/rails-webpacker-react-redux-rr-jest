import React, { Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './../Home/Home';
import About from './../About/About';
import Contact from './../Contact/Contact';
import Navigation from '../Navigation/Navigation';

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Fragment>
  );
};

export default App;
