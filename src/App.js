import React, { Component } from 'react';
import {connect} from 'react-redux';

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
import AdminDashboard from './components/Admin/Dashboard';
import Users from './components/Admin/Users';
import Posts from './components/Admin/Posts';
import Login from  './components/Pages/Login';






class App extends Component {
  render() {
    return (

    <Router>

      <Route
      exact={true}
      path="/admin/users"
      render={props => {
       return( 
        <AdminWrapper>
          <Users />
        </AdminWrapper>)
      }}
      />

      <Route
      exact={true} 
      path="/admin/posts"
      render={props => {
       return( 
        <AdminWrapper>
          <Posts />
        </AdminWrapper>)
      }}
      />

     <Route
      exact={true}
      path="/admin"
      render={props => {
       console.log(`PROPS:`, this.props);
       return( <div>
          {
          this.props.auth.token ? 
           (<AdminWrapper>
             <AdminDashboard />
           </AdminWrapper>) :
           (<Login />)
          }
        </div> )
      }}

     />

    

        <ExpandableSidebar />
         

         <Route 
          exact={true}
          path='/'
          render={props =>(
            <PageWrapper>
              <Home {...props} />
            </PageWrapper>
          )}
        /> 

        <Route 
          exact={true}
          path='/about'
          render={props =>(
            <PageWrapper>
              <About  {...props} />
            </PageWrapper>
          )}
        /> 

        <Route 
          exact={true}
          path='/services'
          render={props =>(
            <PageWrapper>
              <Services  {...props} />
            </PageWrapper>
          )}
        /> 

        <Route 
          exact={true}
          path='/portfolio'
          render={props =>(
            <PageWrapper>
              <Portfolio  {...props} />
            </PageWrapper>
          )}
        /> 

        <Route 
          exact={true}
          path='/contact'
          render={props =>(
            <PageWrapper>
              <Contact  {...props} />
            </PageWrapper>
          )}
        /> 

    </Router>

    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }

}
const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
