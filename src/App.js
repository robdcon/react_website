import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// PAGES
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Services from './components/Pages/Services'
import Contact from './components/Pages/Contact'
import Portfolio from './components/Pages/Portfolio'
import ExpandableSidebar from './components/ExpandableSidebar'
import DynamicContactForm from './containers/DynamicContactForm'


const fields = ['name', 'email', 'message']

class App extends Component {
  render() {
    return (

    <Router>
     <PageWrapper> 

        <ExpandableSidebar>
          <DynamicContactForm fields={fields}/>
        </ExpandableSidebar> 

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

        <Route 
          exact={true}
          path='/services'
          component={Services}
        /> 

        <Route 
          exact={true}
          path='/portfolio'
          component={Portfolio}
        /> 

        <Route 
          exact={true}
          path='/contact'
          component={Contact}
        /> 

     </PageWrapper>
    </Router>

    );
  }
}

export default App;
