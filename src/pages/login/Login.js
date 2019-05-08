import React from 'react'
import {Card, Grid, TextField, Button} from '@material-ui/core'
import './styles.css'
import logo from './txtlogo-deitado.png'

function Login(props) {

    return (
        <Grid style={{height: '100vh'}} container direction="row" justify="center" alignItems="center">
            <Card className='card' style={{maxWidth:'30%'}}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <img alt='' style={{width:'60vh', marginTop:'3%'}}  src={logo}/><br/>
                    <TextField style={{marginLeft: '11%', marginRight: '11%', marginTop: '0'}} fullWidth label="CPF ou CNPJ" margin="normal"/>
                    <TextField style={{marginLeft: '11%', marginRight: '11%'}} fullWidth label="Senha" type="password" margin="normal"/>
                    <Button style={{margin:'11%'}} fullWidth variant="contained" color="secondary">
                        Secondary
                    </Button>
                </Grid>
            </Card>
        </Grid>
    )
}

export default Login;