import React, { Component } from 'react';
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import PageWrapper from './components/PageWrapper'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (

    <Router>
     <PageWrapper> 

         <Route 
          exact={true}
          path='/'
          component={Home}
        /> 

        <Route 
          exact={true}
          path='/about'
          component={About}
        /> 

     </PageWrapper>
    </Router>

    );
  }
}

export default App;
