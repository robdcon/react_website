import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import TableView from '../TableView.js';
import * as AdminActions from '../../store/actions/adminActions';
import Fab from '@material-ui/core/Fab';
import Pencil from '@material-ui/icons/Edit';
import {withStyles} from '@material-ui/core/styles';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';

const styles = theme => {
    return {
        fab: {
            position: 'fixed',
            bottom:'50px',
            right: '50px'
        }
    }
}



const columns = [
   { label: 'Title', name: 'title' },
   { label: 'Author', name: 'author' },
   { label: 'ID', name: 'id' }
];

class Posts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
       
      console.log(this.props.admin.posts);
      this.setPosts(this.props.admin.posts);

    }

    setPosts(posts) {
        this.setState({
            posts
        })
    }

    render() {
        const {classes} = this.props;
        console.log(classes);
        
        return (
            <div>
                <h1>Posts</h1>
                <TableView columns={columns} rows={this.state.posts}></TableView>
                <Fab component={RouterLink} to="/admin/posts/add" color="secondary" aria-label="add" className={classes.fab}>
                    <Pencil />
                </Fab>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        admin: state.admin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (token) => {
            dispatch(AdminActions.getPosts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Posts));

