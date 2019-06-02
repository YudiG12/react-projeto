import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, Card, Grid } from '@material-ui/core';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Tooltip from 'recharts/lib/component/Tooltip';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';

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
  state = {
    tempo: 0,
    useCPUData: [],
    useGPUData: [],
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let newUseCPUDataUnit = Math.random() * 10
      let newUseGPUDataUnit = Math.random() * 10
      this.setState(state => {
        state.tempo++
        let newUseCPUData = state.useCPUData.concat({ name: state.tempo, dataX: newUseCPUDataUnit })
        let newUseGPUData = state.useGPUData.concat({ name: state.tempo, dataX: newUseGPUDataUnit })
        if (state.tempo > 10) {
          newUseCPUData.shift()
          newUseGPUData.shift()
        }
        return {
          useCPUData: newUseCPUData,
          useGPUData: newUseGPUData,
        };
      });
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  renderLineChart = (data, label) => {
    return (
      <ResponsiveContainer width='100%' aspect={3.0 / 1.5}>
        <LineChart data={data}>
          <Line name={label} isAnimationActive={false} type="monotone" dataKey="dataX" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: label, angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    )
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
              {this.renderScorecard(this.state.tempo,'USO DE CPU','%')}
            </Card>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
              {this.renderScorecard(this.state.tempo,'USO DE GPU','%')}
            </Card>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
              {this.renderScorecard(this.state.tempo,'TEMPERATURA CPU','C°')}
            </Card>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
              {this.renderScorecard(this.state.tempo,'TEMPERATURA GPU','C°')}
            </Card>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
              {this.renderScorecard(this.state.tempo,'USO DE RAM','%')}
            </Card>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
              {this.renderScorecard(this.state.tempo,'USO DE DISCO','%')}
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>{this.renderLineChart(this.state.useCPUData, 'Uso em %')}</Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>{this.renderLineChart(this.state.useGPUData, 'Temperatura em C')}</Card>
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