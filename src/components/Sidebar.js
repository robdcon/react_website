import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
import { Link } from '@material-ui/core';

const ListItemLink = (props) => (
    <ListItem button component={RouterLink} {...props} />
);


const SideBar = () => {

   
    return(
        <List>
            <ListItemLink to="/admin">
                <ListItemIcon>
                    <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard"></ListItemText>
            </ListItemLink>
        
            <ListItemLink to="/admin/posts">
                <ListItemIcon>
                    <Subject />
                </ListItemIcon>
                <ListItemText primary="Posts"></ListItemText>
            </ListItemLink>
            
            <ListItemLink  to="/admin/users">
                <ListItemIcon>
                    <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="Users"></ListItemText>
            </ListItemLink>
        </List>
    )
}

export default SideBar;

