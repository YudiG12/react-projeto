import React from 'react'
import { Component } from 'react'
import { Card, Grid, Button, FormControl, withStyles, InputLabel, Input } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './styles.css'
import logo from './txtlogo-deitado.png'
import PropTypes from 'prop-types';
import { red } from '@material-ui/core/colors';
import { error, isError } from 'util';
import { sha512 } from 'react-native-sha512';

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
  }
});
class Singup extends Component {
  constructor() {
    super()
    this.state = {
      userName:'',
      userData:'',
      password:'',
      passwordConfirm:''
    }
  }
  handleUsername(text) {
    this.setState({ userName: text.target.value })
  }
  handleUserData(text) {
    this.setState({ userData: text.target.value })
   
  }
  handlePassword(text) {
    this.setState({ password: text.target.value })
  }
  handlePasswordConfirm(text) {
    this.setState({ passwordConfirm: text.target.value })
  }
  validateUserData = (data) => {
   let dataPerson = data.replace(/\D+/g, '');
   
    if(dataPerson.length==11){
      var cpf= dataPerson;
      var digitoDigitado = eval(cpf.charAt(9)+cpf.charAt(10));
      var soma1=0, soma2=0;
      var vlr =11;

      for(let i=0;i<9;i++){
              soma1+=eval(cpf.charAt(i)*(vlr-1));
              soma2+=eval(cpf.charAt(i)*vlr);
              vlr--;
      }       
      soma1 = (((soma1*10)%11)==10 ? 0:((soma1*10)%11));
      soma2=(((soma2+(2*soma1))*10)%11);

      var digitoGerado=(soma1*10)+soma2;
      if(digitoGerado!=digitoDigitado){     
              alert('CPF Invalido!');                    
      
      }
    }if(dataPerson.length==14){
      var cnpj = dataPerson;
      var valida = new Array(6,5,4,3,2,9,8,7,6,5,4,3,2);
      var dig1= new Number;
      var dig2= new Number;

      
      cnpj = cnpj.toString();
      var digito = new Number(eval(cnpj.charAt(12)+cnpj.charAt(13)));

      for(let i = 0; i<valida.length; i++){
              dig1 += (i>0? (cnpj.charAt(i-1)*valida[i]):0);  
              dig2 += cnpj.charAt(i)*valida[i];       
      }
      dig1 = (((dig1%11)<2)? 0:(11-(dig1%11)));
      dig2 = (((dig2%11)<2)? 0:(11-(dig2%11)));

      if(((dig1*10)+dig2) != digito){ 
              alert('CNPJ Invalido!');
      }
    }
  }
  

  singUp=()=>{
    alert(this.state.password+this.state.passwordConfirm+this.state.userData+this.state.userName);
     
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid style={{ height: '100vh' }} container direction="row" justify="center" alignItems="center">
        <Card className={classes.cardResponsive} style={{ paddingBottom: '0', maxWidth: '400px' }}>
          <Grid container direction="row" justify="center" alignItems="center">
            <img alt='' style={{ width: '100%', margin: '3%' }} src={logo} /><br />

            <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: '-20px' }} fullWidth className={classes.margin}>
              <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                Username
                        </InputLabel>
              <Input inputProps={{ className: classes.input }} id="userName" classes={{ underline: classes.cssUnderline }}  onChange={(text)=>{this.handleUsername(text)}}/>
            </FormControl>

            <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
              <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                CPF ou CNPJ
              </InputLabel>
              <Input inputProps={{ className: classes.input }} id="userData" classes={{ underline: classes.cssUnderline }} type="text"  onBlur={this.validateUserData(this.state.userData)} onBlur={(text)=>{this.handleUserData(text)}}/>
            </FormControl>

            <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
              <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                Senha
              </InputLabel>
              <Input inputProps={{ className: classes.input }} type="password" id="pass" classes={{ underline: classes.cssUnderline }} onChange={(text)=>{this.handlePassword(text)}}  />
            </FormControl>

            <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
              <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                Confirme sua Senha
              </InputLabel>
              <Input inputProps={{ className: classes.input }} type="password" id="passwordCheck" classes={{ underline: classes.cssUnderline }} onChange={(text)=>{this.handleUserData(text)}}/>
            </FormControl>

            <FormControl>
              <Button id='button' component={Link} onClick={() => this.singUp()} type='submit' style={{ fontWeight: '300', a: 'none', margin: '11%', marginTop: '10%', marginBottom: '5%', height: '50px', borderRadius: '0', boxShadow: 'none', backgroundColor: '#ff3f3f' }} fullWidth variant="contained" color="secondary">
                Inscreva-se 
              </Button>
            </FormControl>
          </Grid>
        </Card>
      </Grid>
    )
  }
}
Singup.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Singup);