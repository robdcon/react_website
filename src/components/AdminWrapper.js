import React, {Component} from 'react';
import ButtonAppBar from './AppBar';
import Sidebar from './Sidebar';



class AdminWrapper extends Component
{
    render()
    {
        return(
            <div id="admin-wrapper">

                <Sidebar />
                <ButtonAppBar />

              
                {this.props.children}
            </div>
            

        )
    }
}

export default AdminWrapper;