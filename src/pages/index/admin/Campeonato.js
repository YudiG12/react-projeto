import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Typography, Divider, Button, Link, Hidden } from '@material-ui/core'
import MachineMetricData from '../../../models/MachineMetricData'

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
  state = {
    value: Math.random() * 100,
  };
  
  componentDidMount() {
    this.interval = setInterval(()=> {
      let randomVar = Math.random()*100
      this.setState({value: randomVar}) },500)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  renderTeam1 = () => {
    let { value } = this.state
    let final = []
    let playerDatas = []
    let value1, value2
    for (let i = 0; i < 5; i++) {
      value1 = (value*Math.random()).toFixed(2)
      value2 = (value*Math.random()).toFixed(2)

      playerDatas.push(new MachineMetricData(33,33,value1,value2,33,33,33,
        'usbDevice',
        'metricDate',
        'metricTime',1,1))
    }
    final = playerDatas.map((metrics,index) => {
      return (
        <div style={{position:'relative'}}>
          <Typography inline style={{color:'#96a0a0', fontSize: '1.06rem', fontFamily: 'inherit'}}>GPU&nbsp;</Typography>
          <Typography inline style={{color:'rgba(255,255,255,0.8)', fontSize: '1.2rem', fontFamily: 'inherit'}}>{metrics.useCPU+'%'}<br/></Typography>
          <Typography inline style={{color:'#96a0a0', fontSize: '1.06rem', fontFamily: 'inherit'}}>CPU&nbsp;</Typography>
          <Typography inline style={{color:'rgba(255,255,255,0.8)', fontSize: '1.2rem', fontFamily: 'inherit'}}>{metrics.useGPU+'%'}</Typography>
          <Hidden smDown><Button component={NavLink} to={'detalhes/'+metrics.useCPU} style={{position:'absolute', top:'19%', right:'5%', borderRadius:'50%', minWidth:'0px', color: '#96a0a0'}} variant='outlined'> > </Button> </Hidden>
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
    let { value } = this.state
    let final = []
    let playerDatas = []
    for (let i = 0; i < 5; i++) {
      playerDatas.push(new MachineMetricData(33,33,(value*Math.random()).toFixed(2),(value*Math.random()).toFixed(2),33,33,33,
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
          <Hidden smDown><Button component={NavLink} to={'detalhes/'+metrics.useCPU} style={{position:'absolute', top:'19%', right:'5%', borderRadius:'50%', minWidth:'0px', color: '#96a0a0'}} variant='outlined'> > </Button> </Hidden>
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

    return(
        <div className={classes.root}>
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
        </div>
    )
  }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Admin);