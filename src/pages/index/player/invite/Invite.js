import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Typography, Button } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import './Invite.css'

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

    render(invite) {
        const { classes } = this.props
        return(
            <Grid style={{height: '100vh'}} container direction="row" justify="center" alignItems="center">
                <Card className={classes.cardResponsive} style={{ paddingBottom:'0', maxWidth:'400px'}}>
                    <Grid  container direction="row" justify="center" alignItems="center" style={{padding: '3%'}}>

                        <img style={{ width: '80px', height: '75px'}} alt='' />

                        <Typography align='center' variant='subtitle1' style={{color:'#96a0a0', padding: '3%'}} className={`cardPart1`}>Fulano, você foi convidado para particpar do campeonato NOME_CAMPEONATO</Typography>

                        <Typography align='center' variant='subtitle1' style={{color:'#96a0a0', padding: '3%'}} >Organizado por: ORGANIZADOR</Typography>

                        <Typography align='center' variant='subtitle1' style={{color:'#96a0a0', padding: '3%'}} >Data: DATA_DO_CAMPEONATO</Typography>

                        <Button id='button' type='submit' style={{fontWeight: '300', a: 'none', height:'50px', borderRadius:'0', boxShadow:'none', backgroundColor:'#ff3f3f', margin: '3%'}} variant="contained" color="secondary">
                            Não aceitar
                        </Button>
                        
                        <Button id='button' type='submit' style={{fontWeight: '300', a: 'none', height:'50px', borderRadius:'0', boxShadow:'none', backgroundColor:'#00d52a', margin: '3%'}} variant="contained" color="secondary">
                            Aceitar
                        </Button>
                    </Grid>
                </Card>

            </Grid>
        )
    }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Admin);