

import React, { Component } from 'react';

class FormGroup extends Component 
{
    render() 
    {
      return (
       
            <div className="form-group">
            
                {  
                ( this.props.type === "text" ) ? 
                ( 
                    <input 
                            className="form-control" 
                            id={this.props.name} 
                            type="text"
                            placeholder={this.props.placeholder}
                            required={this.props.required} 
                            name={this.props.name}
                            onChange={this.props.onChange}
                            onBlur={this.props.onBlur}
                        />
                    )
                    :
                    (
                        <textarea 
                            className="form-control" 
                            id={this.props.name} 
                            type="text"
                            placeholder={this.props.placeholder}
                            required={this.props.required} 
                            name={this.props.name}
                            onChange={this.props.onChange}
                            onBlur={this.props.onBlur}
                        />
                    )
                    
                }
                <p className="help-block text-danger">

                    {(this.props.touched && this.props.errors) &&

                        <span>This field is required</span>
                    
                    }
                </p>
            </div>       
      )
    }
  }
  
  export default FormGroup;

