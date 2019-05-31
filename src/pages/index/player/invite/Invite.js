import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, Typography, Button } from '@material-ui/core'
import './Invite.css'

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

    render(invite) {
        const { classes } = this.props
        return(
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <Card className={classes.card}>
                            <div className={`invite`}>
                                <img style={{ width: '80px', height: '75px'}} alt='' />
                                <Typography align='center' variant='subtitle1' style={{color:'#96a0a0'}} className={`cardPart1`}>Fulano, você foi convidado para particpar do campeonato NOME_CAMPEONATO</Typography>

                            </div>
                            <div className={`inviteData`}>
                                <Typography align='center' variant='subtitle1' style={{color:'#96a0a0'}} >Organizado por: ORGANIZADOR</Typography>
                                <Typography align='center' variant='subtitle1' style={{color:'#96a0a0'}} >Data: DATA_DO_CAMPEONATO</Typography>
                                <Button id='button' type='submit' style={{fontWeight: '300', a: 'none', height:'50px', borderRadius:'0', boxShadow:'none', backgroundColor:'#ff3f3f'}} variant="contained" color="secondary">
                                    Não aceitar
                                </Button>
                                <Button id='button' type='submit' style={{fontWeight: '300', a: 'none', height:'50px', borderRadius:'0', boxShadow:'none', backgroundColor:'#00d52a'}} variant="contained" color="secondary">
                                    Aceitar
                                </Button>
                            </div>
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