import React from 'react'
import {Card, Grid, TextField, Button, FormControl, withStyles, InputLabel, Input} from '@material-ui/core'
import {Link, NavLink} from 'react-router-dom'
import './styles.css'
import logo from './txtlogo-deitado.png'
import PropTypes from 'prop-types';
import { red, purple } from '@material-ui/core/colors';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing.unit,
    },
    cssLabel: {
      '&$cssFocused': {
        color: red[500],
      },
    },
    cssFocused: {},
    cssUnderline: {
      '&:after': {
        borderBottomColor: red[500],
      },
    },
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: red[500],
      },
    },
    notchedOutline: {},
    bootstrapRoot: {
      'label + &': {
        marginTop: theme.spacing.unit * 3,
      },
    },
  });

function click() {
    window.location.href='/admin'
}

function Login(props) {
    const { classes } = props;
    return (
        <Grid style={{height: '100vh'}} container direction="row" justify="center" alignItems="center">
            <Card className='card' style={{padding:'30px', paddingBottom:'0', maxWidth:'400px'}}>
                <Grid  container direction="row" justify="center" alignItems="center">
                    <img alt='' style={{width:'100%', margin:'3%'}}  src={logo}/><br/>
                    <FormControl style={{marginLeft: '11%', marginRight: '11%', marginTop: '-20px'}} fullWidth className={classes.margin}>
                        <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                        CPF ou CNPJ
                        </InputLabel>
                        <Input id="user" classes={{ underline: classes.cssUnderline }} />
                    </FormControl>
                    <FormControl style={{marginLeft: '11%', marginRight: '11%', marginTop: 'px'}} fullWidth className={classes.margin}>
                        <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                        Senha
                        </InputLabel>
                        <Input type="password" id="pass" classes={{ underline: classes.cssUnderline }} />
                    </FormControl>
                    <Grid container direction='row' justify='flex-end'>
                        <a href='#' style={{marginRight:'11%'}}>Esqueci minha senha</a>
                    </Grid>
                    <Button id='button' component={Link} to='/admin' type='submit' style={{fontWeight: '300', a: 'none', margin:'11%',marginTop:'10%', marginBottom:'3%', height:'50px', borderRadius:'0', boxShadow:'none', backgroundColor:'#ff3f3f'}} fullWidth variant="contained" color="secondary">
                        Login
                    </Button>
                    <p style={{marginBottom:'8%'}}><span style={{color:'rgb(96,103,112)'}}>Não tem uma conta?</span> <a href='#'>Cadastre-se!</a></p>
                </Grid>
            </Card>
        </Grid>
    )
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login);