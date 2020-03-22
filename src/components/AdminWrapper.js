import React, {Component} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Drawer, ListItem, ListItemIcon, ListItemText, IconButton, Divider, AppBar, Toolbar, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Dashboard from '@material-ui/icons/Dashboard';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Subject from '@material-ui/icons/Subject';
import classNames from 'classnames';
import SideBar from './Sidebar';



const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex'
    },
    toolbar: {
        paddingRight: 24
    },
    drawerPaper: {
        position:'relative',
        whiteSpace: 'no-wrap',
        width:drawerWidth
    },
    drawerPaperClosed: {
        overflowX: 'hidden',
        width: theme.spacing(7),
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    appBar: {
        marginLeft: 0,
        zIndex: 9999999,
         transition: theme.transitions.create('width', {
             easing: theme.transitions.easing.sharp,
             duration: theme.transitions.duration.enteringScreen
         })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        
    },
    appBarSpacer: {
        height: theme.spacing(7)
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar
    },
    mainContent: {
        height:'100vh',
        overflow:'auto',
        padding: theme.spacing(3),
        flexGrow: 1
    }
});

class AdminWrapper extends Component
{
    constructor(props){
        super(props);
        this.state = {
            open:false
        }
    }

    handleOpen = (e) => {
        this.setState({open: true})
    }

    handleClose = (e) => {
        this.setState({open: false})
    }
    
    render()
    {
        const {classes} = this.props;
        return(
            <div id="admin-wrapper" className={classes.root}>

                <AppBar
                  className={classNames('AppBar', classes.appBar, this.state.open && classes.appBarShift)}
                >
                    <Toolbar
                     className={classes.toolbar}
                    >
                        <IconButton onClick={this.handleOpen} className="menuButton">
                            <MenuIcon />
                        </IconButton>
                        <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        >
                            Admin
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer 
                classes={{
                    paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClosed)}}
                variant="permanent"
                open={true}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleClose}>
                            <MenuOpenIcon />
                        </IconButton>
                    </div>
                    <Divider />
                   <SideBar />
                </Drawer>

               <main className={classes.mainContent}>
                   <div className={classes.appBarSpacer} />
                    {this.props.children}
               </main>
                
            </div>
            

        )
    }
}

export default withStyles(styles)(AdminWrapper);