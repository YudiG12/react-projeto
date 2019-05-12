import React, { Component } from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logoText from './txtlogo-deitado.png'
import { Grid, Hidden, CssBaseline, Typography, Drawer, Divider, List, ListItemIcon, ListItem, ListItemText } from '@material-ui/core';
import { Person, ChevronRight, ChevronLeft, Menu, Inbox, Mail } from '@material-ui/icons'

const drawerWidth = 250;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    color: 'white',
    width: drawerWidth,
    backgroundColor: '#383c42',
  },
});

class NavBar extends Component {

  render() {
    const { classes } = this.props
    return (
        <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar} style={{boxShadow: 'none', verticalAlign:'text-bottom', color:'#96a0a0', backgroundColor:'#383c42'}}>
          <Toolbar style={{paddingLeft:'15px', minHeight:0, padding:'10px'}}>
            <Hidden xsDown>          
              <img style={{width:'230px'}} alt='' src={logoText} />
            </Hidden>
            <Grid container direction='row' justify='center' alignItems='center'>
              <span style={{verticalAlign:'text-bottom'}}>CAMPEONATO<Hidden smDown><span style={{fontSize: '2vh', verticalAlign:'10%', paddingLeft:'20px', paddingRight:'20px'}}>|</span></Hidden><Hidden mdUp><br /></Hidden><span style={{fontWeight: '300', fontSize:'2vh', color: '#ff3f3f', textTransform: 'UPPERCASE'}}>Nome Campeonato</span></span>
            </Grid>
            <span>User</span>
            <Person style={{marginLeft:'5px'}} />
          </Toolbar>
        </AppBar>
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div style={{height:'40px'}} />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Inbox/> : <Mail/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);