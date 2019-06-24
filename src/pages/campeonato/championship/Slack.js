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
            urlWorkSpace: "",
            maxUseCPU: 0.0,
            maxUseGPU: 0.0,
            maxUseRam: 0.0,
            maxUseDisc: 0.0,
            maxTempCPU: 0.0,
            maxTempGPU: 0.0,
        }
    }

    setUrlWorkSpace = (value) => {
        this.setState({ urlWorkSpace : value.target.value })
    }

    setMaxUseCPU = (value) => {
        this.setState({ maxUseCPU : value.target.value })
    }
    
    setMaxUseGPU = (value) => {
        this.setState({ maxUseGPU : value.target.value })
    }
    
    setMaxUseRam = (value) => {
        this.setState({ maxUseRam : value.target.value })
    }
    
    setMaxUseDisc = (value) => {
        this.setState({ maxUseDisc : value.target.value })
    }
    
    setMaxTempCPU = (value) => {
        this.setState({ maxTempCPU : value.target.value })
    }
    
    setMaxTempGPU = (value) => {
        this.setState({ maxTempGPU : value.target.value })
    }

    insertSlack = () => {
        if(this.state.urlWorkSpace.length == 0
            || !this.validValueNumber(this.state.maxUseCPU)
            || !this.validValueNumber(this.state.maxUseGPU)
            || !this.validValueNumber(this.state.maxUseRam)
            || !this.validValueNumber(this.state.maxUseDisc)
            || !this.validValueNumber(this.state.maxTempCPU)
            || !this.validValueNumber(this.state.maxTempGPU))
            return;

        let body = `{
            "urlWorkspace": "${this.state.urlWorkSpace}",
            "maxUseCPU": ${this.state.maxUseCPU},
            "maxUseGPU": ${this.state.maxUseGPU},
            "maxUseRam": ${this.state.maxUseRam},
            "maxUseDisc": ${this.state.maxUseDisc},
            "maxTempCPU": ${this.state.maxTempCPU},
            "maxTempGPU": ${this.state.maxTempGPU}
        }`;

        console.log(body);

        Championship.insertSlack(body)
            .then(res => {
                window.location.href = "/empresa/slack"
            })
            .catch(err => console.log(err));
    }

    validValueNumber = (value) => {
        return value >= 0 && value <= 100;
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
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} classes={{ underline: classes.cssUnderline }} type="text" value={this.state.urlWorkSpace}  onChange={(value) => { this.setUrlWorkSpace(value) }} />
                                </FormControl>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                    Máximo Uso CPU
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} classes={{ underline: classes.cssUnderline }} type="number" value={this.state.maxUseCPU}  onChange={(value) => { this.setMaxUseCPU(value) }} />
                                </FormControl>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                    Máximo Uso GPU
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} classes={{ underline: classes.cssUnderline }} type="number" value={this.state.maxUseGPU}  onChange={(value) => { this.setMaxUseGPU(value) }} />
                                </FormControl>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                      Máximo Uso Ram
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} classes={{ underline: classes.cssUnderline }} type="number" value={this.state.maxUseRam}  onChange={(value) => { this.setMaxUseRam(value) }} />
                                </FormControl>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                      Máximo Uso Disco
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} classes={{ underline: classes.cssUnderline }} type="number" value={this.state.maxUseDisc}  onChange={(value) => { this.setMaxUseDisc(value) }} />
                                </FormControl>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                      Máxima Temperatura CPU
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} classes={{ underline: classes.cssUnderline }} type="number" value={this.state.maxTempCPU}  onChange={(value) => { this.setMaxTempCPU(value) }} />
                                </FormControl>
                                <FormControl style={{ marginLeft: '11%', marginRight: '11%', marginTop: 'px' }} fullWidth className={classes.margin}>
                                    <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                                      Máxima Temperatura GPU
                                    </InputLabel>
                                    <Input inputProps={{ className: classes.input }} style={{marginRight:'23%'}} classes={{ underline: classes.cssUnderline }} type="number" value={this.state.maxTempGPU}  onChange={(value) => { this.setMaxTempGPU(value) }} />
                                </FormControl>
                                <CardActions>
                                    <Button size="small" id='button' type='submit' style={{ fontWeight: '300', a: 'none', margin: '11%', marginTop: '10%', marginBottom: '3%', height: '50px', borderRadius: '0', boxShadow: 'none', backgroundColor: '#ff3f3f' }} fullWidth variant="contained" color="secondary" onClick={() => this.insertSlack()} >
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
