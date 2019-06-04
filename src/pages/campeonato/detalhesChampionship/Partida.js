import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Typography, Divider, Button, Hidden } from '@material-ui/core'
import MachineMetricData from '../../../models/MachineMetricData'
import machine from './../../../scripts/http/machine'
import LoadingCircle from './../../LoadingCircle'

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
      metric: {}
    };
    this.rendersTeams();
  }
  
  componentDidMount() {
    this.interval = setInterval(()=> {
      // let randomVar = Math.random()*100
      this.rendersTeams();
      // this.setState({value: randomVar}) 
    }, 10000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  rendersTeams = () => {
    machine.getLastMetric()
      .then(resultado => {
        console.log(resultado);
        this.setState({alreadyMakeRequest: true})
        this.setState({metric: resultado})
      })
  }
  
  renderTeam1 = () => {
    let metric = this.state.metric;
    console.log(metric.useGPU);
    console.log(metric.useCPU);
    let final = []
    let playerDatas = []
    for(let j = 0; j < 5; j++) {
      let useGPU = metric.useGPU + ((Math.random() > .5) ? Math.random() * 20 : -1 * Math.random() * 20 );
      if(useGPU < 0) useGPU = 0
      if(useGPU > 100) useGPU = 100
      let useCPU = metric.useCPU + ((Math.random() > .5) ? Math.random() * 20 : -1 * Math.random() * 20 );
      if(useCPU < 0) useCPU = 0
      if(useCPU > 100) useCPU = 100
        playerDatas.push(new MachineMetricData(33,33,useCPU.toFixed(2),useGPU.toFixed(2),33,33,33,
          'usbDevice',
          'metricDate',
          'metricTime',1,1)
          )
    }    

    final = playerDatas.map((metrics,index) => {
      return (
        <div style={{position:'relative'}}>
          <Typography inline style={{color:'#96a0a0', fontSize: '1.06rem', fontFamily: 'inherit'}}>GPU&nbsp;</Typography>
          <Typography inline style={{color:'rgba(255,255,255,0.8)', fontSize: '1.2rem', fontFamily: 'inherit'}}>{metrics.useCPU+'%'}<br/></Typography>
          <Typography inline style={{color:'#96a0a0', fontSize: '1.06rem', fontFamily: 'inherit'}}>CPU&nbsp;</Typography>
          <Typography inline style={{color:'rgba(255,255,255,0.8)', fontSize: '1.2rem', fontFamily: 'inherit'}}>{metrics.useGPU+'%'}</Typography>
          <Hidden smDown><Button component={NavLink} to={'/campeonato/detalhes/'+metrics.idMachine} style={{position:'absolute', top:'19%', right:'5%', borderRadius:'50%', width:'36px', minWidth:'0px', color: '#96a0a0'}} variant='outlined'> > </Button> </Hidden>
          <br/>
          {!(index === playerDatas.length - 1) &&
            <Divider style={{margin: '16px', marginLeft:'15%', marginRight:'15%', backgroundColor:'rgba(255,255,255,0.15)', widht:'60%'}}/>
          }
        </div>
        )
      })
    return final
  }

  renderTeam2 = () => {
    let metric = this.state.metric;
    let final = []
    let playerDatas = []
    for (let i = 0; i < 5; i++) {
      let useGPU = metric.useGPU + ((Math.random() > .5) ? Math.random() * 20 : -1 * Math.random() * 20 );
      if(useGPU < 0) useGPU = 0
      if(useGPU > 100) useGPU = 100
      let useCPU = metric.useCPU + ((Math.random() > .5) ? Math.random() * 20 : -1 * Math.random() * 20 );
      if(useCPU < 0) useCPU = 0
      if(useCPU > 100) useCPU = 100
      playerDatas.push(new MachineMetricData(33,33,useCPU.toFixed(2),useGPU.toFixed(2),33,33,33,
        'usbDevice',
        'metricDate',
        'metricTime',1,1))
    }

    final = playerDatas.map((metrics,index) => {
      return (
        <div style={{position: 'relative'}}>
          <Typography inline style={{color:'#96a0a0', fontSize: '1.06rem', fontFamily: 'inherit'}}>GPU&nbsp;</Typography>
          <Typography inline style={{color:'rgba(255,255,255,0.8)', fontSize: '1.2rem', fontFamily: 'inherit'}}>{metrics.useCPU+'%'}<br/></Typography>
          <Typography inline style={{color:'#96a0a0', fontSize: '1.06rem', fontFamily: 'inherit'}}>CPU&nbsp;</Typography>
          <Typography inline style={{color:'rgba(255,255,255,0.8)', fontSize: '1.2rem', fontFamily: 'inherit'}}>{metrics.useGPU+'%'}</Typography>
          <Hidden smDown><Button component={NavLink} to={'detalhes/'+metrics.useCPU} style={{position:'absolute', top:'19%', right:'5%', borderRadius:'50%', width:'36px', minWidth:'0px', color: '#96a0a0'}} variant='outlined'> > </Button> </Hidden>
          <br/>
          {!(index === playerDatas.length - 1) &&
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
                    {this.renderTeam1()}
                  </Card>
              </Grid>
              <Grid item xs={6}>
                <Typography align='center' variant='h5' style={{color:'rgb(45,112,193'}}>Time 2</Typography>
                  <Card className={classes.card}>
                    {this.renderTeam2()}
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