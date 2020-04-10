import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import TableView from '../TableView.js';
import * as AdminActions from '../../store/actions/adminActions';

const columns = [
   { label: 'Name', name: 'name' },
   { label: 'Email', name: 'email' },
   { label: 'ID', name: 'id' }
];


class Users extends Component {
    render() {
        return (
            <div className="Users">
                <h1>Users</h1>
                <TableView columns={columns}></TableView>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        admin: state.admin
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        getUsers: (token) => {
            dispatch(AdminActions.getUsers(token))
        }
    }
}

export default connect({
    mapStateToProps,
    matchDispatchToProps
})(Users);

