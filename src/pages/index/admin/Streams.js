import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Typography } from '@material-ui/core'
import twitchLogo from './../../../img/twitch.png'
import youtubeLogo from './../../../img/youtube.png'
import smashcastLogo from './../../../img/smashcast.png'
import livestreamLogo from './../../../img/livestream.png'
import eyeView from './../../../img/eye.png'
import './Streams.css'

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
    
  render() {
    const { classes } = this.props
    return(
        <div className={classes.root}>
            <Grid container spacing={12}>
                <Grid item xs={6}>
                    <Card className={`cardTwo ${classes.card}`}>
                        <img style={{ width: '80px', height: '75px'}} alt='' src={twitchLogo} className={`cardPart1`}/>
                        <img style={{ width: '20px', height: '20px'}} align='center' alt='' src={eyeView} className={`cardPart1`}/>
                        <Typography align='center' variant='subtitle1' style={{color:'#96a0a0'}} className={`cardPart1`}>123456</Typography>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className={classes.card}>
                    <img style={{ width: '80px' }} alt='' src={youtubeLogo} />
                        <img style={{ width: '20px', marginTop: '-120px', marginLeft: '60px' }} align='center' alt='' src={eyeView} />
                        <Typography align='center' variant='subtitle1' style={{color:'#96a0a0', marginTop: '-82px', marginLeft: '-60px', paddingBottom: '45px' }}>123456</Typography>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className={classes.card}>
                    <img style={{ width: '80px' }} alt='' src={smashcastLogo} />
                        <img style={{ width: '20px', marginTop: '-120px', marginLeft: '60px' }} align='center' alt='' src={eyeView} />
                        <Typography align='center' variant='subtitle1' style={{color:'#96a0a0', marginTop: '-82px', marginLeft: '-60px', paddingBottom: '45px' }}>123456</Typography>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className={classes.card}>
                    <img style={{ width: '80px' }} alt='' src={livestreamLogo} />
                        <img style={{ width: '20px', marginTop: '-120px', marginLeft: '60px' }} align='center' alt='' src={eyeView} />
                        <Typography align='center' variant='subtitle1' style={{color:'#96a0a0', marginTop: '-82px', marginLeft: '-60px', paddingBottom: '45px' }}>123456</Typography>
                    </Card>
                </Grid>

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