import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {NavLink} from 'react-router-dom'
import logoText from './txtlogo-deitado.png'
import { Grid, Hidden, CssBaseline, Drawer, List, ListItemIcon, ListItem, ListItemText } from '@material-ui/core'
import { Person, StarBorderOutlined } from '@material-ui/icons'

const drawerWidth = 250

const styles = theme => ({
  root: {
    display: 'flex'
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
          <Toolbar style={{paddingLeft:'15px', minHeight:0, padding:'13px'}}>
            <Hidden xsDown>          
              <img style={{width:'230px'}} alt='' src={logoText} />
            </Hidden>
            <Grid container direction='row' justify='center' alignItems='center'>
              <span style={{verticalAlign:'text-bottom', fontSize:'2.5vh',}}>CAMPEONATO<Hidden smDown><span style={{fontSize: '2vh', verticalAlign:'10%', paddingLeft:'20px', paddingRight:'20px'}}>|</span></Hidden><Hidden mdUp><br /></Hidden><span style={{fontWeight: '300', fontSize:'3vh', color: '#ff3f3f'}}>Nome Campeonato</span></span>
            </Grid>
            <span>User</span>
            <Person style={{marginLeft:'5px'}} />
          </Toolbar>
        </AppBar>
        <Hidden xsDown>
          <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper }}>
            <div style={{height:'40px'}} />
            <List>
              <NavLink to='/admin' activeStyle={{fontWeight:'bold'}}>
                <ListItem button key={'Campeonatos'}>
                  <StarBorderOutlined activeStyle={{color:'#ff3f3f'}} style={{color:'#96a0a0'}}/>
                  <span style={{color:'#96a0a0'}}>Campeonatos</span>
                </ListItem>
              </NavLink>
              <NavLink to='/player' activeStyle={{fontWeight:'bold'}}>
                <ListItem button key={'Jogadores'}>
                  <StarBorderOutlined activeStyle={{color:'#ff3f3f'}} style={{color:'#96a0a0'}}/>
                  <span style={{color:'#96a0a0'}}>Jogadores</span>
                </ListItem>
              </NavLink>
            </List>
          </Drawer>
        </Hidden>
        <div style={{height:'48.05px'}} />
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);