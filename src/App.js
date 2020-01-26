import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// PAGES
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Contact from './components/Pages/Contact';
import Portfolio from './components/Pages/Portfolio';
import ExpandableSidebar from './components/ExpandableSidebar';
import AdminWrapper from  './components/AdminWrapper';
import Login from  './components/Pages/Login';





class App extends Component {
  render() {
    return (

    <Router>

     <Route
      exact={true}
      path="/admin"
      render={props => (
       <Login/>
     )}

     />

    

        <ExpandableSidebar />
         

         <Route 
          exact={true}
          path='/'
          render={props =>(
            <PageWrapper>
              <Home/>
            </PageWrapper>
          )}
        /> 

        <Route 
          exact={true}
          path='/about'
          render={props =>(
            <PageWrapper>
              <About/>
            </PageWrapper>
          )}
        /> 

        <Route 
          exact={true}
          path='/services'
          render={props =>(
            <PageWrapper>
              <Services/>
            </PageWrapper>
          )}
        /> 

        <Route 
          exact={true}
          path='/portfolio'
          render={props =>(
            <PageWrapper>
              <Portfolio/>
            </PageWrapper>
          )}
        /> 

        <Route 
          exact={true}
          path='/contact'
          render={props =>(
            <PageWrapper>
              <Contact/>
            </PageWrapper>
          )}
        /> 

    </Router>

    );
  }
}

export default App;
