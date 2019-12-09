import React, {Component} from 'react'
import StyledPanel from '../styled/StyledPanel'



export default class Panel extends Component
{
    render()
    {
        return(

            <StyledPanel bgColor={this.props.bgColor}>
                <h2>{this.props.heading}</h2>
                 {this.props.children}
            </StyledPanel>
               
           
        )

    }

}