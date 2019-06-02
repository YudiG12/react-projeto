import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Typography, Button } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import './Invite.css'
import data from '../../../../scripts/http/data'
import player from '../../../../scripts/http/player'

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    cardResponsive: {
        backgroundColor: '#383c42',
        padding: '30px',
        [theme.breakpoints.only('xs')]: {
        backgroundColor: '#2d3035',
        boxShadow: 'none',
        padding: '0',
      },
    },
    margin: {
      margin: theme.spacing.unit,
    },
    cssLabel: {
      color: '#96a0a0',
      '&$cssFocused': {
        color: red[500],
      },
    },
    cssFocused: {},
    cssUnderline: {
      '&:after': {
        borderBottomColor: red[500],
      },
    },
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: red[500],
      },
    },
    notchedOutline: {},
    bootstrapRoot: {
      'label + &': {
        marginTop: theme.spacing.unit * 3,
      },
    },
    input: {
      color: '#96a0a0',
      borderBottom: '1px solid #96a0a0',
    },
  });

class Admin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      makeRequest: false,
      invites: []
    }

    data
      .isLogOn(() => {
        data.isJogador((idPlayerRole) => {
          return this.getAllInvitesAvailable();
        }, () => {
          window.location.href = "/"
        })
      }, () => {
        window.location.href = "/login"
      })
      
  }

  getAllInvitesAvailable = () => {
    player.invitesNotAnswered()
    .then(invites => {
      this.setState({ invites: [] })
      let invitesRender = []
      if(invites.length == 0){
        invitesRender.push(this.renderWithoutInvite())
      }else{
        for(let i = 0; i < invites.length; i++) {
          invitesRender.push(this.renderInvite(invites[i]));
        }
      }
      this.setState({ invites: invitesRender })
      this.setState({ makeRequest: true })
    })
    .catch(err => console.log(err));
  }

  renderInvites = () => {
    return (
      <div>
        { this.state.invites }
      </div>
    )
  }

  refuseInvite = (idChampionship) => {
      this.setState({ makeRequest: false })
      player.refuseInvite(idChampionship)
        .then(resultado => {
          return this.getAllInvitesAvailable();
        })
        .catch(err => console.log(err));
  }

  acceptInvite = (idChampionship) => {
    this.setState({ makeRequest: false })
    player.acceptInvite(idChampionship)
      .then(resultado => {
        return this.getAllInvitesAvailable();
      })
      .catch(err => console.log(err));
  }

  renderInvite = (invite) => {
    const { classes } = this.props
    return (
      
      <Grid style={{height: '100vh'}} container direction="row" justify="center" alignItems="center">
        <Card className={classes.cardResponsive} style={{ paddingBottom:'0', maxWidth:'400px'}}>
            <Grid  container direction="row" justify="center" alignItems="center" style={{padding: '3%'}}>

                <img style={{ width: '80px', height: '75px'}} alt='' src="https://raw.githubusercontent.com/YudiG12/CarbonTowerEtc/master/Design/Logos-PNG/logo2-red.png"/>

                <Typography align='center' variant='subtitle1' style={{color:'#96a0a0', padding: '3%'}} className={`cardPart1`}>Você foi convidado para particpar do campeonato {invite.nmChampionship}</Typography>

                <Typography align='center' variant='subtitle1' style={{color:'#96a0a0', padding: '3%'}} >Que será no jogo: {invite.nmGame}</Typography>

                <Button id='button' type='submit' onClick={() => {this.refuseInvite(invite.idChampionship)}} style={{fontWeight: '300', a: 'none', height:'50px', borderRadius:'0', boxShadow:'none', backgroundColor:'#ff3f3f', margin: '3%'}} variant="contained" color="secondary">
                    Não aceitar
                </Button>
                
                <Button id='button' type='submit' onClick={() => {this.acceptInvite(invite.idChampionship)}} style={{fontWeight: '300', a: 'none', height:'50px', borderRadius:'0', boxShadow:'none', backgroundColor:'#00d52a', margin: '3%'}} variant="contained" color="secondary">
                    Aceitar
                </Button>
            </Grid>
        </Card>
      </Grid>

    )
  }

  renderWithoutInvite = () => {
    const { classes } = this.props
    return (
      
      <Grid style={{height: '100vh'}} container direction="row" justify="center" alignItems="center">
        <Card className={classes.cardResponsive} style={{ paddingBottom:'0', maxWidth:'400px'}}>
            <Grid  container direction="row" justify="center" alignItems="center" style={{padding: '3%'}}>

                <img style={{ width: '80px', height: '75px'}} alt='' src="https://raw.githubusercontent.com/YudiG12/CarbonTowerEtc/master/Design/Logos-PNG/logo2-red.png"/>

                <Typography align='center' variant='subtitle1' style={{color:'#96a0a0', padding: '3%'}} className={`cardPart1`}>Você não foi convidado para particpar de nenhum campeonato no momento</Typography>

            </Grid>
        </Card>
      </Grid>

    )
  }

    render() {
        
        return(
          this.state.makeRequest == true ? (
            this.renderInvites()
          ) : (
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Gray_circles_rotate.gif"/> 
          )
        )
    }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Admin);