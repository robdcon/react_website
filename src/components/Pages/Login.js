import React, {Component} from 'react';
import {withFormik} from 'formik';
import FormGroup from '../FormGroup';
import * as Yup from 'yup'

const fields = [

    {name:'email', elementName:'input', type:'email', placeholder: 'Your Email'},
    {name:'password', elementName:'input', type:'password', placeholder: 'Your Password'}

]

class Login extends Component
{
    render()
    {
        return(
            <h1>Login</h1>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({

        email:'',
        password:''
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().required('Password is required')
    }),
    handleSubmit:  (values, {setSubmitting}) => {
        console.log('Login Attemt: ', values)
    }


})(Login);