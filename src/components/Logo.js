import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import StyledLogo from '../styled/StyledLogo'




export default class Logo extends Component
{
    render()
    {
        return(

            <StyledLogo>
                <Link to="/">
                {
                    (this.props.image) ?
                    (
                        <img src={this.props.src} alt={this.props.alt} />
                    ) :  <div>{this.props.text}</div>
                }

               
                </Link>
            </StyledLogo>
               
        )

    }

}