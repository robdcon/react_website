import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as AdminActions from '../../store/actions/adminActions';

class AddPost extends Component {
    render(){
        return(
            <div className="AddPost">
                <h1>Add Post</h1>
            </div>
        )
    }
}

export default AddPost;