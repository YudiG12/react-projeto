import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Typography, Button } from '@material-ui/core'
import data from '../../scripts/http/data
import player from '../../scripts/http/player
import Invite from './invite/Invite'


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



class Player extends Component {

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
    player.allInvites()
    .then(invites => {
      this.setState({ invites: [] })
      let invitesRender = []
      for(let i = 0; i < invites.length; i++) {
        invitesRender.push(this.renderInvite(invites[i]));
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
    return (
      <Card>
        <div className={`invite`}>
            <img style={{ width: '80px', height: '75px'}} alt='' />
            <Typography align='center' variant='subtitle1' style={{color:'#96a0a0'}} className={`cardPart1`}>Você foi convidado para particpar do campeonato {invite.nmChampionship}</Typography>

        </div>
        <div className={`inviteData`}>
            <Typography align='center' variant='subtitle1' style={{color:'#96a0a0'}} >Jogo: { this.nmGame }</Typography>
            {/* <Typography align='center' variant='subtitle1' style={{color:'#96a0a0'}} >Organizado por: ORGANIZADOR</Typography> */}
            {/* <Typography align='center' variant='subtitle1' style={{color:'#96a0a0'}} >Data: DATA_DO_CAMPEONATO</Typography> */}
            <Button id='button' type='submit' onClick={() => {this.refuseInvite(invite.idChampionship)}} style={{fontWeight: '300', a: 'none', height:'50px', borderRadius:'0', boxShadow:'none', backgroundColor:'#ff3f3f'}} variant="contained" color="secondary">
                Não aceitar
            </Button>
            <Button id='button' type='submit' onClick={() => {this.acceptInvite(invite.idChampionship)}} style={{fontWeight: '300', a: 'none', height:'50px', borderRadius:'0', boxShadow:'none', backgroundColor:'#00d52a'}} variant="contained" color="secondary">
                Aceitar
            </Button>
        </div>
      </Card>
    )
  }

  render() {
    return (
    <div>
      { this.state.makeRequest == true ? (
           <div>
             <Grid item xs={12} sm={12}>
               {
                  this.renderInvites()
               }
              </Grid>
 
           </div>
        ) : ( <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Gray_circles_rotate.gif"/> )
      }
    </div>
    )
  }
}

Player.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Player)