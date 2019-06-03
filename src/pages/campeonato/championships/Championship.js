import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import ChevronRight from '@material-ui/icons/ChevronRight'
import './Championship.css'
import championships from '../../../scripts/http/championships'
import data from '../../../scripts/http/data'
import Loading from '../../Loading';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
    root: {
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
        paddingLeft: '250px',
        },
    },
    card: {
        backgroundColor: '#383c42',
        padding: theme.spacing.unit * 4,
        margin: theme.spacing.unit * 2,
        width: 'inherit',
    },
    button:{
        color:'#ff3f3f'

    },
});

class Admin extends Component {

    constructor(props){
        super(props)

        this.state = {
            championships: [],
            makeRequest: false,
        }

        data.isLogOn(() => {
            this.getAllChampionships()
        }, () => {
            window.location.href = "/login"
        })

    }

    getAllChampionships = () => {
        championships.allChampionships()
        .then(championship => {
            if(typeof(championship) == "object" && championship.length !== 0){
                this.setState({ championships: [] })
                let championshipsRender = []

                for(let i = 0; i < championship.length; i++){
                    championshipsRender.push(this.renderChampionship(championship[i].nmChampionship, championship[i].idChampionship))
                }

                this.setState({ championships: championshipsRender })
            }
        })
    }
   
    renderChampionship = (nmChampionship, idChampionship) => {
        const { classes } = this.props
        this.setState({makeRequest: true})
        return(
            <Grid item xs={12} sm={6}>
                <Card className={`cardTwo ${classes.card}`}>
                    <div className={`championship`}>
                        <img style={{ width: '80px', height: '75px'}} alt=''  src="https://raw.githubusercontent.com/YudiG12/CarbonTowerEtc/master/Design/Logos-PNG/logo2-red.png"/>
                        <Typography align='center' variant='subtitle1' style={{color:'#96a0a0', paddingLeft: '15px'}}>{nmChampionship}</Typography>
                        <IconButton style={{fontSize: '13px'}} component={NavLink} to={'/empresa/streams/'+idChampionship} className={classes.button} >Streams</IconButton>
                        <IconButton component={NavLink} to={'/empresa/campeonato/'+idChampionship} color="#ff3f3f"  className={classes.button} ><ChevronRight /></IconButton>
                    </div>
                </Card>
            </Grid>
        )
    }

    renderChampionships = () => {
        return( this.state.championships )
    }

    redirectCampeonato = (link) => {
        window.location.href = "/empresa/campeonato" + link
    }

    render() {
        const { classes } = this.props
        return(
            this.state.makeRequest === true ? (
            <div className={classes.root}>
                <Grid container>
                        {this.renderChampionships()}
                </Grid>
            </div> ) : ( <Loading /> )
        )
    }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Admin);