import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logoText from './txtlogo-deitado.png'
import { Grid } from '@material-ui/core';
import { Person } from '@material-ui/icons'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  bar: {
    boxShawdow: 'none',
  }
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{boxShadow: 'none', verticalAlign:'text-bottom', color:'#96a0a0', backgroundColor:'#383c42'}}>
        <Toolbar style={{paddingLeft:'15px'}}>
          <img style={{width:'230px'}} alt='' src={logoText} />
          <Grid container direction='row' justify='center' alignItems='center'>
            <span style={{verticalAlign:'text-bottom'}}>CAMPEONATO<span style={{verticalAlign:'10%', paddingLeft:'20px', paddingRight:'20px'}}>|</span><span style={{fontWeight: 'lighter', fontSize:'4vh', color: '#ff3f3f'}}>Nome Campeonato</span></span>
          </Grid>
          <Person />
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);