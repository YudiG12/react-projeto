import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { NavLink } from 'react-router-dom'
import logoText from './txtlogo-deitado.png'
import { Grid, Hidden, CssBaseline, Drawer, List, ListItem } from '@material-ui/core'
import { Person, StarBorderOutlined } from '@material-ui/icons'

const drawerWidth = 250

const styles = theme => ({
  root: {
    backgroundColor: '#383c42',
    width: '100%',
    color: '#96a0a0',
    "&$selected": {
      color: "#ff3f3f"
    }
  },
  selected: {},
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    color: 'white',
    width: drawerWidth,
    backgroundColor: '#383c42',
  },
});

class NavBar extends Component {
  state = {
    userType: 'admin',
    value: this.props.location.pathname.split('/')[1]
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <CssBaseline />
        <AppBar position='fixed' className={classes.appBar} style={{ boxShadow: 'none', verticalAlign: 'text-bottom', color: '#96a0a0', backgroundColor: '#383c42' }}>
          <Toolbar style={{ paddingLeft: '15px', minHeight: 0, padding: '13px' }}>
            <Hidden xsDown>
              <img style={{ width: '230px' }} alt='' src={logoText} />
            </Hidden>
            <Grid container direction='row' justify='center' alignItems='center'>
              <Hidden smDown><span style={{ verticalAlign: 'text-bottom', fontSize: '2.5vh', }}>CAMPEONATO<span style={{ fontSize: '2vh', verticalAlign: '10%', paddingLeft: '20px', paddingRight: '20px' }}>|</span></span></Hidden><Hidden mdUp><br /></Hidden><span style={{ fontWeight: '300', fontSize: '3vh', color: '#ff3f3f' }}>Nome Campeonato</span>
            </Grid>
            <Hidden xsDown>
              <span>User</span>
              <Person style={{ marginLeft: '5px' }} />
            </Hidden>
          </Toolbar>
        </AppBar>
        <Hidden xsDown>
          <Drawer value={value} onChange={this.handleChange} className={classes.root} variant="permanent" classes={{ paper: classes.drawerPaper }}>
            <div style={{ height: '49px' }} />
            <List value={value} onChange={this.handleChange}>
              {this.state.userType === 'admin' &&
                  <ListItem className='redLink' component={NavLink} to='/campeonato' button key={'Campeonato'}>
                    <StarBorderOutlined style={{ color: '#96a0a0' }} />
                    <span style={{ color: '#96a0a0' }}>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Campeonato</span>
                  </ListItem>
              }
                <ListItem className='redLink' component={NavLink} to='/convites' button key={'Convidar jogadores'}>
                  <StarBorderOutlined style={{ color: '#96a0a0' }} />
                  <span style={{ color: '#96a0a0' }}>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Convidar jogadores</span>
                </ListItem>
                <ListItem className='redLink' component={NavLink} to='/player' button key={'Minhas estatísticas'}>
                  <StarBorderOutlined style={{ color: '#96a0a0' }} />
                  <span style={{ color: '#96a0a0' }}>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Jogadores</span>
                </ListItem>
                
                <ListItem className='redLink' component={NavLink} to='/streams' button key={'Streams'}>
                  <StarBorderOutlined style={{ color: '#96a0a0' }} />
                  <span style={{ color: '#96a0a0' }}>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Streams</span>
                </ListItem>

                <ListItem className='redLink' component={NavLink} to='/campeonatos' button key={'Campeonatos'}>
                  <StarBorderOutlined style={{ color: '#96a0a0' }} />
                  <span style={{ color: '#96a0a0' }}>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Campeonatos</span>
                </ListItem>

                <ListItem className='redLink' component={NavLink} to='/convite' button key={'Convite'}>
                  <StarBorderOutlined style={{ color: '#96a0a0' }} />
                  <span style={{ color: '#96a0a0' }}>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Convite</span>
                </ListItem>
            </List>
          </Drawer>
        </Hidden>
        <div style={{ height: '75.05px' }} />
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);