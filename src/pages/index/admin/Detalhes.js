import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core';

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

class Detalhes extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>DETALHESSS</div>
        )
    }
}

Detalhes.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Detalhes)