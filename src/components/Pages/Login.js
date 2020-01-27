import React, {Component} from 'react';
import styled from 'styled-components';
import {withFormik} from 'formik';
import {connect} from 'react-redux';
import FormGroup from '../FormGroup';
import * as Yup from 'yup';
import * as AuthActions from '../../store/actions/authActions';
import StyledFlexBox from '../../styled/FlexContainers'


const StyledLoginForm = styled.form`

    width: 60%;
    height:100%;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    justify-content:space-around;   

`
const fields = [

    {name:'email', elementName:'input', type:'email', placeholder: 'Your Email'},
    {name:'password', elementName:'input', type:'password', placeholder: 'Your Password'}

]

class Login extends Component
{
    render()
    {
        return(
            <div id="login-page">
                <div className="container">
                    <div className="login-form">
                    <div className="row"><h1>LOGIN</h1></div>
                        <div className="row">
                            <StyledLoginForm onSubmit={this.props.handleSubmit}>
                            {
                                fields.map((field, i) => {

                                    return ( 
                                    <div className="col-md-12" key={i}>
                                        <FormGroup 
                                            
                                            {...field}
                                            name={field.name}
                                            elementName={field.elementName}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            value={this.props.values[field.name]}
                                            onChange={this.props.handleChange}
                                            onBlur={this.props.handleBlur}
                                            touched={(this.props.touched[field.name])}
                                            errors={this.props.errors[field.name]}
                                        />
                                    </div>)
                                })
                            }
                            <button className="btn btn-primary">Login</button>
                            </StyledLoginForm>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>
{
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        login: (email, pass) => 
        {
            dispatch(AuthActions.login(email, pass))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFormik({
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


})(Login));