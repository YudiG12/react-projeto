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


class CriarConvite extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            championship: "0",
            cpf: "",
            makeRequest: false
        }

        let pathname = window.location.pathname;
        let pathnameVet = pathname.split("/");
        console.log(pathnameVet);
        this.state.championship = pathnameVet[4];
    }

    handleCPF(text){
        this.setState({ cpf: text.target.value })
    }

    insertConvite = () => {
        if(this.state.cpf.length != 14 && this.state.cpf.length != 11) return;

        Championship.insertInvite(this.state.cpf, this.state.championship)
            .then(res => {
                window.location.href = "/campeonato-administro/" + this.state.championship;
            })
            .catch(err => console.log(err));

    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={12} style={{ height: '50vh' }} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Card className={classes.card}>
                            <CardContent >
                                <p style={{ color: '#ff3f3f', fontSize: '20px', marginTop: '-10' }}>Novo Convite</p>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                      CPF
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} 
                                    id="userData" classes={{ underline: classes.cssUnderline }} type="text" 
                                    value={this.state.teamName}  onChange={(value) => { this.handleCPF(value) }} />
                                </FormControl>
                                <CardActions>
                                    <Button size="small" id='button' type='submit' 
                                    style={
                                        { 
                                            fontWeight: '300', a: 'none', margin: '11%', marginTop: '10%', marginBottom: '3%', height: '50px', 
                                            borderRadius: '0', boxShadow: 'none', backgroundColor: '#ff3f3f' 
                                        }
                                    } fullWidth variant="contained" color="secondary" onClick={() => this.insertConvite()} >
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

CriarConvite.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CriarConvite);
