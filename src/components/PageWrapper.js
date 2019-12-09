import React, {Component} from 'react'
import CollapsableNav from './CollapsableNav'


export default class PageWrapper extends Component
{
    render()
    {
        return(

            <div>
               <CollapsableNav />
                {this.props.children}
            </div>
        )

    }

}