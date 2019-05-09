import React from 'react'
import {Card, Grid, TextField, Button, FormControl} from '@material-ui/core'
import {Link} from 'react-router-dom'
import './styles.css'
import logo from './txtlogo-deitado.png'

function click() {
    window.location.href='/admin'
}

function Login(props) {

    return (
        <Grid style={{height: '100vh'}} container direction="row" justify="center" alignItems="center">
            <Card className='card' style={{padding:'30px', paddingBottom:'0', maxWidth:'400px'}}>
                <Grid  container direction="row" justify="center" alignItems="center">
                    <img alt='' style={{width:'60vh', marginTop:'3%'}}  src={logo}/><br/>
                    <TextField id='user' style={{marginLeft: '11%', marginRight: '11%', marginTop: '-20px'}} fullWidth label="CPF ou CNPJ" margin="normal"/>
                    <TextField id='pass' style={{marginLeft: '11%', marginRight: '11%'}} fullWidth label="Senha" type="password" margin="normal"/>
                    <Grid container direction='row' justify='flex-end'>
                        <a href='#' style={{marginRight:'11%'}}>Esqueci minha senha</a>
                    </Grid>
                    <Button onClick={click} type='submit' style={{margin:'11%',marginTop:'10%', marginBottom:'3%', height:'50px', borderRadius:'0', boxShadow:'none', backgroundColor:'#ff3f3f'}} fullWidth variant="contained" color="secondary">
                        Login
                    </Button>
                    <p style={{marginBottom:'8%'}}><span style={{color:'rgb(96,103,112)'}}>Não tem uma conta?</span> <a href='#'>Cadastre-se!</a></p>
                </Grid>
            </Card>
        </Grid>
    )
}

export default Login;