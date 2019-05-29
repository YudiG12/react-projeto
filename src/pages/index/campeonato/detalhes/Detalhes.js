import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const styles = theme => ({
  root: {
    paddingLeft: '20px',
    [theme.breakpoints.only('xs')]: {
      paddingLeft: '20px',
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '270px',
    },
  },
});

class Detalhes extends Component {
  state = {
    data: [],
    useCPU: 46,
    useGPU: 89,
    useRam: 79,
    useDisc: 66,
    tempCPU: 30,
    tempGPU: 35,
    // fetch('http://35.199.74.137:7000/machine/', {
    //     method: 'get',
    //     headers:{
    //       Accept:'application/json',
    //       'Content-type':'apllication/json',
    //     },
    //     credentials: "include",
    //     body: JSON.stringify({
    //       "persondata": `${this.state.userData}`,
    //       "password": `${this.state.password}`,
    //       "username": `${this.state.userName}`
    //     })
    //   })
    //   .then(res => this.errorOcorred(res))
    //   .then(res => res.json())
    //   .catch(error => {
    //       if (error.message)
    //           console.log(error.message)
    //       else
    //           console.log(error);
    //   })
  }

  // https://www.robinwieruch.de/react-state-array-add-update-remove/
  componentDidMount() {
    this.interval = setInterval(() => {
      let novoUso = Math.random() * 10
      let novoTempo = this.state.tempo + 1
      this.setState(state => {
        return this.state.data.push({name:novoTempo,uso:novoUso})
      });
    }, 500)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  useCPUChart = () => {
    let data = this.state.data
    return (
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uso" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    )
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>DETALHESSS
        {this.useCPUChart()}
      </div>
    )
  }
}

Detalhes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Detalhes)