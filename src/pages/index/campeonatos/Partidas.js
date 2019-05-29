import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, Button, FormControl, InputLabel, MenuItem,Select, Input, CardContent } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '250px',
        },
    },
    table:{
        backgroundColor:'#383c42',
        color: '#96a0a0',
        fontSize: '15px'
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

let data = [1,2];
let rows = [];
let rows2 =[];
let id = 0;
function dataPartida(nomeJogador, campeonato, status) {
    id += 1;
    return { nomeJogador, campeonato, status };
}
function dataConvite(nomeJogador, campeonato, status) {
    id += 1;
    return { nomeJogador, campeonato, status };
}
for(let i=0;data.length>i;i++){
  rows.push( dataPartida('partida', 'times', 'xpto'));
};  
for(let i=0;data.length>i;i++){
    rows2.push( dataConvite('nomeJogador', 'campeonato', 'status'));
};

class Partidas extends Component {
        
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={12}>
                <Grid item xs={12} lg={6}>
                        <Card className={classes.card}>
                            <CardContent>
                            <p style={{background:'#383c42', color: '#ff3f3f', fontSize: '20px', marginTop: '-10' }}>Partidas</p>
                                <Paper >
                                    <Table className={classes.table}>
                                        <TableHead className={classes.table} >
                                            <TableRow >
                                                <TableCell className={classes.table}>Jogador</TableCell>
                                                <TableCell className={classes.table} align="right">Campeonato</TableCell>
                                                <TableCell className={classes.table} align="right">Status</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map(row => (
                                                <TableRow key={row.id} >                                                    
                                                    <TableCell align="right" className={classes.table}>{row.nomeJogador}</TableCell>
                                                    <TableCell align="right" className={classes.table}>{row.campeonato}</TableCell>
                                                    <TableCell align="center" className={classes.table}>{row.status}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Paper>
                            </CardContent>
                        </Card>
                    </Grid>                  
                    <Grid item xs={12} lg={6}>
                        <Card className={classes.card}>
                            <CardContent>
                            <p style={{background:'#383c42', color: '#ff3f3f', fontSize: '20px', marginTop: '-10' }}>Convites Enviados</p>
                                <Paper >
                                    <Table className={classes.table}>
                                        <TableHead className={classes.table} >
                                            <TableRow >
                                                <TableCell className={classes.table}>Jogador</TableCell>
                                                <TableCell className={classes.table} align="right">Campeonato</TableCell>
                                                <TableCell className={classes.table} align="right">Status</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows2.map(row => (
                                                <TableRow key={row.id} >                                                    
                                                    <TableCell align="right" className={classes.table}>{row.nomeJogador}</TableCell>
                                                    <TableCell align="right" className={classes.table}>{row.campeonato}</TableCell>
                                                    <TableCell align="center" className={classes.table}>{row.status}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Paper>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Partidas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Partidas);