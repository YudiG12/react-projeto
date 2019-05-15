import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    paddingLeft: '20px',
    [theme.breakpoints.only('xs')]: {
      paddingLeft: '20px',
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '270px',
    },
  },
});

class Player extends Component{
  render() {
    const { classes } = this.props
    return (
    <div className={classes.root}>
      EU SOU A PAGINA JOGADOR VEI
    </div>
    )
  }
}

Player.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Player)