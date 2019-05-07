import React, {Component} from 'react'
import {Card, Grid, CardMedia} from '@material-ui/core'
import './styles.css'
import logo from './txtlogo-deitado.png'

class Login extends Component{

    render() {
        return (
            <div style={{height: '100vh'}}>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
                <Card className='card'>
                    <img alt='' src={logo}/>
                </Card>
            </Grid>
            </div>
        )
    }

}

export default Login