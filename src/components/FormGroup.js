

import React, { Component } from 'react';

class FormGroup extends Component 
{
    render() 
    {
      return (
       
           
     <div className="form-group">
       
        {  
           ( this.props.type === "text" ) ? 
           ( <input 
                className="form-control" 
                id={this.props.name} 
                type="text"
                placeholder={this.props.placeholder}
                required={this.props.required} 
                errorMessage={this.props.error}
                value={this.props.name}
                onChange={(e) => this.props.handleChange(e)}
            />)

            :

           ( <textarea 
                className="form-control" 
                id={this.props.name} 
                type="text"
                placeholder={this.props.placeholder}
                required={this.props.required} 
                errorMessage={this.props.error}
                value={this.props.name}
                onChange={(e) => this.props.handleChange(e)}
            />)
            
        }
        <p className="help-block text-danger"></p>
     </div>

       
          
          
       
        
        
                
       
      )
    }
  }
  
  export default FormGroup;

