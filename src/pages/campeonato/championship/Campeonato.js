import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, Button, CardContent, Icon, FormControl, Input, InputLabel, NativeSelect } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import ChevronRight from '@material-ui/icons/ChevronRight';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import championships from '../../../scripts/http/championships'
import Loading from '../../Loading';

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




class Campeonato extends Component {

    state = {
        userData: '',
        open1: '',
        open2: '',
    };
    handleUserData(text) {
        this.setState({ userData: text.target.value })
    }

    handleTeam1(team) {
        this.setState({ userData: team.target.value })
    }

    handleTeam2(team) {
        this.setState({ userData: team.target.value })
    }

    validateUserData = (data) => {
        let dataPerson = data.replace(/\D+/g, '');
        this.setState({ userData: dataPerson });

        if (dataPerson.length > 11) {
            alert('CPF inválido');
        } else {
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
                this.setState({ userData: "" });
            }
        }
    }

    constructor(props) {
        super(props);
        this.state = { open1: false ,
                       open2: false,
                       invites: [],
                       matches: [],
                       teams: [],
                       makeRequest: false,
    }

        this.handleCloseModalPartida = this._handleCloseModalPartida.bind(this);

        this.handleCloseModalConvite = this._handleCloseModalConvite.bind(this);

        let pathname = window.location.pathname
        let pathnameVet = pathname.split("/")

      
        this.getAllTeams(pathnameVet[3])
        this.getAllInvites(pathnameVet[3])
        this.getAllMatchs(pathnameVet[3])
    }

    getAllMatchs = (idChampionship) => {
        championships.allMatchs(idChampionship)
        .then(match => {

            if(typeof(match) == "object" && match.length != 0){
                let matchRender = []

                for(let i = 0; i < match.length; i++){
                    matchRender.push(this.dataPartida(match[i].idMatch,match[i].times[0].nmTime,match[i].times[1].nmTime))

                }
                this.setState({matches: matchRender})

            }
        this.setState({makeRequest: true})
        })
    }
        dataPartida = (idPartida, nomeTime1, nomeTime2) => {

        return { idPartida, nomeTime1, nomeTime2 };
}
    getAllInvites = (idChampionship) => {
        championships.allInvites(idChampionship)
        .then(invite => {
            if(typeof(invite) == "object" && invite.length != 0){

                this.setState({ invites: [] })
                let invitesRender = []

                for(let i = 0; i < invite.length; i++){
                    invitesRender.push(this.dataInvite(invite[i].nmPlayer, invite[i].nmChampionship, invite[i].accepted))
                }

                this.setState({ invites: invitesRender })
            }
        })
    }

    getAllTeams = (idChampionship) => {
        championships.allTeams(idChampionship)
        .then(team => {
            if(typeof(team) == "object" && team.length != 0){

                this.setState({ teams: [] })
                let teamsRender = []

                for(let i = 0; i < team.length; i++){
                    teamsRender.push(this.dataNewMatch(team[i].nmTime))
                }

                this.setState({ teams: teamsRender })

            }
        })
    }

    dataInvite = (nomeJogador, campeonato, status) => {
        return { nomeJogador, campeonato, status };
    }

    dataNewMatch = (team) => {
        return { team }
    }

    

    _handleCloseModalPartida() {
        this.setState({ open1: false });
    }
    _handleOpen1() {
        this.setState({ open1: true });
    }
    _handleCloseModalConvite() {
        this.setState({ open2: false });
    }
    _handleOpen2() {
        this.setState({ open2: true });
    }

    redirectDetalhes = (link) => {
        window.location.href = "/empresa/partida/" + link;
    }

    render() {
        const { classes } = this.props
        const actions1 = [

            <Button
                label="Cancel"
                primary={true}
                onClick={this.handleCloseModalPartida}
            />,
            <Button
                type="submit"
                label="Submit"
                primary={true}
            />,
        ];
        const actions2 = [

            <Button
                label="Cancel"
                primary={true}
                onClick={this.handleCloseModalConvite}
            />,
            <Button
                type="submit"
                label="Submit"
                primary={true}
            />,
        ];

        return (
            <div>
                {this.state.makeRequest === false &&  <Loading/>}
            <div className={classes.root}>
                <Grid container spacing={12}>
                    <Grid item xs={12} lg={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <p style={{ background: '#383c42', color: '#ff3f3f', fontSize: '20px', marginBottom: '7%' }}>Partidas</p>
                                <Paper className={classes.table}>
                                    <Table fullWidth >
                                        <TableHead  >
                                            <TableRow >
                                                <TableCell className={classes.table} align="center">Partida</TableCell>
                                                <TableCell className={classes.table} align="right">Time 1</TableCell>
                                                <TableCell className={classes.table} align="right">Time 2</TableCell>
                                                <TableCell className={classes.table} align="right"></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {this.state.matches.map(row => (
                                                <TableRow  >
                                                    <TableCell align="center" className={classes.table}>{row.idPartida}</TableCell>
                                                    <TableCell align="right" className={classes.table}>{row.nomeTime1}</TableCell>
                                                    <TableCell align="center" className={classes.table}>{row.nomeTime2}</TableCell>
                                                    <TableCell><IconButton onClick={() => this.redirectDetalhes(row.idPartida)} color="#ff3f3f" className={classes.button} component="span"><ChevronRight /></IconButton></TableCell>

                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Paper>
                                {/* <Button  style={{  align:'left', fontWeight: '300', a: 'none', margin: '10%',padding:'5px',  height: '25px', borderRadius: '100', boxShadow: 'none', backgroundColor: '#ff3f3f' }}  variant="contained" color="secondary">teste</Button> */}
                                <Fab className={classes.fab} aria-label="Add" className={classes.fab} onClick={() => this._handleOpen1()}>
                                    <AddIcon />
                                </Fab>
                            </CardContent>
                        </Card>
                        <Dialog actions={actions1} onClose={this.handleCloseModalPartida} modal={true} open={this.state.open1}>
                            <DialogTitle className={classes.dialogTitle} disableTypography  >Nova Partida</DialogTitle>
                            <DialogContent className={classes.dialog}>
                                <FormControl style={{ width: '100%' }} className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                        Time 1
                                  </InputLabel>
                                    <NativeSelect className={classes.cssUnderline}  >
                                        <option classes={{ root: classes.cssLabel }} value=""></option>
                                        {this.state.teams.map(team => (
                                            <option inputProps={{ className: classes.input }} value={team.team} onChange={(value) => { this.handleTeam1(value) }}>{team.team}</option>
                                        ))}
                                    </NativeSelect>
                                </FormControl>
                                <FormControl style={{ width: '100%' }} className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                        Time 2
                                  </InputLabel>
                                    <NativeSelect className={classes.cssUnderline}  >
                                        <option classes={{ root: classes.cssLabel }} value=""></option>
                                        {this.state.teams.map(team => (
                                            <option inputProps={{ className: classes.input }} value={team.team} onChange={(value) => { this.handleTeam2(value) }}>{team.team}</option>
                                        ))}
                                    </NativeSelect>
                                </FormControl>
                                <DialogActions className={classes.dialog}>
                                    <Button onClick={this.handleCloseModalPartida} disableTypography color="#96a0a0">
                                        Cancel
                                </Button>
                                    <Button onClick={this.handleCloseModalPartida} disableTypography color="secondary" >
                                        Enviar
                                </Button>
                                </DialogActions>
                            </DialogContent >
                        </Dialog>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <p style={{ background: '#383c42', color: '#ff3f3f', fontSize: '20px', marginBottom: '5%' }}>Convites Enviados</p>
                                <Paper className={classes.table}>
                                    <Table fullWidth >
                                        <TableHead className={classes.table} >
                                            <TableRow >
                                                <TableCell className={classes.table} align="center">Jogador </TableCell>
                                                <TableCell className={classes.table} align="right">Campeonato</TableCell>
                                                <TableCell className={classes.table} align="right">Status</TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {this.state.invites.map(row => (
                                                <TableRow key={row.id}>
                                                    <TableCell align="center" className={classes.table}>{row.nomeJogador}</TableCell>
                                                    <TableCell align="right" className={classes.table}>{row.campeonato}</TableCell>
                                                    <TableCell align="center" className={classes.table}>{row.status == 0 ? "Não Respondido" : "Respondido" }</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Paper>
                                <Fab className={classes.fab} aria-label="Add" className={classes.fab} onClick={() => this._handleOpen2()}>
                                    <AddIcon />
                                </Fab>
                            </CardContent>
                        </Card>
                        <Dialog actions={actions2} fullWidth modal={true} open={this.state.open2} onClose={this.handleCloseModalConvite}>
                            <DialogTitle className={classes.dialogTitle} style={{ paddingLeft: '35%' }} fullWidth disableTypography  >Convidar Jogador</DialogTitle>
                            <DialogContent className={classes.dialog}>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                        CPF do Jogador
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} id="userData" classes={{ underline: classes.cssUnderline }} type="text" value={this.state.userData} onBlur={(text) => { this.validateUserData(this.state.userData) }} onChange={(text) => { this.handleUserData(text) }} />
                                </FormControl>
                                <DialogActions className={classes.dialog}>
                                    <Button onClick={this.handleCloseModalConvite} disableTypography color="#96a0a0">
                                        Cancel
                                </Button>
                                    <Button onClick={this.handleCloseModalConvite} disableTypography color="secondary" >
                                        Enviar
                                </Button>
                                </DialogActions>
                            </DialogContent >
                        </Dialog>
                    </Grid>
                </Grid>
            </div>
            </div>
        )
    }
}

Campeonato.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Campeonato);
