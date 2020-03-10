import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import ListSubheader from '@material-ui/core/ListSubheader';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Dashboard from '@material-ui/icons/Dashboard';
import Subject from '@material-ui/icons/Subject';

const SideBar = () => {
    return(
        <List>
            <ListItem button>
                 <ListItemIcon>
                     <Dashboard />
                  </ListItemIcon>
                 <ListItemText primary="Dashboard"></ListItemText>
            </ListItem>
             <ListItem button>
                 <ListItemIcon>
                     <Subject />
                  </ListItemIcon>
                 <ListItemText primary="Posts"></ListItemText>
            </ListItem>
             <ListItem button>
                 <ListItemIcon>
                     <AccountCircle />
                  </ListItemIcon>
                 <ListItemText primary="Users"></ListItemText>
            </ListItem>
        </List>
    )
}

export default SideBar;

