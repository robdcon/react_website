import React, {Component} from 'react';

class AdminWrapper extends Component
{
    render()
    {
        return(
            <div id="admin-wrapper">
                <h1>AdminWrapper</h1>
                {this.props.children}
            </div>
            

        )
    }
}

export default AdminWrapper;