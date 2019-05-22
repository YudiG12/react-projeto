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

class Convites extends Component {

    state = {
        campeonato: '',
        open: false,
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={12}>
                    <Grid item xs={12} lg={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <p style={{ color: '#ff3f3f', fontSize: '20px', marginTop: '-10' }}>Novo Convite</p>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                        Nome do Jogador
                            </InputLabel>
                                    <Input inputProps={{ className: classes.input }} id="playerName" classes={{ underline: classes.cssUnderline }} />
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                        Email do Jogador
                            </InputLabel>
                                    <Input inputProps={{ className: classes.input }} id="playerEmail" classes={{ underline: classes.cssUnderline }} />
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>Campeonatos</InputLabel>
                                    <Select
                                        className={classes.cssUnderline}
                                        open={this.state.open}
                                        onClose={this.handleClose}
                                        onOpen={this.handleOpen}
                                        value={this.state.campeonato}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'campeonato',
                                            id: 'campeonato',
                                            className: classes.input,
                                        }}
                                    >
                                        <MenuItem classes={{ root: classes.cssLabel, focused: classes.cssFocused }} value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"lol"}>LOL</MenuItem>
                                        <MenuItem value={"cs"}>CS GO</MenuItem>
                                        <MenuItem value={"fortnite"}>Fortnite</MenuItem>
                                        </Select>
                                        </FormControl>
                                    <CardActions>
                                        <Button size="small" id='button' type='submit' style={{ fontWeight: '300', a: 'none', margin: '11%', marginTop: '10%', marginBottom: '3%', height: '50px', borderRadius: '0', boxShadow: 'none', backgroundColor: '#ff3f3f' }} fullWidth variant="contained" color="secondary">
                                            Enviar
                            </Button>
                                    </CardActions>
                    </CardContent>
                 </Card>
            </Grid>
                        <Grid item xs={12} lg={6}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <p style={{ color: '#ff3f3f', fontSize: '20px' }}>Convites Enviados</p>


                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
        </div>
                )
              }
            }
            
Convites.propTypes = {
                    classes: PropTypes.object.isRequired,
            };
              
export default withStyles(styles)(Convites);