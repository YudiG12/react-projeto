import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Button, FormControl, InputLabel, Input, CardContent, NativeSelect } from '@material-ui/core'
import { red } from '@material-ui/core/colors';
import CardActions from '@material-ui/core/CardActions';
import Championship from '../../../scripts/http/championships'


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


class Slack extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            campeonatoName:'',
            idGame: -1,
        }
    }

    handleNmCampeonato(text){
        this.setState({ campeonatoName: text.target.value })
        console.log(this.state.campeonatoName);
    }
    handleIdGame(text) {
        this.setState({ idGame: text.target.value })
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

    insertCampeonato = () => {
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={12} style={{ height: '50vh' }} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Card className={classes.card}>
                            <CardContent >
                                <p style={{ color: '#ff3f3f', fontSize: '20px', marginTop: '-10' }}>Configuração do Slack</p>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                      URL Workspace Slack
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} id="userData" classes={{ underline: classes.cssUnderline }} type="text" value={this.state.teamName}  onChange={(value) => { this.handleNmCampeonato(value) }} />
                                </FormControl>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                    Máximo Uso CPU
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} id="userData" classes={{ underline: classes.cssUnderline }} type="text" value={this.state.teamName}  onChange={(value) => { this.handleNmCampeonato(value) }} />
                                </FormControl>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                    Máximo Uso GPU
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} id="userData" classes={{ underline: classes.cssUnderline }} type="text" value={this.state.teamName}  onChange={(value) => { this.handleNmCampeonato(value) }} />
                                </FormControl>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                      Máximo Uso Ram
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} id="userData" classes={{ underline: classes.cssUnderline }} type="text" value={this.state.teamName}  onChange={(value) => { this.handleNmCampeonato(value) }} />
                                </FormControl>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                      Máximo Uso Disco
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} id="userData" classes={{ underline: classes.cssUnderline }} type="text" value={this.state.teamName}  onChange={(value) => { this.handleNmCampeonato(value) }} />
                                </FormControl>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                      Máxima Temperatura CPU
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} id="userData" classes={{ underline: classes.cssUnderline }} type="text" value={this.state.teamName}  onChange={(value) => { this.handleNmCampeonato(value) }} />
                                </FormControl>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                      Máxima Temperatura GPU
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} id="userData" classes={{ underline: classes.cssUnderline }} type="text" value={this.state.teamName}  onChange={(value) => { this.handleNmCampeonato(value) }} />
                                </FormControl>
                                <CardActions>
                                    <Button size="small" id='button' type='submit' style={{ fontWeight: '300', a: 'none', margin: '11%', marginTop: '10%', marginBottom: '3%', height: '50px', borderRadius: '0', boxShadow: 'none', backgroundColor: '#ff3f3f' }} fullWidth variant="contained" color="secondary" onClick={() => this.insertCampeonato()} >
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

Slack.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Slack);
