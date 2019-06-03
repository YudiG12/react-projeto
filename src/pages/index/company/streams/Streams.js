import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Typography } from '@material-ui/core'
import {RemoveRedEye} from '@material-ui/icons'
import twitchLogo from './../../../../img/twitch.png'
import youtubeLogo from './../../../../img/youtube.png'
import smashcastLogo from './../../../../img/smashcast.png'
import livestreamLogo from './../../../../img/livestream.png'
import streams from './../../../../scripts/http/streams'
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

    constructor(props) {
        super(props);
        this.state = {
            streams: [],
            makeRequest: false
        }
        let idChampionship = window.location.pathname.split('/')[3];
        streams.getStreamsChampionship(idChampionship)
            .then(streamsDb => {
                console.log(streamsDb);
                let streamsToState = []
                if(streamsDb.length != 0) {
                    streamsDb.forEach(stream => {
                        streamsToState.push(this.renderStream(stream));
                    });
                }

                this.setState({
                    streams: streamsToState,
                    makeRequest: true
                })
            })   
    }

    renderStream = (stream) => {
        const { classes } = this.props
        return (
            <Grid item xs={12} sm={6}>
                <Card className={`cardTwo ${classes.card}`}>
                    <div className={`streams`}>
                        <img style={{ width: '80px', height: '75px'}} alt='' src={twitchLogo} className={`cardPart1`}/>
                        {/* <img style={{ width: '80px', height: '75px'}} alt='' src={twitchLogo} className={`cardPart1`}/> */}
                        <RemoveRedEye style={{ color: '#96a0a0' }}/>
                        <Typography align='center' variant='subtitle1' style={{color:'#96a0a0'}} className={`cardPart1`}>{stream.title}</Typography>
                        <Typography align='center' variant='subtitle1' style={{color:'#96a0a0'}} className={`cardPart1`}>{stream.viewCount}</Typography>
                    </div>
                </Card>
            </Grid>
        )
    }

    renderStreams = () => {
        return (
          <div>
            { this.state.streams }
          </div>
        )
      }
    
  render() {
    const { classes } = this.props
    return(
        <div className={classes.root}>
            <Grid container>
                { this.state.makeRequest == true ? (
                    <div>
                        {
                            this.renderStreams()
                        }
            
                    </div>
                    ) : ( <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Gray_circles_rotate.gif"/> )
                }
            </Grid>
        </div>
    )
  }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Admin);