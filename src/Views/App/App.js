import React from 'react';
import { BrowserRouter as Router, NavLink, Link, Route, Switch } from 'react-router-dom';

import {Navbar} from '../../Components/Navbar/Navbar';
import {Footer} from '../../Components/Footer/Footer';
import {Home} from '../Home/Home';
import {VanPage} from '../VanPage/VanPage'




function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/VanPage" component={VanPage}/>
        </Switch>
        <Footer/>



      </div>
    </Router>
  );
}

export default App;
