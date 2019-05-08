import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Card, Grid, TextField} from '@material-ui/core'
import { withStyles} from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import './styles.css'
import logo from './txtlogo-deitado.png'


const styles = theme => ({
    cssLabel: {
        '&$cssFocused': {
          color: purple[500],
        },
      }
})

function Login(props) {
    const {classes} = props

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Card className='card'>
                <img alt='' src={logo}/><br/>
                <Grid container direction="row" justify="center" alignItems="center">
                    <TextField InputLabelProps={{
                        classes: {
                            root: classes.cssLabel
                        }
                        }}
                        label="CPF ou CNPJ" margin="normal"/>
                </Grid>
            </Card>
        </Grid>
    )
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);