import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Button, FormControl, InputLabel, MenuItem,Select, Input, CardContent } from '@material-ui/core'
import { red } from '@material-ui/core/colors';
import CardActions from '@material-ui/core/CardActions';


const styles = theme => ({
    root: {
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '250px',
        },
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
    input: {
        color: '#96a0a0',
        borderBottom: '1px solid #96a0a0',

    }

});


class NovoTime extends Component {


    state = {
        teamName:'',
        userData1: '',
        userData2: '',
        userData3: '',
        userData4: '',

    };

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
            soma1 = (((soma1 * 10) % 11) == 10 ? 0 : ((soma1 * 10) % 11));
            soma2 = (((soma2 + (2 * soma1)) * 10) % 11);

            var digitoGerado = (soma1 * 10) + soma2;
            if (digitoGerado != digitoDigitado) {
              alert('CPF Invalido!');
            }
          }
        }

    submit = () => {
      const data = {
        'teamName':`${this.state.teamName}`,
        'usersData': `${this.state.userData1},${this.state.userData2},${this.state.userData3},${this.state.userData4}`,
      };
      alert(data.usersData);
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={12} style={{ height: '50vh' }} container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Card className={classes.card}>
                            <CardContent >
                                <p style={{ color: '#ff3f3f', fontSize: '20px', marginTop: '-10' }}>Novo TIme</p>
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
