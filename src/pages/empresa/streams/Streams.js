import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Typography } from '@material-ui/core'
import {RemoveRedEye} from '@material-ui/icons'
import LoadingCircle from './../../LoadingCircle'
import streams from './../../../scripts/http/streams'
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
                let streamsToState = []
                if(typeof(streamsDb) == "object") {
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
                        {/* <img style={{ width: '80px', height: '75px'}} alt='' src={twitchLogo} className={`cardPart1`}/> */}
                        <RemoveRedEye style={{ color: '#96a0a0' }}/>
                        <Typography align='center' variant='subtitle1' style={{color:'#96a0a0'}} >{stream.title}</Typography>
                        <Typography align='center' variant='subtitle1' style={{color:'#96a0a0'}} >{stream.viewCount}</Typography>
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
                { this.state.makeRequest == true ? (
                    <Grid container>
                        { this.renderStreams() }
                    </Grid>
                    ) : ( <Grid  container direction="row" justify="center" alignItems="center" style={{width:'100%', height:'100vh'}}><LoadingCircle/> </Grid> )
                }
        </div>
    )
  }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Admin);