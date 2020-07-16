import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as AdminActions from '../../store/actions/adminActions';
import Paper from '@material-ui/core/Paper';
import {withFormik, Field, Form} from 'formik';
import * as Yup from 'yup';
import {withStyles} from '@material-ui/core/styles';
import {FormikTextField, FormikSelectField} from 'formik-material-fields';
import Button from '@material-ui/core/Button';
import Save from '@material-ui/icons/Save';
import {withRouter} from 'react-router-dom';


const styles = theme => ({
    container: {
        margin: theme.spacing(3),
        padding: theme.spacing(3),
        display:'flex',
        flexDirection: 'row wrap',
        width:'100%'
    },
    formControl: {
        margin: theme.spacing(1)
    },
    leftSide: {
        flex:2,
        height: '100%',
        margin: theme.spacing(3),
        padding: theme.spacing(3)
    },
    rightSide: {
        flex: 1,
        height: '100%',
        margin: theme.spacing(3),
        padding: theme.spacing(3)
    }
});

class AddPost extends Component {

    componentDidUpdate(props, state) {
        console.log("AddPost Props: ", this.props)
        if(this.props.match.params.view === 'add' && this.props.admin.posts.filter(p => p.title === this.props.values.title).length > 0) {
            const post = this.props.admin.posts.filter(p => p.title = this.props.values.title);
            this.props.history.push('/admin/posts/edit/' + post.id)
        }
    }

    componentDidMount(props, state) {
        if (this.props.match.params.view === 'edit' && this.props.match.params.id) {
            this.props.getSinglePost(this.props.match.params.id, this.props.auth.token);
        }
    }

    render(){
        const {classes} = this.props;
        return(
          
                <Form className={classes.container}>
                    <Paper className={classes.leftSide}>
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
                    </Paper>
                    <Paper className={classes.rightSide}>
                        <FormikSelectField
                            name="status"
                            label="Status"
                            options={[
                                {label:'Unpublished', value: false},
                                {label:'Published', value: true}
                            ]}
                            fullWidth
                        />
                        <Button 
                            variant="contained" 
                            color="secondary"
                            onClick={e => {
                                this.props.handleSubmit()
                            }}
                        >SAVE</Button>
                    </Paper>
               </Form>
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
        },
        getSinglePost: (id, token) => {
            dispatch(AdminActions.getSinglePost(id, token))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
    withFormik({
    mapPropsToValues: (props) => ({
        title: props.admin.post.title || '',
        slug: props.admin.post.slug || '',
        created_at: '',
        status: false,
        content: props.admin.post.content || ''
    }), 
    validationSchema: Yup.object().shape({
        title: Yup.string().required('Hey, not so fucking fast!!'),
        slug: Yup.string().required('Not happeneing dickhead!!'),
        content: Yup.string().required('What, nothing to say?!')
    }),
    handleSubmit: (values, {setSubmitting, props}) => {
         console.log('Saving: ', props.addPost)
         values.created_at = new Date();
        //  values = JSON.stringify(values);
         console.log('Values: ', values)
         props.addPost(values, props.auth.token)
    }
})(withStyles(styles)(AddPost))));