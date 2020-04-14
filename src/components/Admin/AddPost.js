import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as AdminActions from '../../store/actions/adminActions';
import FormGroup from '../FormGroup';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import {withFormik, Field, Form} from 'formik';
import * as Yup from 'yup';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        margin: theme.spacing.unit * 3
    },
    formControl: {
        margin: theme.spacing.unit
    }
});

const post = {
    "title": "new post 02",
    "slug": "test post 02",
    "content": "this is another brand new post!!!",
    "created_at": "2020-04-11T09:58:25.733Z",
    "author": "string",
    "userId": "string",
    "profileId": "string",
    "postId": "string",
    "categoryId": "string"
}
class AddPost extends Component {

    handleSubmit(e){
        e.preventDefault();
        this.props.addPost(post, this.props.auth.token);
    }

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <h1>Add Post</h1>
                <Form>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="title">Title</InputLabel>
                        <Input 
                            id="title"
                            component={Field}
                        />
                    </FormControl>
               </Form>
            </div>
        )
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
        addPost: (post, token) => {
        dispatch(AdminActions.addPost(post, token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFormik({
    mapPropsToValues: () => ({
        title: '',
        slug: '',
        createdAt: '',
        status: false
    }), 
    validationScheme: Yup.object().shape({

    }),
    handleSubmit: (values, {setSubmitting}) => {

    }
})((withStyles(styles)(AddPost))));