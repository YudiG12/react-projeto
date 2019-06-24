import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Button, FormControl, InputLabel, Select, Input, CardContent, NativeSelect } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import { red } from '@material-ui/core/colors';
import CardActions from '@material-ui/core/CardActions';
import Championship from '../../scripts/http/championships'
import LoadingCircle from '../LoadingCircle'

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


class CriarPartida extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            idGame: -1,
            championship: "0",
            idTeam1: 0,
            idTeam2: 0,
            idWinner: 0,
            winner: 0,
            makeRequest: false
        }

        let pathname = window.location.pathname;
        let pathnameVet = pathname.split("/");
        this.state.championship = pathnameVet[4];
        Championship.allTeams(this.state.championship)
            .then(teamsDb => {
                console.log(teamsDb)
                this.setState({
                    teams: teamsDb,
                    makeRequest: true
                })
            })
            .catch(err => console.log(err));
    }

    insertPartida = () => {
        console.log(this.state);
        if(this.state.idTeam1 == 0 || this.state.idTeam2 == 0 || this.state.idWinner == 0) return;

        let body = `{
            "date": "",
            "time": "",
            "winner": ${this.state.winner},
            "idChampionship": ${this.state.championship},
            "idsTeams": [${this.state.idTeam1}, ${this.state.idTeam2}]
            }`;

        Championship.insertPartida(body)
            .then(res => {
                window.location.href = "/campeonato-administro/" + this.state.championship
            })
            .catch(err => console(err))
    }

    alreadyChooseTwoTimes = () => {
        return this.state.idTeam1 != 0 && this.state.idTeam2 != 0;
    }

    setTeam1 = (team) => {
        this.setState({ idTeam1: team.target.value });
    }

    setTeam2 = (team) => {
        this.setState({ idTeam2: team.target.value });
    }

    setWinner = (winnerSelect) => {
        let selectedWinner = winnerSelect.target.value;
        if(selectedWinner == 1) {
            this.setState({
                idWinner: this.state.idTeam1,
                winner: selectedWinner
            })
        } else if(selectedWinner == 2) {
            this.setState({
                idWinner: this.state.idTeam2,
                winner: selectedWinner
            })
        }
    }

    insertTeam = () => {
        window.location.href = "/empresa/criar/time/" + this.state.championship;
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={12} style={{ height: '50vh' }} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Card className={classes.card}>
                            <CardContent >
                                <p style={{ color: '#ff3f3f', fontSize: '20px', marginTop: '-10' }}>Nova Partida</p>
                                { this.state.makeRequest === true ? (
                                    <div>
                                        <FormControl style={{ width: '100%' }} className={classes.margin}>
                                            <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                                Time 1
                                            </InputLabel>
                                            <Select className={classes.cssUnderline} value={this.state.idTeam1} onChange={(value) => { this.setTeam1(value) }} >
                                                <MenuItem classes={{ root: classes.cssLabel }} value=""></MenuItem>
                                                {this.state.teams.map(team => (
                                                    <MenuItem 
                                                        inputprops={{ className: classes.input }} 
                                                        value={team.idTeam}>
                                                        {team.nmTeam}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>

                                        <FormControl style={{ width: '100%' }} className={classes.margin}>
                                            <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                                Time 2
                                            </InputLabel>
                                            <Select className={classes.cssUnderline} value={this.state.idTeam2} onChange={(value) => { this.setTeam2(value) }} >
                                                <MenuItem classes={{ root: classes.cssLabel }} value=""></MenuItem>
                                                {this.state.teams.map(team => (
                                                    <MenuItem 
                                                        inputprops={{ className: classes.input }} 
                                                        value={team.idTeam}>
                                                        {team.nmTeam}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        {
                                            this.alreadyChooseTwoTimes() ? (
                                                <FormControl style={{ width: '100%' }}  className={classes.margin}>
                                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                                        Vencedor
                                                    </InputLabel>
                                                    <Select className={classes.cssUnderline} value={this.state.winner} onChange={ (value) => {this.setWinner(value)} }  >
                                                        <MenuItem 
                                                            inputprops={{ className: classes.input }} 
                                                            value={1}>
                                                            {"Team 1"}
                                                        </MenuItem>
                                                        <MenuItem 
                                                            inputprops={{ className: classes.input }} 
                                                            value={2}>
                                                            {"Team 2"}
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            ) : ( <div> </div> )
                                        }

                                    <CardActions>
                                        <Button size="small" id='button' type='submit' style={{ fontWeight: '300', a: 'none', margin: '11%', marginTop: '10%', marginBottom: '3%', height: '50px', borderRadius: '0', boxShadow: 'none', backgroundColor: '#ff3f3f' }} fullWidth variant="contained" color="secondary" onClick={() => this.insertPartida()} >
                                            Enviar
                                        </Button>
                                    </CardActions>
                                    <CardActions>
                                        <Button size="small" id='button' type='submit' style={{ fontWeight: '300', a: 'none', margin: '11%', marginTop: '10%', marginBottom: '3%', height: '50px', borderRadius: '0', boxShadow: 'none', backgroundColor: '#ff3f3f' }} fullWidth variant="contained" color="secondary" onClick={() => this.insertTeam()} >
                                            Criar Time
                                        </Button>
                                    </CardActions>
                                    </div>
                                ) : ( <Grid  container direction="row" justify="center" alignItems="center" style={{width:'100%', height:'100vh'}}><LoadingCircle/> </Grid> )
                                } 
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

CriarPartida.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CriarPartida);
