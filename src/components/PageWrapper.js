import React, {Component} from 'react'
import CollapsableNav from './CollapsableNav'
import CollapsableNavMenu from './CollapsableNavMenu'


export default class PageWrapper extends Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            menuOpen:false
        }
    }

    toggleMenu = () =>
    {
        console.log('Fired!')
        this.setState((prevState) =>
        ({
            menuOpen: !prevState.menuOpen
        }))
    }

    render()
    {
        return(

            <div>
                <CollapsableNavMenu open={this.state.menuOpen}></CollapsableNavMenu>
                <CollapsableNav toggleMenu={() => {this.toggleMenu()}} collapsed={this.state.menuOpen}/>
                {this.props.children}
            </div>
        )

    }

}