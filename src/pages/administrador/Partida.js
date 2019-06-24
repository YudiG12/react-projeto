import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Typography, Divider, Button, Hidden } from '@material-ui/core'
import MachineMetricData from '../../models/MachineMetricData'
import machine from './../../scripts/http/machine'
import LoadingCircle from './../LoadingCircle'
import player from './../../scripts/http/player';

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
});

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Math.random() * 100,
      alreadyMakeRequest: false,
      loadTeamsData: false,
      metric: {},
      idMatch: "0",
      match: {},
      idsTeamOne: [],
      idsTeamTwo: [],
      metricsOne: [],
      metricsTwo: []
    };
    let pathname = window.location.pathname;
    let pathnameVet = pathname.split("/");
    this.state.idMatch = pathnameVet[3];
    this.loadTeamsData();
  }
  
  componentDidMount() {
    this.interval = setInterval(()=> {
      this.loadTeamsData();
    }, 10000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  loadTeamsData = () => {
    if(this.state.loadTeamsData == false) {
      player.matchDetail(this.state.idMatch)
      .then(match => {
        let teams = match.times;
        let teamOne = teams[0];
        let teamTwo = teams[1];
        let idsOne = [];
        let idsTwo = [];
        for (let i = 0; i < teamOne.players.length; i++) {
          let player = teamOne.players[i];
          idsOne.push(player.idUserRole);
        }        
        for (let i = 0; i < teamTwo.players.length; i++) {
          let player = teamTwo.players[i];
          idsTwo.push(player.idUserRole);
        }
        this.setState({
          loadTeamsData: true,
          match: match,
          idsTeamOne: idsOne,
          idsTeamTwo: idsTwo
        })
      });
    } else {
      this.loadMetricsDataTeams();
    }
  }

  loadMetricsDataTeams = () => {
    let newMetricsOne = [];
    let newMetricsTwo = [];
    machine.getMetricsByIdsUserRole(this.state.idsTeamOne)
      .then(metrics => {
        newMetricsOne = metrics;
        return machine.getMetricsByIdsUserRole(this.state.idsTeamTwo);
      })
      .then(metrics => {
        newMetricsTwo = metrics;
        this.setState({
          metricsOne: newMetricsOne,
          metricsTwo: newMetricsTwo,
          alreadyMakeRequest: true
        })
      })
  }

  renderTeam = (metrics) => {
    if(metrics.length == 0 || metrics == "Não foi possível processar esse pedido.")
      return null

    let final = metrics.map((metric,index) => {
      return (
        <div style={{position:'relative'}}>
          <Typography inline style={{color:'#96a0a0', fontSize: '1.06rem', fontFamily: 'inherit'}}>GPU&nbsp;</Typography>
          <Typography inline style={{color:'rgba(255,255,255,0.8)', fontSize: '1.2rem', fontFamily: 'inherit'}}>{metric.useCPU+'%'}<br/></Typography>
          <Typography inline style={{color:'#96a0a0', fontSize: '1.06rem', fontFamily: 'inherit'}}>CPU&nbsp;</Typography>
          <Typography inline style={{color:'rgba(255,255,255,0.8)', fontSize: '1.2rem', fontFamily: 'inherit'}}>{metric.useGPU+'%'}</Typography>
          <Hidden smDown><Button component={NavLink} to={'/campeonato/detalhes/'+metric.idMachine} style={{position:'absolute', top:'19%', right:'5%', borderRadius:'50%', width:'36px', minWidth:'0px', color: '#96a0a0'}} variant='outlined'> > </Button> </Hidden>
          <br/>
          {!(index === metrics.length - 1) &&
            <Divider style={{margin: '16px', marginLeft:'15%', marginRight:'15%', backgroundColor:'rgba(255,255,255,0.15)', widht:'60%'}}/>
          }
        </div>
        )
      })
    return final
  }

  render() {
    const { classes } = this.props
    return (
        <div className={classes.root}>
          { this.state.alreadyMakeRequest == true ? (
            <Grid container spacing={12}>
              <Grid item xs={6}>
                <Typography align='center' variant='h5' style={{color:'#ff3f3f'}}>Time 1</Typography>
                  <Card className={classes.card}>
                    {this.renderTeam(this.state.metricsOne)}
                  </Card>
              </Grid>
              <Grid item xs={6}>
                <Typography align='center' variant='h5' style={{color:'rgb(45,112,193'}}>Time 2</Typography>
                  <Card className={classes.card}>
                    {this.renderTeam(this.state.metricsTwo)}
                  </Card>
              </Grid>
            </Grid>
          )
        : 
          ( <Grid  container direction="row" justify="center" alignItems="center" style={{width:'100%', height:'100vh'}}><LoadingCircle/> </Grid>
        )}
      </div>
    )
  }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Admin);