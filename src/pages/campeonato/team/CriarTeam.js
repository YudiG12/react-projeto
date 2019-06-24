import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, Button, FormControl, Icon, InputLabel, Select, Input, CardContent, NativeSelect } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { red } from '@material-ui/core/colors';
import CardActions from '@material-ui/core/CardActions';
import Championship from '../../../scripts/http/championships';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import Fab from '@material-ui/core/Fab';
import LoadingCircle from '../../LoadingCircle';

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


class CriarTeam extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            championship: "0",
            makeRequest: false,
            players: [],
            quantity: [0],
            playersSelected: [],
            nmTime: ""
        }

        let pathname = window.location.pathname;
        let pathnameVet = pathname.split("/");
        this.state.championship = pathnameVet[4];
        Championship.getPlayersChampionship(this.state.championship)
            .then(playersDb => {
                this.setState({
                    players: playersDb,
                    makeRequest: true
                })
            })
            .catch(err => console.log(err));
    }

    insertTeam = () => {
        if(this.state.playersSelected.length == 0) return;

        let idsPlayers = "[";
        for(let i = 0; i < this.state.playersSelected.length; i++) {
            if(this.state.playersSelected[i] == undefined) return;
            if(this.state.playersSelected[i] == null) return;
            
            if(i == this.state.playersSelected.length - 1) {
                idsPlayers += `${this.state.playersSelected[i]}`;
            } else {
                idsPlayers += `${this.state.playersSelected[i]},`;
            }
        }
        idsPlayers += "]"

        let body = `{
            "nmTime": "${this.state.nmTime}",
            "idChampionship": ${this.state.championship},
            "idsPlayers": ${idsPlayers}
            }`;

        Championship.insertTeam(body)
            .then(res => {
                window.location.href = "/empresa/criar/partida/" + this.state.championship
            })
            .catch(err => console(err))
    }

    setSelectedPlayer = (player, row) => {
        let newPlayersSelected = this.state.playersSelected;
        newPlayersSelected[row] = player.target.value 
        this.setState({ playersSelected: newPlayersSelected });
    }

    setNomeTime = (nome) => {
        this.setState({ nmTime: nome.target.value })
    }

    addPlayer = () => {
        let newQuantity = this.state.quantity;
        newQuantity.push(this.state.quantity.length);
        this.setState({ quantity: newQuantity })
    }

    removePlayer = () => {
        if(this.state.quantity.length == 1) return;

        let newQuantity = this.state.quantity;
        newQuantity.pop();
        let newPlayersSelected = this.state.playersSelected;
        newPlayersSelected.pop();
        this.setState({ 
            quantity: newQuantity,
            playersSelected: newPlayersSelected
        })
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={12} style={{ height: '50vh' }} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Card className={classes.card}>
                            <CardContent >
                                <p style={{ color: '#ff3f3f', fontSize: '20px', marginTop: '-10' }}>Criar Time</p>
                                { this.state.makeRequest === true ? (
                                    <div>
                                        <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                            <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                            Nome Time
                                            </InputLabel>
                                            <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} 
                                            id="userData" classes={{ underline: classes.cssUnderline }} type="text" 
                                            value={this.state.nmTime}  onChange={(value) => { this.setNomeTime(value) }} />
                                        </FormControl>
                                        {this.state.quantity.map(row => (
                                            <FormControl style={{ width: '100%' }} className={classes.margin}>
                                            <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                                Jogador {row + 1}
                                            </InputLabel>
                                            <Select className={classes.cssUnderline} value={this.state.playersSelected[row]} onChange={(value) => { this.setSelectedPlayer(value, row) }} >
                                                <MenuItem classes={{ root: classes.cssLabel }} value=""></MenuItem>
                                                {this.state.players.map(player => (
                                                    <MenuItem 
                                                        inputprops={{ className: classes.input }} 
                                                        value={player.idUserRole}>
                                                        {player.nmPlayer}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        ))}
                                        <Fab className={classes.fab} aria-label="Add" className={classes.fab} onClick={() => this.addPlayer()}>
                                            <AddIcon />
                                        </Fab>
                                        <Fab className={classes.fab} aria-label="Add" className={classes.fab} onClick={() => this.removePlayer()}>
                                            <RemoveIcon />
                                        </Fab>
                                        <CardActions>
                                            <Button size="small" id='button' type='submit' style={{ fontWeight: '300', a: 'none', margin: '11%', marginTop: '10%', marginBottom: '0%', height: '50px', borderRadius: '0', boxShadow: 'none', backgroundColor: '#ff3f3f' }} fullWidth variant="contained" color="secondary" onClick={() => this.insertTeam()} >
                                                Enviar
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

CriarTeam.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CriarTeam);
