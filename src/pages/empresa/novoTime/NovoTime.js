import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Button, FormControl, InputLabel, Input, CardContent, NativeSelect } from '@material-ui/core'
import { red } from '@material-ui/core/colors';
import CardActions from '@material-ui/core/CardActions';

import championships from '../../../scripts/http/championships'


const styles = theme => ({
  root: {
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
          paddingLeft: '250px',

      },
  },
  table: {
      backgroundColor: '#383c42',
      color: '#96a0a0',
      fontSize: '15px',
      boxShadow: 'none'
  },
  card: {
      backgroundColor: '#383c42',
      padding: theme.spacing.unit * 2,
      margin: theme.spacing.unit * 2,
      textAlign: 'center',
      width: 'inherit',
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
  button: {
      color: '#ff3f3f'

  },
  input: {
      color: '#96a0a0',
      borderBottom: '1px solid #96a0a0',
  },
  dialog: {
      backgroundColor: '#383c42',

  },
  dialogTitle: {
      backgroundColor: '#383c42',
      color: '#ff3f3f',
      paddingLeft: '20%',
      fontSize: '20px'

  },
  fab: {
      position: 'realtive',
      marginLeft: '90%',
      marginTop: '7%',
      backgroundColor: '#ff3f3f',
      '&:hover': {
          backgroundColor: '#8e2323'
      }
  }
});

let dataTime = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let times = [];
let idTime = 0;
function dataNovaPartida(time) {
    idTime += 1;
    return { time };
}
for (let i = 0; dataTime.length > i; i++) {
    times.push(dataNovaPartida('time' + i));
};



class NovoTime extends Component {
  constructor(props){
      super(props)

    this.state = {
        championshipsRender:[],
        championship:'',
        teamName:'',
        userData1: '',
        userData2: '',
        userData3: '',
        userData4: '',
        userData5: '',
        users:[]
        

    }
      this.getAllChampionships()
    }


    handleTeam(text){
      this.setState({teamName: text.target.value})
    }
    handleUserData1(text) {
        this.setState({ userData1: text.target.value })
    }
    handleUserData2(text) {
        this.setState({ userData2: text.target.value })
    }
    handleUserData3(text) {
        this.setState({ userData3: text.target.value })
    }
    handleUserData4(text) {
        this.setState({ userData4: text.target.value })
    }
    handleUserData5(text) {
        this.setState({ userData5: text.target.value })
    }
    
    validateUserData = (data) => {
      let dataPerson = data.replace(/\D+/g, '');
      this.setState({userData:dataPerson});

      if (dataPerson.length > 11) {
        alert('CPF inválido');
        }else{
            var cpf = dataPerson;
            var digitoDigitado = Number(cpf.charAt(9) + cpf.charAt(10));
            var soma1 = 0, soma2 = 0;
            var vlr = 11;

            for (let i = 0; i < 9; i++) {
              soma1 += Number(cpf.charAt(i) * (vlr - 1));
              soma2 += Number(cpf.charAt(i) * vlr);
              vlr--;
            }
            soma1 = (((soma1 * 10) % 11) === 10 ? 0 : ((soma1 * 10) % 11));
            soma2 = (((soma2 + (2 * soma1)) * 10) % 11);

            var digitoGerado = (soma1 * 10) + soma2;
            if (digitoGerado !== digitoDigitado) {
              alert('CPF Invalido!');

            }
          }
        }



        getAllChampionships = () => {
            championships.allChampionships()
            .then(championship => {
              console.log(championship)
                if(typeof(championship) == "object" && championship.length !== 0){

                    let Datachampionship = []

                    for(let i = 0; i < championship.length; i++){
                        Datachampionship.push(this.renderChampionship(championship[i].nmChampionship, championship[i].idChampionship))

                    }

                    this.setState({ championshipsRender: Datachampionship })
                    console.log(this.state.championshipsRender)

                }
            })
        }
        renderChampionship = (nmChampionship,idChampionship) => {
            return { nmChampionship,idChampionship }
        }
        handleChampionship(id) {
            this.setState({ championship: id.target.value   })
        }


        submit = () => {
            
            this.state.users.push(this.state.userData1);
            this.state.users.push(this.state.userData2);
            this.state.users.push(this.state.userData3);
            this.state.users.push(this.state.userData4);
            this.state.users.push(this.state.userData5);
            
            championships.newTeam(this.state.championship, this.state.teamName, this.state.users).then(
                res => console.log(res)
            )
            

          

        }

    render() {

        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={12} style={{ height: '50vh' }} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Card className={classes.card}>
                            <CardContent >
                                <p style={{ color: '#ff3f3f', fontSize: '20px', marginTop: '-10' }}>Novo TIme</p>

                                <FormControl style={{ width: '78%' }} >
                                    <InputLabel  classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                        Campeonato
                                  </InputLabel>
                                    <NativeSelect className={classes.cssUnderline} inputProps={{ className: classes.input }}  onChange = {(value) =>{this.handleChampionship(value)}}  >
                                        <option classes={{ root: classes.cssLabel }} value=""></option>
                                        {this.state.championshipsRender.map(champ => (
                                            <option  classes={{ root: classes.cssLabel }} value={champ.idChampionship}  >{champ.nmChampionship}</option>
                                        ))}
                                    </NativeSelect>
                                </FormControl>

                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                      Nome do Time
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} id="userData" classes={{ underline: classes.cssUnderline }} type="text" value={this.state.teamName}  onChange={(text) => { this.handleTeam(text) }} />
                                </FormControl>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                      CPF do Jogador 1
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} id="userData" classes={{ underline: classes.cssUnderline }} type="text" value={this.state.userData1}  onChange={(text) => { this.handleUserData1(text) }} onBlur={(text) => { this.validateUserData(this.state.userData1) }} />
                                </FormControl>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                      CPF do Jogador 2
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} id="userData" classes={{ underline: classes.cssUnderline }} type="text" value={this.state.userData2} onChange={(text) => { this.handleUserData2(text) }} onBlur={(text) => { this.validateUserData(this.state.userData2) }} />
                                </FormControl>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                      CPF do Jogador 3
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} id="userData" classes={{ underline: classes.cssUnderline }} type="text" value={this.state.userData3} onChange={(text) => { this.handleUserData3(text) }} onBlur={(text) => { this.validateUserData(this.state.userData3) }}/>
                                </FormControl>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                      CPF do Jogador 4
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} id="userData" classes={{ underline: classes.cssUnderline }} type="text" value={this.state.userData4} onChange={(text) => { this.handleUserData4(text) }} onBlur={(text) => { this.validateUserData(this.state.userData4) }}/>
                                </FormControl>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                      CPF do Jogador 5
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} id="userData" classes={{ underline: classes.cssUnderline }} type="text" value={this.state.userData5} onChange={(text) => { this.handleUserData5(text) }} onBlur={(text) => { this.validateUserData(this.state.userData5) }}/>
                                </FormControl>
                                
                                <CardActions>
                                    <Button size="small" id='button' type='submit' style={{ fontWeight: '300', a: 'none', margin: '11%', marginTop: '10%', marginBottom: '3%', height: '50px', borderRadius: '0', boxShadow: 'none', backgroundColor: '#ff3f3f' }} fullWidth variant="contained" color="secondary" onClick={() => this.submit()} >
                                        Enviar
                            </Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

NovoTime.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NovoTime);
