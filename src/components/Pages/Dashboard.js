import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Dashboard extends Component {
    render(){
        return(
            <h1>LOGGED IN</h1>
        )
    }
}

const mapStateToProps = state =>  {
    return {
      auth: state.auth
    }
  
}
const mapDispatchToProps = dispatch =>  {
    return {
  
    }
}

  export default connect(mapStateToProps ,mapDispatchToProps)(Dashboard);