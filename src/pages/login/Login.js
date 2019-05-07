import React, {Component} from 'react'
import {Card, Grid, TextField} from '@material-ui/core'
import './styles.css'
import logo from './txtlogo-deitado.png'

class Login extends Component{

    render() {
        return (
            <Grid container direction="row" justify="center" alignItems="center">
                <Card className='card'>
                    <img alt='' src={logo}/><br/>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <TextField style={{cssLabel}} label="CPF ou CNPJ" margin="normal"/>
                    </Grid>
                </Card>
            </Grid>
        )
    }
    // cssLabel: {
    //     '&$cssFocused': {
    //       color: purple[500],
    //     },
    //   },
}

export default Login