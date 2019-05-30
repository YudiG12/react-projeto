import React, {Component} from 'react'
import {Card, Grid, Button, FormControl, withStyles, InputLabel, Input} from '@material-ui/core'
import {Link} from 'react-router-dom'
import './styles.css'
import logo from './txtlogo-deitado.png'
import PropTypes from 'prop-types';
import { red } from '@material-ui/core/colors';
import data from '../../scripts/http/data'
import login from '../../scripts/http/login'

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    cardResponsive: {
        backgroundColor: '#383c42',
        padding: '30px',
        [theme.breakpoints.only('xs')]: {
        backgroundColor: '#2d3035',
        boxShadow: 'none',
        padding: '0',
      },
    },
    margin: {
      margin: theme.spacing.unit,
    },
    cssLabel: {
      color: '#96a0a0',
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
    input: {
      color: '#96a0a0',
      borderBottom: '1px solid #96a0a0',
    },
  });

class Login extends Component {

    constructor(props) {
      super(props);
      this.state = {
        persondata: "",
        password: "",
        makeRequest: false
      }
      data.isLogOn(() => {
        window.location.href = "/";
      }, () => {
        this.setState({ 
          makeRequest: true
        })
      })
      .catch(err => console.log(err));
    }

    setPersonData(newPersonData) {
        this.setState({ 
          persondata: newPersonData.target.value 
         })
    }

    setPassword(newPassword) {
      this.setState({ 
        password: newPassword.target.value 
      })
    }

    isTextEmpty(text) {
      return text == "";
    }

    onSubmit = () => {
      if(this.isTextEmpty(this.state.persondata) || this.isTextEmpty(this.state.password)) 
        return;

      const data = {
        'persondata': `${this.state.persondata}`,
        'password': `${this.state.password}`
        }
      login.login(JSON.stringify(data))
        .then(res => {
          if(res == true) 
            window.location.href = "/"
        })
        .catch(err => console.log(err))
    }

    render() {
      const { classes } = this.props
      return (
          <Grid style={{height: '100vh'}} container direction="row" justify="center" alignItems="center">
              { this.state.makeRequest == true ? (
              <Card className={classes.cardResponsive} style={{ paddingBottom:'0', maxWidth:'400px'}}>
                  <Grid  container direction="row" justify="center" alignItems="center">
                      <img alt='' style={{width:'100%', margin:'3%'}}  src={logo}/><br/>
                        <FormControl style={{marginLeft: '11%', marginRight: '11%', marginTop: '-20px'}} fullWidth className={classes.margin}>
                            <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                            CPF ou CNPJ
                            </InputLabel>
                            <Input inputProps={{className: classes.input}} id="user" classes={{ underline: classes.cssUnderline }} onChange={(text) => { this.setPersonData(text) }} />
                        </FormControl>
                        <FormControl style={{marginLeft: '11%', marginRight: '11%', marginTop: 'px'}} fullWidth className={classes.margin}>
                            <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                            Senha
                            </InputLabel>
                            <Input inputProps={{className: classes.input}} type="password" id="pass" classes={{ underline: classes.cssUnderline }} onChange={(text) => { this.setPassword(text) }} />
                        </FormControl>
                        <Grid container direction='row' justify='flex-end'>
                            <Link onTouchStartCapture='#' className='redLink' style={{marginRight:'11%'}}>Esqueci minha senha</Link>
                        </Grid>
                        <Button id='button' component={Link} onClick={() => {this.onSubmit()}} type='submit' style={{fontWeight: '300', a: 'none', margin:'11%',marginTop:'10%', marginBottom:'3%', height:'50px', borderRadius:'0', boxShadow:'none', backgroundColor:'#ff3f3f'}} fullWidth variant="contained" color="secondary">
                            Login
                        </Button>
                      <p style={{marginBottom:'8%'}}><span style={{color:'rgb(96,103,112)'}}>Não tem uma conta?</span> <Link to='/signup' className='redLink'>Cadastre-se!</Link></p>
                  </Grid>
              </Card>
              ) : ( <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Gray_circles_rotate.gif"/> )
            }

          </Grid>
      )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login);