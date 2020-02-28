import React, {Component} from 'react';
import ButtonAppBar from './AppBar';
import { IconButton } from '@material-ui/core';



class AdminWrapper extends Component
{
    render()
    {
        return(
            <div id="admin-wrapper">

                
                <ButtonAppBar />

              
                {this.props.children}
            </div>
            

        )
    }
}

export default AdminWrapper;