import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, Button,CardContent, Icon } from '@material-ui/core';
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
        boxShadow:'none'
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
    button:{
        color:'#ff3f3f'

    },
    input: {
        color: '#96a0a0',
        borderBottom: '1px solid #96a0a0',
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
    rows2.push(dataConvite('nomeJogador'+[i], 'campeonato', 'status'));
};

class Campeonato extends Component {
    get = () => {
        fetch('http://35.199.74.137:7000/campeonato/get', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'apllication/json',
            },
            credentials: "include"
        }).then(res => this.errorOcorred(res))
            .then(res => res.json())
            .then((resultado) => data.push(resultado))
            .catch(error => {
                if (error.message)
                    console.log(error.message)
                else
                    console.log(error);
            });
    }
    errorOcorred = (response) => {
        console.log(response)

        if (response.ok)
            return response;
        else {
            return response.json()
                .then(body => {
                    return Promise.reject({
                        message: body
                    })
                })
        }
    }
    redirectDetalhes = (link) => {
        window.location.href = "/partida" + link;
    }
    redirectNovaPartida = (link) => {
        window.location.href = "/nova_partida" + link;
    }
    redirectConvite = (link) => {
        window.location.href = "/convites" + link;
    }
    render() {
        const { classes } = this.props

        return (
            <div className={classes.root} onLoad={() => this.get()}>
                <Grid container spacing={12}>
                    <Grid item xs={12} lg={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <p style={{ background: '#383c42', color: '#ff3f3f', fontSize: '20px',  marginBottom:'7%'  }}>Partidas</p>
                                <Paper className={classes.table}>
                                    <Table fullWidth >
                                        <TableHead  >
                                            <TableRow >
                                                <TableCell className={classes.table} align="center">Campeonato</TableCell>
                                                <TableCell className={classes.table} align="right">Game</TableCell>
                                                <TableCell className={classes.table} align="right">XPTO</TableCell>
                                                <TableCell className={classes.table} align="right"></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map(row => (
                                                <TableRow key={row.id} >
                                                    <TableCell align="center" className={classes.table}>{row.nomeJogador}</TableCell>
                                                    <TableCell align="right" className={classes.table}>{row.campeonato}</TableCell>
                                                    <TableCell align="center" className={classes.table}>{row.status}</TableCell>
                                                    <TableCell><IconButton  onClick={() => this.redirectDetalhes('#')} color="#ff3f3f"  className={classes.button} component="span"><ChevronRight /></IconButton></TableCell>

                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Paper>
                                {/* <Button  style={{  align:'left', fontWeight: '300', a: 'none', margin: '10%',padding:'5px',  height: '25px', borderRadius: '100', boxShadow: 'none', backgroundColor: '#ff3f3f' }}  variant="contained" color="secondary">teste</Button> */}
                                <Fab className={classes.fab} aria-label="Add" className={classes.fab} onClick={() => this.redirectNovaPartida('#')}>
                                    <AddIcon />
                                </Fab>
                            </CardContent>
                        </Card>

                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <p style={{ background: '#383c42', color: '#ff3f3f', fontSize: '20px', marginBottom:'5%' }}>Convites Enviados</p>
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
                                            {rows2.map(row => (
                                                <TableRow key={row.id}>
                                                    <TableCell align="center" className={classes.table}>{row.nomeJogador}</TableCell>
                                                    <TableCell align="right" className={classes.table}>{row.campeonato}</TableCell>
                                                    <TableCell align="center" className={classes.table}>{row.status}</TableCell>

                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Paper>
                                <Fab className={classes.fab} aria-label="Add" className={classes.fab} onClick={() => this.redirectConvite('#')}>
                                    <AddIcon />
                                </Fab>
                            </CardContent>
                        </Card>
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
