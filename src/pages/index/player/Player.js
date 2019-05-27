import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import LineChartComponent from './LineChart'

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
    var names = ['Jake', 'Jon', 'Thruster'];
    return (
    <div className={classes.root}>
      isso aqui é na verdade a pagina de máquina
      <LineChartComponent />
      <ul>
        {names.map(function(name, index){
            return <li key={ index }>{name}</li>;
          })}
      </ul>
    </div>
    )
  }
}

Player.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Player)