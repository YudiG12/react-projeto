import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, Button, CardContent, FormControl, Input, InputLabel, NativeSelect } from '@material-ui/core';
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


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
        marginTop: '3%',
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





let data = [1, 2, 3, 5];
let rows = [];
let rows2 = [];
let id = 0;
function dataPartida(nomeJogador, campeonato, status) {
    id += 1;
    return { nomeJogador, campeonato, status };
}
function dataConvite(nomeJogador, campeonato, status) {
    id += 1;
    return { nomeJogador, campeonato, status };
}
for (let i = 0; data.length > i; i++) {
    rows.push(dataPartida('partida', 'times', 'xpto'));
};
for (let i = 0; data.length > i; i++) {
    rows2.push(dataConvite('nomeJogador' + [i], 'campeonato', 'status'));
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
    validateUserData = (data) => {
        if (data) {
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
                soma1 = (((soma1 * 10) % 11) === 10 ? 0 : ((soma1 * 10) % 11));
                soma2 = (((soma2 + (2 * soma1)) * 10) % 11);

                var digitoGerado = (soma1 * 10) + soma2;
                if (digitoGerado !== digitoDigitado) {
                    alert('CPF Invalido!');
                    this.setState({ userData: "" });
                }
            }
        }
    }



    constructor(props) {
        super(props);
        this.state = { open1: false };
        this.state = { open2: false };

        this.handleClose1 = this._handleClose1.bind(this);

        this.handleClose2 = this._handleClose2.bind(this);


    }

    _handleClose1() {
        this.setState({ open1: false });
    }
    _handleOpen1() {
        this.setState({ open1: true });
    }
    _handleClose2() {
        this.setState({ open2: false });
    }
    _handleOpen2() {
        this.setState({ open2: true });
    }

    redirectDetalhes = (link) => {
        window.location.href = "/empresa/partida" + link;
    }

    render() {
        const { classes } = this.props
        const actions1 = [

            <Button
                label="Cancel"
                primary={true}
                onClick={this.handleClose1}
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
                onClick={this.handleClose2}
            />,
            <Button
                type="submit"
                label="Submit"
                primary={true}
            />,
        ];

        return (
            <div className={classes.root}>
                <Grid container spacing={12}>
                    <Grid item xs={12} lg={6}>
                        <Card className={classes.card}>
                            <p style={{ background: '#383c42', color: '#ff3f3f', fontSize: '20px', marginBottom: '5%' }}>PARTIDAS</p>
                            <Paper className={classes.table}>
                                <Table fullWidth >
                                    <TableHead  >
                                        <TableRow >
                                            <TableCell style={{ borderColor: '#464D4E' }} className={classes.table} align="center">CAMPEONATO</TableCell>
                                            <TableCell style={{ borderColor: '#464D4E' }} className={classes.table} align="right">GAME</TableCell>
                                            <TableCell style={{ borderColor: '#464D4E' }} className={classes.table} align="right">XPTO</TableCell>
                                            <TableCell style={{ borderColor: '#464D4E' }} className={classes.table} align="right"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map(row => (
                                            <TableRow key={row.id} >
                                                <TableCell style={{ borderColor: '#464D4E' }} align="center" className={classes.table}>{row.nomeJogador}</TableCell>
                                                <TableCell style={{ borderColor: '#464D4E' }} align="right" className={classes.table}>{row.campeonato}</TableCell>
                                                <TableCell style={{ borderColor: '#464D4E' }} align="center" className={classes.table}>{row.status}</TableCell>
                                                <TableCell style={{ borderColor: '#464D4E' }}><IconButton component={NavLink} to={"/empresa/partida" + '#'} color="#ff3f3f" className={classes.button}><ChevronRight /></IconButton></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                            {/* <Button  style={{  align:'left', fontWeight: '300', a: 'none', margin: '10%',padding:'5px',  height: '25px', borderRadius: '100', boxShadow: 'none', backgroundColor: '#ff3f3f' }}  variant="contained" color="secondary">teste</Button> */}
                            <Fab className={classes.fab} aria-label="Add" onClick={() => this._handleOpen1()}>
                                <AddIcon style={{ color: 'rgb(255,200,200)' }} />
                            </Fab>
                        </Card>
                        <Dialog actions={actions1} onClose={this.handleClose1} modal={true} open={this.state.open1}>
                            <DialogTitle className={classes.dialogTitle} disableTypography  >Nova Partida</DialogTitle>
                            <DialogContent className={classes.dialog}>
                                <FormControl style={{ width: '100%' }} className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                        Time 1
                                  </InputLabel>
                                    <NativeSelect className={classes.cssUnderline}  >
                                        <option classes={{ root: classes.cssLabel }} value=""></option>
                                        {times.map(time => (
                                            <option inputProps={{ className: classes.input }} value={time.time} onChange={(value) => { this.handleUserData(value) }}>{time.time}</option>
                                        ))}
                                    </NativeSelect>
                                </FormControl>
                                <FormControl style={{ width: '100%' }} className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                        Time 2
                                  </InputLabel>
                                    <NativeSelect className={classes.cssUnderline}  >
                                        <option classes={{ root: classes.cssLabel }} value=""></option>
                                        {times.map(time => (
                                            <option inputProps={{ className: classes.input }} value={time.time} onChange={(value) => { this.handleUserData(value) }}>{time.time}</option>
                                        ))}
                                    </NativeSelect>
                                </FormControl>
                                <DialogActions className={classes.dialog}>
                                    <Button onClick={this.handleClose1} disableTypography style={{ color: "#96a0a0" }}>
                                        Cancel
                                </Button>
                                    <Button onClick={this.handleClose1} disableTypography style={{ color: "#FF3F3F" }} >
                                        Enviar
                                </Button>
                                </DialogActions>
                            </DialogContent >
                        </Dialog>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Card className={classes.card}>
                            <p style={{ background: '#383c42', color: '#ff3f3f', fontSize: '20px', marginBottom: '5%' }}>CONVITES ENVIADOS</p>
                            <Paper className={classes.table}>
                                <Table fullWidth >
                                    <TableHead className={classes.table} >
                                        <TableRow >
                                            <TableCell style={{ borderColor: '#464D4E', height: '56px' }} className={classes.table} align="center">JOGADOR</TableCell>
                                            <TableCell style={{ borderColor: '#464D4E', height: '56px' }} className={classes.table} align="right">CAMPEOANTO</TableCell>
                                            <TableCell style={{ borderColor: '#464D4E', height: '56px' }} className={classes.table} align="right">STATUS</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows2.map(row => (
                                            <TableRow key={row.id}>
                                                <TableCell style={{ borderColor: '#464D4E', height: '56px' }} align="center" className={classes.table}>{row.nomeJogador}</TableCell>
                                                <TableCell style={{ borderColor: '#464D4E', height: '56px' }} align="right" className={classes.table}>{row.campeonato}</TableCell>
                                                <TableCell style={{ borderColor: '#464D4E', height: '56px' }} align="center" className={classes.table}>{row.status}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                            <Fab className={classes.fab} aria-label="Add" onClick={() => this._handleOpen2()}>
                                <AddIcon style={{ color: 'rgb(255,200,200)' }} />
                            </Fab>
                        </Card>
                        <Dialog actions={actions2} fullWidth modal={true} open={this.state.open2} onClose={this.handleClose2}>
                            <DialogTitle className={classes.dialogTitle} style={{ paddingLeft: '35%' }} fullWidth disableTypography  >Convidar Jogador</DialogTitle>
                            <DialogContent className={classes.dialog}>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                        CPF do Jogador
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} id="userData" classes={{ underline: classes.cssUnderline }} type="text" value={this.state.userData} onBlur={(text) => { this.validateUserData(this.state.userData) }} onChange={(text) => { this.handleUserData(text) }} />
                                </FormControl>
                                <DialogActions className={classes.dialog}>
                                    <Button onClick={this.handleClose2} disableTypography style={{ color: "#96a0a0" }}>
                                        Cancel
                                </Button>
                                    <Button onClick={this.handleClose2} disableTypography style={{ color: "#FF3F3F" }} >
                                        Enviar
                                </Button>
                                </DialogActions>
                            </DialogContent >
                        </Dialog>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Campeonato.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Campeonato);
