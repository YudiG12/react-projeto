import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import data from '../../scripts/http/data'
import LoadingCircle from '../LoadingCircle'
import { Grid } from '@material-ui/core';

class Index extends Component {

    state = {
        route: ''
    }
    constructor(props) {
        super(props);
        data
            .isLogOn(() => {
                return data.getRole()
            }, () => {
                this.setState({route:"/login"})
            })
            .then(resultado => {
                console.log(resultado);
                if(resultado === 'jogador') {
                    this.setState({route:"/player"})
                } else if (resultado === 'empresa') {
                    this.setState({route:'/empresa/campeonato'})
                }
            })
            .catch(err => console.log(err));
    }
    
    render() {
        return (
            <div>
                <Grid  container direction="row" justify="center" alignItems="center" style={{width:'100%', height:'100vh'}}>
                <LoadingCircle />
                </Grid>
                {this.state.route ? (<Redirect to = {this.state.route} />) : (<div></div>)}
            </div>
        )
    }
}

export default Index