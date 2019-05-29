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
    cpuData: [],
    useCPU: 46,
    useGPU: 89,
    useRam: 79,
    useDisc: 66,
    tempCPU: 30,
    tempGPU: 35,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      // pegar novos dados:
      let novoUso = Math.random() * 10
      this.setState(state => {
        // setar novos dados:
        this.state.tempo++
        const cpuData = this.state.cpuData.concat({ name: this.state.tempo, uso: novoUso })
        return {
          cpuData,
        };
      });
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  renderLineChart = (data) => {
    return (
      <ResponsiveContainer width='100%' aspect={3.0/1.5}>
        <LineChart data={data}>
          <Line name='Uso de CPU' isAnimationActive={false} type="monotone" dataKey="uso" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis label={{value:'Uso de CPU (%)', angle: -90, position: 'insideLeft', textAnchor: 'middle'}} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    )
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>{this.renderLineChart(this.state.cpuData)}</Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>{this.renderLineChart(this.state.cpuData)}</Card>
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