import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Button, FormControl, InputLabel, NativeSelect, Input, CardContent } from '@material-ui/core'
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

let dataTime = [1, 2, 3,4,5,6,7,8,9];
let times = [];

let idTime = 0;
function dataNovaPartida(time) {
    idTime += 1;
    return { time};
}

for (let i = 0; dataTime.length > i; i++) {
    times.push(dataNovaPartida('time'+i));
};


class NovaPartida extends Component {
    state = {
        time: '',

    };
    handleUserData(time) {
        this.setState({ time: time.target.value })
    }


    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={12} style={{ height: '50vh' }} container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Card className={classes.card}>
                            <CardContent >
                                <p style={{ color: '#ff3f3f', fontSize: '20px', marginTop: '-10' }}>Nova Partida</p>

                                <FormControl style={{width:'70%'}} className={classes.margin}>
                                <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                    Time 1
                                </InputLabel>
                                <NativeSelect   className={classes.cssUnderline}  >
                                <option classes={{ root: classes.cssLabel}} value=""></option>
                                {times.map(row => (
                                    <option  inputProps={{className: classes.input}}  value={row.time} onChange={(value) => { this.handleUserData(value) }}>{row.time}</option>
                                ))}
                                </NativeSelect>
                                </FormControl>
                                <FormControl style={{width:'70%'}} className={classes.margin}>
                                <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                    Time 2
                                </InputLabel>
                                <NativeSelect   className={classes.cssUnderline}  >
                                <option classes={{ root: classes.cssLabel}} value=""></option>
                                {times.map(row => (
                                    <option  className={classes.input}  value={row.time} onChange={(value) => { this.handleUserData(value) }}>{row.time}</option>
                                ))}
                                </NativeSelect>
                                </FormControl>
                                <CardActions>
                                    <Button size="small" id='button' type='submit' style={{ fontWeight: '300', a: 'none', margin: '11%', marginTop: '10%', marginBottom: '3%', height: '50px', borderRadius: '0', boxShadow: 'none', backgroundColor: '#ff3f3f' }} fullWidth variant="contained" color="secondary">
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

NovaPartida.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NovaPartida);
