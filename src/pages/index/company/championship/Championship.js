import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Typography } from '@material-ui/core'
import ChampionshipData from '../../../../models/ChampionshipData'
import './Championship.css'

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
});

class Admin extends Component {
   
    renderChampionship = () => {
        const { classes } = this.props
        let final = []
        let championshipDatas = []

        for(let i = 0; i < 5; i++){
            championshipDatas.push(new ChampionshipData("CS:GO"))
        }

        for(let i = 0; i < championshipDatas.length; i++){
            final.push(
                <Grid item xs={12} sm={6}>
                    <Card className={`cardTwo ${classes.card}`}>
                        <div className={`championship`}>
                            <img style={{ width: '80px', height: '75px'}} alt='' className={`cardPart1`}/>
                            <Typography align='center' variant='subtitle1' style={{color:'#96a0a0'}} className={`cardPart1`}>{championshipDatas[i].championshipName}</Typography>
                        </div>
                    </Card>
                </Grid>
            )
        }

        return final
    }

    render() {
        const { classes } = this.props
        return(
            <div className={classes.root}>
                <Grid container>
                    
                            {this.renderChampionship()}
                        

                    <Link to='/login' className='redLink'>
                        Sair
                    </Link>
                </Grid>
            </div>
        )
    }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Admin);