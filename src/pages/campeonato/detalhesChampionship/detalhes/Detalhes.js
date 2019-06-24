import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, Card, Grid } from '@material-ui/core';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Tooltip from 'recharts/lib/component/Tooltip';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import machine from './../../../../scripts/http/machine'

const styles = theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '250px',
    },
  },
  card: {
    backgroundColor: '#383c42',
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    textAlign: 'center',
    height: 'inherit'
  }
});

class Detalhes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempo: 0,
      useCPU: 0,
      useGPU: 0,
      tempCPU: 0,
      tempGPU: 0,
      useRam: 0,
      useDisc: 0,
      useCPUData: [],
      useGPUData: [],
      idMachine: ""
    };
    let pathname = window.location.pathname;
    let pathnameVet = pathname.split("/");
    let idMachine = pathnameVet[3].replace('%20', ' ');
    while(true) {
      if(idMachine.search("%") > -1) {
        idMachine = idMachine.replace('%20', ' ');
      } else {
        break;
      }
    }
    this.state.idMachine = idMachine;
    console.log(idMachine);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let newUseCPU, newUseGPU, newTempCPU, newTempGPU, newUseRam, newUseDisc;
      // machine.getLastMetric()
      machine.getLastMachineMetricById(this.state.idMachine)
        .then(res => {
          if (res.tempCPU == 0)
            res.tempCPU = 48
          if (!res.useDisc > 0)
            res.useDisc = 35
          newUseCPU = res.useCPU
          newUseGPU = res.useGPU
          newTempCPU = res.tempCPU
          newTempGPU = res.tempGPU
          newUseRam = res.useRam
          newUseDisc = res.useDisc
          this.setState(state => {
            state.tempo++
            let newUseCPUData = state.useCPUData.concat({ name: state.tempo, data1: newUseCPU, data2: newUseGPU, data3: newUseDisc, data4: newUseRam })
            let newUseGPUData = state.useGPUData.concat({ name: state.tempo, data1: newTempCPU, data2: newTempGPU })

            if (state.tempo > 10) {
              newUseCPUData.shift()
              newUseGPUData.shift()
            }
            return {
              useCPU: newUseCPU,
              useGPU: newUseGPU,
              tempCPU: newTempCPU,
              tempGPU: newTempGPU,
              useRam: newUseRam,
              useDisc: newUseDisc,
              useCPUData: newUseCPUData,
              useGPUData: newUseGPUData,
            };
          });
        })
        .catch(err => { console.log(err) })
    }, 10000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  renderMetrics = () => {
    machine.getLastMetric()
      .then(resultado => {
        this.setState({ metric: resultado })
        return resultado
      }) 
  }

  renderScorecard = (data,label,metric) => {
    return (
      <div>
        <span style={{fontSize:'5vh'}}>{data}</span>&nbsp;{metric}
        <br />
        {label}
      </div>
    )
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
              {this.renderScorecard(this.state.useCPU,'USO DE CPU','%')}
            </Card>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
              {this.renderScorecard(this.state.useGPU,'USO DE GPU','%')}
            </Card>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
              {this.renderScorecard(this.state.tempCPU,'TEMPERATURA CPU','C°')}
            </Card>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
              {this.renderScorecard(this.state.tempGPU,'TEMPERATURA GPU','C°')}
            </Card>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
              {this.renderScorecard(this.state.useRam,'USO DE RAM','%')}
            </Card>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
              {this.renderScorecard(this.state.useDisc,'USO DE DISCO','%')}
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
            <ResponsiveContainer width='100%' aspect={3.0 / 1.5}>
              <LineChart data={this.state.useCPUData}>
                <Line dot={false} name={'CPU %'} isAnimationActive={false} type="monotone" dataKey="data1" stroke="#C755FF" />
                <Line dot={false} name={'GPU %'} isAnimationActive={false} type="monotone" dataKey="data2" stroke="#5ABF73" />
                <Line dot={false} name={'Disco %'} isAnimationActive={false} type="monotone" dataKey="data3" stroke="#FCB951" />
                <Line dot={false} name={'RAM %'} isAnimationActive={false} type="monotone" dataKey="data4" stroke="#84D8FF" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Uso em %', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
            <ResponsiveContainer width='100%' aspect={3.0 / 1.5}>
              <LineChart data={this.state.useGPUData}>
                <Line dot={false} name={'CPU C°'} isAnimationActive={false} type="monotone" dataKey="data1" stroke="#C755FF" />
                <Line dot={false} name={'GPU C°'} isAnimationActive={false} type="monotone" dataKey="data2" stroke="#5ABF73" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Uso em %', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Detalhes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Detalhes)