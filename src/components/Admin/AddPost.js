import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as AdminActions from '../../store/actions/adminActions';
import Paper from '@material-ui/core/Paper';
import {withFormik, Field, Form} from 'formik';
import * as Yup from 'yup';
import {withStyles} from '@material-ui/core/styles';
import {FormikTextField, FormikSelectField} from 'formik-material-fields';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ImageIcon from '@material-ui/icons/Image';
import {withRouter} from 'react-router-dom';
import API from '../../utils/api';

/*  global $ */ 
const styles = theme => ({
    container: {
        margin: theme.spacing(3),
        padding: theme.spacing(3),
        display:'flex',
        flexDirection: 'row wrap',
        width:'100%'
    },
    Save: {
        marginBotton: theme.spacing(3)
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
        if(this.props.match.params.view === 'add' && this.props.admin.posts.filter(p => p.title === this.props.values.title).length > 0) {
            const post = this.props.admin.posts.filter(p => p.title === this.props.values.title);
            this.props.history.push('/admin/posts/edit/' + post[0].id)
        }
        if (this.props.admin.post.id !== props.admin.post.id) {
            this.props.setValues(this.props.admin.post);
        }
    }

    componentDidMount(props, state) {
        if (this.props.match.params.view === 'edit' && this.props.match.params.id) {
            this.props.getSinglePost(this.props.match.params.id, this.props.auth.token);
        }
    }

    uploadImageFile = (e) => {
        const data = new FormData();
        const file = e.target.files[0];
       
        data.append('file', e.target.files[0], new Date().getTime().toString() + (e.target.files[0].name).replaceAll(' ', '_'));
       
        this.props.uploadImage(data, this.props.auth.token, this.props.admin.post.id, '60074f1d59ce51462836faf9');
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
                        {this.props.admin.post.PostImage ? 
                        <img src={API.createFileUrl(this.props.admin.post.PostImage[0].url, this.props.auth.token)} className="post-image" />
                        : 'no content'}
                        <Button 
                            variant="contained" 
                            color="secondary"
                            onClick={e => {
                                this.props.handleSubmit()
                            }}
                        ><SaveIcon /> SAVE</Button>
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={e => {
                                $('.MyFile').trigger('click');
                            }}
                        ><ImageIcon /> UPLOAD</Button>
                        <input type="file" style={{display: 'none'}} className="MyFile" onChange={this.uploadImageFile} />
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
             dispatch(AdminActions.addPost(post, token));
        },
        getSinglePost: (id, token) => {
            dispatch(AdminActions.getSinglePost(id, token));
        },
        updatePost: (post, token) => {
            dispatch(AdminActions.updatePost(post, token));
        },
        uploadImage: (data, token, postId, userId) => {
            dispatch(AdminActions.uploadImage(data, token, postId, userId))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
    withFormik({
    mapPropsToValues: (props) => ({
        title: props.admin.post.title || '',
        slug: props.admin.post.slug || '',
        created_at: props.admin.post.created_at  || '',
        status: props.admin.post.status || false,
        content: props.admin.post.content || ''
    }), 
    validationSchema: Yup.object().shape({
        title: Yup.string().required('Hey, not so fucking fast!!'),
        slug: Yup.string().required('Not happeneing dickhead!!'),
        content: Yup.string().required('What, nothing to say?!')
    }),
    handleSubmit: (values, {setSubmitting, props}) => {
        values.created_at = new Date();

        if(props.match.params.view === 'edit') {
            const post = {
                ...values,
                id: props.match.params.id
            }
            console.log("Updated: ", post.id);
            props.updatePost(post, props.auth.token)
        } else {
            // console.log("New Post: ", values)
            // console.log(props.auth.token)
            props.addPost(values, props.auth.token);
        }
         
    }
})(withStyles(styles)(AddPost))));