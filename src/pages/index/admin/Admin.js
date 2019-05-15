import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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

class Login extends Component {
    
    render() {
        const { classes } = this.props
        return(
            <div className={classes.root}>
                Eu sou a página de administrador
                <Link to='/login' className='redLink'>
                    Sair
                </Link>
            </div>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Login);