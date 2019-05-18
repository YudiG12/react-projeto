import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Typography } from '@material-ui/core'
import { Box } from '@material-ui/core/Box'

const styles = theme => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '250px',
    },
  },
  card: {
    backgroundColor: '#383c42',
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    textAlign: 'center',
    width: 'inherit',
  },
});

class Admin extends Component {
    
  render() {
    const { classes } = this.props
    return(
        <div className={classes.root}>
          <Grid container spacing={12}>
            <Grid item xs={6}>
              <Typography align='center' variant='h5' style={{color:'#ff3f3f'}}>Time 1</Typography>
              <Card className={classes.card}>
                oieaesaaaaaaaaaaa
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Typography align='center' variant='h5' style={{color:'rgb(45,112,193'}}>Time 2</Typography>
              <Card className={classes.card}>
                oieaesaaaaaaaaaaa
              </Card>
            </Grid>

            <Link to='/login' className='redLink'>
                Sair
            </Link>
          </Grid>
        </div>
    )
  }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Admin);