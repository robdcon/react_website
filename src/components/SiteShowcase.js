import React, {Component} from 'react'
import StyledFlexBox from '../styled/StyledFlexBox'
import { Link } from 'react-router-dom'





class SiteShowcase extends Component
{
    render()
    {
        return(

           <div className="SiteShowcase">
               <StyledFlexBox>
                    <div>
                        <StyledFlexBox direction="column">
                            <h2>{this.props.heading}</h2>
                            <p>{this.props.caption}</p>
                            <Link to={this.props.url} />
                            {this.props.children}
                        </StyledFlexBox>
                    </div>
                    <div>
                        <img src={this.props.img} alt="Website Showcase" />
                    </div>
                </StyledFlexBox>
            </div>
             
        )

    }

}

export default SiteShowcase