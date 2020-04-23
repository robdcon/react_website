import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as AdminActions from '../../store/actions/adminActions';
import Paper from '@material-ui/core/Paper';
import {withFormik, Field, Form} from 'formik';
import * as Yup from 'yup';
import {withStyles} from '@material-ui/core/styles';
import {FormikTextField} from 'formik-material-fields';

const styles = theme => ({
    container: {
        margin: theme.spacing(3)
    },
    formControl: {
        margin: theme.spacing()
    }
});

class AddPost extends Component {

    handleSubmit(e){
        e.preventDefault();
       // this.props.addPost(post, this.props.auth.token);
    }

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <h1>Add Post</h1>
                <Form>
                    <FormikTextField 
                        name="title"
                        label="Title"
                        margin="normal"
                        onChange={(e) => {this.props.setFieldValue('slug', e.target.value.toLowerCase().replace(/ /g, '_'))}}
                        fullWidth
                    />
                    <FormikTextField 
                        name="slug"
                        label="Slug"
                        margin="normal"
                        fullWidth
                    />
                     <FormikTextField 
                        name="content"
                        label="Content"
                        margin="normal"
                        fullWidth
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(
    withFormik({
    mapPropsToValues: () => ({
        title: '',
        slug: '',
        createdAt: '',
        status: false
    }), 
    validationSchema: Yup.object().shape({
        title: Yup.string().required('Hey, not so fucking fast!!'),
        slug: Yup.string().required('Not happeneing dickhead!!'),
        content: Yup.string().required('What, nothing to say?!')
    }),
    handleSubmit: (values, {setSubmitting}) => {

    }
})(withStyles(styles)(AddPost)));