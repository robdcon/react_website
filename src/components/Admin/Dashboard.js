import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Dashboard extends Component {
    render(){
        return(
            <div>
                 <h1>LOGGED IN</h1>
                 {this.props.auth.token}
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);